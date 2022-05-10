/* Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

var twoSum = function (nums, target) {
    let myMap = new Map();
    for(let i=0; i<nums.length; i++) {
        let c = target - nums[i];
        if(myMap.has(c) && myMap.get(c) !== i) {
            return [i, myMap.get(c)]
        }
        myMap.set(nums[i], i) 
    }
}

console.log(twoSum([2,7,11,15], 9))