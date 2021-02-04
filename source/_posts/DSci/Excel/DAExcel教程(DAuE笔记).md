---
 title: Excel | Data Analysis Excel教程
 date: 
 updated: 
 categories:
 - DSci
 - Excel
 tags:
 - DataScience
 - Excel
---
>介绍了Excel的简单用法，同DAuE笔记~
<!--less-->

上了门Coursera，里面介绍了Excel的简单用法，很多之前都学过了，这次做下记录，方便以后查找。
# 数据
## 打开commas,tab分割的txt
就使用excel打开即可，具体设置具体分析
## 自动列宽
有时候导入的某些数据因为列宽不够无法显示，可以`选择所有列`->`双击任意移动符号`可以自动换列宽

## 移动/选择
移动到最*一列/行
**Row**: `Ctrl+down/up`
**Column**: `Ctrl+right/left`

选择到最*一列/行
**Row**: `Ctrl+shift+down/up`
**Column**: `Ctrl+shift+right/left`


# Function
## 公式套用
在列了一个cell的公式后，`双击`公式后的小十字符号即可直接套用当前列

## SUMIF()
`SUMIF(range,criteria,[sum_range])`

## COUNTIF()
`COUNTIF(count_range,condition)`

## IF()
`IF(loical_test,value_if_true,value_if_false)`

Nested IF:
`IF(loical_test,value_if_true,IF(...))`

## VLOOKUP()
`VLOOKUP(lookup_value,table_array,col_index_num,[range_lookup])`
**range_lookup**: TRUE/FALSE
TRUE :范围匹配
FALSE:完全匹配
![](https://img-blog.csdnimg.cn/20210105121215949.png#pic_center)
![](https://img-blog.csdnimg.cn/20210105121330937.png#pic_center)
**Across Worksheets**:
![](https://img-blog.csdnimg.cn/20210105121516887.png#pic_center)

## HLOOKUP()
`HLOOKUP(lookup_value,table_array,row_index_num,[range_lookup])`
**range_lookup**: TRUE/FALSE
TRUE :范围匹配
FALSE:完全匹配


# Pivot table
数据透视图，超级有用，其中的pivot charts交互式也很好 :) 多多摸索
