/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  for (let i = 0; i <= Math.floor(Math.sqrt(n)); i++) {
    if (Math.pow(3, i) == n) return true;
  }
  return false;
};
var isPowerOfThree2 = function (n) {
  return (Math.log(n) / Math.log(3)) % 1 ? true : false; //if the power is integer , return true else return false
};

console.log(isPowerOfThree2(9));
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  if (n == 0) return false;
  if (n == 1) return true;

  if (n % 4 != 0) return false;

  return isPowerOfFour(n / 4);
};

var isPowerOfFour2 = function (n) {
  if (n <= 0) return false;
  return (Math.log(n) / Math.log(4)) % 1 ? false : true; //if the power is integer , return true else return false
};
console.log(isPowerOfFour2(16));
