/* Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1 */

var findPivot = function (nums, low, high) {
    if(high < low) {
        return -1
    }
    if(low===high) {
        return low;
    }

    let mid = Math.floor((high+low)/2);
    if(mid<high && nums[mid]>nums[mid+1]) {
        return mid;
    }
    if(mid>low && nums[mid-1]>nums[mid]) {
        return mid-1
    }
    if(nums[low]>=nums[mid]) {
        return findPivot(nums, low, mid-1)
    }
    return findPivot(nums, mid+1, high)
}
  
var binarySearch = function(nums, low, high, target) {
    if(high < low) {
        return -1
    }
    let mid = Math.floor((high+low)/2);
    if(nums[mid]===target){
        return mid;
    }
    if(target<=nums[mid]) {
        return binarySearch(nums, low, mid-1, target)
    }
    return binarySearch(nums, mid+1, high, target)
}
  
var search = function (nums, target) {
    let n = nums.length;
    let pivot = findPivot(nums, 0, n-1)
    
    if(pivot===-1) {
      return binarySearch(nums, 0, n-1, target)
    }
    
    if(nums[pivot]===target) {
      return pivot
    }
    
    if(nums[0] <= target) {
      return binarySearch(nums, 0, pivot-1, target)
    }
    return binarySearch(nums, pivot+1, n-1, target)
}
