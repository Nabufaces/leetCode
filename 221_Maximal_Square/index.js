/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalSquare(matrix) {
  const xLen = matrix.length;
  if(!xLen) return 0;
  const yLen = matrix[0].length;
  const dp = Array.from({ length: xLen + 1 }, () => Array.from({ length: yLen + 1 }, () => 0));
  let max = 0;
  for(let i = 1; i <= xLen; i++) {
      for(let j = 1; j <= yLen; j++) {
          if(matrix[i - 1][j - 1] == 1) {
              dp[i][j] = Math.min(...[dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]]) + 1;
              max = Math.max(max, dp[i][j]);
          }
      }
  }
  return max * max;
};