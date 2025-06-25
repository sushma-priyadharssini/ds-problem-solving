/* 
There is an integer array nums sorted in non-decreasing order (not necessarily with distinct values).
Before being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and become [4,5,6,6,7,0,1,2,4,4].
Given the array nums after the rotation and an integer target, return true if target is in nums, or false if it is not in nums.
You must decrease the overall operation steps as much as possible.

 

Example 1:
Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true

Example 2:
Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
 */

function search(nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    const m = Math.floor(l + (r - l) / 2);

    if (nums[m] === target) {
      return true;
    }

    if (nums[l] < nums[m]) {
      // Left portion
      if (nums[l] <= target && target < nums[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else if (nums[l] > nums[m]) {
      // Right portion
      if (nums[m] < target && target <= nums[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    } else {
      l++;
    }
  }

  return false;
}

console.log(search([2, 5, 6, 0, 0, 1, 2], 0));
