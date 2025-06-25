/*
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
 */

var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let res = nums[0];
  while (l <= r) {
    if (nums[l] <= nums[r]) {
      res = Math.min(res, nums[l]);
      break;
    }
    const m = l + Math.floor((r - l) / 2);
    res = Math.min(res, nums[m]);
    if (nums[m] >= nums[l]) {
      l = m + 1;
    } else if (nums[m] < nums[l]) {
      r = m - 1;
    }
  }
  return res;
};

var findMin1 = function (numbers) {
  let l = 0, r = numbers.length - 1;
  let ans = Infinity;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (numbers[l] <= numbers[mid]) {
      ans = Math.min(ans, numbers[l]);
      l = mid + 1
    } else {
      ans = Math.min(ans, numbers[mid]);
      r = mid - 1
    }
  }
  return ans
}

console.log(findMin1([4, 5, 6, 7, 0, 1, 2]))
