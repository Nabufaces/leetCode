/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    const result = [], len = candidates.length;

    function dfs(remain, tempArr, start) {
        if(remain === 0) {
            result.push(tempArr.slice());
        } else if(remain < 0) {
            return;
        }

        for(let i = start; i < len; i++) {
            // 在每次要进行深度递归时候, 如果元素和之前的元素相等, 则不进行深度搜索.
            if (i !== start && candidates[i] === candidates[i - 1]) {
                continue;
            };
            tempArr.push(candidates[i]);
            dfs(remain - candidates[i], tempArr, i + 1);
            tempArr.pop();
        }
    }
    dfs(target, [], 0);
    return result;
};