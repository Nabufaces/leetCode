/**
 * @param {number[][]} triangle
 * @return {number}
 */
function minimumTotal(triangle) {
    const xLen = triangle.length;
    if(!xLen) return 0;
    const dp = triangle[xLen - 1];
    for(let i = xLen - 2; i >= 0; i--) {
        for(let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    return dp[0];
};