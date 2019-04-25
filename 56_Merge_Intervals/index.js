/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = function(intervals) {
    if(!intervals.length) return [];
    const sortIntervals = intervals.sort((a, b) => {
      if(a.start === b.start) {
          return b.end - a.end; // end从大到小
      }
      return a.start - b.start;
    })
    const result = [sortIntervals[0]];
    for(let i = 1; i < sortIntervals.length; i++) {
        if(result[result.length - 1].end >= sortIntervals[i].start) {
            result[result.length - 1].end = Math.max(result[result.length - 1].end, sortIntervals[i].end);
        } else {
            result.push(sortIntervals[i]);
        }
    }
    return result;
};