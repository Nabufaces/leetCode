const quickSort1 = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = [], right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= arr[mid]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort1(left), arr[mid], ...quickSort1(right)];
}

const partition = (arr, left, right) => {
  const pivot = arr[left];
  let low = left, high = right;
  while (low < high) {
    while(low < high && arr[high] >= pivot) {
      high--;
    }
    arr[low] = arr[high];

    while(low < high && arr[low] <= pivot) {
      low++;
    }
    arr[high] = arr[low];
  }
  arr[low] = pivot;
  return low;
}

const quickSort2 = (arr, left = 0, right = arr.length - 1) => {
  if (left >= right) return arr;

  const pivotIndex = partition(arr, left, right);
  quickSort2(arr, left, pivotIndex - 1);
  quickSort2(arr, pivotIndex + 1, right);

  return arr;
}

console.log(quickSort2([5,2,3,1]));
