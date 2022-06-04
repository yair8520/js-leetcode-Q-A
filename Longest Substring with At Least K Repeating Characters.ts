/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s: string, k: number): void {
  let map = new Map<any, any>();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }
};
console.log(longestSubstring("aaabb", 3));
