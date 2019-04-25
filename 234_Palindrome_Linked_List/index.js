
function reverseLink(root) {
    let prev = null, curr = root;
    while(curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}


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
function isPalindrome(head) {
    if(!head || !head.next) return true; 
    let slow = head, fast = head;
    while(fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    }
    slow = reverseLink(slow.next);
    while(slow) {
        if(head.val !== slow.val) return false;
        slow = slow.next;
        head = head.next;
    }
    return true;
};