/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var seen = {};
  while (n !== 1 && !seen[n]) {
    seen[n] = true;
    n = sumOfSquares(n);
  }
  console.log(seen);
  return n === 1 ? true : false;
};

function sumOfSquares(numString) {
  return numString
    .toString()
    .split("")
    .reduce(function (sum, num) {
      return sum + Math.pow(num, 2);
    }, 0);
}
console.log(isHappy(19));
