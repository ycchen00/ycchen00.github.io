---
 title: Debug | (‘Keyword argument not understood:‘, ‘input‘)
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>TypeError: ('Keyword argument not understood:', 'input')
<!--less-->
**报错信息**
`TypeError: ('Keyword argument not understood:', 'input')`

**分析**
找到有问题的代码，`model = Model(input=inputs, output=[nestnet_output_4])`

**解决方法**
老伙计了，多半又是keras版本的锅，换成`model = Model(inputs=..., outputs=...)`就好了，解决！
