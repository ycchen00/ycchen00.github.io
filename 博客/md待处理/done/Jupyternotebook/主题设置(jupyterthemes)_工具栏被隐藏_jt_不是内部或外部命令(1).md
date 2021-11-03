
---
 title: Jupyter Notebook | 主题设置
 date: 
 updated: 
 categories:
 - Python
 - Jupyter Notebook
 tags:
 - Python
 - Jupyter Notebook
---
>Jupyter Notebook系列，关于主题设置
<!--less-->
﻿
# 主题设置
jupyter notebook主题不好看，可以通过`jupyterthemes`更换主题。
[jupyterthemes官网](https://github.com/dunovank/jupyter-themes#command-line-examples)
## 安装库
安装`jupyterthemes`:
```python
# install jupyterthemes
pip install jupyterthemes

# upgrade to latest version
pip install --upgrade jupyterthemes
```

## 设置主题
接着通过`jt`命令可以调整主题，包括主题、字体大小、颜色等，功能非常齐全~
```
jt  [-h] [-l] [-t THEME] [-f MONOFONT] [-fs MONOSIZE] [-nf NBFONT]
    [-nfs NBFONTSIZE] [-tf TCFONT] [-tfs TCFONTSIZE] [-dfs DFFONTSIZE]
    [-m MARGINS] [-cursw CURSORWIDTH] [-cursc CURSORCOLOR] [-vim]
    [-cellw CELLWIDTH] [-lineh LINEHEIGHT] [-altp] [-altmd] [-altout]
    [-P] [-T] [-N] [-r] [-dfonts]
```
具体参数：

| cl options            | arg     | default |
| --------------------- | ------- | ------- |
| Usage help            | -h      | --      |
| List Themes           | -l      | --      |
| Theme Name to Install | -t      | --      |
| Code Font             | -f      | --      |
| Code Font-Size        | -fs     | 11      |
| Notebook Font         | -nf     | --      |
| Notebook Font Size    | -nfs    | 13      |
| Text/MD Cell Font     | -tf     | --      |
| Text/MD Cell Fontsize | -tfs    | 13      |
| Pandas DF Fontsize    | -dfs    | 9       |
| Output Area Fontsize  | -ofs    | 8.5     |
| Mathjax Fontsize (%)  | -mathfs | 100     |
| Intro Page Margins    | -m      | auto    |
| Cell Width            | -cellw  | 980     |
| Line Height           | -lineh  | 170     |
| Cursor Width          | -cursw  | 2       |
| Cursor Color          | -cursc  | --      |
| Alt Prompt Layout     | -altp   | --      |
| Alt Markdown BG Color | -altmd  | --      |
| Alt Output BG Color   | -altout | --      |
| Style Vim NBExt*      | -vim    | --      |
| Toolbar Visible       | -T      | --      |
| Name & Logo Visible   | -N      | --      |
| Kernel Logo Visible   | -kl     | --      |
| Reset Default Theme   | -r      | --      |
| Force Default Fonts   | -dfonts | --      |

`jt -l`会显示所有可用主题：
```
Available Themes:
   chesterish
   grade3
   gruvboxd
   gruvboxl
   monokai
   oceans16
   onedork
   solarizedd
   solarizedl
  ```
这篇[博客](https://blog.csdn.net/DSTJWJW/article/details/85304390)有各个主题展示~

简单设置主题使用`jt -t <theme>`即可，个人喜欢`chesterish`：
```
jt -t chesterish
```

**Tip**:设置后要重新加载jupyter才可以看到新的主题 :)

新主题效果如下：
![](https://img-blog.csdnimg.cn/20210208114232100.png#pic_center)
### Debug：jt 不是内部或外部命令
下载完后，有小伙伴可能遇到了这个`'jt' 不是内部或外部命令`，参考这篇[博客](https://blog.csdn.net/dlh_sycamore/article/details/82827716)提出解决方案：

`原因:`
`jupyterthemes`安装目录并不在环境变量中
再次运行`pip install jupyterthemes` 第一行所示即为安装目录。
每个人都不一样，比如博主的是：`c:\users\...\appdata\roaming\python\python36\site-packages`
![](https://img-blog.csdnimg.cn/20210303121515557.png#pic_center)
将此添加到环境变量即可 :)
![](https://img-blog.csdnimg.cn/20210303121913323.png#pic_center)

再运行`jt -l`就不会出现问题了

### 叨：更换主题后工具栏消失
更换主题后发现工具栏不见了 :(
![](https://img-blog.csdnimg.cn/20210208134947157.png#pic_center)如果想要显示工具栏，设置主题时需要加上`-T`，比如：
```
jt -t chesterish -T
```
工具栏就出来啦！
![](https://img-blog.csdnimg.cn/20210208135214637.png#pic_center)


