/* 
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 */

function binarySearch(nums, l, r, target) {
  if (l > r) return -1;
  let mid = l + Math.floor((r - l) / 2);
  if (nums[mid] === target) return mid;
  return nums[mid] > target
    ? binarySearch(nums, l, mid - 1, target)
    : binarySearch(nums, mid + 1, r, target);
}
var search1 = function (nums, target) {
  return binarySearch(nums, 0, nums.length - 1, target);
};

function search2(nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const m = l + Math.floor((r - l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      return m;
    }
  }
  return -1;
}
