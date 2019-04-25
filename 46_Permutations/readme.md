Given a collection of distinct integers, return all possible permutations.

#### Example:
```
Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
```

#### Solution:
回溯算法：

1. 交换 `swap(nums[first], nums[i])`
2. 继续创建从第`i`个开始的所有排列 `backtrack(first + 1)`
3. 回溯 `swap(nums[first], nums[i])`

![image](https://haitao.nos.netease.com/fdb69cbe-82ca-4423-92d8-c683980511eb_629_345.png)