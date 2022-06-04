function last(stack) {
  return stack[stack.length - 1];
}
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(x) {
    if (this.minStack.length === 0 || x <= last(this.minStack)) {
      this.minStack.push(x);
    }
    this.stack.push(x);
  }

  pop() {
    if (last(this.minStack) === last(this.stack)) {
      this.minStack.pop();
    }
    return this.stack.pop();
  }

  top() {
    return last(this.stack);
  }

  getMin() {
    return last(this.minStack);
  }
}
