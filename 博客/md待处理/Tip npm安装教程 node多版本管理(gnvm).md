@[TOC](windows安装npm教程 & node多版本管理（gnvm）)
# npm安装
`npm`是`nodejs`下的包管理器。可以方便的`npm install ...`，这里介绍下安装过程~
## 下载nodejs
其实下载`nodejs`就可以了 :) [nodejs官网](https://nodejs.org/en/)
建议别装最新的，可能有少数问题，也可以根据自己需求找对应版本下~
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021020814202575.png#pic_center)
下载后安装即可，不赘述。
安装后可以`cmd`使用`echo %PATH%`查看是否添加到环境变量，如果没有，需要将目录添加到环境变量
`node -v`查看node版本
`npm -v`查看npm版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208142737167.png#pic_center)
## 更多配置
更多配置，包括镜像站、vue设置等，看这篇[博客](https://www.cnblogs.com/jianguo221/p/11487532.html)很详细~

# node多版本管理
某些情况下，需要将`nodejs`退回版本。
比如，在用hexo的豆瓣插件读取豆瓣信息的时候遇到了如下报错：
```
INFO  Start processing
INFO  0 movies have been loaded in *** ms, because you are offline or your network is bad
```
找了很久，说是可能更新的node版本存在兼容性问题，由于这个插件貌似不再更新维护，所以需要将node版本退回以继续使用功能。

可以使用`gnvm`进行`nodejs`多版本管理，退回node版本。
## 下载gnvm
[gnvm官网](https://github.com/kenshin/gnvm)下载exe即可，官网也有详细教程~
这里默认node已经下过一个版本了，如果没下过node，需要将`gnvm.exe`保存到任意文件夹，并将此文件夹加入到环境变量 `Path`
如果已经安装过node，将`gnvm.exe` 保存`node.js`目录即可
`cmd`运行`where node`可以找到node目录
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208144140786.png#pic_center)

`gnvm version`查看gnvm版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208144220169.png#pic_center)

## 多版本管理
`gnvm ls`查看所有已安装的node版本
由于我已经安装了两个版本，所以显示两个
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208144737541.png#pic_center)

`node -v`查看当前node版本
`gnvm install 12.17.0`安装多版本node
由于我已经安了，所以显示文件夹已存在
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208144842984.png#pic_center)

下载后可以看到node目录多了一个版本文件~
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208144558855.png#pic_center)

`gnvm use 12.17.0`更改当前使用node版本
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210208144934609.png#pic_center)
显示success，即修改成功 :)
然后上面爬取豆瓣数据的问题也解决了~

### gnvm命令集
放下gnvm命令集，更多操作：

|     options      |                           functions                            |
| :----------: | :----------------------------------------------------------: |
|    config    |                         配置 .gnvmrc                         |
|     use      |              使用某个本地已存在的 Node.js 版本               |
|      ls      |              输出 [local] [remote] Node.js 版本              |
|   install    |               下载/安装任意已知版本的  Node.js               |
|  uninstall   |                 删除任意本地已存在的 Node.js                 |
|    update    |        下载 Node.js latest 版本并更新到 .gnvmrc 里面         |
|     npm      |                   NPM 下载/安装/删除 管理                    |
|   session    |       临时设定本地某个已存在的 Node.js 为 全局 Node.js       |
|    search    |    查询并且输出符合查询条件的 Node.js 版本详细信息的列表     |
| node-version |             输出 [global] [latest] Node.js 版本              |
|     reg      | 设定 .gnvmrc 属性值 [noderoot] 为 环境变量 [NODE_HOME]，并加入到 Path 中 |
|   version    |                        查看 gnvm 版本                        |

### 入门指南（官网）
放下官网入门指南:

 `gnvm.exe` 是一个单文件 exe，无需任何配置，直接使用。
 
**.gnvmrc**
```csharp
globalversion: 5.0.1
latestversion: 5.10.1
noderoot: /Users/kenshin/Work/28-GO/01-work/src/gnvm
registry: http://npm.taobao.org/mirrors/node/
```

**更换更快的库 registry**

 `gnvm.exe` 内建了 DEFAULT 和 TAOBAO 两个库。

```csharp
gnvm config registry TAOBAO
```

**安装 多个 Node.js**

安装任意版本的 Node.js 包括： 自动匹配 latest / io.js version 以及 选择 32 / 64 位，例如 x.xx.xx-x64 。

```csharp
gnvm install latest 1.0.0-x86 1.0.0-x64 5.0.0
```

**卸载本地任意 Node.js 版本**

```csharp
gnvm uninstall latest 1.0.0-x86 1.0.0-x64 5.0.0
```

**切换本地存在的任意版本 Node.js**

```csharp
gnvm use 5.10.1
```

**列出本地已存在的全部 Node.js 版本**

```csharp
c:\> gnvm ls
5.1.1 -- latest
1.0.0
1.0.0 -- x86
5.0.0 -- global
```

**更新本地的 Node.js latest 版本**

```csharp
gnvm update latest
```

**安装 NPM**

gnvm 支持安装 npm, 例如：下载最新版的 npm version ，使用 `gnvm npm latest` 。

```csharp
gnvm npm latest
```

**查询 Node.js 版本**

可以使用关键字 * 或者 正则表达式 /regxp/，例如： `gnvm search 5.*.* `或者 `gnvm search /.10./ `。

```csharp
c:\> gnvm search 5.*.*
Search Node.js version rules [5.x.x] from http://npm.taobao.org/mirrors/node/index.json, please wait.
+--------------------------------------------------+
| No.   date         node ver    exec      npm ver |
+--------------------------------------------------+
1     2016-04-05   5.10.1      x86 x64   3.8.3
2     2016-04-01   5.10.0      x86 x64   3.8.3
3     2016-03-22   5.9.1       x86 x64   3.7.3
4     2016-03-16   5.9.0       x86 x64   3.7.3
5     2016-03-09   5.8.0       x86 x64   3.7.3
6     2016-03-02   5.7.1       x86 x64   3.6.0
7     2016-02-23   5.7.0       x86 x64   3.6.0
+--------------------------------------------------+
```

### 例子（官网）
1. 不存在 Node.js 环境时，下载 Node.js latest version 并设置为全局 Node.js 。

```csharp
c:\> gnvm config registry TAOBAO
Set success, registry new value is http://npm.taobao.org/mirrors/node/
c:\> gnvm install latest -g
Notice: local  latest version is unknown.
Notice: remote latest version is 5.10.1.
Start download Node.js versions [5.10.1].
5.10.1: 100% [==================================================>] 13s
End download.
Set success, latestversion new value is 5.10.1
Set success, global Node.js version is 5.10.1.
```

2. 升级本地 Node.js latest 版本。

```csharp
c:\> gnvm config registry TAOBAO
Set success, registry new value is http://npm.taobao.org/mirrors/node/
c:\> gnvm update latest
Notice: local  Node.js latest version is 5.9.1.
Notice: remote Node.js latest version is 5.10.1 from http://npm.taobao.org/mirrors/node/.
Waring: remote latest version 5.10.1 > local latest version 5.9.1.
Waring: 5.10.1 folder exist.
Update success, Node.js latest version is 5.10.1.
```

3. 查看本地 Node.js global and latest 版本。

```csharp
c:\> gnvm node-version
Node.js latest version is 5.10.1.
Node.js global version is 5.10.1.
```

4. 验证 .gnvmrc registry 正确性。

```csharp
c:\> gnvm config registry test
Notice: gnvm config registry http://npm.taobao.org/mirrors/node/ valid ................... ok.
Notice: gnvm config registry http://npm.taobao.org/mirrors/node/index.json valid ......... ok.
```

5. 本地不存在 NPM 时，安装当前 Node.js 版本对应的 NPM 版本。

```csharp
c:\ gnvm npm global
Waring: current path C:\xxx\xxx\nodejs\ not exist npm.
Notice: local    npm version is unknown
Notice: remote   npm version is 3.8.3
Notice: download 3.8.3 version [Y/n]? y
Start download new npm version v3.8.3.zip
v3.8.3.zip: 100% [==================================================>] 4s
Start unzip and install v3.8.3.zip zip file, please wait.
Set success, current npm version is 3.8.3.
c:\> npm -v
3.8.7
```

6. 安装 NPM latest 版本。

```csharp
c:\ gnvm npm laltest
Notice: local    npm version is 3.7.3
Notice: remote   npm version is 3.8.7
Notice: download 3.8.7 version [Y/n]? y
Start download new npm version v3.8.7.zip
v3.8.7.zip: 100% [==================================================>] 3s
Start unzip and install v3.8.7.zip zip file, please wait.
Set success, current npm version is 3.8.7.
c:\> npm -v
3.8.7
```


