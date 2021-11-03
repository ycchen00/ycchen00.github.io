
---
 title: Debug | ImportError: DLL load failed while importing error: 找不到指定的模块。
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>ImportError: DLL load failed while importing error: 找不到指定的模块。
<!--less-->
﻿`报错信息：`
在`cmd`中运行`jupyter notebook`的时候出现了如下问题：
```
C:\Users\***>jupyter notebook
Traceback (most recent call last):
  File "D:\Anaconda3\Scripts\jupyter-notebook-script.py", line 6, in <module>
    from notebook.notebookapp import main
  File "D:\Anaconda3\lib\site-packages\notebook\notebookapp.py", line 51, in <module>
    from zmq.eventloop import ioloop
  File "D:\Anaconda3\lib\site-packages\zmq\__init__.py", line 50, in <module>
    from zmq import backend
  File "D:\Anaconda3\lib\site-packages\zmq\backend\__init__.py", line 40, in <module>
    reraise(*exc_info)
  File "D:\Anaconda3\lib\site-packages\zmq\utils\sixcerpt.py", line 34, in reraise
    raise value
  File "D:\Anaconda3\lib\site-packages\zmq\backend\__init__.py", line 27, in <module>
    _ns = select_backend(first)
  File "D:\Anaconda3\lib\site-packages\zmq\backend\select.py", line 28, in select_backend
    mod = __import__(name, fromlist=public_api)
  File "D:\Anaconda3\lib\site-packages\zmq\backend\cython\__init__.py", line 6, in <module>
    from . import (constants, error, message, context,
ImportError: DLL load failed while importing error: 找不到指定的模块。
```

![](https://img-blog.csdnimg.cn/20210326111907931.png#pic_center)
`分析问题：`
报错是在安装anaconda之后出现的，在`Anaconda Promt`中是可以运行打开notebook的。那么判断为应该是安装anaconda后，环境变量没有添加完全。


`解决方法：`
添加完整anaconda环境变量即可：
D:\Anaconda3\
D:\Anaconda3\Scripts\
D:\Anaconda3\Library\bin
![](https://img-blog.csdnimg.cn/2021032611253237.png#pic_center)

然后重启`cmd`，运行`jupyter notebook`可以看到成功。



