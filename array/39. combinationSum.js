/* Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
Example 2:

Input: candidates = [2,3,5], target = 8
Output: [[2,2,2,2],[2,3,3],[3,5]]
Example 3:

Input: candidates = [2], target = 1
Output: [] */

var combinationSum = function(candidates, target) {
    let result = [];
    
    // Backtracking function to create permutations
    function Permute(arr=[], sum=0, idx=0) {
        if(sum > target) return;
        if(sum === target) result.push(arr)
        for(let i=idx; i<candidates.length; i++) {
            Permute([...arr, candidates[i]], sum+candidates[i], i)
        }
    }
    Permute()
    return result;
    
};

console.log(combinationSum([2,3,6,7], 7));