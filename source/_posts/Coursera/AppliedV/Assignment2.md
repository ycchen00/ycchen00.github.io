---
 title: Coursera | Applied Plotting, Charting & Data Representation in Python（University of Michigan）| Assignment2
 date: 
 updated: 
 categories:
 - Coursera
 - DataScience
 - AppliedV
 tags:
 - DataScience
 - Pandas
 - Visualization
 - Coursera
---
>Coursera密歇根大学的 Applied Data Science with Python 专项课程第二门课程Applied Plotting, Charting & Data Representation in Python Assignment2代码
<!--less-->

&emsp;&emsp; 所有assignment相关链接：
&emsp;&emsp;[Coursera | Applied Plotting, Charting & Data Representation in Python（University of Michigan）| Assignment1](https://ycchen00.github.io/2020/12/11/Coursera/AppliedV/Assignment1/)
&emsp;&emsp;[Coursera | Applied Plotting, Charting & Data Representation in Python（University of Michigan）| Assignment2](https://ycchen00.github.io/2020/12/11/Coursera/AppliedV/Assignment2/)
&emsp;&emsp;[Coursera | Applied Plotting, Charting & Data Representation in Python（University of Michigan）| Assignment3](https://ycchen00.github.io/2020/12/11/Coursera/AppliedV/Assignment3/)
&emsp;&emsp;[Coursera | Applied Plotting, Charting & Data Representation in Python（University of Michigan）| Week3 Practice Assignment ](https://ycchen00.github.io/2020/12/11/Coursera/AppliedV/W3_Practice_Assignment/)
&emsp;&emsp;[Coursera | Applied Plotting, Charting & Data Representation in Python（University of Michigan）| Assignment4](https://ycchen00.github.io/2020/12/11/Coursera/AppliedV/Assignment4/)
&emsp;&emsp;  有时间（需求）就把所有代码放到github上


# Assignment2 : Plotting Weather Patterns
&emsp;&emsp;梅开二度，这次的第二周作业也不难，不过要用到上块学到的pandas处理数据库的内容，有所遗忘的可以回去复习[Coursera | Introduction to Data Science in Python（University of Michigan）](https://blog.csdn.net/weixin_43360896/article/details/109585131)。不过为了最后好看的结果，花了好久反复尝试（然后也就那样）。欢迎评论区提出建议~

![](https://img-blog.csdnimg.cn/20201121115550546.png#pic_center)
## Peer Review
![](https://img-blog.csdnimg.cn/20201122095126158.png#pic_center)![](https://img-blog.csdnimg.cn/20201122095209132.png#pic_center)![](https://img-blog.csdnimg.cn/2020112209524836.png#pic_center)![](https://img-blog.csdnimg.cn/20201122095334425.png#pic_center)![](https://img-blog.csdnimg.cn/2020112209562396.png#pic_center)![](https://img-blog.csdnimg.cn/20201122095704603.png#pic_center)

## Code

Before working on this assignment please read these instructions fully. In the submission area, you will notice that you can click the link to **Preview the Grading** for each step of the assignment. This is the criteria that will be used for peer grading. Please familiarize yourself with the criteria before beginning the assignment.

An NOAA dataset has been stored in the file `data/C2A2_data/BinnedCsvs_d400/fb441e62df2d58994928907a91895ec62c2c42e6cd075c2700843b89.csv`. This is the dataset to use for this assignment. Note: The data for this assignment comes from a subset of The National Centers for Environmental Information (NCEI) [Daily Global Historical Climatology Network](https://www1.ncdc.noaa.gov/pub/data/ghcn/daily/readme.txt) (GHCN-Daily). The GHCN-Daily is comprised of daily climate records from thousands of land surface stations across the globe.

Each row in the assignment datafile corresponds to a single observation.

The following variables are provided to you:

* **id** : station identification code
* **date** : date in YYYY-MM-DD format (e.g. 2012-01-24 = January 24, 2012)
* **element** : indicator of element type
    * TMAX : Maximum temperature (tenths of degrees C)
    * TMIN : Minimum temperature (tenths of degrees C)
* **value** : data value for element (tenths of degrees C)

For this assignment, you must:

1. Read the documentation and familiarize yourself with the dataset, then write some python code which returns a line graph of the record high and record low temperatures by day of the year over the period 2005-2014. The area between the record high and record low temperatures for each day should be shaded.
2. Overlay a scatter of the 2015 data for any points (highs and lows) for which the ten year record (2005-2014) record high or record low was broken in 2015.
3. Watch out for leap days (i.e. February 29th), it is reasonable to remove these points from the dataset for the purpose of this visualization.
4. Make the visual nice! Leverage principles from the first module in this course when developing your solution. Consider issues such as legends, labels, and chart junk.

The data you have been given is near **Ann Arbor, Michigan, United States**, and the stations the data comes from are shown on the map below.


```python
%matplotlib notebook
import matplotlib.pyplot as plt
import mplleaflet
import pandas as pd
import numpy as np

def leaflet_plot_stations(binsize, hashid):

    df = pd.read_csv('data/C2A2_data/BinSize_d{}.csv'.format(binsize))

    station_locations_by_hash = df[df['hash'] == hashid]

    lons = station_locations_by_hash['LONGITUDE'].tolist()
    lats = station_locations_by_hash['LATITUDE'].tolist()

    plt.figure(figsize=(8,8))

    plt.scatter(lons, lats, c='r', alpha=0.7, s=200)

    return mplleaflet.display()

leaflet_plot_stations(400,'fb441e62df2d58994928907a91895ec62c2c42e6cd075c2700843b89')
```
![](https://img-blog.csdnimg.cn/20201121120035496.png#pic_center)




### Preprocess


```python
binsize=400
hashid='fb441e62df2d58994928907a91895ec62c2c42e6cd075c2700843b89'
df=pd.read_csv('data/C2A2_data/BinnedCsvs_d{}/{}.csv'.format(binsize,hashid))

df['Data_Value']=df['Data_Value'].apply(lambda x: x/10)

df['Date'] = pd.to_datetime(df['Date'])
df['Year'] = df['Date'].dt.year
df['Month'] = df['Date'].dt.month
df['Day'] = df['Date'].dt.day

# Remove leap year
s_o=df.shape
df = df[~((df['Month']==2)&(df['Day']==29))]
s_r=df.shape
print('remove {} series ofdata'.format(s_o[0]-s_r[0]))

# Max and min data after grouping by each day:
max_0514 = df[(df['Element'] == 'TMAX') & (df['Year'] >= 2005)& (df['Year'] < 2015)].groupby(['Month','Day']).aggregate({'Data_Value':np.max})
min_0514 = df[(df['Element'] == 'TMIN') & (df['Year'] >= 2005)& (df['Year'] < 2015)].groupby(['Month','Day']).aggregate({'Data_Value':np.min})

max_2015 = df[(df['Element'] == 'TMAX') & (df['Year'] == 2015)].groupby(['Month','Day']).aggregate({'Data_Value':np.max})
min_2015 = df[(df['Element'] == 'TMIN') & (df['Year'] == 2015)].groupby(['Month','Day']).aggregate({'Data_Value':np.min})

broken_max = np.where(max_2015['Data_Value'] > max_0514['Data_Value'])[0]
broken_min = np.where(min_2015['Data_Value'] < min_0514['Data_Value'])[0]
```

    remove 83 series ofdata


### Plot


```python
plt.figure()

plt.plot(max_0514.values, label='Max  Temp (2005-2014)', linewidth=1,alpha = 0.7,c='salmon')
plt.plot(min_0514.values, label='Min   Temp (2005-2014)', linewidth=1,alpha = 0.7,c='royalblue')

plt.gca().fill_between(range(len(max_0514)), min_0514['Data_Value'],max_0514['Data_Value'], facecolor='azure', alpha=0.8)

# plt.xticks(range(0, len(max_0514), 20), max_0514.values[:,0].index[range(0, len(max_0514), 20)], rotation = '45')

plt.scatter(broken_max, max_2015.iloc[broken_max], s=10, color='red', label='High Temp Broken (2015)')
plt.scatter(broken_min, min_2015.iloc[broken_min], s=10, color='blueviolet', label='Low  Temp Broken (2015)')

plt.legend(loc = 'best', title='Temperature', fontsize=8)

plt.xticks(np.linspace(0,30 + 30*11 , num = 12), (r'Jan', r'Feb', r'Mar', r'Apr', r'May', r'Jun', r'Jul', r'Aug', r'Sep', r'Oct', r'Nov', r'Dec'), alpha = 0.8 )
plt.yticks(alpha = 0.8 )
plt.xlim(0,365)
plt.xlabel('Months', alpha = 0.8)
plt.ylabel('Temperature ($^\circ$C)', alpha = 0.8)
plt.title('Temperature Plot', alpha = 0.8)

plt.gca().spines['top'].set_visible(False)
plt.gca().spines['right'].set_visible(False)
plt.gca().spines['bottom'].set_alpha(0.3)
plt.gca().spines['left'].set_alpha(0.3)

```


### 结果图
![](https://img-blog.csdnimg.cn/20201121115935942.png#pic_center)


