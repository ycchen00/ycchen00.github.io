---
 title: Python | pip设置代理 & 更换镜像
 date: 
 updated: 
 categories:
 - Python
 tags:
 - pip
 - Python
---
>pip设置代理或者更换国内镜像源
<!--less-->

## 问题缘由
之前`pip install ...`使用国内镜像源提高下载速度，后来学会科学上网后，就不用国内源，一路风雨无阻，今天再运行时，出现如下报错：
	
>WARNING: Retrying (Retry(total=4, connect=None, read=None, redirect=None, status=None)) after connection broken by 'ProxyError('Cannot connect to proxy.', timeout('_ssl.c:1106: The handshake operation timed out'))': /simple/requests/

知道是代理方面的问题，但是一直没法解决，又能上google，于是还是乖乖换了国内源，这里做个记录，放丢失~

## 设置代理(cmd, bash, powershell)
网上很多，这里的port应该自己调整~

默认模式：http代理
set http_proxy=http://127.0.0.1:1080
set https_proxy=http://127.0.0.1:1080

bash模式：sock5代理
export https_proxy=socks5://127.0.0.1:1080 
export http_proxy=socks5://127.0.0.1:1080

PowerShell ：http代理
$env:http_proxy=http://127.0.0.1:1080
$env:https_proxy=http://127.0.0.1:1080

检测命令：curl www.google.com

但是我失败了，设置完问题还在，怀疑可能是v2rayN的问题？？？大家可以试着把全局模式关了。


## 更换镜像
P.S. 可以永久更改也可以临时使用，我这里就永久更改了
这里以Windows为例：
进入`C:\Users\**你的用户名**`，创建pip文件夹，接着创建`pip.ini`文件：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020121235522.png#pic_center)
用文本编辑器打开，输入如下：
```
[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
```
然后网速一步起飞，也不会报错了~
<br>



也看到有[博客](https://www.jianshu.com/p/b2412f7fc93f)直接一句话解决，不用创建文件，没有尝试，大家可以试试。
`cmd`输入：
`pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple`

<br>


**其他镜像：**
- 阿里云 http://mirrors.aliyun.com/pypi/simple/ 
- 中国科技大学 https://pypi.mirrors.ustc.edu.cn/simple/ 
- 豆瓣 http://pypi.douban.com/simple/ 
- 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/ 
- 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/


