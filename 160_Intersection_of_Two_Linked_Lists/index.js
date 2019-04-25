/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 * 解法：
 * A = A' + Common
 * B = B' + Common
 * =>
 * A + B = (A' + Common + B') + Common
 * B + A = (B' + Common + A') + Common
 */
function getIntersectionNode(headA, headB) {
    let nodeA = headA, nodeB = headB;
    while(nodeA !== nodeB) {
      nodeA = nodeA ? nodeA.next : headB;
      nodeB = nodeB ? nodeB.next : headA;
    }
    return nodeA;
};