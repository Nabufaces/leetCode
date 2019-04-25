/**
 * @param {number[]} nums
 * @return {boolean}
 */
function increasingTriplet(nums) {
  let min = Infinity, second_min = Infinity;
  for(let i = 0; i < nums.length; i++) {
      if(nums[i] < min) min = nums[i];
      else if(nums[i] === min || nums[i] === second_min) {}
      else if(nums[i] < second_min) second_min = nums[i];
      else return true;
  }   
  return false;
};