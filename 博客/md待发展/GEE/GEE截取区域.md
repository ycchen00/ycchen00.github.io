.clipToCollection 矢量裁剪

https://www.cnblogs.com/wangchengcong/p/14254260.html

https://blog.csdn.net/little00bee/article/details/105666994



这个.clipToCollection是ee.image的函数，也就是说只有用image引入数据时才可以调用，如果用ee.imageCollection引入数据，会提示clipToCollection is not a fuction。

这里裁剪用的范围是上传至asset的矢量边界，使用.clipToCollection（）剪裁，如果裁剪边界是自己画的geometry矩形框，需要使用.clip（）函数。

https://zhuanlan.zhihu.com/p/73206047

.filterBounds

https://www.jianshu.com/p/99eb2a65e4ce

    ee.Collection.filterBounds()
    Shortcut to filter a collection by geometry. Items in the collection with a footprint that fails to intersect the bounds will be excluded when the collection is evaluated.
    This is equivalent to this.filter(ee.Filter.bounds(...)).
    Returns the filtered collection.
    Arguments:
    this:collection (Collection):
    The Collection instance.
    geometry (Feature|Geometry):
    The geometry to filter to.
    Returns: Collection

空间"相交"操作，选择重叠部分。
输入参数：影像数据集，地理要素对象。



.clip 栅格裁剪

https://zhuanlan.zhihu.com/p/30555865