/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function(cost) {
  const len = cost.length;
  const dp = [cost[0], cost[1]];
  for (let i = 2; i < len; i++) {
    dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
  }
  return Math.min(dp[len - 1], dp[len - 2]);
};