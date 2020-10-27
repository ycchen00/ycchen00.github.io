---
 title: GEE入门[2] | 上传、导出
 date: 
 categories:
 - GEE
 tags:
 - Google Earth Engine
 - Remote sensing
 copyright: true
---
GEE系列第二篇，介绍GEE的上传于导出资源方法和函数等。
<!--less-->

# GEE数据库
&emsp;&emsp;GEE自带了非常多的各种影像矢量文件等资源。包括卫星影像，气候、地形数据，以及各种处理后的数据，比如土地覆盖分类，NDVI，水体检测等。详见[数据库列表](https://developers.google.com/earth-engine/datasets/catalog)
<img src="https://img-blog.csdnimg.cn/20200826171606563.png?x-oss-process" width="600px" />
&emsp; &emsp;顺带列下整理的GEE提供的LULC相关的数据库：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826171658572.png?x-oss-process)






# Upload资源
&emsp; &emsp;一方面我们可以使用GEE自带的各种影像矢量文件等资源，另外一方面我们可以上传我们自己的资源。GEE的Assets提供了250G的空间。

1. 在GEE在线平台左侧任务栏，选择Assets，点击”New”按钮。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826162300714.png?x-oss-process)


2. 选择要上传的文件类型。本教程以tfrecord和json为例上传图片数据。

![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826162255879.png?x-oss-process)


3.	选择本地资源，填写相关信息。上传TFRecord数据时，需要上传mixer.json文件。
<img src="https://img-blog.csdnimg.cn/20200826162034771.png?x-oss-process" width="400px" />


4.	通过“Task”标签可以看到资源上传进度。资源上传成功后显示蓝色，失败显示红色。左侧任务栏”Assets”可以看到成功导入的数据。其中上传TFRecord图像比较迷，经常会出现mixer unreadable问题，多上传几次就好了。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826162016986.png)
注：Google Cloud Storage可以通过python代码直接上传，Google Drive尚未实现。

5. 接着在“Assets”点击想要import的数据，选择“import”即可。
<img src="https://img-blog.csdnimg.cn/20200826163326655.png?x-oss-process" width="600px" />

接着可以在JavaScript在线平台看见import的数据。
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826163336282.png)
python同理：
	`image = ee.Image("users/daviddoyle1/test_c3")`


# Export资源
&emsp; &emsp;GEE主要可以导出如下类型资源，分别是image影像类型、map地图地图类、table矢量文件类和video视频类。导出函数主要可以直接将数据存放于3个地方，Google Drive、Assets和Google Cloud Storage。由于Google Cloud Storage激活需要信用卡，略过不讲。
&emsp; &emsp;Google Drive（drive.google.com/drive）前文已介绍过，通过谷歌账号可以直接获取15G免费存储空间，而且可以通过Colab使用免费GPU，适合硬件条件不好的情况。
&emsp; &emsp;Assests是GEE资源存放位置，里面的资源是可以直接在GEE工作空间中使用，每个用户空间限制是250G。
&emsp; &emsp;GEE下载文件主要有两个方式，一个是getDownloadURL，一个是Export方式。本教程主要介绍Export方法。Export相关方法如下，其中红色的是废弃的方法。[参考无形的风]
<img src="https://img-blog.csdnimg.cn/20200826162734735.png?x-oss-process" width="400px" />
&emsp; &emsp;以image为例，介绍各个参数，具体见文档。
1.	导出到Asset方法简介：
Export.image.toAsset(image, description, assetId, pyramidingPolicy, dimensions, region, scale, crs, crsTransform, maxPixels) 
</br>
常用参数说明：  

&emsp; &emsp;image 需要导出的影像；   

&emsp; &emsp;description 导出任务描述；   

&emsp; &emsp;assetId 资源名称，也就是在Asset文件夹中看到的资源名称；

