---
 title: GEE实战 | 取消单个任务或者批处理cancel a task / tasks
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
>GEE实战系列，介绍怎么取消GEE任务，包括单个任务和多个任务
<!--less-->

&emsp;&emsp;在通过Google Colab使用Python导出图像的时候，运行的时候发现导错了某些波段信息，然而历史巨轮已经滚动了，想取消任务，一时间发现找不到叉叉，只能等导出完再删掉。之后，找了一些方法，这里做个记录。

# 开始任务
&emsp;&emsp;先介绍下通过Python导出，好处是不用点击run就可以开始任务~
## 单个任务
**Create an export task:**
```python
task = ee.batch.Export.image.toDrive(image=my_image,  # an ee.Image object.
                                     region=my_geometry,  # an ee.Geometry object.
                                     description='mock_export',
                                     folder='gdrive_folder',
                                     fileNamePrefix='mock_export',
                                     scale=1000,
                                     crs='EPSG:4326')
```

**Start an export task:**

```python
task.start()
```

**Check export task status:**

```python
task.status()
```
## 多个任务
&emsp;&emsp;多个导出通过for循环就好了。

```python
# Export all the training data (in many pieces), with one task per geometry.
for g in range(trainingPolys.size().getInfo()):
  geomSample = ee.FeatureCollection([])
  for i in range(n):
    sample = arrays.sample(
      region = ee.Feature(trainingPolysList.get(g)).geometry(), 
      scale =100,
      numPixels = N / n, # Size of the shard.
      seed = i,
      tileScale = 8
    )
    geomSample = geomSample.merge(sample)

  desc = TRAINING_BASE + '_gSlope' + str(g)

  task = ee.batch.Export.table.toDrive(
    collection = geomSample,
    description = desc,
    folder = FOLDER,
    fileNamePrefix = desc,
    fileFormat = 'TFRecord',
    selectors = BANDS + LABELS
  )
  task.start()
```
&emsp;&emsp;可以查看导出情况，或者直接去GEE在线平台看。
**Monitor task progress**

```python
# Print all tasks.
pprint(ee.batch.Task.list()[:10])
```
	[<Task EXPORT_FEATURES: eval_patches_gSlope2 (READY)>,
	 <Task EXPORT_FEATURES: eval_patches_gSlope1 (READY)>,
	 <Task EXPORT_FEATURES: eval_patches_gSlope0 (READY)>,
	 <Task EXPORT_FEATURES: training_patches_gSlope4 (READY)>,
	 <Task EXPORT_FEATURES: training_patches_gSlope3 (READY)>,
	 <Task EXPORT_FEATURES: training_patches_gSlope2 (READY)>,
	 <Task EXPORT_FEATURES: training_patches_gSlope1 (READY)>,
	 <Task EXPORT_FEATURES: training_patches_gSlope0 (READY)>,
	 <Task EXPORT_FEATURES: eval_patches_gSlope2 (FAILED)>,
	 <Task EXPORT_FEATURES: eval_patches_gSlope1 (FAILED)>]

