/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function (s) {
  let a = s.split(" ");
  let word = "";
  let res = [];
  let sizeOfLongestWord = Math.max(...a.map((word) => word.length));
  for (let i = 0; i < a.length; i++) {
    let diff = sizeOfLongestWord - a[i].length;
    if (diff > 0) {
      a[i] += " ".repeat(diff);
    }
  }
  for (let j = 0; j < sizeOfLongestWord; j++) {
    for (let i = 0; i < a.length; i++) {
      word += a[i][j];
    }
    res.push(word.replace(/\s+$/, ""));
    word = "";
  }
  return res;
};
console.log(printVertically("TO BE OR NOT TO BE")); //how
