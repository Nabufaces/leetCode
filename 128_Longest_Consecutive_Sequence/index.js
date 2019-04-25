/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  const sortSet = new Set();
  let result = 0;
  nums.forEach(num => sortSet.add(num));
  sortSet.forEach(item => {
      // 剔除已经进入序列化的数
      if(!sortSet.has(item - 1)) {
          let tempResult = 1;
          while(sortSet.has(item + 1)) {
              tempResult++;
              item++;
          }
          result = Math.max(result, tempResult);
      }
  });
  return result;
};