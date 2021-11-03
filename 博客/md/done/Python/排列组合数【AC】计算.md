
---
 title: Python | 排列组合数计算
 date: 
 updated: 
 categories:
 - Python
 tags:
 - Python
---
>python 排列组合数计算方法和函数
<!--less-->
﻿`缘由:`
计算排列组合数，比如$C_n^m$、$A_n^m$等时，一筹莫展

`方法:`
`scipy`包中有`comb`和`perm`函数：


## 安装scipy
`pip install scipy`即可

## comb perm
导入：

```python
from scipy.special import comb, perm
```
排列数$A_n^m$`perm`：

```python
>>> perm(3,2)
6.0
```
组合数$C_n^m$`comb`:
```python
>>> comb(3,2)
3.0
```
