/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i = 0;
    for(let j = 1; j < nums.length; j++) {
        if(nums[i] !== nums[j]) {
            nums[++i] = nums[j];
        }
    }
    return i + 1;
};