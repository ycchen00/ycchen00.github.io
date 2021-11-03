@[TOC](GEE实战 | 各种指数分析（植被、水体、建筑）)
该文章介绍下在GEE平台下，使用Landsat 8 SR波段信息提取各种指数，并可视化对比讨论分类效果。

# 指数

全部以Landsat 8 SR波段数据进行计算，用CLC作为土地覆盖分类参考数据库。
P.S. 各个指数的代码主要是计算指数，可视化见总代码~

## 植被指数(NDVI | SAVI | IVI)

比较了`NDVI`、`SAVI`、`IVI`，并以CLC做对比选择合适的用来提取相关地物的波段。
### 代码

```javascript
var l8sr = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR")

function maskL8sr(image) {
  var cloudShadowBitMask = 1 << 3;
  var cloudsBitMask = 1 << 5;

  var qa = image.select('pixel_qa');

  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0));

  return image.updateMask(mask).divide(10000)
      .copyProperties(image, ["system:time_start"]); //      .select("B[0-9]*")
}

var image = l8sr.filterDate('2017-04-01', '2017-09-30').map(maskL8sr).median();

var addVariables = function(image){
  var ndvi = image.normalizedDifference(['B5','B4']).rename('NDVI');
  var ndbi = image.normalizedDifference(['B6','B5']).rename('NDBI');
  var mndwi = image.normalizedDifference(['B3','B6']).rename('MNDWI');
  var savi = image.expression(
              '((NIR-red)*1.5)/(NIR+red+0.5)',{
              red:image.select('B4'),
              NIR:image.select('B5')
            }).float().rename('SAVI');  
  var ivi = image.expression(
              '(savi-(ndbi+mndwi)/2)/(savi+(ndbi+mndwi)/2)',{
              ndbi:image.select('NDBI'),
              savi:image.select('SAVI'),
              mndwi:image.select('MNDWI')
            }).float().rename('IVI');                  
  image = image.addBands([ndvi,savi,ivi]);
};

```

### 对比
先放上CLC数据库
注：
水体 - 蓝色
植被 - 绿色
作物 - 黄色
建筑 - 红色
湿地 - 灰色

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307125757184.png#pic_center)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130007636.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130018201.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130023772.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)


### 结论
- `SAVI`和`NDVI`有时候对于植被和农作物是相反的，迷惑.
- 在没找到明显区别的情况下，认为NDVI更合适



## 水体指数(NDWI | MNDWI)

水体指数采用以下两种`NDWI`和`MNDWI`：

$NDWI=(Green-NIR)/(Green+NIR)$

$MNDWI=(Green-MIR)/(Green+MIR)$

其中，Green为绿光波段，NIR为近红外波段，MIR为中红外波段。其水体指数的阈值是[0，1]。

### 代码
```javascript
var l8sr = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR")

function maskL8sr(image) {
  var cloudShadowBitMask = 1 << 3;
  var cloudsBitMask = 1 << 5;

  var qa = image.select('pixel_qa');

  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0));

  return image.updateMask(mask).divide(10000)
      .copyProperties(image, ["system:time_start"]); //      .select("B[0-9]*")
}

var image = l8sr.filterDate('2017-04-01', '2017-09-30').map(maskL8sr).median();

var addVariables = function(image){
  var ndwi = image.normalizedDifference(['B3','B5']).rename('NDWI');
  var mndwi = image.normalizedDifference(['B3','B6']).rename('MNDWI');             
  image = image.addBands([ndwi,mndwi]);
};

```
### 对比
瑞士:
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130410659.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)`MNDWI`无法区分大部分水体和雪

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130527573.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)`NDWI`在区分雪方面更好点
这样对比更明显：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130648730.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)岸边附近水域对比：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130802643.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)`NDWI:`
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021030713081322.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)
`MNDWI:`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130834647.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)
伦敦地区富营养化湖泊对比：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307130927584.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)



