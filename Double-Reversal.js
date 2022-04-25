/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function (num) {
  let reverseNum;
  let x = num;
  for (let i = 0; i < 2; i++) {
    let stringNum = String(x)
      .split("")
      .map((x) => {
        return x;
      });
    reverseNum = Number(stringNum.reverse().join(""));
    x = reverseNum;
  }

  return num == reverseNum ? true : false;
};
console.log(isSameAfterReversals(1800));
