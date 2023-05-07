/**
 * @param {number} n
 * @return {number}
 */
const climbStairs1 = function(n) {
  if (n <= 2) return n;
  let x = 1, y = 2;
  for (let i = 3; i <= n; i++) {
    const temp = x + y;
    x = y;
    y = temp;
  }
  return x + y;
};


/**
 * @param {number} n
 * @return {number}
 */
const climbStairs2 = function(n) {
  if (n <= 2) return n;
  return climbStairs2(n - 1) + climbStairs2(n - 2);
};
