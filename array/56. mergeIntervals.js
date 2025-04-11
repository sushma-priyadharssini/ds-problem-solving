/* Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping. */

var merge = function(intervals) {
    if (intervals.length < 2) return intervals;
    let result = [];
    intervals.sort((a,b) => a[0] - b[0]);
    let previous = intervals[0];
    for(let i=1; i<intervals.length; i++){
        if(previous[1] >= intervals[i][0]) {
           previous = [previous[0], Math.max(previous[1], intervals[i][1])]
        } else {
            result.push(previous);
            previous = intervals[i];
        }
    }
    result.push(previous)
    return result;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
