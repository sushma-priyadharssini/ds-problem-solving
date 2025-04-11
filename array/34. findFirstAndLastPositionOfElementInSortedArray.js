/* Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:

Input: nums = [], target = 0
Output: [-1,-1] */


var bsStartIndex = function(nums, low, high, target) {
    if(high < low) {
        return -1
      }
      let mid = Math.floor((high+low)/2);
      if ((mid == 0 || target > nums[mid-1]) && nums[mid] == target) return mid;
      else if(target>nums[mid]) {
         return bsStartIndex(nums, mid+1, high, target)
      }
    return bsStartIndex(nums, low, mid-1, target)
};

var bsEndIndex = function(nums, low, high, target) {
    if(high < low) {
        return -1
      }
      let mid = Math.floor((high+low)/2);
      if((mid == (nums.length-1) || target < nums[mid+1]) && nums[mid] == target ) return mid;
      else if(target<nums[mid]) {
        return bsEndIndex(nums, low, mid-1, target)
      }
      return bsEndIndex(nums, mid+1, high, target)
};

var searchRange = function(nums, target) {
    return [bsStartIndex(nums, 0, nums.length-1, target), bsEndIndex(nums, 0, nums.length-1, target)]
};

console.log(searchRange([5,7,7,8,8,10], 8));