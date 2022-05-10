/* Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23 */

var maxSubArray = function(nums) {
    let maxSum = -Infinity;
    let currSum = 0;
    for(let i=0; i<nums.length; i++) {
        currSum = Math.max(currSum+nums[i], nums[i]);
        maxSum = Math.max(maxSum, currSum)
    }
    return maxSum
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));