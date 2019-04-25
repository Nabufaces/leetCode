/**
 * @param {number[][]} M
 * @return {number}
 */
function findCircleNum(M) {
    const len = M.length;
    if(!len) return 0;
    const visited = Array.from({ length: len }, () => false);
    let count = 0;

    function DFS(i) {
        visited[i] = true;
        for(let j = 0; j < len; j++) {
            if(!visited[j] && M[i][j] === 1) {
                DFS(j);
            }
        }
    }
    
    for(let i = 0; i < len; i++) {
       if(!visited[i]) {
            count++;
           DFS(i);
       }
    }

    return count;
};