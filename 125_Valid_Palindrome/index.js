function isNumOrLetter(s) {
  const n = s.charCodeAt();
  if((n >= 48 && n <= 57) || (n >= 97 && n <= 123)) return true;
  else return false;
}

/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    s = s.toLowerCase();
    let l = 0, r = s.length - 1;
    while(l < r) {
      if(!isNumOrLetter(s[l])) l++;
      else if(!isNumOrLetter(s[r])) r--;
      else if(s[l] === s[r]) {
        l++;
        r--;
      } else return false;
    }
    return true;
};

/**
 * TestCase
console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
console.log(isPalindrome('race a car')); // false
 */