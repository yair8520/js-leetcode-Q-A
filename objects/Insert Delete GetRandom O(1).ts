class RandomizedSet {
  public map = new Map<any, any>();
  public array: number[] = [];

  constructor() {}

  insert(val: number): boolean {
    if (this.map.has(val)) return false;

    this.map.set(val, this.array.length);
    this.array.push(val);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) return false;

    const currIndex = this.map.get(val);
    const lastVal = this.array[this.array.length - 1];

    this.array[currIndex] = lastVal;
    this.array.pop();

    this.map.set(lastVal, currIndex);
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    return this.array[Math.floor(Math.random() * this.map.size)];
  }
}
var obj = new RandomizedSet();
console.log(obj.map);
console.log(obj.insert(2));
console.log(obj.insert(4));
console.log(obj.insert(3));
console.log(obj.insert(6));
console.log(obj.insert(8));
console.log(obj.map);
console.log(obj.remove(2));
console.log(obj.map);
console.log(obj.getRandom());
