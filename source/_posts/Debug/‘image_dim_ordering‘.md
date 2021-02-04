---
 title: Debug | AttributeError： module ‘keras.backend‘ has no attribute ‘image_dim_ordering
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>AttributeError: module 'keras.backend' has no attribute 'image_dim_ordering'
<!--less-->
**报错信息**
`AttributeError: module 'keras.backend' has no attribute 'image_dim_ordering'`

**分析**
一般是因为Keras的版本代码不同造成的，找到报错行一般是`if K.image_dim_ordering() == ...`或`K.image_data_format() == ...`

**解决方法**
这里如果用的是最新的keras，代码却是`if K.image_dim_ordering() == "th"`改成`K.image_data_format() == "channels_first"`。同理，如果是较旧的keras，反过来即可。

这个错误比较常见，网上也有很多解决方案，多翻翻试试总能找到~

