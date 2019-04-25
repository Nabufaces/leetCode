/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {
  const count = (new Array(26)).fill(0);
  for(let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
  }
  for(let i = 0; i < s.length; i++) {
    if(count[s.charCodeAt(i) - 97] === 1) return i;
  }
  return -1;
};