### 结论
|       | ad :)               | dis :(              |
| ----- | ------------------- | ------------------- |
| NDWI  | 岸边附近水域     雪 | 富营养化湖泊        |
| MNDWI | 富营养化湖泊        | 岸边附近水域     雪 |

藻类覆盖面积较大的湖泊，NDWI的精确度非常低，MNDWI可以取得较好的水体边界提取效果，适用于富营养化湖泊的水体边界提取。对于藻类覆盖面积较少的湖泊，两个水体指数的区别不明显，造成NDWI提取误差主要位于藻类覆盖的区域，造成MNDWI误差的主要区域位于岸边附近水域。

注：MNDWI更适合提取富营养化湖泊的水体边界；对于水深较浅的岸边区域，MNDWI也会存在一定的误差；对于贫营养湖泊，NDWI和MNDWI指数提取湖泊边界的效果差异并不明显。





## 建筑指数(NDBI | BSI | EIBI | NDISI)

比较了`NDBI`，`BSI`，`EIBI`，`NDISI`

### 代码

```javascript
var l8sr = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR")

function maskL8sr(image) {
  var cloudShadowBitMask = 1 << 3;
  var cloudsBitMask = 1 << 5;

  var qa = image.select('pixel_qa');

  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0));

  return image.updateMask(mask).divide(10000)
      .copyProperties(image, ["system:time_start"]); //      .select("B[0-9]*")
}

var image = l8sr.filterDate('2017-04-01', '2017-09-30').map(maskL8sr).median();

var addVariables = function(image){
  var ndbi = image.normalizedDifference(['B6','B5']).rename('NDBI');
  var mndwi = image.normalizedDifference(['B3','B6']).rename('MNDWI');
  var ndbbi = image.expression(
              '(1.5*SWIR2-(NIR+green)/2)/(1.5*SWIR2+(NIR+green)/2)',{
              green:image.select('B3'),
              NIR:image.select('B5'),
              SWIR2:image.select('B7')
            }).float().rename('NDBBI');
  var savi = image.expression(
              '((NIR-red)*1.5)/(NIR+red+0.5)',{
              red:image.select('B4'),
              NIR:image.select('B5')
            }).float().rename('SAVI');
  var bsi = image.expression(
              '((SWIR1+red)-(NIR+blue))/((SWIR1+red)+(NIR+blue))',{
              blue:image.select('B2'),
              red:image.select('B4'),
              NIR:image.select('B5'),
              SWIR1:image.select('B6')
            }).float().rename('BSI');
            
  image = image.addBands([ndbi,mndwi,ndbbi,savi,bsi]);
  
  var ebsi = image.expression(
              '(bsi-mndwi)/(bsi+mndwi)',{
              bsi:image.select('BSI'),
              mndwi:image.select('MNDWI')
            }).float().rename('EBSI');
  image = image.addBands(ebsi);
  var eibi = image.expression(
              '(ndbbi-(4*ebsi+savi+mndwi)/6)/(ndbbi+(4*ebsi+savi+mndwi)/6)',{
              ndbbi:image.select('NDBBI'),
              ebsi:image.select('EBSI'),
              savi:image.select('SAVI'),
              mndwi:image.select('MNDWI')
            }).float().rename('EIBI');  
            
  var ndisi = image.expression(
              '(TIR-(mndwi+NIR+SWIR)/3)/(TIR+(mndwi+NIR+SWIR)/3)',{
              NIR:image.select('B5'),
              SWIR:image.select('B6'),
              mndwi:image.select('MNDWI'),
              TIR:image.select('B10'),
            }).float().rename('NDISI');
            
  return image.addBands([eibi,ndisi]);//,
};
```

### 对比
先放上CLC数据库
注：
水体 - 蓝色
植被 - 绿色
作物 - 黄色
建筑 - 红色
湿地 - 灰色
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307131646968.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307131655321.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307131704171.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307131717512.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)



### 结论
- `NDBI`适合提取农作物和城市
- `EIBI`中，植被与农作物+建筑+水体对比明显
- 可视化对比不明显下，选择简单的`NDBI`更合适

# 总代码（指数计算+可视化(dual) map）

