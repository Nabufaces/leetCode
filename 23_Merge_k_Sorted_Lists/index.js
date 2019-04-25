/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function merge2Lists(List1, List2) {
    if(!List1) {
        return List2;
    }
    if(!List2) {
        return List1;
    }
    if(List1.val >= List2.val) {
        List2.next = merge2Lists(List1, List2.next);
        return List2;
    } else {
        List1.next = merge2Lists(List1.next, List2);
        return List1;
    }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function(lists, left = 0, right = lists.length - 1) {
    if(!lists.length) {
        return null;
    }
    if(left === right) {
        return lists[left];
    }
    const mid = Math.floor((left + right) / 2);
    const leftLists = mergeKLists(lists, left, mid),
        rightLists = mergeKLists(lists, mid + 1, right);
    return merge2Lists(leftLists, rightLists);
};