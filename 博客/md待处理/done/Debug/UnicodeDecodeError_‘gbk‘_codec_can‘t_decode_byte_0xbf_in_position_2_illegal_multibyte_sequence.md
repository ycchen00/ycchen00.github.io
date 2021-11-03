
---
 title: Debug | UnicodeDecodeError: 'gbk' codec can't decode byte 0xbf in position 2: illegal multibyte sequence
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>UnicodeDecodeError: 'gbk' codec can't decode byte 0xbf in position 2: illegal multibyte sequence
<!--less-->
﻿`报错信息：`

```bash
UnicodeDecodeError: 'gbk' codec can't decode byte 0xbf in position 2: illegal multibyte sequence
```

`问题分析：`
`with open(path+'/'+file) as f:`
是在处理md文本文件时候遇到的。
大致意思是当内部编码转化成 `gbk`编码时出错，认为我们的文件并不是`gbk`编码，可能是`utf-8`编码。

`解决方案：`
`open`函数默认 `gbk`编码，这里指定编码方式即可，比如这里指定`utf-8`解决问题：
`with open(path+'/'+file, encoding='utf-8') as f:`
