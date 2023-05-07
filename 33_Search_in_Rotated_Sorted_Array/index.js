/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 有序数组所有排列，括号是升序部分(至少一半是升序的)
 * 如果中间的数小于最右边的数，则右半段是有序的，若中间数大于最右边数，则左半段是有序的
 *  0　　1　　2　　[4　　5　　6　　7]
 *  7　　0　　1　　[2　　4　　5　　6]
 *  6　　7　　0　　[1　　2　　4　　5]
 *  5　　6　　7　　[0　　1　　2　　4]
 * [4　　5　　6　　 7] 　0　　1　　2
 * [2　　4　　5　　 6] 　7　　0　　1
 * [1　　2　　4　　 5]　 6　　7　　0
 */
function search(nums, target) {
    let low = 0, high = nums.length - 1;
    while(low <= high) {
      const mid = Math.floor((low + high) / 2);
      if(nums[mid] === target) return mid;
      else if(nums[low] === target) return low;
      else if(nums[high] === target) return high;
      else if(nums[low] > nums[mid]) { // 右半边有序
        if(nums[mid] < target && target < nums[high]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else { // 左半边有序
        if(nums[low] < target && target <nums[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
    return -1;
};

/**
 * TestCase
console.log(search([4,5,6,7,0,1,2], 6)); // 2
console.log(search([4,5,6,7,0,1,2], 3)); // -1
console.log(search([1], 1)); // 0
 */
