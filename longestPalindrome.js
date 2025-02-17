/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 1) return "";

    let start = 0, end = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        // Return the length of the palindrome found
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        // Check for odd length palindromes
        const len1 = expandAroundCenter(i, i);
        // Check for even length palindromes
        const len2 = expandAroundCenter(i, i + 1);
        // Get the maximum length of the palindrome found
        const len = Math.max(len1, len2);

        // Update the start and end pointers if a longer palindrome is found
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

// Example usage
// console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"
