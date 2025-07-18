/* 
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:
Input: nums = [1,2,3,1], k = 3
Output: true
 */

var containsNearbyDuplicate = function (nums, k) {
  let window = new Set();
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (r - l > k) {
      window.delete(nums[l]);
      l++;
    }
    if (window.has(nums[r])) {
      return true;
    }
    window.add(nums[r]);
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
