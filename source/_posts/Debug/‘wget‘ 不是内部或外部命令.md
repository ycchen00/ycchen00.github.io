---
 title: Debug | 'wget' 不是内部或外部命令，也不是可运行的程序 或批处理文件。
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>'wget' 不是内部或外部命令，也不是可运行的程序或批处理文件。
<!--less-->
**报错信息**
`'wget' 不是内部或外部命令，也不是可运行的程序或批处理文件。`

**分析**
在jupyter notebook使用`!wget`遇到了这个问题，查到发现`wget`是linux系统下，windows不自带。

**解决方法**
去[wget官网](https://eternallybored.org/misc/wget/)下载，选择32位/64位，下载ZIP/EXE，将下载下来的EXE文件放到`C:\Windows\System32`即可。

叨下后续：
由于我用的是jupyter notebook。虽然windows的`cmd`可以用了，但是不能直接在`jupyter cell`里面使用`!wget`
首先要说的是`cmd`运行`wget`，下载的文件就在你运行的文件夹，比如我在用户文件下运行的就在用户文件夹去找。
![](https://img-blog.csdnimg.cn/20201229145656619.png)
jupyter的`terminal`下可以运行`wget`。同理，当我没指定文件夹，直接运行`wget`下载的文件也在用户文件夹下，即`C:\Users\***`。

但是，当我想在`jupyter cell`用`!wget`的时候，就问题还在，迷惑.jpg。网上看的这个[解决方案](https://community.paperspace.com/t/wget-missing-from-jupyter/710)，貌似是针对本来是linux系统的，但是jupyter环境缺少了wget的问题。如果运行会发现套娃bug，比如`apt-get 不是内部或外部命令...`。

由于本人用的是windows系统，个人找的解决方案是将我们之前下载的`wget.exe`放到要运行的文件夹下，再运行`!wget`就行了。

然后这篇[博客](https://blog.csdn.net/yinhuaiya/article/details/78675605)提供了将下载文件保存到指定目录的方法。
比如将网址的文件保存到目录下，使用`wget -P 目录 网址`指令即可。

这样的话，很多类似问题都可以类推啦。

没找到一劳永逸的方法，尝试了一些，包括添加到系统环境变量，也没成功，如果大家知道，欢迎提建议~

