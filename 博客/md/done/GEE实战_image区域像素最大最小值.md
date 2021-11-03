
---
 title: GEE实战 | image区域像素最大最小值
 date: 
 updated: 
 categories:
 - 
 tags:
 - 
---
>
<!--less-->
﻿

# image区域像素最大最小值
有段时间苦恼无法得到GEE中某块区域某个波段的最大最小像素值，并不像其他直接使用min,max即可，经过查询，需要使用`ee.Reducer`的相关函数：

## min & max
`ee.Reducer.min() `

>解释：获取输入的最小值。如果输入是数值列表，获取数值的最小值；如果是影像集合，获取所有匹配波段的每一个像素的最小值；如果是单张影像，获取波段中的像素最小值。
> \
>其中min()可以带一个参数，如果是多维的列表可以通过这个参数计算每一个列表的最小值。 

`ee.Reducer.max()`

>解释：获取输入的最大值。如果输入是数值列表，获取数值的最大值；如果是影像集合，获取所有匹配波段的每一个像素的最大值；如果是单张影像，获取波段中的像素最大值。 

```javascript
var roi1 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[13.6, 45.4],
          [13.6, 44.76],
          [14.8, 44.76],
          [14.8, 45.4]]]),
    l8sr = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA");

var image = l8sr.filterDate('2017-04-01', '2017-09-30')
                .filter(ee.Filter.lt('CLOUD_COVER',5))
                .median().clip(roi1).select('B8')
print(image)

var min = image.reduceRegion({
  reducer: ee.Reducer.min(),
  geometry:roi1,
  scale: 30,
  maxPixels: 1e13
});
print(min);


var max = image.reduceRegion({
  reducer: ee.Reducer.max(),
  geometry:roi1,
  scale: 30,
  maxPixels: 1e13
});
print(max);
```

输出结果： 
![](https://img-blog.csdnimg.cn/20210302171546394.png#pic_center)
## minMax
其实如果想同时获取min和max可以直接使用`minMax`函数
`ee.Reducer.minMax()`

>解释：获取输入的最小值和最大值，如果输入是数值列表，获取数值的最小值和最大值；如果是影像集合，获取所有匹配波段的每一个像素的最小值和最大值；如果是单张影像，获取波段中的像素最小值和最大值。 

```javascript
var roi1 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[13.6, 45.4],
          [13.6, 44.76],
          [14.8, 44.76],
          [14.8, 45.4]]]),
    l8sr = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA");

var image = l8sr.filterDate('2017-04-01', '2017-09-30')
                .filter(ee.Filter.lt('CLOUD_COVER',5))
                .median().clip(roi1).select('B8')
print(image)

var minMax = image.reduceRegion({
  reducer: ee.Reducer.minMax(),
  geometry:roi1,
  scale: 30,
  maxPixels: 1e13
});

print(minMax);
```

**参考文献：**
[Reducer介绍](https://zhuanlan.zhihu.com/p/46683686)
