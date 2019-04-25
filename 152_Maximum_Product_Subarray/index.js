/**
 * @param {number[]} nums
 * @return {number}
 */
function maxProduct(nums) {
  let prevMin = nums[0], prevMax = nums[0], max = nums[0];
  let tempMin = prevMin, tempMax = prevMax;
  
  for(let i = 1; i < nums.length; i++) {
      tempMin = prevMin;
      tempMax = prevMax;
      prevMin = Math.min(nums[i], Math.min(nums[i] * tempMin, nums[i] * tempMax));
      prevMax = Math.max(nums[i], Math.max(nums[i] * tempMin, nums[i] * tempMax));
      max = Math.max(max, prevMax);
  }

  return max;
};

/**
 * TestCase
 * console.log(maxProduct([2,3,-2,4])) //6
 */