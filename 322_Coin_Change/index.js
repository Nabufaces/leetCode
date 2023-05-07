/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
  const dp = Array.from({ length: amount + 1 }, () => amount + 1);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    coins.forEach(coin => {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    });
  }
  if (dp[amount] > amount) return -1;
  else return dp[amount];
};
