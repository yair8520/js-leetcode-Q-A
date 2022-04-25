const numberOfWords = (string) => {
  let sentenceArray = string.match(/.*?[?!.]/g);
  console.log(sentenceArray);
  let mostWords = sentenceArray.reduce((sentence1, sentence2) =>
    sentence1.trim().split("").length < sentence2.trim().split("").length
      ? (sentence1 = sentence2)
      : sentence1
  );
  return mostWords.trim().split(" ").length;
};
console.log(numberOfWords(`We test coders. Give us a try?.`));
console.log( null === 0 );
