/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
function kthSmallest(root, k) {
    let count = 0, resNode;

    function inorderPrint(node) {
        if(node) {
            inorderPrint(node.left);
            if(++count === k) {
                resNode = node.val;
                return;
            }
            inorderPrint(node.right);
        }
    }
    inorderPrint(root);
    return resNode;
};