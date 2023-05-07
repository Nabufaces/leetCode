/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const map = {};
  let oddCount = 0;
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    if (map[s[i]] % 2 === 1) {
      oddCount++;
    } else {
      oddCount--;
    }
  }
  if (oddCount) {
    return s.length - oddCount + 1;
  }
  return s.length;
};
