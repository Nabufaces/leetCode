/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function(nums) {
  let sum = nums.reduce((acc, cur) => acc + cur);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
