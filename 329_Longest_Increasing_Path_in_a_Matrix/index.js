/**
 * @param {number[][]} matrix
 * @return {number}
 */
function longestIncreasingPath(matrix) {
    const xLen = matrix.length;
    if(!xLen) return 0;
    const yLen = matrix[0].length;
    const dp = Array.from({ length: xLen }, () => Array.from({ length: yLen }, () => -1));
    let max = 0;

    function getPath(i, j, preVal) {
        if(i < 0 || j < 0 || i >= xLen || j >= yLen || matrix[i][j] <= preVal) return -1;
        if(dp[i][j] !== -1) return dp[i][j];

        const currVal = matrix[i][j];

        const maxPath = Math.max(...[
            getPath(i - 1, j, currVal),
            getPath(i, j + 1, currVal),
            getPath(i + 1, j, currVal),
            getPath(i, j - 1, currVal)
        ]) + 1;

        dp[i][j] = maxPath;
        return maxPath;
    }

    for(let i = 0; i < xLen; i++) {
        for(let j = 0; j < yLen; j++) {
            max = Math.max(max, getPath(i, j, -1) + 1);
        }
    }
    return max;
};