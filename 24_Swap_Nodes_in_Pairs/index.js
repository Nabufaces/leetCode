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
function swapPairs(head) {
    if(!head) return head;
    const dummyHead = new ListNode(0);
    let pre = dummyHead;
    let curr = head;
    dummyHead.next = head;
    while(curr && curr.next) {
      let next = curr.next;
      curr.next = next.next;
      next.next = curr;
      pre.next = next;
      pre = curr;
      curr = pre.next;
    }
    return dummyHead.next;
};