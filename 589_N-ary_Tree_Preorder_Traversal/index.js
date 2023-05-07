/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const preorder = function(root) {
  const result = [];
  const print = (cur) => {
    if(cur) {
      result.push(cur.val);
      if (cur.children) {
        cur.children.forEach(c => print(c))
      }
    }
  }
  print(root);
  return result;
};
