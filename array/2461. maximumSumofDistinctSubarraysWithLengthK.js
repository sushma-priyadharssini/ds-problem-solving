/* 
You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

The length of the subarray is k, and
All the elements of the subarray are distinct.
Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,5,4,2,9,9,9], k = 3
Output: 15
Explanation: The subarrays of nums with length 3 are:
- [1,5,4] which meets the requirements and has a sum of 10.
- [5,4,2] which meets the requirements and has a sum of 11.
- [4,2,9] which meets the requirements and has a sum of 15.
- [2,9,9] which does not meet the requirements because the element 9 is repeated.
- [9,9,9] which does not meet the requirements because the element 9 is repeated.
We return 15 because it is the maximum subarray sum of all the subarrays that meet the conditions
 */

var maximumSubarraySum = function (nums, k) {
    let l = 0, sum = 0, maxSum = 0;
    let mySet = new Set();
    for (let r = 0; r < nums.length; r++) {
        // Remove elements until nums[r] is unique
        while (mySet.has(nums[r])) {
            mySet.delete(nums[l]);
            sum -= nums[l];
            l++;
        }
        mySet.add(nums[r]);
        sum += nums[r];

        // If window exceeds k, shrink it
        if (r - l + 1 > k) {
            mySet.delete(nums[l]);
            sum -= nums[l];
            l++;
        }
        // Check if window is exactly k and all distinct
        if (r - l + 1 === k) {
            maxSum = Math.max(maxSum, sum);
        }
    }
    return maxSum;
};
// console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3))
// console.log(maximumSubarraySum([4, 4, 4], 3))
console.log(maximumSubarraySum([1, 1, 1, 7, 8, 9], 3))