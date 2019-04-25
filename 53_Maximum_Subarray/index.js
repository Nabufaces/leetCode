/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    const len = nums.length, dp = new Array(len);
    let max = nums[0];
    dp[0] = nums[0];
    for(let i = 1; i < len; i++) {
        dp[i] = dp[i - 1] > 0 ? dp[i - 1] + nums[i] : nums[i];
        max = Math.max(max, dp[i]);
    }
    return max;
};