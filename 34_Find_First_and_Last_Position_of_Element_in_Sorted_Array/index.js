/**
 * 
 * @param {number[]} nums 
 * @param {number} target 
 * @param {boolean} isLeft  
 * @return {number}
 */
function searchHelper(nums, target, isLeft) {
  let low = 0, high = nums.length;
  while(low < high) {
    const mid = Math.floor((low + high) / 2);
    if(target < nums[mid] || (isLeft && target === nums[mid])) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {
  const result = [-1, -1];
  const leftIndex = searchHelper(nums, target, true);
  if(leftIndex === nums.length || nums[leftIndex] !== target) return result;
  const rightIndex = searchHelper(nums, target, false) - 1;
  return [leftIndex, rightIndex];
};

/**
 * TestCase
console.log(searchRange([5,7,7,8,8,10], 8)); // [3, 4]
console.log(searchRange([1, 1, 3], 1)); // [0, 1]
console.log(searchRange([0, 1, 3], 1)); // [1, 1]
console.log(searchRange([0, 1, 3], 5)); // [-1, -1]
console.log(searchRange([1], 1)); // [0, 0]
 */
