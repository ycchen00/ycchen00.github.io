
@[TOC](python | Class类（以Fraction为例）)
# Class
## __init__()

```python
class Fraction:
    def __init__(self,top,bottom):
        self.num = top
        self.den = bottom
```

## print
### show()

```python
def show(self):
	print(self.num, "/", self.den)
```

### __str__()

```python
def __str__(self):
	return str(self.num) + "/" + str(self.den)
```

## __eq__

```python
def __eq__(self, other):
	first_num = self.num * other.den
	second_num = other.num * self.den
	return first_num == second_num
```

## __add__
需要加入计算最大公约数的函数`gcd`:

```python
# gcd function
def gcd(m, n):
    while m % n != 0:
        old_m = m
        old_n = n
        m = old_n
        n = old_m % old_n
    return n 
```
然后重载`__add__`函数
```python
def __add__(self, other_fraction):
	new_num = self.num * other_fraction.den + self.den * other_fraction.num
	new_den = self.den * other_fraction.den
	common = gcd(new_num, new_den)
	return Fraction(new_num // common, new_den // common)
```

## 测试用例

```python
my_f = Fraction(3, 5)
print(my_f)
print("I ate", my_f, "of the pizza")
my_f.__str__()
str(my_f)
my_f
```
	3/5
	I ate 3/5 of the pizza
	
	'3/5'
	
	'3/5'
	
	<__main__.Fraction at 0x14e1e10>

```python
x = Fraction(1, 2)
y = Fraction(2, 3)

print(x + y)
print(x == y)
```
	7/6
	False
# 总代码

```python
# gcd function
def gcd(m, n):
    while m % n != 0:
        old_m = m
        old_n = n
        m = old_n
        n = old_m % old_n
    return n 

# Fraction class
# Implements: addition and equality
# To do: multiplication, division, subtraction and comparison operators (< , >)
class Fraction:
    def __init__(self,top,bottom):
        self.num = top
        self.den = bottom
        
    def show(self):
        print(self.num, "/", self.den)
        
    def __str__ (self):
        return str(self.num) + "/" + str(self.den)
    
    def __eq__(self, other):
        first_num = self.num * other.den
        second_num = other.num * self.den
        return first_num == second_num
    
#     def __gt__(self, other_fraction):
#     def __ge__(self, other_fraction):
#     def __lt__(self, other_fraction):
#     def __le__(self, other_fraction):
#     def __ne__(self, other_fraction):
    
    def __add__(self, other_fraction):
        new_num = self.num * other_fraction.den + self.den * other_fraction.num
        new_den = self.den * other_fraction.den
        common = gcd(new_num, new_den)
        return Fraction(new_num // common, new_den // common)
    
#     def __sub__(self, other_fraction):
#     def __mul__(self, other_fraction):
#     def __truediv__(self, other_fraction):    
#     def __radd__(self, other_fraction):
#     def __repr__(self, other_fraction):
```

