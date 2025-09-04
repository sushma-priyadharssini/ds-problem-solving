/* 
Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,1,2,3,3]
Output: 7, nums = [0,0,1,1,2,3,3,_,_]
Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 */

var removeDuplicates = function (nums) {
    let k = 0;
    let repeat = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i !== 0 && nums[i] !== nums[k - 1]) {
            repeat = 0;
            nums[k] = nums[i]
            repeat++;
            k++
        } else if (repeat < 2) {
            nums[k] = nums[i]
            repeat++;
            k++
        }
    }
    return k;
};