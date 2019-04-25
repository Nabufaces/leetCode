function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

/**
* @param {number[]} A
* @return {number[]}
*/
function sortArrayByParity(A) {
  let left = 0, right = A.length - 1;
  while(left < right) {
      while(!(A[left] & 1) && left < right) {
          left++;
      }
      while((A[right] & 1) && left < right) {
          right--;
      }
      if(left < right) {
          swap(A, left, right);
      }
  }
  return A;
};