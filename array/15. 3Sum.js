/* Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]] */

function threeSum(nums) {
    let arr = [];
    nums.sort((a, b) => a - b);

    for(let i=0; i<nums.length; i++) {
        if (i !== 0 && nums[i] === nums[i - 1]) continue;
        let left=i+1;
        let right=nums.length-1;
        while(left<right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                arr.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                // Never let j refer to the same value twice (in an output) to avoid duplicates
                while (left < right && nums[left] === nums[left-1]) left++;
            } else if (sum > 0) {
                right--;
            } else if (sum < 0) {
                left++;
            }
        }
    }
    return arr;
}
console.log(threeSum([-1,0,1,2,-1,-4]))
