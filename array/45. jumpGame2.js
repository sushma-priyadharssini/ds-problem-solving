/* Example 1:

Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [2,3,0,1,4]
Output: 2 */


var jump = function(nums) {
  var len = nums.length;
  var step = 0;
  var now = 0;
  var max = 0;

  for (var i = 0; i < len - 1; i++) {
    max = Math.max(max, i + nums[i]);
    if (i === now) {
      step++;
      now = max;
    }
  }

  return step;
};

console.log(jump([2,3,1,1,4]));