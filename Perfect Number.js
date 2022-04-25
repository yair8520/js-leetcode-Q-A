/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false;
  let div = 1;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      div += i;
      div += num / i;
    }
  }

  return div == num ? true : false;
};
console.log(checkPerfectNumber(28));
