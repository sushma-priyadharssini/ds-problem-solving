/* Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2). */

// -4, -1, 1, 2

function threeSumClosest(nums, target) {
    let sum = 0;
    let diff = Infinity;
    nums.sort((a, b) => a - b);

    for(let i=0; i<nums.length; i++) {
        let left=i+1;
        let right=nums.length-1;
        while(left<right) {
            let currSum = nums[i] + nums[left] + nums[right];
            let currDiff = Math.abs(currSum - target);
            if(currDiff < diff) {
                diff = currDiff;
                sum = currSum;
            } else if(currSum < target) {
                left++;
            } else if (currSum > target) {
                right--;
            }
        }
    }
    return sum;
}
console.log(threeSumClosest([-1,2,1,-4], 1))
