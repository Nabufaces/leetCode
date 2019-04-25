/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    const result = [];
    if(!matrix.length) return result;

    function circlePrint(start, xEnd, yEnd) {
        if(start > xEnd || start > yEnd) return;
        for(let j = start; j <= yEnd; j++) {
            result.push(matrix[start][j]);
        }
        for(let i = start + 1; i <= xEnd; i++) {
            result.push(matrix[i][yEnd]);
        }
        // 防止单行或者单列的时候重复添加
        if(start < xEnd && start < yEnd) {
            for(let j = yEnd - 1; j > start; j--) {
                result.push(matrix[xEnd][j]);
            }
            for(let i = xEnd; i >= start + 1; i--) {
                result.push(matrix[i][start]);
            }
        }
        circlePrint(++start, xEnd - 1, yEnd - 1);
    }

    circlePrint(0, matrix.length - 1, matrix[0].length - 1);
    return result;
};

/**
 * TestCase
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
])); // [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(spiralOrder([[7],[9],[6]])); // [7,9,6]
 */