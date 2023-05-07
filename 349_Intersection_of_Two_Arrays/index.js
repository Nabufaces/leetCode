/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
function intersection(nums1, nums2) {
  const set1 = new Set(nums1), set2 = new Set(nums2);
  const result = [];
  
  set1.forEach(v => {
    if (set2.has(v)) {
      result.push(v);
    }
  });
  return result;
};