Given a non-empty array of integers, every element appears twice except for one. Find that single one.

#### Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

#### Example 1:
```
Input: [2,2,1]
Output: 1
```

#### Example 2:
```
Input: [4,1,2,1,2]
Output: 4
```

#### Solution
异或运算法则：两位不同，结果为1，否则为0

所以有如下公式:
1. `a XOR 0 = a`
2. `a XOR a = 0`
3. `a XOR b XOR a = (a XOR a) XOR b = 0 XOR b = b`