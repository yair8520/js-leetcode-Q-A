class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next ? next : null;
  }
}
const initLinkedListFromArray = (array) => {
  if (array.length === 0) {
    return [];
  }
  let head = new Node(array[0]);
  let cur = head;
  for (let i = 1; i < array.length; i++) {
    let newNode = new Node(array[i]);
    cur.next = newNode;
    cur = cur.next;
  }
  return head;
};
const printList = (head) => {
  let cur = head;
  let printStr = "";

  while (cur) {
    printStr += `(${cur.value}) --> `;
    cur = cur.next;
  }
  printStr += "null";
  console.log(printStr);
};

//////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) return true;
  }
  return false;
};
//const head = initLinkedListFromArray([3, 2, 0, -4, 2]);
//console.log(hasCycle(head));
//printList(head);

/////////////////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let fast = head;
  let slow = head;

  let p = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) break;
  }

  if (slow !== fast) return null;

  // now we know there is a ciycle

  while (p !== slow) {
    p = p.next;
    slow = slow.next;
  }

  //p=slow
  return p;
};
// const head = initLinkedListFromArray([3, 2, 0, -4, 2]);
// console.log(hasCycle(head));
// printList(head);

/////////////////////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(-Infinity);
  let prev = dummy;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }
  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;
  return dummy.next;
};

////////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow.value;
};

/////////////////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }: Could you do it in O(n) time and O(1) space?
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let fast = head;
  let slow = head;
  let startPointer = head;
  let len = 0;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    len++;
  }

  let mid = reverseLinkedList(slow);
  while (len) {
    len--;
    if (mid.val !== startPointer.val) return false;
    startPointer = startPointer.next;
    mid = mid.next;
  }
  return true;
};
1,2,3,4,5
const reverseLinkedList = (head) => {
  let prev = null;
  let next;
  while (head) {
    next = head.next;//reference to the next node
    head.next = prev;//null,1
    prev = head;//1,
    head = next;//2,
  }
  return prev;
};

// printList(head);
// printList(reverse(head));
//////////////////////////////////////////////////////////////////////////////////
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var current = head;

  while (current) {
    if (current.next !== null && 
      current.value == current.next.value
    ) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 *  remove the nth node from the end of the list and return its head.
 */
const removeNthFromEnd = (head, n) => {
  // Create a dummy node to handle edge cases like removing the head node
  let dummy = new ListNode(0);
  dummy.next = head;

  // Initialize two pointers, both starting at the dummy node
  let fast = dummy;
  let slow = dummy;

  // Move the fast pointer n steps ahead
  for (let i = 0; i < n; i++) {
      fast = fast.next;
  }

  // Move both pointers until the fast pointer reaches the end
  while (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
  }

  // Now slow.next is the node to be removed
  slow.next = slow.next.next;

  // Return the head of the modified list
  return dummy.next;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let prevNode = new ListNode();
  let head = prevNode;
  while (l1 || l2 || carry != 0) {
    let val1 = 0; //diffrent length
    let val2 = 0; //diffrent length
    if (l1) {
      val1 = l1.value;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.value;
      l2 = l2.next;
    }
    let sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;
    let digit = sum % 10;
    const currentNode = new ListNode(digit);
    prevNode.next = currentNode;
    prevNode = currentNode;
  }
  return head.next;
};

const l1 = initLinkedListFromArray([1, 2, 3]);
const l2 = initLinkedListFromArray([5, 4]);
printList(l1);
printList(l2);
printList(addTwoNumbers(l1, l2));
