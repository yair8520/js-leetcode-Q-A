/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (([s[i], s[i + 1]] = [s[i + 1], s[i]]) == goal) {
      return true;
    }
  }
};

console.log(buddyStrings("ab", "ba"));
