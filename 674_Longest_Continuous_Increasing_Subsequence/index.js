/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function(nums) {
    if(!nums.length) return 0;
    let result = 0, tempResult = 0;
    for(let i = 1; i < nums.length; i++) {
      if(nums[i] > nums[i-1]) {
        tempResult++;
        result = Math.max(result, tempResult);
      } else {
        tempResult = 0;
      }
    }
    return result + 1;
};