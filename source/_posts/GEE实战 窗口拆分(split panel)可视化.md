---
 title: GEE实战 | 窗口拆分(split panel)可视化
 date: 
 categories:
 - GEE
 tags:
 - Google Earth Engine
 - Remote sensing
 copyright: true
---
GEE实践系列，介绍如何在GEE上窗口拆分(split panel)可视化图片。
<!--less-->

&emsp;&emsp;Split panel适合在可视化时同时对比效果，而且可以通过拖动，改变两边图像显示范围，可谓高大上可视化以及分析结果的利器。先看效果：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200826173134877.png?x-oss-process)

&emsp;&emsp;左边是高分辨率土地分类图，右边是重采样后的，可以拖动中间的部件来改变显示范围，同时两边的按钮可以选择显示不同的图片。

&emsp;&emsp;不多说，直接JavaScript放代码。

```javascript
var test_c3_30 = ee.Image("users/daviddoyle1/test_c3_30"),
var test_c3 = ee.Image("users/daviddoyle1/test_c3");
var coverVis = {
  // bands:'landcover',
  min: 0.0,
  max: 3.0,
  palette: [
    "000000","0000ff","00ff00","0000ff" //   水 建筑 空地
  ]
};

// 无split panel可视化
// Map.addLayer(test_c3,coverVis, 'test_c3');
// Map.addLayer(test_c3_30,coverVis, 'test_c3_30');

// Split panel可视化
var images ={
  'high resolution':test_c3.visualize(coverVis),
  '30m resolution':test_c3_30.visualize(coverVis),
};

/*
 * Set up the maps and control widgets
 */

// Create the left map, and have it display layer 0.
var leftMap = ui.Map();
leftMap.setControlVisibility(false);
var leftSelector = addLayerSelector(leftMap, 0, 'top-left');

// Create the right map, and have it display layer 1.
var rightMap = ui.Map();
rightMap.setControlVisibility(false);
var rightSelector = addLayerSelector(rightMap, 1, 'top-right');


// Adds a layer selection widget to the given map, to allow users to change
// which image is displayed in the associated map.
function addLayerSelector(mapToChange, defaultValue, position) {
  var label = ui.Label('Choose an image to visualize');

  // This function changes the given map to show the selected image.
  function updateMap(selection) {
    mapToChange.layers().set(0, ui.Map.Layer(images[selection]));
  }

  // Configure a selection dropdown to allow the user to choose between images,
  // and set the map to update when a user makes a selection.
  var select = ui.Select({items: Object.keys(images), onChange: updateMap});
  select.setValue(Object.keys(images)[defaultValue], true);

  var controlPanel =
      ui.Panel({widgets: [label, select], style: {position: position}});

  mapToChange.add(controlPanel);
}


/*
 * Tie everything together
 */

// Create a SplitPanel to hold the adjacent, linked maps.
var splitPanel = ui.SplitPanel({
  firstPanel: leftMap,
  secondPanel: rightMap,
  wipe: true,
  style: {stretch: 'both'}
});

// Set the SplitPanel as the only thing in the UI root.
ui.root.widgets().reset([splitPanel]);
var linker = ui.Map.Linker([leftMap, rightMap]);
// leftMap.setCenter(-122.32, 37.7413, 12);
```

