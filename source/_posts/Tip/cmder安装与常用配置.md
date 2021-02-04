---
 title: Tip | cmder安装与常用配置 
 date:
 updated: 
 categories:
 - Tip
 tags:
 - cmder
---
>cmder安装与常用配置，cmd和Powershell替代
<!--less-->

# Cmder

之前一直使用`cmd`，虽然用着没问题，简陋的背景看久了也可以接受。后来用了一天`Powershell`。Powershell作为cmd的超集，可以实现命令提示符的所有功能，但是比命令提示符要强大的多。接着一不做二不休，决定使用`cmder`。

`cmder`的有点有啥优点就不赘述了，anyway，颜值高，功能强大，集合windows、linux、git等命令，操作方便，支持多窗口 :)

## 安装

[官网](http://cmder.net/)下载即可

分两个版本，都是portable，解压即可运行。

- mini版功能简单，很小巧，只有4M多，主要是cmd和powershell 

- full版功能强大，包含了git、powershell、bash、chocolatey、Cygwin、SDK等功能

## ———————配置———————

## 添加环境变量

将cmder的目录加入环境变量，然后可以通过`Win + R`输入`cmder`快捷键进入cmder

![](https://img-blog.csdnimg.cn/20210201202024873.png#pic_center)



## 添加右键菜单

以管理员运行`cmd`（快捷键`Win + R`，输入`cmd`，`Ctrl + Shift + Enter`），进入相关目录，运行 `Cmder.exe /REGISTER ALL` 

![](https://img-blog.csdnimg.cn/20210201202051979.png#pic_center)


效果如下：![](https://img-blog.csdnimg.cn/20210201202133224.png#pic_center)



## 默认管理员运行

找到`Cmder.exe`，右键`属性`→`兼容性`，勾选 `以管理员身份运行此程序 `，确认保存。

## 设置字体

`Settings`→ `General` →  `Fonts`这里可以设置字体，包括防止中文乱码，这里不影响博主运行，所以默认。为了防止字体重叠可以把`Monospace`的勾去掉
![](https://img-blog.csdnimg.cn/20210201202234647.png#pic_center)


## 任务、标签、状态栏显示

**任务栏**：`Settings`→ `General` → `Appearance`。勾选后最上面那一栏会隐藏
![](https://img-blog.csdnimg.cn/20210201203611470.png#pic_center)


**标签栏**：`Settings`→ `General` → `Tab bar`。标签栏是下面那一栏，显示窗口等信息，这里选择`Auto show`，会根据情况自动隐藏

![](https://img-blog.csdnimg.cn/2021020120224777.png#pic_center)


**状态栏**：`Settings`→ `Features` → `Status bar`。勾选后会显示状态栏

![](https://img-blog.csdnimg.cn/20210201202252607.png#pic_center)


## 默认终端

`Settings`→ `General` 设置打开cmder默认控制台，cmd、PowerShell、bash等

![](https://img-blog.csdnimg.cn/2021020120230495.png#pic_center)


也可以在`Settings`→ `Startup` 设置：

![](https://img-blog.csdnimg.cn/20210201202309807.png#pic_center)


效果如下：

![](https://img-blog.csdnimg.cn/20210201202315765.png#pic_center)


## 默认目录

`Settings` → `Startup`→ `Tasks`，选择默认终端，点击`Startup dir`选择默认目录或者在代码后加入如下代码(以D盘为例)` -new_console:d:D:\ `（不要忘记`\`!）

![](https://img-blog.csdnimg.cn/20210201202328147.png#pic_center)


设置完成后，每次打开都是默认D盘目录下：

![](https://img-blog.csdnimg.cn/20210201202333880.png#pic_center)


## 设置中文编码

`Settings`→`Startup`→`Environment`输入`set LC_ALL=zh_CN.UTF-8`

**上一行记得加";"!!!**

![](https://img-blog.csdnimg.cn/20210201202407698.png#pic_center)


## 设置背景

`Settings`→ `General` →`Background image`。浏览想要的图像，并且可以调整亮度以及`Placement`选择满意的效果~
![](https://img-blog.csdnimg.cn/20210201202417240.png#pic_center)


效果如下：

![](https://img-blog.csdnimg.cn/2021020120242788.png#pic_center)


## 设置Schemes

`Settings`→ `Features` →`Colors`，Schemes中有很多可选项，可以尝试自己喜欢的

![](https://img-blog.csdnimg.cn/20210201202438627.png#pic_center)


## 调节透明度

`Settings`→ `Features` →`Transparency`手动调整满意的透明度
![](https://img-blog.csdnimg.cn/20210201202500511.png#pic_center)


## 添加 ll 命令

打开目录下的`D:\cmder\config\user_aliases.cmd`添加如下：

	l=ls     --show-control-chars 
	la=ls -aF     --show-control-chars 
	ll=ls -alF     --show-control-chars 
	ls=ls     --show-control-chars -F

## 修改命令提示符号λ 

打开目录下的`D:\cmder\vendor\profile.ps1`。搜索`nλ`替换成`$`即可~

![](https://img-blog.csdnimg.cn/20210201202529928.png#pic_center)


效果如下：

![](https://img-blog.csdnimg.cn/20210201202536679.png#pic_center)


## 常用快捷键

| 快捷键           | 含义                                |
| ---------------- | ----------------------------------- |
| Tab              | 自动路径补全                        |
| Ctrl+t           | 建立新页签                          |
| Ctrl+W           | 关闭页签                            |
| Ctrl+Tab         | 切换页签                            |
| Alt+F4           | 关闭所有页签                        |
| Alt+Shift+1      | 开启cmd.exe                         |
| Alt+Shift+2      | 开启powershell.exe                  |
| Alt+Shift+3      | 开启powershell.exe (系统管理员权限) |
| Ctrl+1           | 快速切换到第1个页签                 |
| Ctrl+n           | 快速切换到第n个页签( n值无上限)     |
| Alt+enter        | 切换到全屏状态                      |
| Ctr+r            | 历史命令搜索                        |
| Win+Alt+P        | 开启工具选项视窗                    |
| Ctrl + Shift + v | 复制                                |

## Quake style

`Settings`→ `General`设置Quake style，可以快捷最小化界面，防止快捷键冲突，可以手动调整。如图，设置为`Ctrl + ;`:

![](https://img-blog.csdnimg.cn/20210201202608169.png#pic_center)


## 分屏快捷键

`Settings`→ `Keys & Macro`，可以搜索“Duplicate”，根据自己习惯设置分屏快捷键~

博主下分屏为`Ctrl + Shift + Down`，右分屏为`Ctrl + Shift + Right`

![](https://img-blog.csdnimg.cn/20210201202616873.png#pic_center)


效果如下：

![](https://img-blog.csdnimg.cn/20210201202623552.png#pic_center)


## 快速复制/粘贴

在`cmder`中不用康秋CV即可快速复制粘贴！！！

- 鼠标左键选中内容，即可将快速复制至剪贴板；
- 鼠标右键即快速粘贴；

## 参考文献

上面这些是常用的设置，放一下其他参考文献，方便追求更细腻操作体验的伙伴：

[相关设置，包含Schemes预览效果](https://zhuanlan.zhihu.com/p/28400466)

[更多设置](https://blog.csdn.net/qq_33242956/article/details/104966631)

[更多设置，别名等，很详细](https://www.cnblogs.com/michael-xiang/p/10466074.html)

