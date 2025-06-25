/*
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 *
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 *
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 */

// Using Hash map and count and then loop through map
function sortColors1(nums) {
  let countMap = {};
  for (let num of nums) {
    let count = countMap[num] || 0;
    countMap[num] = count + 1;
  }

  let index = 0;
  for (let i = 0; i < 3; i++) {
    while (countMap[i]-- > 0) {
      nums[index++] = i;
    }
  }
  return nums;
}

// 2 pointers - sort one by one bucket
function sortColors2(nums) {
  let p = 0;
  //moving all 0s towards the left
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      [nums[p], nums[i]] = [nums[i], nums[p]];
      p++;
    }
  }

  let q = p;
  for (let j = p; j < nums.length; j++) {
    if (nums[j] === 1) {
      [nums[q], nums[j]] = [nums[j], nums[q]];
      q++;
    }
  }
  return nums;
}

// 3 pointers - sort one by one bucket
function sortColors3(nums) {
  let i = 0,
    p = 0,
    q = nums.length - 1;

  while (i <= q) {
    if (nums[i] === 0) {
      [nums[p], nums[i]] = [nums[i], nums[p]];
      p++;
      i++;
    } else if (nums[i] == 2) {
      [nums[i], nums[q]] = [nums[q], nums[i]];
      q--;
    } else {
      i++;
    }
  }
  return nums;
}

console.log(sortColors1([2, 0, 2, 1, 1, 0]));
console.log(sortColors2([2, 0, 2, 1, 1, 0, 1]));
console.log(sortColors3([2, 0, 2, 1, 1, 0, 1]));
