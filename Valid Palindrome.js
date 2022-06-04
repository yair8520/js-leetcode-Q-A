/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let start = 0;
  let end = s.length - 1;

  while (start <= end) {
    if (s[start] !== s[end]) return false;

    start++;
    end--;
  }
  return true;
};
console.log(isPalindrome("abc"));
