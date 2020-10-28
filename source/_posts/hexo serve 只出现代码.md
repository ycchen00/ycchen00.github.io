---
 title: hexo serve 只出现代码
 categories: 
 - hexo
 tags:
 - hexo
 - 个人博客
 password: 
 abstract: 有东西被加密了, 请输入密码查看.
 message: 您好, 这里需要密码.
 wrong_pass_message: 抱歉, 这个密码看着不太对, 请再试试.
 wrong_hash_message: 抱歉, 这个文章不能被校验, 不过您还是能看看解密后的内容.
 top: 
---
升级到hexo 5后，hexo serve显示

[>_<]:
	注释再注释一次



是因为
Hexo 5 把 swig 渲染插件删了，需要单独安装
npm i hexo-renderer-swig