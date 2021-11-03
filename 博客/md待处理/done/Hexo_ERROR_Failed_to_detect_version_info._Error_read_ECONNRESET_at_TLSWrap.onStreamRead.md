
---
 title: 
 date: 
 updated: 
 categories:
 - 
 tags:
 - 
---
>
<!--less-->
﻿`报错信息`
在hexo中运行`hexo g`的时候出现了这个问题：
```bash
ERROR Failed to detect version info. Error message:
ERROR Error: read ECONNRESET
    at TLSWrap.onStreamRead (internal/stream_base_commons.js:205:27) {
  errno: 'ECONNRESET',
  code: 'ECONNRESET',
  syscall: 'read'
}
```

`分析`
网上查资料查了好久，认为是与GitHub的连接有问题


`解决方法`
检查Github连接相关的代码，比如改用ssh，免密码登录等操作
比如`_config.yml`这段代码可以看下这段的`repo`部分：

```bash
deploy:
    type: git
    repo: ……
    branch: master
```

