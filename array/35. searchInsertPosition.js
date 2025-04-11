/* Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4 */

var bsInsert = function (nums, low, high, target) {
    if(high<low) {
        return low;
    }

    let mid = Math.floor((low+high)/2)
    if(nums[mid]===target){
        return mid;
    }
    else if(target > nums[mid]) {
        return bsInsert(nums, mid+1, high, target)
    } else {
        return bsInsert(nums, low, mid-1, target)
    }

}

var searchInsert = function(nums, target) {
    return bsInsert(nums, 0, nums.length-1, target)
};