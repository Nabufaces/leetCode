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
function zigzagLevelOrder(root) {
    if(!root) return [];
    const result = [], stack = [];
    let isOdd = true;
    stack.push(root);
    while(stack.length) {
        const temp = [],
            len = stack.length;
        for(let i = 0; i < len; i++) {
            const node = stack.shift();
            temp.push(node.val);
            if(node.left) stack.push(node.left);
            if(node.right) stack.push(node.right);
        }
        result.push(isOdd ? temp : temp.reverse());
        isOdd = !isOdd;
    }
    return result;
};