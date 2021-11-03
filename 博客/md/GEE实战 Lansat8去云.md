@[TOC](GEE实战 | Lansat8去云)
这里介绍下Landsat 8的去云函数和效果

## Landsat 8

### Landsat 8 SR
可以通过`pixel_qa`来去云：
```javascript
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

var image = l8sr.filterDate('2017-04-01', '2017-09-30').map(maskL8sr).median();
var Vis={bands:['B4', 'B3', 'B2'],min: 0.0,max: 0.3};
Map.setCenter(7.1013, 61.6904, 10);
Map.addLayer(image,Vis,'Land8');
```

以Landsat 8 SR数据，选17年欧洲瑞士为例

无去云mask效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/2021030713564590.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)


加入去云mask，仍然存在的白色像素为雪：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307135652423.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)


### Landsat 8 TOA

由于TOA无`pixel_qa`，TOA需采取其他办法进行去云操作：

```javascript
var pimage = ee.ImageCollection("LANDSAT/LC08/C01/T1_TOA").filterDate('2017-04-01', '2017-09-30')
                .filter(ee.Filter.lt('CLOUD_COVER',5))
                .select('B8')
                .median();
Map.addLayer(pimage,{},"TOA")
```
或者：

```javascript
var l8 = ee.ImageCollection("LANDSAT/LC08/C01/T1_RT_TOA");

var img = l8.filterDate("2018-6-1", "2018-8-1")
            .map(ee.Algorithms.Landsat.simpleCloudScore)
            .map(function(image){
              image = image.updateMask(image.select("cloud").lte(20));
              return image;
            })
            .median()
            
Map.addLayer(img,{},"TOA")
```

无去云全色影像：
![在这里插入图片描述](https://img-blog.csdnimg.cn/202103071357329.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)


去云后全色影像，可以看到大部分云已去除，右下角白色像素为雪：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307135736323.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)

大范围效果：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210307135917748.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM2MDg5Ng==,size_16,color_FFFFFF,t_70)

