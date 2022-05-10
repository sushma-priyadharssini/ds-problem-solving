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

var findLargest = function(nums) {
    return nums[findPivot(nums, 0, nums.length-1)]
};

console.log(findLargest([1, 3, 6, 8, 9, 10, 12, 15, 17, 19, 20, 45, 67, 89, 90, 100, 98, 54, 32, 21, 7, 2]));