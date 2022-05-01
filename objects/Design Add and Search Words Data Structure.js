class WordDictionary {
  constructor() {
    this.seen = new Map();
  }
  addWord = function (word) {
    let len = word.length;
    if (this.seen.has(len)) {
      this.seen.get(len).push(word);
    } else {
      this.seen.set(len, [word]);
    }
  };
  search = function (word) {
    let len = word.length;
    if (!this.seen.has(len)) return false;

    let reg = new RegExp("^" + word + "$");
    return !!this.seen.get(len).find((el) => reg.test(el));
  };
}

const data = new WordDictionary();
data.addWord("sir");
data.addWord("sir");
data.addWord("car");
data.addWord("mad");
data.addWord("m");
console.log(data.search("hell"));
console.log(data.search("sir"));
console.log(data.search("s.."));
console.log(data.seen);
