/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for(let i = 0; i < nums.length; i++) {
      if(i > 0 && nums[i] === nums[i -1]) {
          continue;
      }
      let low = i + 1, high = nums.length - 1;
      const target = nums[i] * -1;
      while(low < high) {
          if(nums[low] + nums[high] === target) {
              result.push([-target, nums[low], nums[high]]);
              // skip duplicates
              while(low < high && nums[low] === nums[low + 1]) {
                  low++;
              }
              while(low < high && nums[high] === nums[high - 1]) {
                  high--;
              }
              low++;
              high--;
          } else if(nums[low] + nums[high] > target) {
              high--;
          } else {
              low++;
          }
      }
  }
  return result;
};