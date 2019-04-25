/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function(grid) {
  const rowLen = grid.length - 1, colLen = grid[0].length - 1;
  for(let i = 0; i <= rowLen; i++) {
    for(let j = 0; j <= colLen; j++) {
      if(!i && !j) {
        continue;
      } else if(!i) {
        grid[i][j] += grid[i][j - 1];
      } else if(!j) {
        grid[i][j] += grid[i-1][j];
      } else {
        grid[i][j] += Math.min(grid[i][j-1], grid[i-1][j]);
      }
    }
  }
  return grid[rowLen][colLen];
};