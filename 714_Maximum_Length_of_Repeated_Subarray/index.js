/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = function(A, B) {
    let max = 0;
    for(let offset = -B.length + 1; offset < A.length; offset++) {
      let tempMax = 0;
      for(let i = Math.max(0, offset); i < A.length && i - offset < B.length; i++) {
        if(A[i] === B[i - offset]) {
          max = Math.max(max, ++tempMax);
        } else {
          tempMax = 0;
        }
      }
    }
    
    return max;
};

console.log(findLength([1,2,3,2,1], [3,2,1,4,7]))