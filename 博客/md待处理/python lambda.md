@[TOC](python | lambda)
# 介绍
匿名函数lambda：是指一类无需定义标识符（函数名）的函数或子程序。简而言之，就是一行没有名字的函数。
因此适合简单的逻辑。

**语法：**
`lambda [arg1 [,arg2,.....argn]]:expression`

**参数：**
	arg: 可以有多个，用逗号隔开
	expression: 

lambda返回值是一个函数的地址，也就是函数对象。

比如：
|                          | 输入       | 输出 |
| :------------------------ | ---------- | ---- |
| lambda x, y: x*y         | x y        | x*y  |
| lambda:None              | 无         | None |
| lambda *args:  sum(args) | 任意个数   | 和   |
| lambda **kwargs: 1       | 任意键值对 | 1    |

# 例子

```python
my_function = lambda a, b, c : a + b
my_function(1, 2, 3)
```

    3

还可以配合Python内置函数使用，比如：
**filter:**
此时lambda函数用于指定过滤列表元素的条件。
```python
list(filter(lambda x: x%2,range(10)))
```
	[1, 3, 5, 7, 9]
	
**sorted:**
 此时lambda函数用于指定对列表中所有元素进行排序的准则。
```python
sorted([1, 2, 3, 4, 5, 6, 7, 8, 9], key=lambda x: abs(5-x))
```
	[5, 4, 6, 3, 7, 2, 8, 1, 9]
	
**map:**
此时lambda函数用于指定对列表中每一个元素的共同操作。
```python
map(lambda x: x+1, [1, 2,3])
```
	[2, 3, 4]

**reduce:**
此时lambda函数用于指定列表中两两相邻元素的结合条件。
```python
from functools import reduce
reduce(lambda a, b: '{}, {}'.format(a, b), [1, 2, 3, 4, 5, 6, 7, 8, 9])
```
	'1, 2, 3, 4, 5, 6, 7, 8, 9'

