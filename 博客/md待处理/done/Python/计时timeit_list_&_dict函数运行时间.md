
---
 title: Python | 计时timeit | list & dict函数运行时间
 date: 
 updated: 
 categories:
 - Python
 tags:
 - Python
 - time
---
>timeit及时介绍
<!--less-->
﻿
# timeit
导入：
```python
import timeit
from timeit import Timer
```
首先用`timeit`生成`Timer`，接着使用`timeit`运行一定次数计算运行时间，默认是`1,000,000`次。
下面主要用示例阐述用法并探讨相关知识

## List
### e.g. list添加元素
四种不同添加列表元素的函数：
```python
def test1():
    l = []
    for i in range(1000):
        l = l + [i]
    
def test2():
    l = []
    for i in range(1000):
        l.append(i)
        
def test3():
    l = [i for i in range(1000)]
    
def test4():
    l = list(range(1000))
```
测试：

```python
# Import the timeit module
import timeit
# Import the Timer class defined in the module
from timeit import Timer
t1 = Timer("test1()", "from __main__ import test1")
print("concat ",t1.timeit(number=1000), "milliseconds")
t2 = Timer("test2()", "from __main__ import test2")
print("append ",t2.timeit(number=1000), "milliseconds")
t3 = Timer("test3()", "from __main__ import test3")
print("comprehension ",t3.timeit(number=1000), "milliseconds")
t4 = Timer("test4()", "from __main__ import test4")
print("list range ",t4.timeit(number=1000), "milliseconds")
```
	concat  1.4748585770425304 milliseconds
	append  0.1122710378275904 milliseconds
	comprehension  0.040977414993478956 milliseconds
	list range  0.019563864672232922 milliseconds

在这种情况下，`from __main__ import test1` 导入函数 `test1`到` __main__` 这个`timeit`为计时实验设置的命名空间中，使其在一个不受任何干扰的环境中运行定时测试，避免一些杂散变量可能的干扰。

在列表中，使用`append`时间复杂度是`O(1)`，而`concatenation`即`+`是`O(k)`，这里的`k`取决于列表长度，因为复杂度较高。
这里发现生成一个列表较快的方法是`list`和`range`的组合。

### e.g. list pop
比较`pop`函数删除最后一个元素和第一个元素的运行时间：

```python
import timeit
from timeit import Timer

pop_zero = Timer("x.pop(0)","from __main__ import x")
pop_end = Timer("x.pop()","from __main__ import x")
x = list(range(2000000))
pop_zero.timeit(number=1000)
x = list(range(2000000))
pop_end.timeit(number=1000)
```
	0.6293361714067487

	0.000100010683581786

### List operators' big-O efficiency
| Operation         | Big-O  Efficiency |
| :----------------- | :---------------: |
| indexx[]          |       O(1)        |
| index  assignment |       O(1)        |
| append            |       O(1)        |
| pop()             |       O(1)        |
| pop(i)            |       O(n)        |
| insert(i,item)    |       O(n)        |
| del  operator     |       O(n)        |
| iteration         |       O(n)        |
| contains  (in)    |       O(n)        |
| get  slice [x:y]  |       O(k)        |
| del  slice        |       O(n)        |
| set  slice        |      O(n+k)       |
| reverse           |       O(n)        |
| concatenate       |       O(k)        |


## Dictionaries
### Dictionary operators' big-O efficiency
| Operation      | Big-O  Efficiency |
| :-------------- | :---------------: |
| copy           |       O(n)        |
| get  item      |       O(1)        |
| set  item      |       O(1)        |
| delete  item   |       O(1)        |
| contains  (in) |       O(1)        |
| iteration      |       O(n)        |

### e.g. Comparison: in (list & dict)
首先申明结论：`contains`函数即`in`在`list`的时间复杂度是`O(n)`，在`dict`中是`O(1)`

```python
import timeit
import random
print("\t in(list)   in(dict)")
for i in range(10000,500001,20000):
    t = timeit.Timer("random.randrange(%d) in x"%i,"from __main__ import random,x")
    x = list(range(i))
    lst_time = t.timeit(number=1000)
    x = {j:None for j in range(i)}
    d_time = t.timeit(number=1000)
    print("%d,%10.3f,%10.3f" % (i, lst_time, d_time))
```
			  in(list)   in(dict)
	10000,     0.087,     0.001
	30000,     0.247,     0.001
	50000,     0.412,     0.001
	70000,     0.600,     0.002
	90000,     0.719,     0.003
	110000,     0.893,     0.002
	130000,     1.379,     0.001
	150000,     1.500,     0.004
	170000,     1.558,     0.002
	190000,     1.577,     0.001
	210000,     1.746,     0.001
	230000,     1.904,     0.001
	250000,     1.983,     0.002
	270000,     2.285,     0.002
	290000,     2.531,     0.001
	310000,     2.602,     0.002
	330000,     2.643,     0.001
	350000,     2.858,     0.001
	370000,     3.001,     0.002
	390000,     3.120,     0.002
	410000,     3.416,     0.002
	430000,     3.859,     0.001
	450000,     3.904,     0.001
	470000,     3.977,     0.001
	490000,     4.139,     0.002
