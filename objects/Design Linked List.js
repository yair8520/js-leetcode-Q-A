class Node {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.length = 0;
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(index) {
    if (index < 0 || index >= this.length) return -1;
    let curNode = this.head.next;
    while (index--) curNode = curNode.next;
    return curNode.val;
  }

  addAtHead(val) {
    let prev = this.head;
    let next = this.head.next;
    let node = new Node(val, prev, next);
    prev.next = node;
    next.prev = node;
    this.length++;
  }

  addAtTail(val) {
    let prev = this.tail.prev;
    let next = this.tail;
    let node = new Node(val, prev, next);
    prev.next = node;
    next.prev = node;
    this.length++;
  }

  addAtIndex(index, val) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length) {
      this.addAtTail(val);
      return;
    }
    let prev = this.head;
    while (index--) prev = prev.next;
    let next = prev.next.next;
    let node = new Node(val, prev, next);
    prev.next = node;
    next.prev = node;
    this.length++;
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let prev = this.head;
    while (index--) prev = prev.next;

    let next = prev.next.next;

    prev.next = next;
    next.prev = prev;
    this.length--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
