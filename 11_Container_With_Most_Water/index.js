/**
 * @param {number[]} arr
 * @return {number}
 */
const maxArea = function(arr) {
    let max = 0, left = 0, right = arr.length - 1;
    while(left < right) {
      max = Math.max(max, Math.min(arr[left], arr[right]) * (right - left));
      if(arr[left] > arr[right]) {
        right--;
      } else {
        left++;
      }
    }
    return max;
};