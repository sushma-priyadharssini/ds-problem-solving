/* Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
Example 2:

Input: candidates = [2,5,2,1,2], target = 5
Output: 
[
[1,2,2],
[5]
] */

var combinationSum = function(candidates, target) {
    let result = [];
    candidates.sort((a,b) => a-b);
    function Permute(arr=[], sum=0, idx=0) {
        if(sum > target) return;
        if(sum === target) {
            result.push(arr)
            return;
        } 
        for(let i=idx; i<candidates.length; i++) {
            if (i > idx && candidates[i] === candidates[i - 1]) continue;
            Permute([...arr, candidates[i]], sum+candidates[i], i+1)
        }
    }
    Permute()
    return result;
    
};

console.log(combinationSum([10,1,2,7,6,1,5], 8));