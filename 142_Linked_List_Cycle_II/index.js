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
function detectCycle(head) {
  if(!head || !head.next) return null;
  let slow = head, fast = head;
  while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      // 环检测
      if(slow === fast) {
          // 此时fast必在环内，slow指向head，两个指针相同速度的话必在环的第一个入口相遇
          slow = head;
          while(slow !== fast) {
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
  }
  return null;
};