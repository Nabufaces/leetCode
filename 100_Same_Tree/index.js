/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
    if(!p && !q) {
        return true;
    }
    if((!p || !q) || (p.val != q.val)) {
        return false;
    }
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};