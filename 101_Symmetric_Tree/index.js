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
const isMirror = function(p, q) {
    if(!p && !q) {
        return true;
    }
    if(!p || !q) {
        return false;
    }
    return (p.val === q.val) && isMirror(p.left, q.right) && isMirror(p.right, q.left);
}; 

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    return isMirror(root, root);
};