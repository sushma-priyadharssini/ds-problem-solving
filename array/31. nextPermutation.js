/* 6230 -> 6302
3652 -> 5236
2284 -> 2428 */ 

function swap(arr, i,j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function reverse (nums, i) {
    let l=i;
    let r=nums.length-1; 
    while(l<r) {
        swap(nums, l, r);
        l++;
        r--;
    }
}

var nextPermutation = function(nums) {
    let l = nums.length;
    let i = l-2;
    while(i >= 0 && nums[i] >= nums[i+1]) {
        i--;
    }
    if(i>=0) {
        let j=l-1;
        while(nums[j]<=nums[i]){ j--; }
        swap(nums, i, j);
    }
    reverse(nums, i+1)
};

let nums = [1,2,3];
nextPermutation(nums);
console.log(nums);