&emsp; &emsp;pyramidingPolicy 波段值计算方式，是一个对象值。计算方式包括：mean、sample、min、max、mode，默认是mean。这个值通常不会设置，都是采用默认值。示例：{‘B4': ‘mean’} 意思是波段名称为B4的波段采用mean的方式计算；

&emsp; &emsp;dimensions 导出Image的宽和高；

&emsp; &emsp;region 导出的区域，是一个Geomtry；

&emsp; &emsp;scale 分辨率，单位米，比如：30；

&emsp; &emsp;crs 投影信息，一般是采用默认方式，通常可以设置为EPSG:4326；

&emsp; &emsp;maxPixels 导出影像的最大像素个数可以设置为 1e13 防止导出时候报错。

2.	导出到Drive方法简介
Export.image.toDrive(image, description, folder, fileNamePrefix, dimensions, region, scale, crs, crsTransform, maxPixels, shardSize, fileDimensions, skipEmptyTiles, fileFormat, formatOptions)  
</br>
常用参数说明：

&emsp; &emsp;image 需要导出的影像；

&emsp; &emsp;description 导出任务描述；

&emsp; &emsp;folder 在Assets中的文件夹名称，也就是用户自己创建的文件夹。如果不传此参数，那么导出的文件会直接放在Assets根目录下，通常都不会传此参数；fileNamePrefix 导出的资源名称，如果默认的不传，那么会直接采用description来作为导出的文件名称；

&emsp; &emsp;dimensions 导出Image的宽和高；

&emsp; &emsp;region 导出的区域，是一个Geomtry；

&emsp; &emsp;scale 分辨率，单位米，比如：30；

&emsp; &emsp;crs 投影信息，一般是采用默认方式，通常可以设置为EPSG:4326；

&emsp; &emsp;maxPixels 导出影像的最大像素个数可以设置为 1e13 防止导出时候报错。

&emsp; &emsp;导出矢量文件类似，可以直接看文档介绍。

## 导出实例
1. 导出矢量数据到"Assets"
&emsp; &emsp;这里的矢量数据为在线平台选取的区域，红色为trainingPolys，紫色的为evalPolys。
<img src="https://img-blog.csdnimg.cn/20200826163954517.png?x-oss-process" width="500px" />

```javascript
var desc='trainingPolys'; 
var assetId=desc
Export.table.toAsset({
  collection: trainingPolys,
  description: desc,
  assetId:assetId
}); 
var desc='evalPolys'
var assetId=desc
Export.table.toAsset({
  collection: evalPolys,
  description: desc,
  assetId:assetId
});
```

- 导出成功

![在这里插入图片描述](https://img-blog.csdnimg.cn/2020082616500953.png#pic_center)
- import

```javascript
var evalPolys = ee.FeatureCollection("users/daviddoyle1/Predict_muliti_6/evalPolys");
var trainingPolys = ee.FeatureCollection("users/daviddoyle1/Predict_muliti_6/trainingPolys");
```

```python
evalPolys = ee.FeatureCollection("users/daviddoyle1/Predict_muliti_6/evalPolys")
trainingPolys = ee.FeatureCollection("users/daviddoyle1/Predict_muliti_6/trainingPolys")
```


2. 导出影像数据到“Assets”（重采样）
	
- 将高分辨率影像导出时重采样成30m分辨率的。
```javascript
Export.image.toAsset({
  image: test_c3,
  description: 'test_c3_30',
  scale: 30,//定义导出图像的分辨率
  maxPixels: 1e13
});
```
- 结果对比
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826170400167.png?x-oss-process)
3.  导出矢量数据到Drive（格式为TFRecord）
一同导出的还有mixer.json文件。
偷懒中，只放Python代码：

```python
task = ee.batch.Export.table.toDrive(
    collection = geomSample,
    description = desc,
    folder = FOLDER,
    fileNamePrefix = desc,
    fileFormat = 'TFRecord',
    selectors = BANDS + LABELS
  )
```

Anyway，JavaScript和python相差不大。


