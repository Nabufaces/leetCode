/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums) {
  const len = nums.length;
  let tag = 0;
  for(let i = 0; i < len; i++) {
    if(nums[i] !== 0) {
      nums[tag++] = nums[i];
    }
  }
  for(let i = tag; i < len; i++) {
    nums[i] = 0;
  }
  return nums;
};