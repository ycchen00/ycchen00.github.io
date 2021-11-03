@[TOC](GEE入门 | 重采样)

# 函数
`Image.reproject(crs, crsTransform, scale)`
输出为`image`

**参数：**
| Argument       | Type                 | Details                                                      |
| :-------------- | :-------------------- | :------------------------------------------------------------ |
| this: `image`  | Image                | The Image to reproject.                                      |
| `crs`          | Projection           | The CRS to project the image to.                             |
| `crsTransform` | List, default: null  | The list of CRS transform values.  This is a row-major ordering of the 3x2  transform matrix.  This option is mutually exclusive with the scale  option, and replaces any transform already on the projection. |
| `scale`        | Float, default: null | If scale is specified, then the projection is scaled by dividing the  specified scale value by the nominal size of a meter in the specified  projection. If scale is not specified, then the scale of the given  projection will be used. |
# 例子
这里将Sentinel-2影像重采样到100m作为例子。
P.S. 一般引入GEE数据库显示的分辨率一开始都是111319.490……
## javascript

```javascript
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0).and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

var geometry = 
    ee.Geometry.Polygon(
        [[[17.86466765871711, 51.805755132803185],
          [17.86466765871711, 48.51354071088587],
          [24.85197234621711, 48.51354071088587],
          [24.85197234621711, 51.805755132803185]]], null, false);

var image = ee.ImageCollection('COPERNICUS/S2_SR')
                  .filterDate('2017-02-01', '2017-11-30')
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',30))
                  .map(maskS2clouds)
                  .median()
                  .clip(geometry);

print('Proj and transform info of image:', image.projection().getInfo())
print('Pixel size in meters:', image.projection().nominalScale().getInfo())

var reprojected = image.reproject('EPSG:4326',null,100); 
print('Proj and transform info after reprojection:', reprojected.projection());
print('Pixel size in meters:', reprojected.projection().nominalScale()); 
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210327204847822.png#pic_center)



## python

```python
def maskS2clouds(image):
  qa = image.select('QA60');

  # Bits 10 and 11 are clouds and cirrus, respectively.
  cloudBitMask = 1 << 10;
  cirrusBitMask = 1 << 11;

  # Both flags should be set to zero, indicating clear conditions.
  mask = qa.bitwiseAnd(cloudBitMask).eq(0).And(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);

geometry = \
    ee.Geometry.Polygon(
        [[[17.86466765871711, 51.805755132803185],
          [17.86466765871711, 48.51354071088587],
          [24.85197234621711, 48.51354071088587],
          [24.85197234621711, 51.805755132803185]]], None, False);

S2 = ee.ImageCollection('COPERNICUS/S2_SR')\
    .filterDate('2017-04-01', '2017-09-30')\
    .map(maskS2clouds)\
    .median()

print('Proj and transform info of image:', image.projection().getInfo())
print('Pixel size in meters:', image.projection().nominalScale().getInfo())

var reprojected = image.reproject('EPSG:4326',None,100); 
print('Proj and transform info after reprojection:', reprojected.projection());
print('Pixel size in meters:', reprojected.projection().nominalScale()); 
```

	Proj and transform info of image:{'type': 'Projection', 'crs': 'EPSG:4326', 'transform': [1, 0, 0, 0, 1, 0]}
	Pixel size in meters: 111319.49079327357
	Proj and transform info after reprojection:{'type': 'Projection', 'crs': 'EPSG:4326', 'transform': [0.0008983152841195215, 0, 0, 0, -0.0008983152841195215, 0]}
	Pixel size in meters: 100
