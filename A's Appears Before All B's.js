/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function (s) {
  return !s.includes("ba");
};
console.log(checkString("aababb"));
