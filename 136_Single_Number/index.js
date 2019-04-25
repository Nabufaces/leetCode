/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNumber(nums) {
    let r = 0;
    for(let i = 0; i < nums.length; i++) {
        r ^= nums[i];
    }
    return r;
};