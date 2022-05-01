/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  let next = node.next.next;
  node.val = node.next.val;
  node.next = next;
};
console.log(deleteNode([4, 5, 1, 9], 5));
