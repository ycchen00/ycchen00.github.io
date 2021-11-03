
---
 title: Debug | ERROR: Could not install packages due to an OSError: [WinError 5] 拒绝访问。
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>ERROR: Could not install packages due to an OSError: [WinError 5] 拒绝访问。
<!--less-->
﻿在安装`pip install jupyterthemes`时遇到了无法快乐pip的情况：

**报错信息**
`ERROR: Could not install packages due to an OSError: [WinError 5] 拒绝访问。: 'C:\\Users\\...\\AppData\\Local\\Temp\\pip-uninstall-xq6nqdvs\\jupyter-notebook.exe' Consider using the --user option or check the permissions.`

**分析**
看到最后一句`Consider using the --user option or check the permissions.` 应该是权限问题，跟着建议来就可

**解决方法**
将`pip install ...`加入`--user`为`pip install --user ...`即可
如果还是有问题，可以以管理员权限运行`cmd`再输入上述命令行试试~
