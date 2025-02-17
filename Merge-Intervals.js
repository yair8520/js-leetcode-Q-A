/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if(intervals.length === 0) return [];

  // Step 1: Sort intervals by their start time
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [];
  let curr = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
      let next = intervals[i];
      console.log(curr,next,i)
      if (curr[1] >= next[0]) {
          curr[1] = Math.max(curr[1], next[1]);
      } else {
          res.push(curr);
          curr = next;
      }
  }

  // Push the last interval
  res.push(curr);

  return res;
};
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [9, 18],
  ])
);
