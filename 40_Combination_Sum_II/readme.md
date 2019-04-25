Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

Each number in candidates may only be used once in the combination.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.

#### Example 1:
```
Input: candidates = [10,1,2,7,6,1,5], target = 8,
A solution set is:
[
  [1, 7],
  [1, 2, 5],
  [2, 6],
  [1, 1, 6]
]
```

#### Example 2:
```
Input: candidates = [2,5,2,1,2], target = 5,
A solution set is:
[
  [1,2,2],
  [5]
]
```

#### Solution:
深度优先搜索法

解题思路:

假设我们的数组为: [10,1,2,7,6,1,5]. 那么经过排序后, 数组变为[1,1,2,5,6,7,10]. target = 8.
当进行深度所有时候, 问题就转变为:
[1] + [1,2,5,6,7,10], target=7
[2] + [1,1,5,6,7,10], target=6
......
这里有一个问题在于: 如何去重; 比如因为有两个1, 所以可能出现两个[1, 7].

解决方案两种: 
1) 每次写入result情况下判断是否已经存在. 
2) 在每次要进行深度递归时候, 如果元素和之前的元素相等, 则不进行深度搜索.
