/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
    let count = 0, res = 0;
    nums.forEach(item => {
        // 本质上就是相互抵消
        // 如果和后面的数不想等,就相当于被抵消了, 所以就是count--;
        if(count === 0) {
            res = item;
            count++;
        } else {
            res === item ? count++ : count--; 
        }
    })
    return res;
};