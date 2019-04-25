/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    const xLen = obstacleGrid.length;
    if(!xLen || obstacleGrid[0][0] === 1) return 0;
    const yLen = obstacleGrid[0].length;
    const dp = Array.from({ length: xLen }, () => Array.from({ length: yLen }, () => 0));

    dp[0][0] = 1;
    for(let j = 1; j < yLen; j++) {
        if(obstacleGrid[0][j] === 1) dp[0][j] = 0;
        else dp[0][j] = dp[0][j - 1];
    }
    for(let i = 1; i < xLen; i++) {
        if(obstacleGrid[i][0] === 1) dp[i][0] = 0;
        else dp[i][0] = dp[i - 1][0];
    }

    for(let i = 1; i < xLen; i++) {
        for(let j = 1; j < yLen; j++) {
            if(obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[xLen - 1][yLen - 1];
};

/**
 * TestCase
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0],])) // 2
console.log(uniquePathsWithObstacles([[0,0],[1,1],[0,0]])); // 0
console.log(uniquePathsWithObstacles([[1,0]])); // 0
 */