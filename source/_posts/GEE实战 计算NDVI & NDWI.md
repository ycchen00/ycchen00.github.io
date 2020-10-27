---
 title: GEE实战 | 计算NDVI & NDWI
 date: 
 categories:
 - GEE
 tags:
 - Google Earth Engine
 - Remote sensing
 copyright: true
---
介绍了如何通过GEE计算NDVI和NDWI
<!--less-->

# NDVI

## NDVI数据库
&emsp;&emsp;GEE自身提供了相当多的NDVI资源可以直接导入使用。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200901162210648.png?x-oss-process)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200901162216594.png?x-oss-process)



&emsp;&emsp;以Landsat 8 8天周期NDVI产品为例，导入及可视化代码如下：

```javascript
var dataset = ee.ImageCollection('LANDSAT/LC08/C01/T1_8DAY_NDVI')
                  .filterDate('2017-01-01', '2017-12-31');
var colorized = dataset.select('NDVI');
var colorizedVis = {
  min: 0.0,
  max: 1.0,
  palette: [
    'FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901',
    '66A000', '529400', '3E8601', '207401', '056201', '004C00', '023B01',
    '012E01', '011D01', '011301'
  ],
};
Map.setCenter(6.746, 46.529, 6);
Map.addLayer(colorized, colorizedVis, 'Colorized');
```
## 计算NDVI
&emsp;&emsp;当然，有时候产品无法满足要求，需要根据波段信息运算。GEE可以方便的使用几行代码完成运算。
&emsp;&emsp;首先放上NDVI的计算公式：
&emsp;&emsp;NDVI = (近红外波段 - 红波段) / (近红外波段 + 红波段) 
&emsp;&emsp;针对每种卫星的波段，选用的波段都有所不同，公式如下：
&emsp;&emsp;Landsat8: NDVI = (band5 - band4) / (band5 + band4) 
&emsp;&emsp;Sentinel2: NDVI = (band8 - band4) / (band8 + band4) 
&emsp;&emsp;Modis: NDVI = (band2 - band1) / (band2 + band1) 
&emsp;&emsp;ETM/TM: NDVI = (band4 - band3) / (band4 + band3) 
&emsp;&emsp;AVHRR: NDVI = (CH2 - CH1) / (CH2 + CH1) 

&emsp;&emsp;接下来以Landsat 8和Sentinel 2为例，计算NDVI，摘自某位网友，侵删。

&emsp;&emsp;Landsat 8：

```javascript
//landsat 8 NDVI Demo

//方法一：普通方式，通过将数学公式翻译为代码直接计算
function NDVI_V1(img) {
 var nir = img.select("B5");
 var red = img.select("B4");
 var ndvi = nir.subtract(red).divide(nir.add(red));
 return ndvi;
}

//方法二：将计算公式直接带入，通过解析字符串实现计算。这种方式更加灵活，在某些特殊情况下非常好用，而且非常直观。
function NDVI_V2(img) {
 var nir = img.select("B5");
 var red = img.select("B4");
 var ndvi = img.expression(
   "(B5 - B4)/(B5 + B4)",
   {
     "B5": nir,
     "B4": red
   }
 );
 return ndvi;
}


//方法三：GEE将计算公式封装为一个方法可以直接调用
function NDVI_V3(img) {
 var ndvi = img.normalizedDifference(["B5","B4"]);
 return ndvi;
}


//landsat8 and roi 我们这里使用的2017年全部的Landsat8影像，地点是沧州附近 
var l8_col = ee.ImageCollection("LANDSAT/LC08/C01/T1_RT_TOA");
var roi = ee.Geometry.Point([117.0703125,38.09133660751176]);
var img = ee.Image(l8_col.filterBounds(roi)
                       .filterDate("2017-01-01", "2017-09-24")
                       .first());
var ndvi1 = NDVI_V1(img);
var ndvi2 = NDVI_V2(img);
var ndvi3 = NDVI_V3(img);
//NDVI显示配置，NDVI值范围是-1到1
var visParam = {
 min: -0.2,
 max: 0.8,
 palette: 'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
   '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301'
};
//原始影像真彩色
Map.addLayer(img, {bands:["B4", "B3", "B2"], max:0.3}, "raw_img");
Map.addLayer(ndvi1, visParam, "ndvi_1");
Map.addLayer(ndvi2, visParam, "ndvi_2");
Map.addLayer(ndvi3, visParam, "ndvi_3");
Map.centerObject(roi, 9);

//上面只是展示了图像，我们在分析的时候还需要查看我们所筛选的影像NDVI值
var ndvi_list = l8_col.filterDate("2017-01-01", "2017-09-24")
   .map(function(image) {
   //通过云筛选landsat8
   var cloud = ee.Algorithms.Landsat.simpleCloudScore(image).select("cloud");
   var mask = cloud.lte(20);
   var ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI');
   return image.addBands(ndvi).updateMask(mask);
});


//展示每一张影像NDVI值 
var chart1 = ui.Chart.image.series({
 //影像集合
 imageCollection: ndvi_list.select('NDVI'),
 //关心区域
 region: roi,
 //关心区域计算方式，这里采用的是均值。也就是比如roi是一个矩形，
 //那么在图表中这个点的值就是矩形内所有像素值求平均。
 reducer: ee.Reducer.mean(),
 //分辨率
 scale: 30
}).setOptions({title: 'NDVI IMAGE SERIES'});
print(chart1);


//展示每一天所关心区域的NDVI值
var chart2 = ui.Chart.image.doySeries({
 imageCollection: ndvi_list.select('NDVI'),
 region:roi,
 regionReducer: ee.Reducer.mean(),
 scale:30
}).setOptions({title: "ROI NDVI EACH DAY SERIES"})
print(chart2)
```
&emsp;&emsp; Sentinel 2:

