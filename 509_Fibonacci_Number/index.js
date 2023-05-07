/**
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};