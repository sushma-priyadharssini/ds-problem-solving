/* 
Input: intervals = [[83,99]]
Output: true
Explanation: There is only one meeting, so there is no possibility of overlap.
Input: intervals = [[1,5],[5,10],[10,15]]
Output: true
Explanation: The meetings are back-to-back but do not overlap.
Input: intervals = [[8,10],[1,3],[2,6],[15,18]]
Output: false
Explanation: The meetings [1, 3] and [2, 6] overlap, so it is not possible to attend all meetings.
 */

function isMeetingCalendarValid(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    if (intervals.length === 1) return true

    let hasOverlap = false;
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) {
            hasOverlap = true;
            break;
        }
        prev = intervals[i]
    }
    return !hasOverlap;
}