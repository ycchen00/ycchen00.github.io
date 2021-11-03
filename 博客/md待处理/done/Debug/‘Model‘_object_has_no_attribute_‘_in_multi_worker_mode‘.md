---
 title: Debug | 'Model' object has no attribute '_in_multi_worker_mode'
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>'Model' object has no attribute '_in_multi_worker_mode'
<!--less-->
﻿**报错信息**
`'Model' object has no attribute '_in_multi_worker_mode'`

**分析**
可能是由于`tensorflow(tf)` 和 `keras` 的API混用
参考文献：
[reference1](https://fantashit.com/model-object-has-no-attribute-in-multi-worker-mode/)
[reference2](https://stackoverflow.com/questions/58650715/sequential-object-has-no-attribute-in-multi-worker-mode)

**解决方法**
统一一下，比如统一为`keras`，将：
`tf.keras.callbacks.ModelCheckpoint()`
`tf.keras.callbacks.CSVLogger`
去除tf为:
`keras.callbacks.ModelCheckpoint()`
`keras.callbacks.CSVLogger`

