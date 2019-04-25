function match(s1map, s2map) {
  return s1map.toString() === s2map.toString();
}

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function checkInclusion(s1, s2) {
  const len1 = s1.length, len2 = s2.length;
  if(len1 > len2) return false;
  const s1map = Array.from({ length: 26 }, () => 0), s2map = Array.from({ length: 26 }, () => 0);
  for(let i = 0; i < len1; i++) {
    s1map[s1.charAt(i).charCodeAt() - 97]++;
    s2map[s2.charAt(i).charCodeAt() - 97]++;
  }
  for(let i = 0; i < len2 - len1; i++) {
    if(match(s1map, s2map)) return true;
    // 移动窗口
    s2map[s2.charAt(i + len1).charCodeAt() - 97]++;
    s2map[s2.charAt(i).charCodeAt() - 97]--;
  }
  return match(s1map, s2map);
};

/**
 * testCase
console.log(checkInclusion('ab', 'eidbaoooz'));
console.log(checkInclusion('ab', 'acb'));
 */
