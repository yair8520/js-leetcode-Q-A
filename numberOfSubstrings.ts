function numberOfSubstrings(s: string): number {
    const count: { [key: string]: number } = { 'a': 0, 'b': 0, 'c': 0 };
    let left = 0;
    let totalSubstrings = 0;

    for (let right = 0; right < s.length; right++) {
        count[s[right]]++; // Increment count of current character
        console.log(count)
        // Check for at least one occurrence of each character
        while (count['a'] > 0 && count['b'] > 0 && count['c'] > 0) {
            // All substrings from left to right are valid
            console.log("in",count)
            totalSubstrings += (s.length - right); // Count all valid substrings ending at 'right'

            count[s[left]]--; // Decrement count of the left character
            left++; // Move the left pointer to the right
        }
    }

    return totalSubstrings; // Return total count of valid substrings
}


// Example usage:
console.log(numberOfSubstrings("aaacb")); // Output: 3
