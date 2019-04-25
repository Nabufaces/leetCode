/**
 * @param {character[][]} grid
 * @return {number}
 */
function numIslands(grid) {
    const xLen = grid.length;
    if(!xLen) return 0;
    const yLen = grid[0].length;
    let count = 0;

    function DFS(i, j) {
        if(i < 0 || j < 0 || i >= xLen || j >= yLen || grid[i][j] === '0') return;
        grid[i][j] = '0';
        DFS(i - 1, j);
        DFS(i, j + 1);
        DFS(i + 1, j);
        DFS(i, j - 1);
    }

    for(let i = 0; i < xLen; i++) {
        for(let j = 0; j < yLen; j++) {
            if(grid[i][j] === '1') {
                count++;
                DFS(i, j);
            }
        }
    }
    return count;
};