
---
 title: Windows | 磁盘分区
 date: 
 updated: 
 categories:
 - Tip
 - Windows
 tags:
 - Tip
 - Windows
 - 磁盘
---
>
<!--less-->
﻿

本博客主要解决如下问题：
1. 笔记本只有C盘，该不该分盘
2. 磁盘0磁盘分区1、2、3、4、5、6、7可以删吗
3. 如果想新建D、E盘，怎么操作
4. 分错了怎么办，扩展卷



# 磁盘分区
## 该不该分
~~问就是分~~ (不是
先放个参考网站: [新买的笔记本电脑只有一个c盘，需要分盘吗？](https://www.zhihu.com/question/324839277)
简单总结下：
1. 一般只有C盘多半电脑空间小，比如博主……
2. 分不分无影响
3. 空间大/整理癖（博主都有 :)）就分吧

## 该不该删
![](https://img-blog.csdnimg.cn/2021020913355992.png#pic_center)右键`此电脑` → `管理` → `磁盘管理` 即进入磁盘管理界面，可以看到有几个磁盘分区5、6、7容量又大，可用空间又是100%，那么请问这是我可以删的吗？
简答：
作为恢复分区，可以删，但建议别删
[参考](https://zhuanlan.zhihu.com/p/147533342)：
“磁盘分区中有4个隐藏分区会占用一部分空间： EFI、WinRE 分区是微软系统自带分区，Onekey 分区为华为一键还原恢复分区，WinPE分区为Windows 系统的恢复分区。隐藏分区请不要删除，否则会影响计算机功能正常使用。如恢复分区，如果删除，则无法使用系统恢复出厂功能。

## 怎么分
以Win10系统为例
1. 右键`此电脑` → `管理` → `磁盘管理` 进入磁盘管理界面
![](https://img-blog.csdnimg.cn/20210209134018863.png#pic_center)可以看到小的可怜 :(

2. 右键`需要进行分区的磁盘` → `压缩卷`
![](https://img-blog.csdnimg.cn/20210209134745126.png#pic_center)
3. 系统会自动查询压缩空间

![](https://img-blog.csdnimg.cn/20210209134830709.png#pic_center)

4. 输入要压缩的空间（如 10GB，就是 10*1024，即 10240MB）→ `压缩`，这里假设压缩1GB：
![](https://img-blog.csdnimg.cn/20210209134959344.png#pic_center)
5. 这时可以看到多了个`未分配`空间，还需要进一步操作
![](https://img-blog.csdnimg.cn/20210209135146876.png#pic_center)
6. 右击`空白分区` → `新建简单卷`
![](https://img-blog.csdnimg.cn/20210209135352557.png#pic_center)
7. 指定卷大小，就选择最大
![](https://img-blog.csdnimg.cn/2021020913542216.png#pic_center)
8. 分配驱动器号，由于CDF已经用了，所以无显示，这里选择E：
![](https://img-blog.csdnimg.cn/20210209135523189.png#pic_center)
9. 接着可以一路`下一步`，操作完成后，可以看到多了`新加卷E`
![](https://img-blog.csdnimg.cn/20210209135805541.png#pic_center)
10. 如果想改名字，右击`新加卷` → `属性`，红框部分改名即可
![](https://img-blog.csdnimg.cn/20210209135919327.png#pic_center)


## 怎么删
如果发现建错了，后悔了，或者想把这个磁盘拆成俩个，怎么删掉这个磁盘呢，需要进行`扩展卷`操作让删除掉的还原成未分配的空间合并然后重复上面`压缩卷`操作。

1. 右击`要删除的磁盘` → `删除卷`
![](https://img-blog.csdnimg.cn/20210209140408643.png#pic_center)

2. 删除后可以看到还原成`未分配空间`
![](https://img-blog.csdnimg.cn/20210209140505763.png#pic_center)
3. 然后右击`C盘` → `扩展卷`
![](https://img-blog.csdnimg.cn/20210209140133811.png#pic_center)
4. 跟着向导操作，选择磁盘，下一步
![](https://img-blog.csdnimg.cn/20210209140722591.png#pic_center)

5. 然后可以看到未分配空间合并，可以再进行压缩卷操作
![](https://img-blog.csdnimg.cn/20210209140842327.png#pic_center)
百度经验其实也写得挺详细：
[压缩卷](https://jingyan.baidu.com/article/19192ad8c169dae53e57078e.html)
[拓展卷](https://jingyan.baidu.com/article/9faa72317b000f073c28cbc5.html)
