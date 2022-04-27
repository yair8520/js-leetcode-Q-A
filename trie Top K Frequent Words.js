/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = words
    .sort()
    .reduce((acc, e) => acc.set(e, (acc.get(e) || 0) + 1), new Map());
  let m2 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  const values = Array.from(m2.keys());
  return values.slice(0, k);
};
console.log(
  topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], (k = 2))
);
