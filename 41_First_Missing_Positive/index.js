function swap(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function firstMissingPositive(nums) {
    const len = nums.length;
    let i = 0;
    for(i = 0; i < len; i++) {
        if(nums[i] > 0 && nums[i] < len && (nums[nums[i] - 1] !== nums[i])) {
            swap(nums, i, nums[i] - 1);
            // 回溯
            i--;
        }
    }
    for(i = 1; i <= len; i++) {
        if(nums[i - 1] !== i) return i;
    }
    return len + 1;
};

/**
 * TestCase
 * console.log(firstMissingPositive([-1,4,2,1,9,10])); // 3
 * console.log(firstMissingPositive([])); // 1
 */