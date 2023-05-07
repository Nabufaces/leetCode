/**
 * @param {number[]} nums
 * @return {number[]}
 */
const runningSum = function(nums) {
  const sums = [];
  nums.forEach((num, index) => {
    if (index === 0) {
      sums.push(num);
    } else {
      sums.push(sums[index - 1] + num);
    }
  });
  return sums;
};

console.log(runningSum([1,2,3,4]));
