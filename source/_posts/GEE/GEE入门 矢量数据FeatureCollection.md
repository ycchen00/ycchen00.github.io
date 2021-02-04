---
 title: GEE入门[4] | 矢量数据FeatureCollection（行政区划分）
 date: 
 categories:
 - GEE
 - GEE入门
 tags:
 - Google Earth Engine
 - Remote sensing
---
>GEE系列第四篇，介绍矢量数据FeatureCollection相关操作，并用行政区矢量划分数据作为例子。
<!--less-->

&emsp;&emsp;这节介绍下FeatureCollection相关操作。以行政区域矢量数据为例，介绍如何导入行政区域矢量数据并进行相关操作~
## FeatureCollection数据
&emsp;&emsp;首先导入行政矢量数据，在GEE中是FeatureCollection类型，大家可以自己在网上找到相关资源下载后自己upload到GEE平台上。这里提供麻辣GIS的[下载链接](https://malagis.com/gis-data-china-province.html) 。
&emsp;&emsp;为了进一步展示效果，导入了夜光遥感数据进行后续处理。

```javascript
var viirsnight = ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG"),
    province = ee.FeatureCollection("users/daviddoyle1/Province_region");
```
&emsp;&emsp;这是upload后属性界面：
![](https://img-blog.csdnimg.cn/2020101117110632.png?x-oss-process)
&emsp;&emsp;有乱码貌似是因为中文问题，暂没有处理。

```javascript
print(province,'Province')    
```
&emsp;&emsp;在javascript平台print出来，可以看到共34个省级行政区：

![](https://img-blog.csdnimg.cn/20201011171456710.png?x-oss-process)


## 筛选
&emsp;&emsp;接着举几个筛选的例子。先上代码

```javascript
// filterMetadata()通过属性筛选
var XJ=province.filterMetadata('ID','equals','Xinjiang')
print('XinJiang',XJ)     

// .limit(筛选数量、筛选字段（可选）、排序方式（可选，默认从小到大True）)
var province_limit=province.limit(5,'X',false) // 根据X轴筛选
print('province_limit',province_limit)

// 根据空间位置筛选
var CQ_Point =ee.Geometry.Point([106.92371845031437, 29.430312117372274]);
var CQ = province.filterBounds(CQ_Point);
print('ChongQing',CQ) 
```
&emsp;&emsp;简而言之，可以通过属性、空间位置等信息进行筛选，然后也可以批量筛选。
&emsp;&emsp;print结果如下：
![](https://img-blog.csdnimg.cn/20201011172411202.png?x-oss-process)
## 要素信息
&emsp;&emsp;当我们输错信息筛选时，比如将'Xinjiang'输成'XinJiang'，这时候不会报错，但是我们输出的结果就是0element，即没有任何元素通过筛选。
&emsp;&emsp;那么进行属性筛选时如何找到我们目标区域对应的属性呢，这个时候就需要掌握要素信息相关的函数了。
&emsp;&emsp;先放一大串代码：

```javascript
//要素信息提取（复制）
var China_ID = province.select(['ID']);
var China_NAME = province.select(['NAME']);

print(China_ID,"ID");
print(China_NAME,"NAME");

//要素信息筛选（去除重复字段）
var China_ID2 = province.distinct(['ID']);
print(China_ID2,"ID2");
```

&emsp;&emsp; 我们提取出ID和NAME属性后，可以进行去除等操作。输出结果如下：
&emsp;&emsp;ID：
![](https://img-blog.csdnimg.cn/20201011173457518.png?x-oss-process)
&emsp;&emsp; NAME（依然乱码中）：
![](https://img-blog.csdnimg.cn/20201011173547887.png?x-oss-process)
&emsp;&emsp;由于该数据ID没有重复数据，即没省拼音一致，故结果没变：
![](https://img-blog.csdnimg.cn/20201011173624419.png#pic_center)

&emsp;&emsp;既然我们能提取出属性信息，那就方便我们进一步搞事情:)
我们可以根据筛选到的元素进行合并生成新矢量区域，或者改属性内容也是so easy~如下，将西藏和新疆两个矢量数据合并并属性定义为西部：
```javascript
//空间信息合并（合并后会丢失原有属性信息）
var China_Union = province.union();

var XJ=province.filterMetadata('ID','equals','Xinjiang')
var XZ=province.filterMetadata('ID','equals','Xizang')
var XJ_XZ_Merge=XJ.merge(XZ);
print(XJ_XZ_Merge,'XJ_XZ_Merge');    

//信息更改重置
var XJ_XZ_Merge_Set=XJ.merge(XZ).set('NAME','Xibu');
print(XJ_XZ_Merge_Set,'XJ_XZ_Merge reset');
```
&emsp;&emsp;结果对比，可以看到合并后仍然有个两个矢量元素而且属性信息丢失了，自己再赋予就好了：
![](https://img-blog.csdnimg.cn/20201011174324984.png?x-oss-process)
&emsp;&emsp;继续放代码：

```javascript
//对属性表进行排序
var China_Sort_X = province.sort('X',false)
//根据X进行排序，默认都是True，从小到大，最后得到前五个的省份
var sort_test=China_Sort_X.limit(5);
print(sort_test)

//将多个属性字段形成新的属性字段
var China_Array = province.makeArray(['ID','X','Y'],'An_Array')
//将'OBJECTID','Shape_Area','Shape_Leng'三个字段结合为'An_Array'的一个字段
print(China_Array)
```
&emsp;&emsp;btw.后续就不放太多结果图了，节省篇幅

## 其他类型
&emsp;&emsp;也可以将提取到的元素进行类型转换，比如提取geometry信息进行其他操作，转换成栅格数据等：

```javascript
// 获得所有feature的Geometry信息
var China_Geometry = province.geometry();
print(China_Geometry,'China_Geometry');

//矢量转栅格
var China_to_Image = province.reduceToImage(['X'],ee.Reducer.first())
```
&emsp;&emsp;当然还有toList用于属性数据提取等操作，有机会会继续更新。

## 夜光遥感数据提取
&emsp;&emsp;提取出每个行政区矢量数据最直接的用法就是进行卫星影像的裁剪了，这里用夜光遥感数据为例，裁剪新疆区域影像：

```javascript
// test 夜光
var image=ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
                    .filterDate("2014-01-01","2014-02-01")
                    .first()
                    // .clip(XJ)  // clip()针对geometry对象
                    .clipToCollection(XJ)
                    ;
var visParams = {bands:['avg_rad'],gain:100}

Map.addLayer(image,visParams,'virrsnight1',false);
```


## 完整代码
&emsp;&emsp;最后附上整个完整代码以及可视化：

```javascript
var viirsnight = ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG"),
    province = ee.FeatureCollection("users/daviddoyle1/Province_region");

print(province,'Province')     

// filterMetadata()通过属性筛选
var XJ=province.filterMetadata('ID','equals','Xinjiang')
print('XinJiang',XJ)     

// .limit(筛选数量、筛选字段（可选）、排序方式（可选，默认从小到大True）)
var province_limit=province.limit(5,'X',false) // 根据X轴筛选
print('province_limit',province_limit)

// 根据空间位置筛选
var CQ_Point =ee.Geometry.Point([106.92371845031437, 29.430312117372274]);
var CQ = province.filterBounds(CQ_Point);
print('ChongQing',CQ) 

//要素信息提取（复制）
var China_ID = province.select(['ID']);
var China_NAME = province.select(['NAME']);

print(China_ID,"ID");
print(China_NAME,"NAME");


//要素信息筛选（去除重复字段）
var China_ID2 = province.distinct(['ID']);
print(China_ID2,"ID2");

//空间信息合并（合并后会丢失原有属性信息）
var China_Union = province.union();

var XJ=province.filterMetadata('ID','equals','Xinjiang')
var XZ=province.filterMetadata('ID','equals','Xizang')
var XJ_XZ_Merge=XJ.merge(XZ);
print(XJ_XZ_Merge,'XJ_XZ_Merge');    

//信息更改重置
var XJ_XZ_Merge_Set=XJ.merge(XZ).set('NAME','Xibu');
print(XJ_XZ_Merge_Set,'XJ_XZ_Merge reset');

//对属性表进行排序
var China_Sort_X = province.sort('X',false)
//根据X进行排序，默认都是True，从小到大，最后得到前五个的省份
var sort_test=China_Sort_X.limit(5);

//将多个属性字段形成新的属性字段
var China_Array = province.makeArray(['ID','X','Y'],'An_Array')
//将'OBJECTID','Shape_Area','Shape_Leng'三个字段结合为'An_Array'的一个字段
print(China_Array)

// 获得所有feature的Geometry信息
var China_Geometry = province.geometry();
print(China_Geometry,'China_Geometry');

//矢量转栅格
var China_to_Image = province.reduceToImage(['X'],ee.Reducer.first())

//toList命令（更便于属性数据的提取）
// ......

// test 夜光
var image=ee.ImageCollection("NOAA/VIIRS/DNB/MONTHLY_V1/VCMSLCFG")
                    .filterDate("2014-01-01","2014-02-01")
                    .first()
                    // .clip(XJ)  // clip()针对geometry对象
                    .clipToCollection(XJ)
                    ;
var visParams = {bands:['avg_rad'],gain:100}

Map.centerObject(province,4);
Map.addLayer(province,{},'Province',false); 
Map.addLayer(image,visParams,'virrsnight1',false);
Map.addLayer(XJ,{color:'FF0000'},"XinJiang",false);
Map.addLayer(province_limit,{},'Province_part',false); 
Map.addLayer(CQ,{color:'FF0000'},"ChongQing",false);
Map.addLayer(China_Union,{color:'F00000'},'union',false);
Map.addLayer(XJ_XZ_Merge,{color:'F00000'},'merge',false);
Map.addLayer(China_to_Image,{"min":1,"max":40,"palette":["ff9c07","f0ff1b","1aff0b"]},'image',false)
```

