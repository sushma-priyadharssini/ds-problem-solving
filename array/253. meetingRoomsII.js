/* 
Input: intervals = [[83,99]]
Output: 1
Explanation: Since there is only one meeting, only one room is required. There is no overlap, so just one room can accommodate the meeting.
Input: intervals = [[1,5],[2,6],[8,9]]
Output: 2
Explanation: There are two overlapping meetings: [1, 5] and [2, 6]. To accommodate both meetings simultaneously, at least two rooms are needed. The other meeting [8, 9] do not overlap with the earlier ones, so only two rooms are required in total.
Input: intervals = [[5,10],[10,15],[15,20]]
Output: 1
Explanation: The meetings are back-to-back, meaning they do not overlap. Since the end of one meeting coi
 */

function minMeetingRoomsNeeded(intervals) {
    let start = [], end = [];
    intervals.forEach(i => {
        start.push(i[0])
        end.push(i[1])
    })

    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    let currRooms = 0, maxRooms = 0, i = 0, j = 0;
    while (i < start.length && j < end.length) {
        if (start[i] < end[j]) {
            i++;
            currRooms += 1
        } else {
            j++;
            currRooms -= 1
        }
        maxRooms = Math.max(maxRooms, currRooms)
    }
    return maxRooms;
}