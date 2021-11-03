
---
 title: Python | 报错函数try except & raise
 date: 
 updated: 
 categories:
 - Python
 tags:
 - Python
 - 报错
 - raise
 - try except
---
>python报错函数try except/ raise等用法介绍
<!--less-->
# python 报错函数
在自己写代码的时候，有时候会遇到error的情况，比如：

```python
>>> a_number = int(input("Please enter an integer "))
Please enter an integer -23
>>> print(math.sqrt(a_number))

Traceback (most recent call last):
	File "<pyshell#102>", line 1, in <module>
		print(math.sqrt(a_number))
ValueError: math domain error
```
有时候自己清楚哪里有可能有问题，想设计自己的报错函数
介绍下两个函数`try except`和`raise`
## try except
`try except`是先`try`一段代码，如果这段有error则运行`except`的代码
上代码~
```python
>>> try:
	print(math.sqrt(a_number))
except:
	print("Bad Value for square root")
	print("Using absolute value instead")
	print(math.sqrt(abs(a_number)))
	
Bad Value for square root
Using absolute value instead
4.795831523312719
```

## raise
`raise`不同`try except`的地方在于是会停止运行，并报出错误
上代码~

```python
>>> if a_number < 0:
... 	raise ValueError("You can't use a negative number")
... else:
... 	print(math.sqrt(a_number))
...

Traceback (most recent call last):
	File "<pyshell#20>", line 2, in <module>
		raise ValueError("You can't use a negative number")
ValueError: You can't use a negative number
```

这里的`ValueError`也可以改成`RuntimError`等，有很多选择~

