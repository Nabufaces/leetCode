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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
 *    3
 *   / \
 *  9  20
 *    /  \
 *   15   7
 * 后序的最后一个节点必是根节点，找到该节点在中序的位置，左半部分全为左子树，右半部分全为右子树
 */
function buildTree(inorder, postorder) {
    const len = inorder.length;
    let postOrderIndex = len - 1;
    function buildHelper(left, right) {
        if(postOrderIndex < 0 || left > right) return null;
        else {
            const root = new TreeNode(postorder[postOrderIndex--]);
            const index = fingIndex(inorder, root.val, left, right);
            root.right = buildHelper(index + 1, right);
            root.left = buildHelper(left, index - 1);
            return root;
        }
    }
  return buildHelper(0, len - 1);
}