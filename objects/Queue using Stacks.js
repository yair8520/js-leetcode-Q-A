
//Implement a first in first out (FIFO) queue using only two stacks.
// The implemented queue should support all the functions of a normal queue(push, peek, pop, and empty).
//queue ==FIFO
//stack ==LIFO

/**
 * Initialize your data structure here.
 */
 class MyQueue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    /**
     * Push element x to the back of queue.
     * @param {number} x
     * @return {void}
     */
    push(x) {
        this.stack1.push(x);
    }
    /**
     * Removes the element from in front of queue and returns that element.
     * @return {number}
     */
    pop() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }

        var pop = this.stack2.pop();

        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }

        return pop;
    }
    /**
     * Get the front element.
     * @return {number}
     */
    peek() {
        while (this.stack1.length !== 0) {
            this.stack2.push(this.stack1.pop());
        }

        var pop = this.stack2.pop();
        this.stack2.push(pop);
        while (this.stack2.length !== 0) {
            this.stack1.push(this.stack2.pop());
        }

        return pop;
    }
    /**
     * Returns whether the queue is empty.
     * @return {boolean}
     */
    empty() {
        return this.stack1.length === 0 ? true : false;
    }
}





/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */