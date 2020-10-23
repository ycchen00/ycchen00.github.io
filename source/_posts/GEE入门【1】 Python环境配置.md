---
 title: GEE入门[1]Python环境配置
 date: 2020-10-23 21:01:45
 categories:
 - GEE
 tags:
 - Google Earth Engine
 - Remote sensing
---
GEE系列第一篇系列，从CSDN博客搬过来~
主要对GEE(Google Earth Engine)进行了简单介绍以及环境配置。
<!--more-->
# GEE简介
&emsp;&emsp;GEE（Google Earth Engine）是谷歌的一个可以批量处理卫星影像数据的工具，属于Google Earth一系列的工具。相比于ENVI等传统的处理影像工具，GEE可以快速、批量处理数量“巨大”的影像，比如可以快速计算NDVI植被指数等。GEE数据集包括Landsat4、5、7、8、Modis、Sentinel、Atmospheric等超过 200 个公共的数据集，超过500万张影像，具有免费、云计算、数据获取方便等优点，缺点是需要科学上网，以及下载速度和tz质量有关。
&emsp;&emsp;GEE提供了两个平台，分别是在线的JavaScript API和离线的Python API。通过这些API可以快速的建立基于Google Earth Engine 以及 Google云的Web服务。在线JavaScript API平台无需环境搭配，可直接线上下载处理卫星影像（[https://code.earthengine.google.com](https://code.earthengine.google.com)），如图。JavaScript平台使用方便，图形交互体验较强，但是如果需要进行深度学习的训练以及测试等时需要将线下使用python等完成训练。
![1](https://img-blog.csdnimg.cn/2020082221443350.png?x-oss-process)

 </br>

# python API配置相关
&emsp;&emsp;本教程以python API为平台，结合Google Colab与GEE完成深度学习。使用python运行GEE需要进行环境配置，分为云端环境配置和本地环境配置，本地环境配置的优点是配置一次即可，由于本教程使用Colab云端运行，所以需要进行云端配置，云端配置需要每次重新配置，所幸Colab配置简单。本教程先介绍Colab云端配置，GEE本地python环境配置见后续教程。

## Colab环境配置
&emsp;&emsp;Google Colab是一个 Google 研究项目，旨在帮助传播机器学习培训和研究成果。它是一个 Jupyter 笔记本环境，不需要进行任何设置就可以使用，并且完全在云端运行。Colaboratory 笔记本存储在 Google 云端硬盘 ([https://drive.google.com/](https://drive.google.com/)) 中，并且可以共享。由于Google Colab在linux系统下，所以我们可以用linux系统命令来控制Colab。优点即可以免费试用各个谷歌应用，在无可用GPU时比较合适，缺点仍然是使用谷歌相关需要科学上网。
&emsp;&emsp;建议在Google drive中新建Colab。因为编辑运行完程序后，程序是存在Google drive里的，下一次可以直接进入。而Colab的硬盘是云端的，如果直接新建Colaboratory，那么下次打开colab可能上次编写的程序就没有了。具体步骤如下：

1. 首先登录谷歌云端硬盘（Google Drive），使用Google邮箱登入即可，由于需要使用GEE，因此需要与GEE邮箱一致。Google Drive免费提供了15GB的存储空间，拓宽空间需要购买。
![2](https://img-blog.csdnimg.cn/20200822214552414.png?x-oss-process)

2. 添加关联程序，本用户已经关联，未关联用户可以通过新建-更多-关联更多应用，然后搜索Colab关联，已关联用户可直接新建-更多-Colaboratory新建ipynb文件。ipynb文件格式即jupyter notebook格式，适合在线分段运行以及做注释，详细操作不做过多介绍。
  <img src="https://img-blog.csdnimg.cn/20200822214624840.png?x-oss-process#pic_center" width="300px" />

3. 更改运行时类型。点击代码执行程序中的“更改运行时类型”，更改环境和CPU/GPU/TPU。，选择GPU会分配一个云端GPU，一般为K80或者P100。
[>_<]:
   图片源代码![4](https://img-blog.csdnimg.cn/20200822214755269.png?x-oss-process)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200822215349649.png?x-oss-process)![在这里插入图片描述](https://img-blog.csdnimg.cn/20200822215458410.png?x-oss-process)
<img src="https://img-blog.csdnimg.cn/20200822214755269.png?x-oss-process" width="300px" />
&emsp;&emsp;选择None(CPU)/GPU/TPU，这里选择GPU。
<img src="https://img-blog.csdnimg.cn/20200822215349649.png?x-oss-process" width="300px" />
&emsp;&emsp;通过代码查看分配的GPU型号。
<img src="https://img-blog.csdnimg.cn/20200822215458410.png?x-oss-process" />

4. 挂载Google Drive。Colab的运行原理实际上就是给你分配一台远程的带GPU的主机，所以它的原始路径不是你的Google Drive所在的路径。所以要先把Google Drive挂载带到那台远程主机上。
![3](https://img-blog.csdnimg.cn/20200822215544497.png?x-oss-process)
	也可通过左侧栏，选择装载或卸载云端硬盘。其中的My Drive中的文件即为Google Drive中的文件。
   <img src="https://img-blog.csdnimg.cn/20200822215621509.png?x-oss-process" width="200px" />
	载入后，读入图片测试，如图。
   
![4](https://img-blog.csdnimg.cn/20200822215717923.png?x-oss-process)

5. 注：在Colab中，单元格不仅仅可以写代码，还可以当命令行使用。比如，!ls查看当前目录文件。
![5](https://img-blog.csdnimg.cn/20200822215735282.png#pic_center)
   同时，如果有一些包原始环境里没有，就可以直接在单元格里安装，但是注意需要在前面加入”!”。同时，也可直接运行py文件，如图。
   <img src="https://img-blog.csdnimg.cn/2020082221575378.png" width="200px" />
   具体其他操作可参考网上教程或者官方文档。


## GEE开发环境配置
具体步骤如下：

1.	安装必要的库 !pip install earthengine-api
![12](https://img-blog.csdnimg.cn/2020082222014432.png?x-oss-process)
2.	初始化验证消息，使用GEE等谷歌平台时需要验证信息，由于每次打开Colaboratory，它的后台会启动新的虚拟机器，所以这个验证步骤需要重新走一遍 。
首先点击验证网站。
![13](https://img-blog.csdnimg.cn/20200822220209893.png?x-oss-process)
选择Google账号。
<img src="https://img-blog.csdnimg.cn/20200822220229668.png?x-oss-process" width="200px" />
允许访问。
<img src="https://img-blog.csdnimg.cn/20200822220302234.png?x-oss-process" width="200px" />
点击右侧粘贴将复制代码放入Colab输入行，按回车即可验证。
<img src="https://img-blog.csdnimg.cn/20200822220437670.png?x-oss-process" width="300px" />
<img src="https://img-blog.csdnimg.cn/20200822220504326.png?x-oss-process" />
显示”Successfully saved authorization token”即验证通过。
<img src="https://img-blog.csdnimg.cn/20200822220521198.png?x-oss-process" />


## GEE的本地python环境搭建

本教程主要面向Windows系统，Mac或者Linux配置相对简单，出现的问题可能较少，网上有大量线上资源。主要步骤如下。
1.	安装python和pip（略
2.	安装Google的 python API的客户端，命令行如下：
pip install google-api-python-client
3.	安装鉴权验证依赖库：
pip install pyCrypto
4.	安装GEE的python库：
pip install earthengine-api
5.	第一次运行GEE需要先验证GEE账户，命令行运行如下：
earthengine authenticate
其中，如果运行缺少相关安装包，安装即可。
接下来同Colab线上验证。
	1）选择Google账号。
<img src="https://img-blog.csdnimg.cn/20200822220229668.png?x-oss-process" width="200px" />
	2）允许访问。
<img src="https://img-blog.csdnimg.cn/20200822220302234.png?x-oss-process" width="200px" />
	3）点击右侧粘贴将复制代码放入**命令行**，按回车即可验证。
<img src="https://img-blog.csdnimg.cn/20200822220437670.png?x-oss-process" width="300px" />
6.	运行、初始化GEE，检查本地环境是否搭建完成：
python -c "import ee; ee.Initialize()"  
</br>
注：其中可能遇到“[WinError 10060] 由于连接方在一段时间没有正确答复…”问题。一方面检查注册账号是否授权，电脑用户名中文也有可能造成问题。另一方面，检查科学上网软件是否为全局模式。

# 相关网站
JavaScript在线平台： [https://code.earthengine.google.com/](https://code.earthengine.google.com/)
入门介绍文档：[https://developers.google.com/earth-engine/](https://developers.google.com/earth-engine/)

## Python API相关资源
[https://github.com/google/earthengine-api](https://github.com/google/earthengine-api)
（包含基本操作，决策树等机器学习代码，无深度学习相关）
[https://github.com/shiweihappy/earthengine-py-notebooks](https://github.com/shiweihappy/earthengine-py-notebooks)
（包含javascript在线平台教程以及python结合深度学习代码，主要结合TensorFlow以及Google Colab运行，代码需要适当修改）
<img src="https://img-blog.csdnimg.cn/20200822222103455.png?x-oss-process" width="300px" />

