// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
/*
Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

var longestConsecutive = function (nums) {
    let nset = new Set(nums);
    let maxScore = 0;
    for (const currNum of [...nset]) {
        let pNum = currNum - 1;
        if (nset.has(pNum)) continue
        let [num, score] = [currNum, 1]
        const isStreak = () => nset.has(num + 1)
        while (isStreak()) {
            num++;
            score++;
        }
        maxScore = Math.max(maxScore, score)
    }
    return maxScore;
};