/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = {};
  }
  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;
    for (let letter of word) {
      if (node[letter] === undefined) node[letter] = {};
      node = node[letter];
    }
    node.isEnd = true;
  }
  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (let letter of word) {
      // check if current letter is in the node
      if (!node[letter]) {
        return false;
      } else {
        //next
        node = node[letter];
      }
    }

    return node && node.isEnd === true;
  }
  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (let letter of prefix) {
      if (!node[letter]) {
        return false;
      } else {
        node = node[letter];
      }
    }
    return true;
  }
}
var a = new Trie();
a.insert("abcdefg");
a.insert("abcdefg");
a.insert("ab");
a.insert("a");
a.insert("nklo");
