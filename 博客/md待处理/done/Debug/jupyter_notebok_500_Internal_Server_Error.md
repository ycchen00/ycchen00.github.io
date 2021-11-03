---
 title: Debug | jupyter notebook 500 : Internal Server Error
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>打开jupyter notebook遇到500 : Internal Server Error
<!--less-->
﻿**报错信息**
jupyter notebook无法打开和新建`.ipynb`文件，显示`500 : Internal Server Error`：
![](https://img-blog.csdnimg.cn/20210303123210704.png#pic_center)
查看`cmd`发现如下信息：
`[E 12:30:02.111 NotebookApp] 500 GET /notebooks/Untitled.ipynb (127.0.0.1) 269.280000ms referer=http://localhost:8888/tree`

**分析**
根据[博客](https://blog.csdn.net/lizzy05/article/details/104510679)，可能是判断报错是`nbconvert` 和`pando`c不兼容导致，更新`nbconvert`即可

**解决方法**
`cmd`运行`pip install --upgrade --user nbconvert`，然后重启jupyter即可
