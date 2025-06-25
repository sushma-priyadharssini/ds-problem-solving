/* Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1] */

var bsStartIndex = function (nums, low, high, target) {
  if (high < low) {
    return -1;
  }
  let mid = Math.floor((high + low) / 2);
  if ((mid == 0 || target > nums[mid - 1]) && nums[mid] == target) return mid;
  else if (target > nums[mid]) {
    return bsStartIndex(nums, mid + 1, high, target);
  }
  return bsStartIndex(nums, low, mid - 1, target);
};

var bsEndIndex = function (nums, low, high, target) {
  if (high < low) {
    return -1;
  }
  let mid = Math.floor((high + low) / 2);
  if ((mid == nums.length - 1 || target < nums[mid + 1]) && nums[mid] == target)
    return mid;
  else if (target < nums[mid]) {
    return bsEndIndex(nums, low, mid - 1, target);
  }
  return bsEndIndex(nums, mid + 1, high, target);
};

var searchRange = function (nums, target) {
  return [
    bsStartIndex1(nums, 0, nums.length - 1, target),
    bsEndIndex(nums, 0, nums.length - 1, target),
  ];
};

// Method2:

var bsStartIndex1 = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid > 0 && target > nums[mid - 1] && target === nums[mid]) return mid;
    if (target > nums[mid]) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return nums[0] === target ? 0 : -1;
};

var bsEndIndex1 = function (nums, target) {
  let l = 0,
    r = nums.length - 1;

  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (mid < nums.length - 1 && target < nums[mid + 1] && target === nums[mid])
      return mid;
    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return nums[nums.length - 1] === target ? nums.length - 1 : -1;
};
var searchRange1 = function (nums, target) {
  return [bsStartIndex1(nums, target), bsEndIndex1(nums, target)];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
