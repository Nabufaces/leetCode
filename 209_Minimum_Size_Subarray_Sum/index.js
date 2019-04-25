/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
function minSubArrayLen(s, nums) {
    let min = Infinity, sum = 0, left = 0, right = 0;
    while(left < nums.length) {
        if(right < nums.length && sum < s) {
            sum += nums[right++];
        } else {
            sum -= nums[left++];
        }
        if(sum >= s) {
            min = Math.min(min, right - left);
        }
    }
    return min === Infinity ? 0 : min;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))