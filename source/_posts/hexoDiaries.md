---
 title: hexo问题解决随笔
 date: 2020/10/18 20:20
 updated: 
 categories: 
 - hexo
 tags:
 - hexo
 - 个人博客
 top: 100
---
>记录解决hexo相关问题与其时间的日志

<!--less-->

## 搭建日志

	待解决：
	
	202011?? ：多级目录/https://guanqr.com/tech/website/hexo-theme-next-customization/#
	
	20210204 ：修改busuanzi无法统计人数的问题(放弃统计:))
	20210204 ：CSDN大量转移至Hexo！
	20201109 ：在线编辑Netylify 成功一半 可以在线编辑，但是与Netylify无关
	20201109 ：加入评论板块&热度-次数
	20201108 ：12生肖
	20201108 ：加入站点sitmap
	20201108 ：更新版本
	20201108 ：加入粒子时钟插件
	20201108 ：加入标签云
	20201108 ：书影音加入豆瓣插件
	20201104 ：解决侧边栏无作者昵称问题
	20201101 ：上吊猫咪加入返回顶部豪华套餐 http://yearito.cn/posts/hexo-theme-beautify.html
	20201028 ：解决Hexo博客模板hexo-theme-next的翻页按钮不正常显示
	20201024 ：大量优化：包括增加本地搜索、404等功能
	20201019 ：next加入头像avatar
	20201019 ：github SSH配置，优化，不用再反复输账号密码且安全
	20201019 ：完成多电脑博客同步
	20201018 : 选择修改next主题
	20201018 : 完成环境初步搭配

[>_<]:
	注释

## hexo常用命令
...


## hexo serve 只出现代码

升级到hexo 5后，hexo serve只显示奇怪的代码:
(假装有代码)
是因为 Hexo 5 把 swig 渲染插件删了，需要单独安装
```
npm i hexo-renderer-swig
```


## %20 空格
属于URLEncode编码，+貌似也可以，但是可能出问题

## 转义字符
在面对特殊字符里面输入特殊字符时，前后怼个\

比如:
[\\[1\\]] -> [1]
\\ -> \


## 插入其他博客链接
由于hexo在generate的时候会直接在public目录下生成html文件，所以可以通过生产地址引用该文章。

格式：\[显示文字\](/{年}/{月}/{日}/{文章文件名}/)

比如:
\[GEE实战 | 窗口拆分(split panel)可视化\](/2020/10/27/GEE实战%20窗口拆分(split%20panel)可视化/) -> [GEE实战 | 窗口拆分(split panel)可视化](/2020/10/27/GEE实战%20窗口拆分(split%20panel)可视化/)

## 猫咪上吊 返回顶部
[丢个链接就跑](http://yearito.cn/posts/hexo-theme-beautify.html)

## 加入评论

## 24方针点击效果
z这个搞了好久，有时间再补
