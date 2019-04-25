/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    let low = 0, high = nums.length - 1;
    if(target <= nums[low]) return 0;
    if(target > nums[high]) return nums.length;
    while(low < high) {
      const mid = Math.floor((low + high) / 2);
      if(nums[mid] === target) {
        return mid;
      } else if(nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    return nums[low] >= target ? low : low + 1;
};

/**
 * TestCase
console.log(searchInsert([1,3,5,6], 5)); // 2
console.log(searchInsert([1,3,5,6], 2)); // 1
console.log(searchInsert([1,3,5,6], 0)); // 0
console.log(searchInsert([1,3], 2)); // 1
console.log(searchInsert([1,3], 3)); // 1
 */