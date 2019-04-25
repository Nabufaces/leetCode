/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const res = [], stack = [];
    if(!root) {
        return [];
    }
    stack.push(root);
    while(stack.length) {
        const temp = [],
            // stack会改变
            size = stack.length;
        for(let i = 0; i < size; i++) {
            const node = stack.shift();
            temp.push(node.val);
            if(node.left) {
                stack.push(node.left);
            }
            if(node.right) {
                stack.push(node.right);
            }
        }
        res.push(temp);
    }
    return res;
};