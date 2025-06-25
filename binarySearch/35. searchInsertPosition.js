/* Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */

var bsInsert = function (nums, low, high, target) {
  if (high < low) {
    return low;
  }

  let mid = Math.floor((low + high) / 2);
  if (nums[mid] === target) {
    return mid;
  } else if (target > nums[mid]) {
    return bsInsert(nums, mid + 1, high, target);
  } else {
    return bsInsert(nums, low, mid - 1, target);
  }
};

var searchInsert = function (nums, target) {
  return bsInsert(nums, 0, nums.length - 1, target);
};

var searchInsert1 = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let res = 0;
  while (l <= r) {
    const m = Math.floor((r + l) / 2);
    if (nums[m] > target) {
      r = m - 1;
    } else if (nums[m] < target) {
      res = m + 1;
      l = m + 1;
    } else {
      return m;
    }
  }
  return res;
};
console.log(searchInsert1([1, 3, 5, 6], 3))
