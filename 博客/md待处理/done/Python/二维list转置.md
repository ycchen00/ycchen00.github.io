
---
 title: Python | 二维list转置
 date: 
 updated: 
 categories:
 - Python
 tags:
 - Python
 - list
 - 列表
---
>python 二位列表转置方法记录
<!--less-->
﻿在某些情况下，需要对二维list转置的时候，不能用`numpy`大法，也没有直接转置的函数。感谢[博客](https://blog.csdn.net/chichu261/article/details/102847030) 确定如下方法 :)
```python
a = [[1, 2, 3],[4, 5, 6]]
b = tuple(zip(*a))
c = list(zip(*a))
d = list(map(list, zip(*a)))
print(b)  # ((1, 4), (2, 5), (3, 6))
print(c)  # [(1, 4), (2, 5), (3, 6)]
print(d)  # [[1, 4], [2, 5], [3, 6]]
```
