/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    let p = l1, q = l2, head = new ListNode(0);
    let curr = head, carry = 0;
    while(p || q || carry) {
        const x = p ? p.val : 0;
        const y = q ? q.val : 0;
        const sum = carry + x + y;
        carry = parseInt(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        if(p) p = p.next;
        if(q) q = q.next;
    }
    return head.next;
};