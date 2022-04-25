/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (arr) {
  // if there are maximum 2 points, it's a line
  if (arr.length <= 2) return true;

  // slope is diff between 1st and 2nd point
  let x1 = arr[0][0],
    y1 = arr[0][1],
    slope = (arr[1][1] - y1) / (arr[1][0] - x1);

  // slope for all other points should be same as first 2
  for (let i = 2; i < arr.length; i++) {
    if (arr[i][1] - y1 !== slope * (arr[i][0] - x1)) return false;
  }
  return true;
};
console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 5],
  ])
);
