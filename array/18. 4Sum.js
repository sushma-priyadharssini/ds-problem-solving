var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return res;
};

var kSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const res = [];
  const n = nums.length;
  const quad = [];

  function nSum(k, start, target) {
    if (k === 2) {
      let l = start,
        r = n - 1;
      while (l < r) {
        const sum = nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([...quad, nums[l], nums[r]]);
          l++;
          r--;
          while (l < r && nums[l] === nums[l - 1]) l++;
          while (l < r && nums[r] === nums[r + 1]) r--;
        }
      }
      return;
    }

    for (let i = start; i < n - k + 1; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      quad.push(nums[i]);
      nSum(k - 1, i + 1, target - nums[i]);
      quad.pop();
    }
  }

  nSum(4, 0, target);
  return res;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
