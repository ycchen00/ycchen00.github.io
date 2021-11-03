
---
 title: Python | map
 date: 
 updated: 
 categories:
 - Python
 tags:
 - Python
 - map
---
>python map用法
<!--less-->
﻿
# 介绍
**map() 函数语法：**
`map(function, iterable, ...)`

**参数：**
    function -- 函数
    iterable -- 一个或多个序列
    
# 实例
## 单个序列

```python
def square(x) : 
	return x ** 2

map(square, [1,2,3,4,5])
```
	<map object at 0x100d3d550>

在python2中输出返回一个列表，但是在python中返回的是一个迭代器。我们可以将其强制转换为列表：

```python
list(map(square, [1,2,3,4,5]))
```
	[1, 4, 9, 16, 25]
	
结合lambda，看起来更高级：
```python
list(map(lambda x: x ** 2, [1, 2, 3, 4, 5]))
```
	[1, 4, 9, 16, 25]

再来一个例子：

```python
list(map(str,'python'))
```
	['p', 'y', 't', 'h', 'o', 'n']
	
## 多个序列
```python
store1 = [10.00, 11.00, 12.34, 2.34]
store2 = [9.00, 11.10, 12.34, 2.01]
cheapest = map(min, store1, store2)
cheapest
```
    <map at 0x2177d83a1c0>

可以看到直接输出是map对象，因此为了查看里面的值，我们遍历下：


```python
for item in cheapest:
    print(item)
```

    9.0
    11.0
    12.34
    2.01


# 参考文献
[菜鸟教程](https://www.runoob.com/python/python-func-map.html)
