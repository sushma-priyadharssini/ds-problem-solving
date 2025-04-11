/* Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12. */

var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
   
   let dp = [nums[0], Math.max(nums[0], nums[1])]
   for(let i=2; i<nums.length; i++) {
       dp[i] = Math.max(dp[i-2]+nums[i], dp[i-1])
   }
   return dp[nums.length-1]
};

console.log(rob([1,2,3,1]))