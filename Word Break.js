/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false);

  dp[0] = true;

  for (let i = 1; i <= s.length; i++) {
    let substr = s.substr(0, i);

    for (let word of wordDict) {
      if (substr.endsWith(word) && dp[i - word.length]) {
        dp[i] = true;
        break;
      }
    }
  }

  return dp[s.length];
};
console.log(wordBreak("cars", ["car", "ca", "rs"]));
