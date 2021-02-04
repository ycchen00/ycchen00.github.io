---
 title: GEE入门[3] | 相关学习网站
 date: 
 updated: 
 categories:
 - GEE
 - GEE入门
 tags:
 - Google Earth Engine
 - Remote sensing
---
>介绍GEE各种学习网站，随时更新。
<!--less-->

&emsp;&emsp;好久没更新了，开学忙着瞎眼实习，这次全面介绍一些相关网站，会补充，之前第一篇[ GEE入门【1】| Python环境配置](https://blog.csdn.net/weixin_43360896/article/details/108174759) 最后介绍了点相关网站，但是在实际运用中还是要不断线上找教程解决问题。GEE普遍度比起其他热门工具不算高，因此特此收集平时遇到的比较好的专栏、教程之类的相关网站。（如果认为侵权，请联系我删除~）
&nbsp; 
# 官方网站
&emsp;&emsp;首先先放上几个官方网站，防丢失。
&emsp;&emsp;[Google Earth Engine 官方地址](https://earthengine.google.com/)
&emsp;&emsp;官方子网站系列：
&emsp;&emsp;[GEE资源介绍](https://earthengine.google.com/datasets/) 或者这个[GEE资源列表](https://developers.google.com/earth-engine/datasets)： 介绍了卫星影像和各种其他数据，放个大致图：
<img src="https://img-blog.csdnimg.cn/20200826171606563.png?x-oss-process" width="600px" />
&emsp;&emsp;[GEE研究项目介绍](https://earthengine.google.com/case_studies/) ：里面挺多实际项目代码，可以看看学习下

&emsp;&emsp;[**JavaScript在线平台**](https://code.earthengine.google.com/)： 这个不用多说
&emsp;&emsp;[GEE查看资源](https://explorer.earthengine.google.com/#workspace)： 一个可以自主导入显示资源的交互界面，用的比较少

&emsp;&emsp;接下来是GEE官方教程系列：
&emsp;&emsp;[GEE入门介绍首页](https://developers.google.com/earth-engine/)
&emsp;&emsp;[API文档介绍]( https://developers.google.com/earth-engine/apidocs)： 多看API文档！有时候比网上找教程快多了
&emsp;&emsp;[官方培训资料](https://developers.google.com/earth-engine/edu)： 中英文资料都有，挺全的，下次直接补充个百度云链接
&emsp;&emsp;[官方示例教程](https://developers.google.com/earth-engine/guides)： 硬核教程，值得多翻翻

&emsp;&emsp;[17年GEE开发者大会](https://events.withgoogle.com/google-earth-engine-user-summit-2017/#content)： 没怎么看过
&emsp;&emsp;[GEE 开发者论坛](https://groups.google.com/forum/#!forum/google-earth-engine-developers)： 需申请，申请简单，可以在上面提问并查看别人解决方案，不过由于解决概率和时间不能解决比较急的问题，用的比较少
&emsp;&emsp;[官方YouTube学习视频](https://www.youtube.com/playlist?list=PLWw80tqUZ5J9_3E_9C_bK8zt0mGHfvOrj)： 22个学习视频，每个平均一个多小时，可以看看
&emsp;&emsp;[stackflow相关网站](https://gis.stackexchange.com/questions/tagged/google-earth-engine?newreg=6844c858f8ae4f7ea6febaf5d472743b)： 相当于英文CSDN

## Python API
&emsp;&emsp;Python系列当然也少不了，接下来会介绍一些相关Python教程以及想关包~
&emsp;&emsp;[GEE API](https://github.com/google/earthengine-api)： JavaScript和Python语言都有，包含基本操作，决策树等机器学习代码，挺全的，但是无深度学习相关
&nbsp; 

# 大佬专栏
&emsp;&emsp;这里列一些平时找教程遇到的大佬们的专栏或者相关平台、教程。当然，我也会争取自己出教程hhhh。

## dl1
&emsp;&emsp;首先学习入门是跟着dl无形的风，其CSDN和知乎都有专栏，不过貌似后来转到知乎了？教程多且全，包含挺多实践，挺好~
&emsp;&emsp;[Github Python API](https://github.com/shiweihappy/GEE-Python-API)
&emsp;&emsp;[博客专栏](https://blog.csdn.net/shi_weihappy/category_9282574.html)
&emsp;&emsp;[知乎专栏](https://zhuanlan.zhihu.com/c_123993183)： JavaScript和Python相关都有，多达90+。一个个学下来会很有收获，当然，即用即学也可


## dl2
&emsp;&emsp;吴秋生教授的Gtihub网站上有很多教程，其在bilibili和油管已经ResearchGate等平台都有教程。而且开发了geemap包。
&emsp;&emsp;[ResearchGate专栏](https://www.researchgate.net/project/Google-Earth-Engine-4)
&emsp;&emsp;[bilibli视频教程](https://space.bilibili.com/527404442/channel/detail?cid=132674)
&emsp;&emsp;[YouTube视频教程](https://www.youtube.com/c/QiushengWu)
&emsp;&emsp;[Github教程](https://github.com/giswqs/earthengine-py-notebooks)： jupyter Python notebook，包含javascript在线平台教程以及python结合深度学习代码，主要结合TensorFlow以及Google Colab运行，代码需要适当修改
&emsp;&emsp;[geemap包_Github专栏](https://github.com/giswqs/geemap/tree/master/examples)： geemap包Github介绍，ps. geemap包有些功能在jupyter notebook 和 Google Colab两个平台无法通用。
<img src="https://img-blog.csdnimg.cn/20200822222103455.png?x-oss-process" width="300px" />

##  dl3
&emsp;&emsp;王Mike:[知乎专栏](https://zhuanlan.zhihu.com/c_1137998284927893504)
&emsp;&emsp;由于GEE中的参数不一样，所以很多函数需要新学习，该专栏提供的参数类型系列非常全面，特此列出：
&emsp;&emsp;[String, Number](https://zhuanlan.zhihu.com/p/75260835)
&emsp;&emsp;[Dictionary，List，Array](https://zhuanlan.zhihu.com/p/75823262)
&emsp;&emsp;[Geometry，Feature，Feature Collection ](https://zhuanlan.zhihu.com/p/75944017)
&emsp;&emsp;[Image,Image Collection](https://zhuanlan.zhihu.com/p/76343298)
&emsp;&emsp;[Date, Date Range ](https://zhuanlan.zhihu.com/p/76486116)
&emsp;&emsp;[Filter，Join ](https://zhuanlan.zhihu.com/p/76487384)
&emsp;&emsp;[Reducer，Kernel，Algorithm ](https://zhuanlan.zhihu.com/p/76488695)

 

## dls
&emsp;&emsp;当然还有很多其他dl们的专栏也很有用，就不一一举出来了，见谅（懒）
&emsp;&emsp;[ipyleaflet包_Github](https://github.com/jupyter-widgets/ipyleaflet)：用于GEE python交互可视化
&emsp;&emsp;[猿人充电站_知乎专栏](https://zhuanlan.zhihu.com/c_1098521918466109440)
&emsp;&emsp;[Celia_知乎专栏](https://www.zhihu.com/column/c_1183690934108315648)

后续有新的会继续补充~



