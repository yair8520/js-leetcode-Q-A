/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (p, num) {
  if (p < 0) {
    return 1 / power(-p, num);
  } else {
    return power(p, num);
  }
};
const power = (p, num) => {
  let sum = 1;
  for (let i = 0; i < p; i++) {
    sum *= num;
  }

  return sum;
};
console.log(myPow(-2147483648, 2.0));
