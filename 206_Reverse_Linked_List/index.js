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
const reverseList = function(head) {
  let prev = null, curr = head;
  while(curr !== null) {
    const tempNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = tempNode;
  }
  return prev;
};