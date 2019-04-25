Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

#### Example:
```
Input: [1,8,6,2,5,4,8,3,7]
Output: 49
```

#### Solution:
```
区域面积总是受到较短线高度的限制，同事线越远，所得的面积就越大。

我们取两个指针，一个在开头，一个在数组末尾，构成行的长度。 此外，我们维持一个变量max来存储到目前为止获得的最大面积。 
在每一步，我们计算它们之间形成的区域，更新max，并将指向较短线的指针向另一端移动一步。
```