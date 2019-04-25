/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let left = 0, right = height.length - 1;
    let ans = 0;
    let left_max = 0, right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if(height[left] >= left_max) left_max = height[left];
            else ans += (left_max - height[left]);
            left++;
        }
        else {
            if(height[right] >= right_max) right_max = height[right];
            else ans += (right_max - height[right]);
            right--;
        }
    }
    return ans;
};