function fixPrefix(result, ans) {
  return ans + (result ? (' ' + result) : '');
}

/**
 * @param {string} s
 * @return {string}
 */
function reverseWords(s) {
    let result = '', ans = '';
    for(let i = 0; i < s.length; i++) {
      const v = s.charAt(i);
      if(v === ' ') {
        if(ans) {
          result = fixPrefix(result, ans);
          ans = '';
        }
      } else {
        ans += v;
      }
    }
    if(ans) result = fixPrefix(result, ans);
    return result;
};

/**
 * testCase
console.log(reverseWords('  hello world!  '));
console.log(reverseWords('the sky is blue'));
console.log(reverseWords('blue'));
 */