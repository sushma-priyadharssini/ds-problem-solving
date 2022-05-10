/* Example 1:

Input: nums = [1,1,2]
Output:
[[1,1,2],
 [1,2,1],
 [2,1,1]]
Example 2:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

var combinations = function(choices, temp = [], permutations = []) {
    // Base case 
    if(choices.length === 0){
        permutations.push([...temp]);
    } 

    for(let i = 0; i < choices.length; i++){
        if (choices[i] === choices[i - 1]) continue;
        // Create new array without current letter
        let newChoices = choices.filter((choice, index) => index !== i)
        // Add current to the temp array which is our current permutation
        temp.push(choices[i])
        console.log(temp);
        combinations(newChoices, temp, permutations)
        // Once we have explored options remove the current letter from our current permuataion
        temp.pop()
        console.log(temp);

    }

    return permutations
};


var permute = function (nums) {
    return combinations(nums)
}



console.log(permute([1,1,2]))