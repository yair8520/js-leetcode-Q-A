/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let reversArray = String(x)
    .split("")
    .map((x) => {
      return x;
    })
    .reverse();

  if (x < 0) {
    reversArray.pop();
  }
  reversArray = reversArray.join("");
  if (reversArray > Math.pow(2, 31) - 1) return 0;
  return x > 0 ? Number(reversArray) : Number(reversArray * -1);
};
console.log(reverse(1534236469));
