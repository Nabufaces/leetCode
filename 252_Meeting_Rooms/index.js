/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for(let i = 1; i < intervals.length; i++) {
        if(intervals[i][0] < intervals[i - 1][1]) return false;
    }
    return true;
}

/**
 * TestCase
console.log(canAttendMeetings([[0,30],[5,10],[15,20]])); // false
console.log(canAttendMeetings([[9,15],[5,8]])); // true
 */