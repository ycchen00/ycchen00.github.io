@[TOC](Python | Dates and Times（datetime）)
# Dates and Times
介绍下python下`datetime`和`time`的基本用法
## import

```python
import datetime as dt
import time as tm
```

<br>
`time` returns the current time in seconds since the Epoch. (January 1st, 1970)

## tm.time()
```python
tm.time()
```




    1614223686.18



<br>
## datetime
Convert the timestamp to datetime.


```python
dtnow = dt.datetime.fromtimestamp(tm.time())
dtnow
```




    datetime.datetime(2021, 2, 25, 11, 28, 6, 196625)



<br>
Handy datetime attributes:


```python
dtnow.year, dtnow.month, dtnow.day, dtnow.hour, dtnow.minute, dtnow.second # get year, month, day, etc.from a datetime
```




    (2021, 2, 25, 11, 28, 6)

## dt.timedelta()
`timedelta` is a duration expressing the difference between two dates.


```python
delta = dt.timedelta(days = 100) # create a timedelta of 100 days
delta
```




    datetime.timedelta(days=100)



<br>

## dt.date.today()
`date.today` returns the current local date.


```python
today = dt.date.today()
```


```python
today - delta # the date 100 days ago
```




    datetime.date(2020, 11, 17)




```python
today > today-delta # compare dates
```




    True


