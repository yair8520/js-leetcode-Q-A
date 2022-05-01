class PeekingIterator {
  constructor(iterator) {
    this.iterator = iterator;
    this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
  }

  peek() {
    return this.nextVal;
  }

  next() {
    let nextVal = this.nextVal;
    this.nextVal = this.iterator.hasNext() ? this.iterator.next() : null;
    return nextVal;
  }

  hasNext() {
    return !!this.nextVal;
  }
}
var obj = new PeekingIterator([1, 2, 3]);
var param_1 = obj.peek();
var param_2 = obj.next();
var param_3 = obj.hasNext();
console.log(param_1);
console.log(param_2);
console.log(param_3);
