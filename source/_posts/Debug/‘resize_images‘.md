---
 title: Debug | AttributeError： module ‘tensorflow._api.v2.image‘ has no attribute ‘resize_images‘
 date: 
 updated: 
 categories:
 - Debug
 tags:
 - Debug
---
>AttributeError: module 'tensorflow._api.v2.image' has no attribute 'resize_images'
<!--less-->
**报错信息**
`AttributeError: module 'tensorflow._api.v2.image' has no attribute 'resize_images'`

**分析**
还是老问题，TensorFlow版本问题

**解决方法**
将`resize_images`换成`resize`


