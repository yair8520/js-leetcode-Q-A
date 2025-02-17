/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const max = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    let letter = s[right];
    if (!set.has(letter)) {
      set.add(letter);
      max = Math.max(max, set.size);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }
  return max;
};
console.log("pwwkew"); //wke
