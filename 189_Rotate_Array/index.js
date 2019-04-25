function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

function reverse(nums, start, end = nums.length - 1) {
    while(start < end) {
        swap(nums, start++, end--);
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    k = k % nums.length;
    nums.reverse();
    reverse(nums, 0, k - 1);
    reverse(nums, k);
};

/**
 * TestCase
const arr = [1,2,3,4,5,6,7];
rotate(arr, 3);
console.log(arr); // [5,6,7,1,2,3,4]
 */