```javascript
//sentinel2 NDVI Demo
//方法一：普通方式，通过将数学公式翻译为代码直接计算
function NDVI_V1(img) {
 var nir = img.select("B8");
 var red = img.select("B4");
 var ndvi = nir.subtract(red).divide(nir.add(red));
 return ndvi;
}

//方法二：将计算公式直接带入，通过解析字符串实现计算。这种方式更加灵活，在某些特殊情况下非常好用，而且非常直观。
function NDVI_V2(img) {
 var nir = img.select("B8");
 var red = img.select("B4");
 var ndvi = img.expression(
   "(B5 - B4)/(B5 + B4)",
   {
     "B5": nir,
     "B4": red
   }
 );
 return ndvi;
}


//方法三：GEE将计算公式封装为一个方法可以直接调用
function NDVI_V3(img) {
 var ndvi = img.normalizedDifference(["B8","B4"]);
 return ndvi;
}


//sentinel2 and roi
var s2_col = ee.ImageCollection("COPERNICUS/S2");
var roi = ee.Geometry.Point([117.0703125,38.09133660751176]);
var img = ee.Image(s2_col.filterBounds(roi)
                       .filterDate("2017-01-01", "2017-09-24")
                       .first());
var ndvi1 = NDVI_V1(img);
var ndvi2 = NDVI_V2(img);
var ndvi3 = NDVI_V3(img);
var visParam = {
 min: -0.2,
 max: 0.8,
 palette: 'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
   '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301'
};
Map.addLayer(img, {bands:["B8", "B4", "B3"], max:3048}, "raw_img");
Map.addLayer(ndvi1, visParam, "ndvi_1");
Map.addLayer(ndvi2, visParam, "ndvi_2");
Map.addLayer(ndvi3, visParam, "ndvi_3");
Map.centerObject(roi, 9);

//show charts
var ndvi_list = s2_col.filterDate("2017-01-01", "2017-09-24")
   .map(function(image) {
   var ndvi = image.normalizedDifference(['B8', 'B4']).rename('NDVI');
   return image.addBands(ndvi);
});

//展示每一张影像NDVI值 
var chart1 = ui.Chart.image.series({
 //影像集合
 imageCollection: ndvi_list.select('NDVI'),
 //关心区域
 region: roi,
 //关心区域计算方式，这里采用的是均值。也就是比如roi是一个矩形，
 //那么在图表中这个点的值就是矩形内所有像素值求平均。
 reducer: ee.Reducer.mean(),
 //分辨率
 scale: 30
}).setOptions({title: 'NDVI IMAGE SERIES'});
print(chart1);

//展示每一天所关心区域的NDVI值
var chart2 = ui.Chart.image.doySeries({
 imageCollection: ndvi_list.select('NDVI'),
 region:roi,
 regionReducer: ee.Reducer.mean(),
 scale:30
}).setOptions({title: "ROI NDVI EACH DAY SERIES"})
print(chart2)
```

&nbsp;

# NDWI
## NDWI数据库
&emsp;&emsp;GEE自身提供了相当多的NDVI资源可以直接导入使用。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200901162231806.png?x-oss-process)


