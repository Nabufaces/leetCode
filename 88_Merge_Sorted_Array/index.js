/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    let totalIndex = m + n - 1,
        l1 = m - 1,
        l2 = n - 1;
    while(l1 >= 0 && l2 >= 0) {
        if(nums1[l1] > nums2[l2]) {
            nums1[totalIndex--] = nums1[l1--];
        } else {
            nums1[totalIndex--] = nums2[l2--];
        }
    }
    while(l2 >= 0) {
        nums1[totalIndex--] = nums2[l2--];
    }
};

/**
 * TestCase
const nums1 = [1,2,3,0,0,0];
const nums2 = [0,5,6];
merge(nums1, 3, nums2, 3); // [ 0, 1, 2, 3, 5, 6 ]
console.log(nums1);
 */