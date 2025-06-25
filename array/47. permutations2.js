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

function combinations(choices, used, temp = [], permutations = []) {
  if (temp.length === choices.length) {
    permutations.push([...temp]);
  }

  for (let i = 0; i < choices.length; i++) {
    if (used[i] || (i > 0 && choices[i] === choices[i - 1] && !used[i - 1])) {
      continue;
    }
    used[i] = true;
    temp.push(choices[i]);
    combinations(choices, used, temp, permutations);
    used[i] = false;
    temp.pop();
  }
  return permutations;
}

var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  return combinations(
    nums,
    nums.map(() => false)
  );
};

console.log(permuteUnique([1, 1, 2]));
