
---
 title: Jupyter Notebook | 不用print即可输出多个变量
 date: 
 updated: 
 categories:
 - Python
 - Jupyter Notebook
 tags:
 - Python
 - Jupyter Notebook
---
>Jupyter Notebook系列，关于不用print即可输出多个变量
<!--less-->
﻿# 缘由
有时候在jupyter notebook上想监测某些变量的时候希望在一个cell里输出多个，但是又不懒得不断`print`，但是这样只会输出最后一个的值，比如：

```python
a,b = 1,2
a
b
```
	2

# 解决方法
## 单个文件
如果希望不需要print即可同时输出a b的值，在jupyter notebook开头运行这两行代码：

```python
from IPython.core.interactiveshell import InteractiveShell
InteractiveShell.ast_node_interactivity = "all"
```
然后测试：
```python
a,b = 1,2
a
b
```
	1
	2

`P.S.` 如果不喜欢这个配置，改回来

```python
InteractiveShell.ast_node_interactivity = "last"
```
更多选项参见[官网](https://ipython.readthedocs.io/en/stable/config/options/terminal.html#configtrait-InteractiveShell.ast_node_interactivity)

`P.S.S.` 这样又有个问题，如果我只是想放那里但是不想它输出，这个时候只需要在代码后面加个`;`即可~


## 整个notebook
如果要为Jupyter所有实例设置这个的话，首先找到jupyter notebook安装目录，使用`cmd`运行`jupyter notebook --generate-config`即可，如图。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210121211729396.png#pic_center)我的目录在`C:\Users\***\.jupyter`



接下来，在路径`~/.ipython/profile_default/`下创建`ipython_config.py`文件即可：

```python
c = get_config()

# Run all nodes interactively
c.InteractiveShell.ast_node_interactivity = "all"
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210330203600981.png#pic_center)
