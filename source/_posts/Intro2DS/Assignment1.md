---
 title: Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment1
 date: 
 updated: 
 categories:
 - DataScience
 - Coursera
 - Intro2DS
 tags:
 - DataScience
 - Pandas
 - Coursera
---
>Coursera密歇根大学的 Applied Data Science with Python 专项课程第一门课程Introduction to Data Science in Python Assignment1代码
<!--less-->


&emsp;&emsp; u1s1，这门课的assignment还是有点难度的，特别是assigment4（哀怨），放给大家参考啦~
&emsp;&emsp; 有时间（需求）就把所有代码放到github上（好担心被河蟹啊）
&emsp;&emsp; 相关链接：
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Quiz答案](https://ycchen00.github.io/2020/11/09/Intro2DS/Quiz/)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment1](https://ycchen00.github.io/2020/11/09/Intro2DS/Assignment1/)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment2](https://ycchen00.github.io/2020/11/09/Intro2DS/Assignment2/)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment3](https://ycchen00.github.io/2020/11/09/Intro2DS/Assignment3/)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment4](
https://ycchen00.github.io/2020/11/09/Intro2DS/Assignment4/)
&emsp;&emsp; CSDN链接：
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Quiz答案](https://blog.csdn.net/weixin_43360896/article/details/109544058)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment1](https://blog.csdn.net/weixin_43360896/article/details/109583609)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment2](https://blog.csdn.net/weixin_43360896/article/details/109577773)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment3](https://blog.csdn.net/weixin_43360896/article/details/109583813)
&emsp;&emsp; [Coursera | Introduction to Data Science in Python（University of Michigan）| Assignment4](https://blog.csdn.net/weixin_43360896/article/details/109584609)




assignment1挺简单的，就是个入门。


# Assignment 1
For this assignment you are welcomed to use other regex resources such a regex "cheat sheets" you find on the web.

Before start working on the problems, here is a small example to help you understand how to write your own answers. In short, the solution should be written within the function body given, and the final result should be returned. Then the autograder will try to call the function and validate your returned result accordingly. 

```python
def example_word_count():
    # This example question requires counting words in the example_string below.
    example_string = "Amy is 5 years old"
    
    # YOUR CODE HERE.
    # You should write your solution here, and return your result, you can comment out or delete the
    # NotImplementedError below.
    result = example_string.split(" ")
    return len(result)

    #raise NotImplementedError()
```
## Part A
Find a list of all of the names in the following string using regex.

### Code
```python
import re
def names():
    simple_string = """Amy is 5 years old, and her sister Mary is 2 years old. 
    Ruth and Peter, their parents, have 3 kids."""

    # YOUR CODE HERE
#     raise NotImplementedError()
    pattern = "[A-Z][a-z]*"
    return re.findall(pattern, simple_string)
```

```python
assert len(names()) == 4, "There are four names in the simple_string"
```

### 结果
![](https://img-blog.csdnimg.cn/20201109190022183.png#pic_center)
<br>

## Part B

The dataset file in assets/grades.txt contains a line separated list of people with their grade in 
a class. Create a regex to generate a list of just those students who received a B in the course.

### Code
```python
import re
def grades():
    with open ("assets/grades.txt", "r") as file:
        grades = file.read()

    # YOUR CODE HERE
#     raise NotImplementedError()
    pattern = "[\w ]*:\ B"
    return re.findall(pattern, grades)
```
&emsp;&emsp; 下面这个也可以。其实都可以，两个的区别是是否包含成绩。

```python
def grades():
    with open ("assets/grades.txt", "r") as file:
        grades = file.read()

    # YOUR CODE HERE
#     raise NotImplementedError()
    pattern = "[\w]*\ [\w]*(?=:\ B)"
    return re.findall(pattern, grades)
```

```python
assert len(grades()) == 16
```

### 结果
&emsp;&emsp; 包含成绩：
![](https://img-blog.csdnimg.cn/20201109190157137.png#pic_center)
&emsp;&emsp; 不包含成绩：
![](https://img-blog.csdnimg.cn/20201109190241514.png#pic_center)<br>
## Part C

Consider the standard web log file in assets/logdata.txt. This file records the access a user makes when visiting a web page (like this one!). Each line of the log has the following items:
* a host (e.g., '146.204.224.152') 
* a user_name (e.g., 'feest6811' **note: sometimes the user name is missing! In this case, use '-' as the value for the username.**)
* the time a request was made (e.g., '21/Jun/2019:15:45:24 -0700')
* the post request type (e.g., 'POST /incentivize HTTP/1.1' **note: not everything is a POST!**)

Your task is to convert this into a list of dictionaries, where each dictionary looks like the following:
```
example_dict = {"host":"146.204.224.152", 
                "user_name":"feest6811", 
                "time":"21/Jun/2019:15:45:24 -0700",
                "request":"POST /incentivize HTTP/1.1"}
```

### Code

```python
import re
def logs():
    with open("assets/logdata.txt", "r") as file:
        logdata = file.read()
    
    # YOUR CODE HERE
#     raise NotImplementedError()
    pattern = """
    (?P<host>[\d]*.[\d]*.[\d]*.[\d]*)    
    (\ -\ )  
    (?P<user_name>[\w-]*) 
    (\ \[) 
    (?P<time>\w*/\w*/.*)
    (\]\ \") 
    (?P<request>.*)
    (")
    """
    # YOUR CODE HERE
    result = []
    for item in re.finditer(pattern, logdata, re.VERBOSE):
        result.append(item.groupdict())
    return result
```

```python
assert len(logs()) == 979

one_item={'host': '146.204.224.152',
  'user_name': 'feest6811',
  'time': '21/Jun/2019:15:45:24 -0700',
  'request': 'POST /incentivize HTTP/1.1'}
assert one_item in logs(), "Sorry, this item should be in the log results, check your formating"
```


### 结果
&emsp;&emsp;部分：
![](https://img-blog.csdnimg.cn/2020110919042311.png)


<br>
<br>

&emsp;&emsp; 大家其他还有需要的就在评论留言哦 :)  欢迎讨论分享~
