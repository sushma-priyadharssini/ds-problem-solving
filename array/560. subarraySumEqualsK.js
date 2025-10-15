// Complexity - n*2
function subArraySum1(arr, sum) {
  let n = arr.length;
  let currSum = 0;
  for (let i = 0; i < n; i++) {
    currSum = arr[i];
    for (let j = i + 1; j < n; j++) {
      if (currSum === sum) return { i, j: j - 1 };
      if (currSum > sum || j === n) break;
      currSum = currSum + arr[j];
    }
  }
  return "Not found";
}

// Time Complexity : O(n) - only for positive integers
function subArraySum2(arr, sum) {
  let n = arr.length;
  let currSum = arr[0];
  let start = 0;
  for (let i = 1; i <= n; i++) {
    while (currSum > sum && start < i - 1) {
      currSum = currSum - arr[start];
      start++;
    }
    if (currSum === sum) return { start, end: i - 1 };
    if (i < n) currSum = currSum + arr[i];
  }
  return "Not found";
}

/* 
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2
*/

// This works for both positive and negative integers
// Use a prefix sum and a hash map to count how many times a given prefix appears.
var subarraySum3 = function (nums, k) {
  let count = 0;
  let sum = 0;
  let prefixMap = new Map();
  prefixMap.set(0, 1); // Base case: one way to have sum 0 before starting

  for (let num of nums) {
    sum += num;

    // Check if there's a prefix sum that would make current subarray sum = k
    if (prefixMap.has(sum - k)) {
      count += prefixMap.get(sum - k);
    }

    // Record the current prefix sum
    prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
  }

  return count;
};

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let sum = 23;
console.log(subarraySum3(arr, sum));


// This works only for non negative integers
var subarraySum4 = function (nums, k) {
  let total = 0;
  let l = 0;
  let sum = 0;

  for (let r = 0; r < nums.length; r++) {
    sum += nums[r];
    while (sum > k && l <= r) {
      sum -= nums[l];
      l++;
    }
    if (sum === k) {
      total += 1;
    }

  }
  return k === 0 ? 0 : total;
};
