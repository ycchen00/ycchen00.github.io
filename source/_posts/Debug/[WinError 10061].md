---
 title: Debug | [WinError 10061] 由于目标计算机积极拒绝，无法连接。
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>URLError: <urlopen error [WinError 10061] 由于目标计算机积极拒绝，无法连接。>
<!--less-->
**报错信息**
`URLError: <urlopen error [WinError 10061] 由于目标计算机积极拒绝，无法连接。>
`

**分析**
发现是`sns.load_dataset`这里出了问题。在下载网络数据等文件的时候，常出现该问题。

**解决方法**

**solution 1：** 在浏览器代理设置中，将局域网设置中将代理服务器取消选中
**solution 2：** 在浏览器代理设置中将自动检测打开，设置–>代理设置–>弹出Internet属性–>局域网设置–>自动检测设置–>重新运行
**solution 3：** 我的问题是在科学上网的时候关闭了Http代理，打开**全局代理**即可。

**参考文献**
[很详细的一个解决方案](https://www.cnblogs.com/tynam/p/11730736.html)
