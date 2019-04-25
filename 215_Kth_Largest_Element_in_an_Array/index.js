
function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function adjustHeap(arr, pos, headSize) {
  // 找到当前节点的左节点
  let child = pos * 2 + 1;
  while(child < headSize) {
      // 比较右节点
      if(child + 1 < headSize && arr[child] < arr[child + 1]) {
          child += 1;
      }
      if(arr[pos] < arr[child]) {
          swap(arr, pos, child);
          // 将当前节点定位到子节点上
          pos = child;
          child = pos * 2 + 1;
      } else {
          break;
      }
  }
}

function buildHeap(arr) {
  for(let i = Math.floor(arr.length / 2); i >= 0; i--) {
      adjustHeap(arr, i, arr.length);
  }
}

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 * @description 建立最大堆
 */
function findKthLargest(nums, k) {
  const len = nums.length;
  const headSize = len - k + 1;
  const heapArr = nums.slice(0, headSize);
  buildHeap(heapArr);
  for(let i = headSize; i < len; i++) {
    if(nums[i] < heapArr[0]) {
      heapArr[0] = nums[i];
      adjustHeap(heapArr, 0, headSize);
    }
  }
  return heapArr.shift();
};