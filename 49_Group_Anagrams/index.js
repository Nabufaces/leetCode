/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    const countMap = new Map(), output = [];
    const countBaseArr = Array.from(new Array(26), () => 0);

    for(let i = 0; i < strs.length; i++) {
        let countStr = [...countBaseArr];
        const str = strs[i];
        for(let j = 0; j < str.length; j++) {
            countStr[str.charAt(j).charCodeAt() - 97] += 1;
        }
        countStr = countStr.join('');
        if(countMap.get(countStr) !== undefined) {
            output[countMap.get(countStr)].push(str);
        } else {
            countMap.set(countStr, output.length);
            output.push([str]);
        }
    }
    return output;
};
