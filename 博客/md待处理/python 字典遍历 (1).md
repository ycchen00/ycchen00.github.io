@[TOC](python | 字典遍历)

直接上例子：
```python
stus = {
    # key: value
    'a':1,
    'b':2,
    'c':3
}
```

# 遍历key


```python
for key in stus:
    print (key)
```

    a
    b
    c
    


```python
for key in stus.keys():
    print (key)
```

    a
    b
    c
    

# 遍历value


```python
for value in stus.values():
    print (value)
```

    1
    2
    3
    

# 遍历key和value


```python
for key,value in stus.items():
    print ('key: ',key,'value: ',value)
```

    key:  a value:  1
    key:  b value:  2
    key:  c value:  3
    


```python
for kv in stus.items():
    print ('kv is : ',kv)
```

    kv is :  ('a', 1)
    kv is :  ('b', 2)
    kv is :  ('c', 3)
    

结合zip使用


```python
for key,value in zip(stus.keys(), stus.values()):
    print ('key:',key,'value: ',value)
print('\ntype key:',type(key),'type value:',type(value))
```

    key: a value:  1
    key: b value:  2
    key: c value:  3
    
    type key: <class 'str'> type value: <class 'int'>
    


```python
for kv in zip(stus.keys(), stus.values()):
    print ('kv: ',kv)
print('\ngtype:',type(kv))
```

    kv:  ('a', 1)
    kv:  ('b', 2)
    kv:  ('c', 3)
    
    gtype: <class 'tuple'>
    

## 定义方法读取key和value


```python
def keys_function(dic):
    keys = []
    for k in dic.keys():
        keys.append(format(k))
    return keys

def values_function(dic):
    values = []
    for v in dic.values():
        values.append(format(v))
    return values
```


```python
print('key:',keys_function(stus),'value:',values_function(stus))
```

    key: ['a', 'b', 'c'] value: ['1', '2', '3']
    
其实可以直接强制转换~~

```python
print('key:',list(stus.keys()),'value:',list(stus.values()))
```

    key: ['a', 'b', 'c'] value: [1, 2, 3]
    

