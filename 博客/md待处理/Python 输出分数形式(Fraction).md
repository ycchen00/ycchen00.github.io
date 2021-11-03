`缘由:`
用python做除法运算默认只能得到小数形式，有时候想输出成分数形式。

`方法:`
用`Fraction`函数即可:
@[TOC](Fraction | 输出分数形式)
# Fraction
`Fraction`函数是python中实现分数的一个模块，通过`pip install Fraction`安装相应包。
## 入门教程
分数作为`Fraction`类存在：
```python
>>> from fractions import Fraction
>>> f = Fraction(2,3)
>>> f
Fraction(2, 3)
```
`Fraction`会自动约分：
```python
>>> Fraction(4,6)
Fraction(2, 3)
```
可以直接接收分数字符串变成输入：
```python
>>> Fraction('2/3')
Fraction(2, 3)
```

运算中如果出现`float`数据类型，最终的结果将是`float`类。如果运算式中只有`integer`类和`Fraction`类，输出结果将是`Fraction`类：

```python
>>> Fraction(2,3)+Fraction(3,4)+1
Fraction(29, 12)
>>> Fraction(2,3)+Fraction(3,4)+1.1
2.5166666666666666
```
直接把输入小数变成分数：

```python
>>> Fraction(0.5)
Fraction(1, 2)
>>> from decimal import Decimal
>>> Fraction(Decimal('0.5'))
Fraction(1, 2)
```

