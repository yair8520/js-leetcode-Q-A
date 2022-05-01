/**
 * @param {number} capacity
 * Least Recently Used
 */
class LRUCache {
  constructor(capacity) {
    this.map = new Map();
    this.capacity = capacity;
  }
  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    if (!this.map.has(key)) return -1;
    //update the use
    const v = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, v);
    return this.map.get(key);
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) this.map.delete(key);
    this.map.set(key, value);
    if (this.map.size > this.capacity) {
      this.map.delete(this.map.keys().next().value); // keys().next().value returns first item's key
    }
  }
}

var obj = new LRUCache(capacity);
var param_1 = obj.get(5);
obj.put(key, value);
