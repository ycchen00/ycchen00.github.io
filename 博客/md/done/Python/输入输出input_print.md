
---
 title: Python | 输入输出input print
 date: 
 updated: 
 categories:
 - Python
 tags:
 - Python
---
>python输入输出函数介绍
<!--less-->
﻿复习，mark一下~

# 输入 input
`input`赛高，直接放代码
输入的结果都是`str`类型，如果希望输入数字，需要类型转换

```python
user_name = input("Please enter your name ")
print("Your name in all capitals is",user_name.upper(),
"and has length", len(user_name))

user_radius = input("Please enter the radius of the circle ")
radius = float(user_radius)
diameter = 2*radius
```

# 输出 print
通过代码学~
```python
>>> print("Hello")
Hello
>>> print("Hello","World")
Hello World
>>> print("Hello","World", sep=" *** ")
Hello *** World
>>> print("Hello","World", end=" *** ")
Hello World ***
>>> print("Hello", end=" *** "); print("World")
Hello *** World
```
进阶一步，使用`%`：
**String Formatting Conversion Characters**
| Character | Output  Format                                               |
| :-------: | :------------------------------------------------------------ |
|   d , i   | Integer                                                      |
|     u     | Unsigned  Integer                                            |
|     f     | Floating  point as m.ddddd                                   |
|     e     | Floating  point as m.ddddde+/-xx                             |
|     E     | Floating  point as m.dddddE+/-xx                             |
|     g     | Use %e  for exponents less than −4 or greater than +5, otherwise us %f |
|     c     | Single  character                                            |
|     s     | String, or any Python data object that can be converted to a string by using the str function |
|     %     | Insert  a literal % character                                |

```python
print(name, "is", age, "years old.")
print("%s is %d years old." % (name, age))
```
`%`再进一步：
**Additional formatting options**
| Modifier | Example  | Description                                                  |
| :------: | :-------- | :------------------------------------------------------------ |
|  number  | %20d     | Put the  value in a field width of 20                        |
|    \-    | %-20d    | Put the  value in a field 20 characters wide, left-justified |
|    +     | %+20d    | Put the  value in a field 20 characters wide, right-justified |
|    0     | %020d    | Put the  value in a field 20 characters wide, fill in with leading zeros |
|    .     | %20.2f   | Put  the value in a field 20 characters wide with 2 characters to the right of the decimal point. |
|  (name)  | %(name)d | Get the  value from the supplied dictionary using name as the key. |


```python
>>> price = 24
>>> item = "banana"
>>> print("The %s costs %d cents"%(item,price))
The banana costs 24 cents
>>> print("The %+10s costs %5.2f cents"%(item,price))
The banana costs 24.00 cents
>>> print("The %+10s costs %10.2f cents"%(item,price))
The banana costs 24.00 cents
>>> item_dict = {"item":"banana","cost":24}
>>> print("The %(item)s costs %(cost)7.1f cents"%item_dict)
The banana costs 24.0 cents
```

再进一步，`format`赛高：
直接代码例子

```python
>>> a,b,c,d = 1,2,3,4
>>> print('a:{},b:{},c:{},d:{}'.format(a,b,c,d))
a:1,b:2,c:3,d:4
```

