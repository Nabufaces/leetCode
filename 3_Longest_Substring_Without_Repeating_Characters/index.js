/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(str) {
    const len = str.length, map = new Map();
    let maxLen = 0;

    for(let i = 0, j = 0; j < len; j++) {
      const v = str.charAt(j);
      if(map.has(v)) {
        i = Math.max(map.get(v), i);
      }
      maxLen = Math.max(maxLen, j - i + 1);
      map.set(v, j + 1);
    }
    return maxLen;
};