&emsp;&emsp;以Landsat 8 32天周期NDWI产品为例，导入及可视化代码如下：

```javascript
var dataset = ee.ImageCollection('LANDSAT/LC08/C01/T1_32DAY_NDWI')
                  .filterDate('2017-01-01', '2017-12-31');
var colorized = dataset.select('NDWI');
var colorizedVis = {
  min: 0.0,
  max: 1.0,
  palette: ['0000ff', '00ffff', 'ffff00', 'ff0000', 'ffffff'],
};
Map.setCenter(6.746, 46.529, 6);
Map.addLayer(colorized, colorizedVis, 'Colorized');
```

## 计算NDWI
&emsp;&emsp;同理，NDWI的计算公式：
&emsp;&emsp;NDWI = (绿波段 - 近红外波段) / (绿波段 + 近红外波段)
&emsp;&emsp;针对每种卫星的波段，选用的波段都有所不同，公式如下：
&emsp;&emsp;landsat8: NDWI = (band3 - band5) / (band3 + band5)
&emsp;&emsp;landsat5/7: NDWI = (band2 - band4) / (band2 + band4)
&emsp;&emsp;sentinel2: NDWI = (band3 - band8) / (band3 + band8)

&emsp;&emsp;接下来以Landsat 8和Sentinel 2为例，计算NWVI，摘自某位网友，侵删。

&emsp;&emsp;Landsat 8：

```javascript
//landsat 8 NDWI Demo
function NDWI_V1(img) {
 var nir = img.select("B5");
 var green = img.select("B3");
 var ndwi = green.subtract(nir).divide(green.add(nir));
 return ndwi;
}

function NDWI_V2(img) {
 var nir = img.select("B5");
 var green = img.select("B3");
 var ndwi = img.expression(
   "(B3 - B5)/(B3 + B5)",
   {
     "B5": nir,
     "B3": green
   }
 );
 return ndwi;
}


function NDWI_V3(img) {
 var ndwi = img.normalizedDifference(["B3","B5"]);
 return ndwi;
}


//landsat8 and roi
var l8_col = ee.ImageCollection("LANDSAT/LC8_L1T_TOA");
var roi = ee.Geometry.Point([124.1455078125,45.644768217751924]);
var img = ee.Image(l8_col.filterBounds(roi)
                       .filterDate("2017-02-01", "2017-09-23")
                       .first());
var ndwi1 = NDWI_V1(img);
var ndwi2 = NDWI_V2(img);
var ndwi3 = NDWI_V3(img);
var visParam = {
 min: -0.5,
 max: 0.5,
 palette: ['00FFFF', '0000FF']
};
Map.addLayer(img, {bands:["B4", "B3", "B2"], max:0.3}, "raw_img");
Map.addLayer(ndwi1, visParam, "ndwi_1");
Map.addLayer(ndwi2, visParam, "ndwi_2");
Map.addLayer(ndwi3, visParam, "ndwi_3");
Map.centerObject(roi, 9);

//show charts
var ndwi_list = l8_col.filterDate("2017-01-01", "2017-09-23")
   .map(function(image) {
   var cloud = ee.Algorithms.Landsat.simpleCloudScore(image).select("cloud");
   var mask = cloud.lte(20);
   var ndwi = image.normalizedDifference(['B3', 'B5']).rename('NDWI');
   return image.addBands(ndwi).updateMask(mask);
});
var chart1 = ui.Chart.image.series({
 imageCollection: ndwi_list.select('NDWI'),
 region: roi,
 reducer: ee.Reducer.mean(),
 scale: 30
}).setOptions({title: 'NDWI IMAGE SERIES'});
print(chart1);


var chart2 = ui.Chart.image.doySeries({
 imageCollection: ndwi_list.select('NDWI'),
 region:roi,
 regionReducer: ee.Reducer.mean(),
 scale:30
}).setOptions({title: "ROI NDWI EACH DAY SERIES"})
print(chart2)
```
&emsp;&emsp;Sentinel 2：

