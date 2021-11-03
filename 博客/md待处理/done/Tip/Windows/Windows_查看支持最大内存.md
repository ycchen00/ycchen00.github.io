
---
 title: Windows | 查看支持最大内存
 date: 
 updated: 
 categories:
 - Tip
 - Windows
 tags:
 - Tip
 - Windows
 - 内存
---
>
<!--less-->
﻿`缘由`
在打算给可怜的笔记本换内存的时候，需要考虑笔记本主板支持的最大内存，这里找了比较方便的解决方案，记录下~

`解决`
系统命令行，yyds！
1. 用`Win + R`+`cmd`打开`cmd`，我这用的是`cmder`，差不多
2. 输入`wmic memphysical get maxcapacity`，`MaxCapacity`显示的就是最大内存
3. 得到的单位是KB，因此需要`÷1024÷1024`
4. 如图，我的是`33554432KB`，等于`32GB`
![](https://img-blog.csdnimg.cn/20210317001158114.png#pic_center)