# 取消任务
## 单个任务(线上平台)
&emsp;&emsp;在官网上查找发现还是可以通过在线JavaScript平台取消的，但是需要一个个点击，官网是这么介绍的。
![](https://img-blog.csdnimg.cn/20201217155350342.png#pic_center)&emsp;&emsp;简单翻译下，就是很友好，自己点击run开始任务，如果中途取消就需要点击旁边旋转的GEE标志。
&emsp;&emsp;对于任务小的情况还可以，一旦几百个，就对手指提出了较大挑战。:( 

## Python API
&emsp;&emsp;后来翻了下python API，找打了函数 :( 所以还是建议第一个看API，能解决很多问题。开始取消一个任务代码如下：

### 单个任务
**Start a task:**

```python
task.start()
```

**Cancel a task:**

```python
task.cancel()
```
&emsp;&emsp;就是这么简单~
### 多个任务
&emsp;&emsp;多个取消就用`ee.batch.Task.list()`加上循环，然后反复cancel就好啦，比如：

```python
for task in ee.batch.Task.list()[:10]:
	task.cancel()
```

## GEE Command Line Tool
&emsp;&emsp;不死心的我又去找了下，发现可以通过GEE的命令行工具[earthengine Command Line Tool](https://developers.google.com/earth-engine/guides/command_line?hl=en)完成任务取消操作。这里简单介绍下
&emsp;&emsp;一般来说，earthengine在安装Python API的时候会自动安装，可以通过如下代码测试下。
```bash
earthengine
```
&emsp;&emsp;这是在命令行的代码，如果是在Google Colab或者jupyter notebook等平台操作，需要前面加`!`，即：
```bash
!earthengine
```
&emsp;&emsp;因为本人是在Google Colab下运行，所以下面都加了`!`
&emsp;&emsp;如果没报错，可以通过如下进行对某个命令查找帮助：

```bash
!earthengine command -h
```
### 单个任务
&emsp;&emsp;接下来就是如何取消任务了。想取消一个任务，完整代码如下：

```bash
!earthengine task list
!earthengine task info TASK_ID
!earthengine task cancel TASK_ID
```
&emsp;&emsp;下面稍微解释下：首先查看任务列表：
```bash
!earthengine task list
```
&emsp;&emsp;前面红色这些是Task ID
![](https://img-blog.csdnimg.cn/20201217162344337.png#pic_center)
&emsp;&emsp;补充下，同Python一样，也可以只打印部分tasks：
**first 5 tasks:**

```bash
earthengine task list | head -n 5
```

**last 5 tasks:**

```bash
earthengine task list | tail -n 5
```

&emsp;&emsp;知道Task ID后，可以进一步查看task信息，信息如下：

```bash
!earthengine task info 34IP7EXHFBP6BXBHPDOFGXWX
```
![](https://img-blog.csdnimg.cn/20201217162711591.png#pic_center)
&emsp;&emsp;然后一个个ID取消就好了，通过for循环啥的也可以完成批处理。
### 多个任务
&emsp;&emsp;我们的最高目标还是批删除任务，所以还是找到了方法 :) 其实也很简单
```bash
!earthengine task cancel all
```
&emsp;&emsp;Dont worry, be happy~

## 批处理Console (没成功)
&emsp;&emsp;后来发现这篇[博客](https://blog.csdn.net/m0_46180607/article/details/110532806)貌似可以成功，大家参考下。
&emsp;&emsp;[Stack Exchange解决方案](https://gis.stackexchange.com/questions/290771/batch-task-execution-in-google-earth-engine)
**************************

&emsp;&emsp;网上找了篇通过console任务控制命令，但是没运行成功。大家可以自行尝试，欢迎成功的分享经验~ [链接](https://www.cnblogs.com/geoli/p/12730011.html)
&emsp;&emsp;首先在浏览器打开GEE线上平台并打开开发者人员工具`ctrl+shift+I`，在调试器console粘贴代码:
![](https://img-blog.csdnimg.cn/202012171544483.png#pic_center#pic_center)


**启动全部task**
```javascript
function runTaskList(){
    var tasklist = document.getElementsByClassName('task local type-EXPORT_IMAGE awaiting-user-config');
    for (var i = 0; i < tasklist.length; i++)
            tasklist[i].getElementsByClassName('run-button')[0].click();
}

function confirmAll() {
    var ok = document.getElementsByClassName('goog-buttonset-default goog-buttonset-action');
    for (var i = 0; i < ok.length; i++)
        ok[i].click();
}

runTaskList();
confirmAll();
```

**停止全部task**

```javascript
function stopTaskList(){
    var tasklist = document.getElementsByClassName('task remote type-EXPORT_IMAGE submitted-to-backend');
    for (var i = 0; i < tasklist.length; i++)
            tasklist[i].getElementsByClassName('indicator')[0].click();
}

function confirmAll() {
    var ok = document.getElementsByClassName('goog-buttonset-default goog-buttonset-action');
    for (var i = 0; i < ok.length; i++)
        ok[i].click();
}
stopTaskList();
confirmAll();
```

