---
 title: Python | 读取 json 文件
 date: 
 updated: 
 categories:
 - Python
 tags:
 - json
 - Python
---
>介绍下json文件以及python读取方法~
<!--less-->

## json文件
&emsp;&emsp;JSON (JavaScript Object Notation) 是一种轻量级的数据交换格式。可以当做文本文件用。这里介绍两种读取json文件的方法在，做个对比。主要是两种读取json文件方式导致后续代码稍微不同。

**Predict1_-mixer.json:**

```python
{
  "projection": {
    "crs": "EPSG:4326",
    "affine": {
      "doubleMatrix": [8.983152841195215E-4, 0.0, 13.599595086285436, 0.0, -8.983152841195215E-4, 45.40175277468474]
    }
  },
  "patchDimensions": [256, 256],
  "patchesPerRow": 5,
  "totalPatches": 10
}
{'projection': {'crs': 'EPSG:4326', 'affine': {'doubleMatrix': [0.0008983152841195215, 0.0, 13.599595086285436, 0.0, -0.0008983152841195215, 45.40175277468474]}}, 'patchDimensions': [256, 256], 'patchesPerRow': 5, 'totalPatches': 10}
```

## !cat

```python
import json
jsonFile='Predict1_-mixer.json'

jsonText = !cat {jsonFile}
mixer = json.loads(jsonText.nlstr)

patches = mixer['totalPatches']
patchesPerRow = mixer['patchesPerRow']
```

**该方法的jsonText需要进一步处理：**
```python
['{',
 '  "projection": {',
 '    "crs": "EPSG:4326",',
 '    "affine": {',
 '      "doubleMatrix": [8.983152841195215E-4, 0.0, 13.599595086285436, 0.0, -8.983152841195215E-4, 45.40175277468474]',
 '    }',
 '  },',
 '  "patchDimensions": [256, 256],',
 '  "patchesPerRow": 5,',
 '  "totalPatches": 10',
 '}']
```

**mixer输出如下：**

```python
{'patchDimensions': [256, 256],
 'patchesPerRow': 5,
 'projection': {'affine': {'doubleMatrix': [0.0008983152841195215,
    0.0,
    13.599595086285436,
    0.0,
    -0.0008983152841195215,
    45.40175277468474]},
  'crs': 'EPSG:4326'},
 'totalPatches': 10}
```

## open()

```python
import json
jsonFile='Predict1_-mixer.json'

with open(jsonFile, 'r') as myfile:
  jsonText=myfile.read()
mixer = json.loads(jsonText)

patches = mixer['totalPatches']
patchesPerRow = mixer['patchesPerRow']
```

**该方法jsonFile不需要进一步处理**，可以直接`loads()`：

```python
{
  "projection": {
    "crs": "EPSG:4326",
    "affine": {
      "doubleMatrix": [8.983152841195215E-4, 0.0, 13.599595086285436, 0.0, -8.983152841195215E-4, 45.40175277468474]
    }
  },
  "patchDimensions": [256, 256],
  "patchesPerRow": 5,
  "totalPatches": 10
}
```


**mixer输出一致：**

```python
{'patchDimensions': [256, 256],
 'patchesPerRow': 5,
 'projection': {'affine': {'doubleMatrix': [0.0008983152841195215,
    0.0,
    13.599595086285436,
    0.0,
    -0.0008983152841195215,
    45.40175277468474]},
  'crs': 'EPSG:4326'},
 'totalPatches': 10}
```

