
---
 title: Windows | 查看内存频率（不用外部软件
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
﻿

想了解自己内存频率又不想安装各种流氓软件（36*，*大师）之类的:)
于是就找到了两个非外部软件，用系统方法查看的方法~

# 方法一 （系统命令行）
系统命令行，yyds
1. `win + R`打开命令行
2. 输入`wmic`
3. 输入`memorychip` （注：其实可以直接输入`wmic memorychip`）
4. 然后就可以看到详细信息~ 其中，`ConfiguredClockSpeed`即内存频率
如图：
![](https://img-blog.csdnimg.cn/20210316235627452.png#pic_center)


# 方法二 （任务管理器）
1. `Ctrl + Alt + Delete`打开任务管理器
2. 在`性能`里`内存`的`速度`同内存频率
如图：
![](https://img-blog.csdnimg.cn/20210316235944807.png#pic_center)



欢迎大家提出更便捷的方法~
