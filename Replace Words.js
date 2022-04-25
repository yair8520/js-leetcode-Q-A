/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {
  let splitSentence = sentence.split(" ");
  for (let i = 0; i < splitSentence.length; i++) {
    for (let k = 0; k < dictionary.length; k++) {
      if (splitSentence[i].startsWith(dictionary[k])) {
        splitSentence[i] = dictionary[k];
      }
    }
  }
  return splitSentence.join(" ");
};
console.log(
  replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
);
