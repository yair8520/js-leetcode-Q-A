function reverseWords(s) {
    let newStr = "";
    let first = -1;
    let last = -1;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            if (first === -1) {
                first = i;
            }
        } else {
            if (first !== -1) {
                last = i;
                newStr += s.substring(last + 1, first + 1) + " ";
                first = -1; // reset for the next word
            }
        }
    }

    // Handle the case for the first word in the string
    if (first !== -1) {
        newStr += s.substring(0, first + 1) + " ";
    }

    // Trim any trailing spaces and return the reversed string
    return newStr.trim();
}

console.log(reverseWords("a good   example"));
