/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if(!root) return null;
    if(root === p || root === q) return root;
    const nodeLeft = lowestCommonAncestor(root.left, p, q);
    const nodeRight = lowestCommonAncestor(root.right, p, q);
    if(nodeLeft && nodeRight) { // 分别在左右子树上
        return root;
    } else if(nodeLeft) { // 只在左子树上
        return nodeLeft;
    } else if(nodeRight) { // 只在右子树上
        return nodeRight;
    } else {
        return null;
    }
};