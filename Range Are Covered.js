/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
var isCovered = function (ranges, left, right) {
  const cover = Array(51).fill(false);
  ranges.forEach(([start, end]) => {
    cover.fill(true, start, end + 1);
  });

  for (let i = left; i <= right; i++) {
    if (!cover[i]) return false;
  }

  return true;
};
console.log(
  isCovered(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    2,
    5
  )
);