```javascript
var dataset = ee.Image("COPERNICUS/CORINE/V20/100m/2018"),
var l8sr = ee.ImageCollection("LANDSAT/LC08/C01/T1_SR")

function maskL8sr(image) {
  var cloudShadowBitMask = 1 << 3;
  var cloudsBitMask = 1 << 5;

  var qa = image.select('pixel_qa');

  var mask = qa.bitwiseAnd(cloudShadowBitMask).eq(0)
      .and(qa.bitwiseAnd(cloudsBitMask).eq(0));

  return image.updateMask(mask).divide(10000)
      .copyProperties(image, ["system:time_start"]); //      .select("B[0-9]*")
}

var Bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
var image = l8sr.filterDate('2017-04-01', '2017-09-30').map(maskL8sr).median();
var landimg=addVariables(image);

// for 5 class
var landcover_5 = dataset.select('landcover')
                      .remap([111,112,121,122,123,124,131,132,133,141,142,211,212,213,221,222,223,231,241,242,243,244,311,312,313,321,322,323,324,331,332,333,334,335,411,412,421,422,423,511,512,521,522,523]
                            ,[  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  3,  3,  3,  3,  3,  4,  4,  4,  4,  4],4)
                            .rename('landcover');

// blablablabla.........................
var addVariables = function(image){
  var awei= image.expression(
              '4*(green-SWIR1)-(0.25*NIR+2.75*SWIR2)',{
              green:image.select('B3'),
              NIR:image.select('B5'),
              SWIR1:image.select('B6'),
              SWIR2:image.select('B7'),
            }).float().rename('AWEI');
  var ndwi = image.normalizedDifference(['B3','B5']).rename('NDWI');
  var ndvi = image.normalizedDifference(['B5','B4']).rename('NDVI');
  var ndbi = image.normalizedDifference(['B6','B5']).rename('NDBI');
  var mndwi = image.normalizedDifference(['B3','B6']).rename('MNDWI');
  var lswi = image.normalizedDifference(['B5','B6']).rename('LSWI');
  var ndbbi = image.expression(
              '(1.5*SWIR2-(NIR+green)/2)/(1.5*SWIR2+(NIR+green)/2)',{
              green:image.select('B3'),
              NIR:image.select('B5'),
              SWIR2:image.select('B7')
            }).float().rename('NDBBI');
  var savi = image.expression(
              '((NIR-red)*1.5)/(NIR+red+0.5)',{
              red:image.select('B4'),
              NIR:image.select('B5')
            }).float().rename('SAVI');
  var bsi = image.expression(
              '((SWIR1+red)-(NIR+blue))/((SWIR1+red)+(NIR+blue))',{
              blue:image.select('B2'),
              red:image.select('B4'),
              NIR:image.select('B5'),
              SWIR1:image.select('B6')
            }).float().rename('BSI');
            
  image = image.addBands([awei,ndvi,ndbi,ndwi,mndwi,lswi,ndbbi,savi,bsi]);
  
  var ebsi = image.expression(
              '(bsi-mndwi)/(bsi+mndwi)',{
              bsi:image.select('BSI'),
              mndwi:image.select('MNDWI')
            }).float().rename('EBSI');
  image = image.addBands(ebsi);
  var eibi = image.expression(
              '(ndbbi-(4*ebsi+savi+mndwi)/6)/(ndbbi+(4*ebsi+savi+mndwi)/6)',{
              ndbbi:image.select('NDBBI'),
              ebsi:image.select('EBSI'),
              savi:image.select('SAVI'),
              mndwi:image.select('MNDWI')
            }).float().rename('EIBI');  
            
  var ivi = image.expression(
              '(savi-(ndbi+mndwi)/2)/(savi+(ndbi+mndwi)/2)',{
              ndbi:image.select('NDBI'),
              savi:image.select('SAVI'),
              mndwi:image.select('MNDWI')
            }).float().rename('IVI'); 
            
  var ndisi = image.expression(
              '(TIR-(mndwi+NIR+SWIR)/3)/(TIR+(mndwi+NIR+SWIR)/3)',{
              NIR:image.select('B5'),
              SWIR:image.select('B6'),
              mndwi:image.select('MNDWI'),
              TIR:image.select('B10'),
            }).float().rename('NDISI');
            
  return image.addBands([eibi,ivi,ndisi]);//,
};

var clcVis_5 = {bands:'landcover',min: 0.0,max: 4.0, palette: ["ff0000","ffff00","00ff00","CCCCFF","0000ff"]}; // 建筑 农业 植被 湿地 水体
var Vis={bands:['B4', 'B3', 'B2'],min: 0.0,max: 0.3};
var visParams = {min: -0.8, max: 0.8, palette: [ 'green','white','blue']};
var visParams2 = {min: -0.8, max: 0.8, palette: [ '0000ff', '00ffff', 'ffff00', 'ff0000', 'ffffff']};
var visParams3 = {min: -0.8, max: 0.8, palette: [ 'FFF0F5','FFB6C1','FFC0CB','DC143C']};
var ndviVis = {min: -0.2,max: 0.8,palette: ['FFFFFF', 'CE7E45', 'DF923D', 'F1B555', 'FCD163', '99B718', '74A901', '66A000', '529400']};

var vis_flag=''//'split'//'map';

if (vis_flag=='map'){
  Map.setCenter(7.1013, 61.6904, 10);
  Map.addLayer(image,Vis,'Land8');
  Map.addLayer(landimg.select('NDVI'),ndviVis,'NDVI',false);
  Map.addLayer(landimg.select('SAVI'),ndviVis,'SAVI',false);
  Map.addLayer(landimg.select('IVI'),ndviVis,'IVI',false);
  // Map.setCenter(12.8461, 63.4398, 9);
  // Map.setCenter(7.5135, 59.8554, 9);
  // Map.setCenter(10.756, 59.9114, 9);
  // Map.addLayer(landimg.select('AWEI'),visParams,'AWEI',false);
  // Map.addLayer(landimg.select('NDWI'),visParams,'NDWI',false);
  // Map.addLayer(landimg.select('MNDWI'),visParams,'MNDWI',false);
  // Map.addLayer(landimg.select('LSWI'),visParams,'LSWI',false);
  
  // Map.addLayer(landimg.select('NDBI'),visParams2,'NDBI',false);
  // Map.addLayer(landimg.select('BSI'),visParams3,'BSI',false);
  // // Map.addLayer(landimg.select('NDBBI'),visParams2,'NDBBI',false);
  // Map.addLayer(landimg.select('EIBI'),visParams3,'EIBI',false);
  // // Map.addLayer(landimg.select('EBSI'),visParams3,'EBSI',false);
  
// Split panel可视化
} else if (vis_flag=='split'){
  var images ={
    // 'Landsat':image.visualize(Vis),
    'CLC_5class':landcover_5.visualize(clcVis_5), 
    // 'NDWI':landimg.select('NDWI').visualize(visParams),
    // 'MNDWI':landimg.select('MNDWI').visualize(visParams),
    // 'LSWI':landimg.select('LSWI').visualize(visParams),
    // 'NDBI':landimg.select('NDBI').visualize(visParams),
    // 'BSI':landimg.select('BSI').visualize(visParams),
    // 'EIBI':landimg.select('EIBI').visualize(visParams),
    // 'NDISI':landimg.select('NDISI').visualize(visParams),
    'NDVI':landimg.select('NDVI').visualize(ndviVis),
    'SAVI':landimg.select('SAVI').visualize(ndviVis),
    'IVI':landimg.select('IVI').visualize(ndviVis),
  };
  
  // Create the left map, and have it display layer 0.
  var leftMap = ui.Map();
  leftMap.setControlVisibility(false);
  var leftSelector = addLayerSelector(leftMap, 0, 'top-left');
  
  // Create the right map, and have it display layer 1.
  var rightMap = ui.Map();
  rightMap.setControlVisibility(false);
  var rightSelector = addLayerSelector(rightMap, 1, 'top-right');
  
  
  function addLayerSelector(mapToChange, defaultValue, position) {
    var label = ui.Label('Choose an image to visualize');
  
    function updateMap(selection) {
      mapToChange.layers().set(0, ui.Map.Layer(images[selection]));
    }
  
    var select = ui.Select({items: Object.keys(images), onChange: updateMap});
    select.setValue(Object.keys(images)[defaultValue], true);
  
    var controlPanel =
        ui.Panel({widgets: [label, select], style: {position: position}});
  
    mapToChange.add(controlPanel);
  }
  
  
  var splitPanel = ui.SplitPanel({
    firstPanel: leftMap,
    secondPanel: rightMap,
    wipe: true,
    style: {stretch: 'both'}
  });
  
  ui.root.widgets().reset([splitPanel]);
  var linker = ui.Map.Linker([leftMap, rightMap]);
  leftMap.setCenter(12.5181, 55.7815, 8);
} else {
  print()
}
```

