/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    if(!grid.length) return 0;
    const xLen = grid.length, yLen = grid[0].length;
    let max = 0;

    function DFS(i, j) {
        if(i < 0 || j < 0 || i >= xLen || j >= yLen || grid[i][j] === 0) return 0;
        // 标记已访问过
        grid[i][j] = 0;
        // 向四周发散
        return 1 + DFS(i - 1, j) + DFS(i, j + 1) + DFS(i + 1, j) + DFS(i, j - 1);
    }

    for(let i = 0; i < xLen; i++) {
        for(let j = 0; j< yLen; j++) {
            if(grid[i][j] === 1) {
                max = Math.max(DFS(i, j), max);
            }
        }
    }
    return max;
};