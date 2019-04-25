function help(x, n) {
    if(n === 0) return 1;
    if(n === 1) return x;
    const res = help(x, parseInt(n / 2));
    return res * res * (n & 1 ? x : 1);
}

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    const res = help(x, n);
    return n < 0 ? 1 / res : res;
};