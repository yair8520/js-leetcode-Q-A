/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {
  let arr = s
    .split(" ")
    .filter((x) => Number.isInteger(Number(x)))
    .map((x) => Number(x));
  return arr.slice(1).every((e, i) => e > arr[i]);
};
console.log(
  areNumbersAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles")
);
