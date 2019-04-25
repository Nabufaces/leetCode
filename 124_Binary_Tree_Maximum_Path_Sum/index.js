/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function maxPathSum(root) {
    let max = -Infinity;

    function findPath(node) {
        if(!node) return 0;

        const left = Math.max(findPath(node.left), 0);
        const right = Math.max(findPath(node.right), 0);

        max = Math.max(max, node.val + left + right);
        return node.val + Math.max(left, right);
    }

    findPath(root);
    return max;
};