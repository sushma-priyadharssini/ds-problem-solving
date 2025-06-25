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

// Time Complexity : O(n).
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

var subarraySum3 = function (nums, k) {
  let currSum = 0,
    prefixMap = new Map(),
    res = 0;
  prefixMap.set(0, 1);

  for (let num of nums) {
    currSum += num;
    const diff = currSum - k;
    res += prefixMap.get(diff) || 0;
    prefixMap.set(currSum, (prefixMap.get(currSum) || 0) + 1);
  }

  return res;
};

let arr = [15, 2, 4, 8, 9, 5, 10, 23];
let sum = 23;
console.log(subArraySum3(arr, sum));
