@[TOC](python | tqdm介绍与入门)

# tqdm
这里介绍下一个酷炫的python神器
当你在跑循环却不知道跑到哪了，用`print(i)`又觉得索然无味的时候，tqdm可以很好解决问题。e.g.
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209141907462.png#pic_center)
## 安装
[Github tqdm](https://github.com/tqdm/tqdm#manual)看详细介绍
或者`pip install tqdm`

## 入门教程
官网说明tqdm主要有3个用法，Iterable-based, Manual 和 Module，这里简单介绍下Iterable-based的，其他可以查看[官网](https://github.com/tqdm/tqdm#manual)

### Iterable-based
```python
from tqdm import tqdm
from time import sleep

text = ""
for char in tqdm(["a", "b", "c", "d"]):
    sleep(0.25)
    text = text + char
```

    100%|█████████████████████████████████████████████████████| 4/4 [00:01<00:00,  3.89it/s]
    

`trange(i)` 是 `tqdm(range(i))`的缩写:


```python
from tqdm import trange

for i in trange(100):
    sleep(0.01)
```

    100%|█████████████████████████████████████████████████| 100/100 [00:01<00:00, 85.03it/s]
    
也可以在循环外设置手动控制:


```python
pbar = tqdm(["a", "b", "c", "d"])
for char in pbar:
    sleep(0.25)
    pbar.set_description("Processing %s" % char)
```

    Processing d: 100%|███████████████████████████████████████| 4/4 [00:01<00:00,  3.93it/s]

还有更多需要在实践中探索~比如：
```python
from tqdm.notebook import tnrange, tqdm
from time import sleep
 
l = list(range(5))
 
for i in tqdm(l, desc='first'):
    for j in tnrange(5, desc='second', leave=True):
        sleep(0.1)
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210209142709357.png#pic_center)
