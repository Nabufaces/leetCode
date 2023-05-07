/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const permute = function(arr) {
  const len = arr.length, output = [];

  function backTrace(tempList) {
    if (tempList.length === len) {
      output.push([...tempList]);
      return;
    }
    for (let i = 0; i < len; i++) {
      if (tempList.includes(arr[i])) continue;
      tempList.push(arr[i]);
      backTrace(tempList);
      tempList.pop();
    }
  }
  backTrace([]);

  return output;
};