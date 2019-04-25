/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  if(n <= 0) return false;
  // 2的幂写成二进制形式后，发现：二进制中最高位为1，其余位置都为0
  return (n & (n - 1)) === 0
};