/* 
Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint
 */

// Complexity: O(n^2)
var minSubArrayLen1 = function (target, nums) {
  let min = Infinity;
  let l = 0;
  while (l < nums.length) {
    let sum = 0;
    for (let r = l; r < nums.length; r++) {
      sum += nums[r];
      if (sum >= target) {
        hasSubArray = true;
        min = Math.min(min, r - l + 1);
        break;
      }
    }
    l++;
  }
  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen1(7, [2, 3, 1, 2, 4, 3]));

// Complexity: O(n)
var minSubArrayLen2 = function (target, nums) {
  let min = Infinity;
  let l = 0,
    sum = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum >= target) {
      min = Math.min(min, r - l + 1);
      sum -= nums[l];
      l++;
    }
  }

  return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen2(7, [2, 3, 1, 2, 4, 3]));
