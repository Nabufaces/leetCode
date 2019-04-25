function mid(pre, now, odd) {
  if(odd) {
    return (pre + now) / 2;
  } else {
    return now;
  }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
    const totalLength = nums1.length + nums2.length;
    const isOdd = !((totalLength) % 2);
    const median = parseInt(totalLength / 2);

    let i = 0, j = 0, preValue, nowValue;

    if(!nums1.length) {
      return mid(nums2[median - 1], nums2[median], isOdd);
    } else if(!nums2.length) {
      return mid(nums1[median - 1], nums1[median], isOdd);
    }

    while(i + j <= median && i < nums1.length && j < nums2.length) {
      preValue = nowValue;
      if(nums1[i] >= nums2[j]) {
        nowValue = nums1[i];
        j++;
      } else {
        nowValue = nums2[j];
        i++;
      }
    }
    console.log(preValue, nowValue, i ,j);
    if(i + j <= median) {
      preValue = nowValue;
      if(i >= nums1.length) {
        nowValue = nums2[j];
      } else if(j >= nums2.length) {
        nowValue = nums1[i];
      }
    }
    return mid(preValue, nowValue, isOdd);
};

console.log(findMedianSortedArrays([1, 3], [2]))
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [3, 4]));
console.log(findMedianSortedArrays([1], [1]));
console.log(findMedianSortedArrays([1, 2], [-1, 3]));


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function(nums1, nums2) {
  const totalLength = nums1.length + nums2.length;
  const isOdd = !((totalLength) % 2);
  const median = parseInt(totalLength / 2);
  let tempArr = [];

  let i = 0, j = 0;
  while(i + j <= median && i < nums1.length && j < nums2.length) {
    if(nums1[i] >= nums2[j]) {
      tempArr.push(nums2[j++]);
    } else {
      tempArr.push(nums1[i++]);
    }
  }
  if(i >= nums1.length) {
    tempArr = [...tempArr, ...nums2.slice(j)];
  } else if(j >= nums2.length) {
    tempArr = [...tempArr, ...nums1.slice(i)];
  }
  if(isOdd) {
    return (tempArr[median] + tempArr[median - 1]) / 2;
  } else {
    return tempArr[median];
  }
};