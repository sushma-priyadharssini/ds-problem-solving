/* 
Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.
An integer a is closer to x than an integer b if:
|a - x| < |b - x|, or
|a - x| == |b - x| and a < b
 

Example 1:
Input: arr = [1,2,3,4,5], k = 4, x = 3
Output: [1,2,3,4]

Example 2:
Input: arr = [1,1,2,3,4,5], k = 4, x = -1
Output: [1,1,2,3]
 */

// 2 pointer solution: Time Complexity: O(n-k) ; Space Complexity: O(k)
var findClosestElements = function (arr, k, x) {
  let l = 0,
    r = arr.length - 1;
  while (r - l >= k) {
    if (Math.abs(x - arr[l]) <= Math.abs(x - arr[r])) {
      r--;
    } else {
      l++;
    }
  }
  return arr.slice(l, r + 1);
};


// Binary search with sliding window: Time Complexity: O(log(n-k) + k) ; Space Complexity: O(k)
var findClosestElements2 = function (arr, k, x) {
  let l = 0,
    r = arr.length - k;
  while (l<r) {
    let mid = Math.floor((l + r) / 2);
    if (Math.abs(x - arr[mid]) <= Math.abs(x - arr[mid+k])) {
      r=mid;
    } else {
      l=mid + 1;
    }
  }
  return arr.slice(l, l+k);
};

console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements2([1, 1, 2, 3, 4, 5], 4, -1));
