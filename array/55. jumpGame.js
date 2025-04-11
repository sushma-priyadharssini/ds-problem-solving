/* Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 */

var canJump = function(nums) {
    let max = 0 ;
    for(let i=0; i<nums.length; i++) {
        if(i > max) return false;
        max = Math.max(max, i+nums[i])
    }
    return true;
};

console.log(canJump([3,2,1,0,4]))