```javascript
// sentinel2 ndwi
//哨兵2去云处理
var s2_rmcloud = function(image) {
 var quality = image.select("QA60").unmask();
 return image.updateMask(quality.eq(0));
};


//在原影像中加入一个新的波段，命名为NDWI

var s2_ndwi = function(image) {
 return image.addBands(image.normalizedDifference(["B3", "B8"]).rename("NDWI"));
};

//sentinel2 and roi 过滤筛选哨兵2影像
var s2_col = ee.ImageCollection("COPERNICUS/S2");
var roi = ee.Geometry.Point([117.0703125,38.09133660751176]);


var s2_nocloud = s2_col.map(s2_rmcloud)
                       .filterBounds(roi)
                       .filterDate("2017-01-01", "2017-09-24");
var ndwi = s2_nocloud.map(s2_ndwi).select("NDWI").reduce(ee.Reducer.mean());


var visParam = {
 min: -0.5,
 max: 0.5,
 palette: ['00FFFF', '0000FF']
};
Map.addLayer(ndwi, visParam, "ndwi");
Map.centerObject(roi, 9);

//展示关心区域roi在1.1-9.23日之间的的NDWI值序列
var ndwi_list = s2_nocloud.filterDate("2017-01-01", "2017-09-23")
   .map(function(image) {
   var ndwi = image.normalizedDifference(['B3', 'B5']).rename('NDWI');
   return image.addBands(ndwi);
});
var chart1 = ui.Chart.image.series({
 imageCollection: ndwi_list.select('NDWI'),
 region: roi,
 reducer: ee.Reducer.mean(),
 scale: 30
}).setOptions({title: 'NDWI IMAGE SERIES'});
print(chart1);


var chart2 = ui.Chart.image.doySeries({
 imageCollection: ndwi_list.select('NDWI'),
 region:roi,
 regionReducer: ee.Reducer.mean(),
 scale:30
}).setOptions({title: "ROI NDWI EACH DAY SERIES"})
print(chart2)
```

# Landsat 8 NDVI 和 NDWI 添加波段
&emsp;&emsp;python代码如下：

```python
# Use Landsat 8 surface reflectance data. 【使用Landsat8影像】
l8sr = ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')

# Cloud masking function.【去云函数】
def maskL8sr(image):
  cloudShadowBitMask = ee.Number(2).pow(3).int()
  cloudsBitMask = ee.Number(2).pow(5).int()
  qa = image.select('pixel_qa')
  mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0).And(
    qa.bitwiseAnd(cloudsBitMask).eq(0))
  return image.updateMask(mask).select(opticalBands).divide(10000)

# The image input data is a cloud-masked median composite.【选取16年影像】
image = l8sr.filterDate('2016-01-01', '2016-12-31').map(maskL8sr).median()

def addNDVI(image):
  ndvi = image.normalizedDifference(['B5', 'B4']).rename('NDVI')
  return image.addBands(ndvi)

def addNDWI(image):
  ndwi = image.normalizedDifference(['B3', 'B5']).rename('NDWI')
  # mndwi = image.normalizedDifference(['B3', 'B6']).rename('MNDWI')
  # lswi = image.normalizedDifference(['B5', 'B6']).rename('LSWI')
  return image.addBands(ndwi)

# 【增加信息】
image = addNDVI(image)
image = addNDWI(image)


# Use folium to visualize the imagery. 【可视化】
mapid = image.getMapId({'bands': ['B4', 'B3', 'B2'], 'min': 0, 'max': 0.3})
map = folium.Map(location=[38., -122.5])
folium.TileLayer(
    tiles=mapid['tile_fetcher'].url_format,
    attr='Map Data &copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
    overlay=True,
    name='median composite',
  ).add_to(map)

mapid = image.getMapId({'bands': ['NDVI'], 'min': -0.2, 'max': 0.8, 
    'palette': ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901', '66A000', '529400']})
folium.TileLayer(
    tiles=mapid['tile_fetcher'].url_format,
    attr='Map Data &copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
    overlay=True,
    name='NDVI',
  ).add_to(map)
# map.add_child(folium.LayerControl())

mapid = image.getMapId({'bands': ['NDWI'], 'min': 0, 'max': 1, 
    'palette': ['0000ff', '00ffff', 'ffff00', 'ff0000', 'ffffff']})
folium.TileLayer(
    tiles=mapid['tile_fetcher'].url_format,
    attr='Map Data &copy; <a href="https://earthengine.google.com/">Google Earth Engine</a>',
    overlay=True,
    name='NDWI',
  ).add_to(map)
map.add_child(folium.LayerControl())

map
```
&emsp;&emsp;可视化结果如下：
&emsp;&emsp;NDVI：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200901164955612.png?x-oss-process)

&emsp;&emsp;NDWI：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200901164930924.png?x-oss-process)


&emsp;&emsp;下次讲下如何利用水体指数提取潘阳湖面积今年变化~

