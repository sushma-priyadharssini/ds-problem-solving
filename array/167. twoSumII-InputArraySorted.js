/* Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
Example 2:

Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
Example 3:

Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;
  while (p1 < p2) {
    const sum = numbers[p1] + numbers[p2];
    if (sum > target) {
      p2--;
    } else if (sum < target) {
      p1++;
    } else {
      return [p1 + 1, p2 + 1];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // Output: [1,2]
