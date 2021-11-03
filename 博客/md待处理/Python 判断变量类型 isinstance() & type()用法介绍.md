@[TOC](Python | 判断变量类型)
# isinstance() & type()
直接上代码
```python
l = list('123')
print(l)
type(l)
type(l).__name__
type(l).__name__=='list'
isinstance(l,list)
isinstance('a',list)
# 是元组中的一个返回 True
isinstance (l,(str,int,list))    
```

    ['1', '2', '3']
    list
    'list'
    True
    True
    False
    True


## 注意
P.S. Python中原来所有的对象名都是可以赋值的，这样使用`isinstance()`就会报错`TypeError: isinstance() arg 2 must be a type or tuple of types` 遇到这个问题的时候最好检查下相关对象名是否不小心赋值了


```python
str = 1234
# int = "1234"
isinstance ("1234",str)   
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-14-d4520abc1774> in <module>
          1 str = 1234
          2 # int = "1234"
    ----> 3 isinstance ("1234",str)
    

    TypeError: isinstance() arg 2 must be a type or tuple of types


