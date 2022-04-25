/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let res = "";

  while (p2 <= word2.length || p1 <= word1.length) {
    res += word1.charAt(p1) != undefined ? word1.charAt(p1) : "";
    res += word2.charAt(p2) != undefined ? word2.charAt(p2) : "";
    p1++;
    p2++;
  }
  return res;
};
console.log(mergeAlternately("a", "sa"));
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
