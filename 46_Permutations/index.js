function swap(arr, i, j) {
    if(i !== j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

/**
 * @param {number[]} arr
 * @return {number[][]}
 */
const permute = function(arr) {
    const len = arr.length, output = [];

    function backTrack(arr, first = 0) {
        if(first === len - 1) {
            output.push([...arr]);
        }
        for(let i = first; i < len; i++) {
            swap(arr, first, i);
            backTrack(arr, first + 1);
            swap(arr, first, i);
        }
    }

    backTrack(arr);
    return output;
};
