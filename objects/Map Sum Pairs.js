class MapSum {
  constructor() {
    this.root = new Map();
  }
  /**
   * @param {string} key
   * @param {number} val
   * @return {void}
   */
  insert(key, val) {
    this.root.set(key, val);
  }
  /**
   * @param {string} prefix
   * @return {number}
   */
  sum(prefix) {
    let sumCount = 0;
    for (const [key, value] of this.root) {
      if (key.startsWith(prefix)) {
        sumCount += value;
      }
    }
    return sumCount;
  }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */
var obj = new MapSum();
obj.insert("apple", 3);
console.log(obj.sum("ap"));
obj.insert("app", 2);
console.log(obj.sum("ap"));
console.log(obj.root);
