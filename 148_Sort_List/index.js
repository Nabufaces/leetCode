/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

 /**
  * 
  * @param {ListNode} left 
  * @param {ListNode} right 
  * @return {ListNode}
  */
 function merge(left, right) {
  if(!left) return right;
  if(!right) return left;
  if(left.val >= right.val) {
      right.next = merge(left, right.next);
      return right;
  } else {
      left.next = merge(left.next, right);
      return left;
  }
}

/**
* @param {ListNode} head
* @return {ListNode}
*/
function sortList(head) {
  if(!head || !head.next) return head;
  let prev = null, slow = head, fast = head;
  while(fast && fast.next) {
      prev = slow;
      slow = slow.next;
      fast = fast.next.next;
  }
  // 将两个待排序链表分隔
  prev.next = null;
  return merge(sortList(head), sortList(slow));
};