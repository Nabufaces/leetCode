/**
 * @param {number} x
 * @return {boolean}
 * 1221 % 10 = 1   1221 / 10 = 122
 * 122 % 10 = 2    122 / 10 = 12
 * 1 * 10 + 2 = 12
 */
function isPalindrome(x) {
    if(x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let reverseNum = 0;
    while(reverseNum < x) {
        reverseNum = reverseNum * 10 + x % 10;
        x = parseInt(x / 10);
    }
    return x === reverseNum || x === parseInt(reverseNum / 10);
};


/**
 * TestCase
console.log(isPalindrome(12221)); // true
console.log(isPalindrome(1221)); // true
console.log(isPalindrome(-10)); // false
 */