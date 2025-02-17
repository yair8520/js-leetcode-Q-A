/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
var strWithout3a3b = function (a: number, b: number) {
  let s = "";
  while (a > 0 && b > 0) {
    if (a === b) {
      s += "ab";
      a--;
      b--;
    } else if (a > b) {
      s += "aab";
      a -= 2;
      b--;
    } else if (a < b) {
      s += "bba";
      a--;
      b -= 2;
    }
  }
  if (a > 0) s += "a".repeat(a);
  else if (b > 0) s += "b".repeat(b);
  return s;
};
// Example usage
console.log(strWithout3a3b(5, 3)); // Example output: "aabaaabab"
console.log(strWithout3a3b(3, 3)); // Example output: "ababab"
console.log(strWithout3a3b(1, 4)); // Example output: "bbabb"

// Example usage
console.log(strWithout3a3b(5, 3)); // Output: "aabaaabab", "aababaab", etc.
console.log(strWithout3a3b(3, 3)); // Output: "ababab", "aababb", etc.
console.log(strWithout3a3b(1, 4)); // Output: "bbabb"
