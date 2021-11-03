`报错信息：`
在安装`pip install gym`的时候遇到了这个问题：

>ERROR: Command errored out with exit status 1: 'd:\python391\python.exe' -u -c 'import sys, setuptools, tokenize; sys.argv[0] = '"'"'C:\\Users\\84468\\AppData\\Local\\Temp\\pip-install-anu13qxv\\pillow_61f83bcd922f4175ac1d8c645e7287a2\\setup.py'"'"'; __file__='"'"'C:\\Users\\84468\\AppData\\Local\\Temp\\pip-install-anu13qxv\\pillow_61f83bcd922f4175ac1d8c645e7287a2\\setup.py'"'"';f=getattr(tokenize, '"'"'open'"'"', open)(__file__);code=f.read().replace('"'"'\r\n'"'"', '"'"'\n'"'"');f.close();exec(compile(code, __file__, '"'"'exec'"'"'))' install --record 'C:\Users\84468\AppData\Local\Temp\pip-record-2buq9czv\install-record.txt' --single-version-externally-managed --compile --install-headers 'd:\python391\Include\Pillow' Check the logs for full command output.


`分析问题：`
经过网上查找和分析，认为是python版本的问题。
比如`gym`需要XX版本的`Pillow`，而这个版本的`Pillow`在`python 3.9`下无法安装，然后导致问题出现。


`解决方案：`
将python版本降到需求，或者使用`Anaconda`构建虚拟环境。
