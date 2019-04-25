/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function fingIndex(arr, val, start, end) {
    for(let i = start; i <= end; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return - 1;
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * 前序的第一个节点必是根节点，找到该节点在中序的位置，左半部分全为左子树，右半部分全为右子树
 */
function buildTree(preorder, inorder) {
    const len = preorder.length;
    let preOrderIndex = 0;
    function buildHelper(left, right) {
        if(preOrderIndex >= len || left > right) return null;
        else {
            const root = new TreeNode(preorder[preOrderIndex++]);
            const index = fingIndex(inorder, root.val, left, right);
            root.left = buildHelper(left, index - 1);
            root.right = buildHelper(index + 1, right);
            return root;
        }
    }
  return buildHelper(0, len - 1);
}