---
 title: Jupyter Notebook | Magic-Timing运行时间
 date: 
 updated: 
 categories:
 - Python
 - Jupyter Notebook
 tags:
 - Python
 - Jupyter Notebook
---
>Jupyter Notebook系列，关于如何使用magic去记录运行时间~
<!--less-->

&emsp;&emsp;比起稍微麻烦的`import time` `strat_time` `end_time`，jupyter notebook自带magic函数，非常良心了 :)
## %%time
&emsp;&emsp;运行一次cell的代码花费的时间

```python
%%time
j=0
for i in range(10000):
    j=i*(2^i)
```

    Wall time: 2.03 ms
    

## %time
&emsp;&emsp;运行一次当前行所花费的时间

```python
import numpy as np
%time j=np.eye(100)*np.eye(100)
```

    Wall time: 2.99 ms

## %timeit
&emsp;&emsp;执行一行语句100，000次(默认情况下)，然后给出运行最快3次的平均值

```python
import numpy as np
%timeit j=np.eye(100)*np.eye(100)
```

    21 µs ± 406 ns per loop (mean ± std. dev. of 7 runs, 10000 loops each)
    
