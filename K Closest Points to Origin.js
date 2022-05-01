/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
var kClosest = function (points, K) {
  return points.sort((a, b) => getLength(a) - getLength(b)).slice(0, K);
};

var getLength = function ([a, b]) {
  console.log([a, b]);
  return a * a + b * b;
};
console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);
