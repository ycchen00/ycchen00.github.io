---
 title: GEE实战 | LULC获取与处理
 date: 
 updated: 
 categories:
 - GEE
 - GEE实战
 tags:
 - Google Earth Engine
 - Remote sensing
 copyright: true
---
>GEE实战系列，简单介绍LULC(Land cover & land classification)的相关数据库和相关代码。
<!--less-->
# LULC数据库
&emsp;&emsp;LULC百度百科：LULC（the land-use/land-cover 土地利用和土地覆盖）数据包括城市和建筑区、农田、牧场、林地、水、湿地、荒地、冻土带和终年积雪或终年结冰地带的有关信息。
&emsp;&emsp;GEE提供了大量LULC数据库，搜索相关结果如下：
![](https://img-blog.csdnimg.cn/20200906170719813.png?x-oss-process)
![](https://img-blog.csdnimg.cn/20200906170732699.png?x-oss-process)
&emsp;&emsp;点击进去皆有相关介绍和导入方式以及用法示例等。下面简单介绍下前几个数据库导入方式并重点介绍美国的NLCD数据库。


![](https://img-blog.csdnimg.cn/2020090617101157.png?x-oss-process)
</br>

## MCD12Q1.006
&emsp;&emsp;MCD12Q1 V6产品按六种不同的分类方案按年间隔（2001-2016年）提供全球土地覆盖类型。它是使用MODIS Terra和Aqua反射数据的监督分类得出的。然后，对受监管的分类进行额外的后处理，这些后处理结合了先前的知识和辅助信息以进一步完善特定的类别。

```javascript
//MCD12Q1.006
var dataset = ee.ImageCollection('MODIS/006/MCD12Q1');
var igbpLandCover = dataset.select('LC_Type1');
var igbpLandCoverVis = {
  min: 1.0,
  max: 17.0,
  palette: [
    '05450a', '086a10', '54a708', '78d203', '009900', 'c6b044', 'dcd159',
    'dade48', 'fbff13', 'b6ff05', '27ff87', 'c24f44', 'a5a5a5', 'ff6d4c',
    '69fff8', 'f9ffa4', '1c0dff'
  ],
};
Map.setCenter(6.746, 46.529, 6);
Map.addLayer(igbpLandCover, igbpLandCoverVis, 'IGBP Land Cover');
```

![](https://img-blog.csdnimg.cn/20200906181312303.png?x-oss-process)

</br>

##  GlobCover
&emsp;&emsp;GlobCover 2009是基于ENVISAT中分辨率成像光谱仪（MERIS）1B级数据的全球土地覆盖图，该数据以全分辨率模式获取，空间分辨率约为300米。
```javascript
//GlobCover
var dataset = ee.Image('ESA/GLOBCOVER_L4_200901_200912_V2_3');
var landcover = dataset.select('landcover');
Map.setCenter(-88.6, 26.4, 3);
Map.addLayer(landcover, {}, 'Landcover');
```
![](https://img-blog.csdnimg.cn/20200906173246181.png?x-oss-process)

</br>

##  CGLS-LC100 collection 2
&emsp;&emsp;The Copernicus Global Land Service（CGLS）在全球范围内针对陆地表面的状况和演变提供一系列生物地球物理产品。 100 m分辨率的动态土地覆盖图（CGLS-LC100）是CGLS产品组合中的新产品，可提供100 m空间分辨率的全球土地覆盖图。
 &emsp;&emsp;CGLS土地覆盖产品除了提供了主要的土地覆盖分类，还包括所有基本土地覆盖类别的连续田地层，从而为土地覆盖类型的植被/地面覆盖提供比例估计。这种连续的分类方案可能比标准分类方案更好地描述了异类土地覆盖的区域，因此，可以针对应用进行量身定制（例如森林监测，作物监测，生物多样性和保护，监测非洲的环境和安全，气候模拟等等）。
```javascript
//Copernicus
var dataset = ee.ImageCollection("COPERNICUS/Landcover/100m/Proba-V/Global");

var visualization = {
  bands: ['discrete_classification'],
  min: 0.0,
  max: 200.0,
  palette: [
    "032f7e","02740b","02740b","8cf502","8cf502","a4da01",
    "ffbd05","ffbd05","7a5a02","f0ff0f","869b36","6091b4",
    "999999","ff4e4e","ff4e4e","ffffff","feffc0","020202",
    "020202",
  ]
};

Map.setCenter(-88.6, 26.4, 1);

Map.addLayer(dataset, visualization, "Land Cover");
```
![](https://img-blog.csdnimg.cn/20200906172354362.png?x-oss-process)

</br>

##  Copernicus CORINE Land Cover
&emsp;&emsp;Copernicus CORINE Land Cover始于1985年，以标准化欧洲土地数据收集以支持环境政策制定。该项目由欧洲环境局（EEA）在欧盟哥白尼计划的框架内进行协调，并由国家团队实施。
&emsp;&emsp;时间段为：
&emsp;&emsp;* 1990年asset：1989年至1998年
&emsp;&emsp;* 2000年asset：1999年至2001年
&emsp;&emsp;* 2006年asset：2005年至2007年
&emsp;&emsp;* 2012年asset：2011年至2012年
&emsp;&emsp;* 2018年asset：2017年至2018年

```javascript
var dataset = ee.Image('COPERNICUS/CORINE/V20/100m/2012');
var landCover = dataset.select('landcover');
Map.setCenter(16.436, 39.825, 6);
Map.addLayer(landCover, {}, 'Land Cover');
```

![](https://img-blog.csdnimg.cn/20200906172933962.png?x-oss-process)


##  NLCD
&emsp;&emsp;NLCD（国家土地覆盖数据库）是一个基于Landsat的30米土地覆盖数据库，涵盖8个时间段（1992、2001、2004、2006、2008、2011、2013和2016）。其中， 1992年的图像无法与NLCD的其他时间段直接比较。 该数据集包含八个时期中每个时期的美国大陆图像，以及2001和2011年分别位于阿拉斯加，夏威夷和波多黎各的图像。
&emsp;&emsp;NLCD共有20类，分类如下。[更多信息](https://www.mrlc.gov/data/legends/national-land-cover-database-2016-nlcd2016-legend)
![](https://img-blog.csdnimg.cn/20200906171340267.png?x-oss-process=200x600)

```javascript
var dataset = ee.ImageCollection('USGS/NLCD');
var landcover = dataset.select('landcover');
var landcoverVis = {
  min: 0.0,
  max: 95.0,
  palette: [
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '466b9f',
    'd1def8',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    'dec5c5',
    'd99282',
    'eb0000',
    'ab0000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    'b3ac9f',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '68ab5f',
    '1c5f2c',
    'b5c58f',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    'af963c',
    'ccb879',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    'dfdfc2',
    'd1d182',
    'a3cc51',
    '82ba9e',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    'dcd939',
    'ab6c28',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    '000000',
    'b8d9eb',
    '000000',
    '000000',
    '000000',
    '000000',
    '6c9fb8'
  ],
};
Map.setCenter(-95, 38, 5);
Map.addLayer(landcover, landcoverVis, 'Landcover');
```
![](https://img-blog.csdnimg.cn/20200906181816875.png?x-oss-process)


### 映射
&emsp;&emsp;从分类图和代码可以看出，多分类对应的像素值并不是连续的。所以有时候为了方便处理，比如训练监督分类模型，最好将其元素值映射为连续的，那么该如何做呢，先上一个简单的例子，根据多分类结果提取水体，这里我们将11和12类都定义为水体。
&emsp;&emsp;通过使用remap函数可以将像素值映射到其他像素值，完成映射、合并等操作。

```javascript
var LULC = ee.Image("USGS/NLCD/NLCD2016");
var landcover_water= LULC.select('landcover')
                      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
                            ,[ 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],0)
                            .rename('landcover');

var wcoverVis = {
  bands:'landcover',
  min: 0.0,
  max: 1.0,
  palette: [
    "000000","00ff"
  ],
};

Map.addLayer(landcover_water,wcoverVis, 'water');
```
&emsp;&emsp;结果如图，水体对应像素值为1，非水体为0。可视化中，水体显示为蓝色，非水体为黑色。

![](https://img-blog.csdnimg.cn/20200906190009604.png?x-oss-process)


&emsp;&emsp;接下来映射为8类地物。同理也可以映射为20类（本数），6类等。
```javascript
var LULC = ee.Image("USGS/NLCD/NLCD2016");
var landcover_8= LULC.select('landcover')
                 .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
                            ,[ 0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 7, 7],7)
                            .rename('landcover');

var c8coverVis = {
  bands:'landcover',
  min: 0.0,
  max: 7.0,
  palette: [
    "ff0000","00ff00","0000ff","ffff00",
    "ff00ff","00ffff","ffffff","000000"
  ],
};

Map.addLayer(landcover_8,c8coverVis, 'gourndtruth');
```
&emsp;&emsp;可视化结果如图。
![](https://img-blog.csdnimg.cn/20200906190252559.png?x-oss-process)
###  单独映射
&emsp;&emsp;其中，如果不希望映射到一张图上，可以单独映射然后合并。以8分类为例。最后合成仍然是一张图，但是具有8个波段属性。

```javascript
// var LULC = ee.Image("USGS/NLCD/NLCD2016");
var nlcd_0 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[1,1, 0,0, 0,0, 0,0, 0,0,0,0,0,0,0,0,0,0,0,0],0)
      .rename('LABEL_0')

var nlcd_1 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 1,1, 1,1, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0],0)
      .rename('LABEL_1')

var nlcd_2 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 0,0, 0,0, 1,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0],0)
      .rename('LABEL_2')
 
var nlcd_3 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 0,0, 0,0, 0,1, 1,1, 0,0, 0,0, 0,0, 0,0, 0,0],0)
      .rename('LABEL_3')

var nlcd_4 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 0,0, 0,0, 0,0, 0,0, 1,1, 0,0, 0,0, 0,0, 0,0],0)
      .rename('LABEL_4')

var nlcd_5 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 1,1, 1,1, 0,0, 0,0],0)
      .rename('LABEL_5')

var nlcd_6 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 1,1, 0,0],0)
      .rename('LABEL_6')

var nlcd_7 = ee.Image('USGS/NLCD/NLCD2016')
      .select('landcover')
      .remap([11,12,21,22,23,24,31,41,42,43,51,52,71,72,73,74,81,82,90,95]
          ,[0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 1,1],0)
      .rename('LABEL_7')

// 8类合成LULC
var featureStack = ee.Image.cat([
  nlcd_0.select('LABEL_0'),
  nlcd_1.select('LABEL_1'),
  nlcd_2.select('LABEL_2'),
  nlcd_3.select('LABEL_3'),
  nlcd_4.select('LABEL_4'),
  nlcd_5.select('LABEL_5'),
  nlcd_6.select('LABEL_6'),
  nlcd_7.select('LABEL_7')
]).float()

// print(featureStack,'featureStack')
var LABEL=['LABEL_0', 'LABEL_1', 'LABEL_2', 'LABEL_3', 'LABEL_4', 'LABEL_5', 'LABEL_6', 'LABEL_7']

// 和输入数据合成
var featureStacks = ee.Image.cat([
  image.select(Bands),
  featureStack.select(LABEL),
]).float()
// print(featureStacks,'featureStacks')
```

