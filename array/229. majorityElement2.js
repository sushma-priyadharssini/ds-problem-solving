/* 
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
*/

// Time Complexity: O(nlog(n))
var majorityElement1 = function (nums) {
  nums.sort((a, b) => a - b);
  const l = nums.length;

  let i = 0,
    res = [];

  while (i < l) {
    let j = i + 1;
    while (j < l && nums[i] === nums[j]) j++;
    if (j - i > Math.floor(l / 3)) {
      res.push(nums[i]);
    }
    i = j;
  }
  return res;
};

// Time Complexity: O(n) ; Space Complexity: O(n)
function majorityElement2(nums) {
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const res = [];
  for (const [key, value] of count.entries()) {
    if (value > Math.floor(nums.length / 3)) {
      res.push(key);
    }
  }

  return res;
}
