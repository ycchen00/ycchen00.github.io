@[TOC](python | 字符串去除（中文、英文、数字、标点符号）)


介绍下去除各个字母、数字、符号的方法，主要就是re的运用，去除用`re.sub()`，而反过来的提取用`re.findall()`即可

# 去除标点符号
标点符号包括中英文两种，要分开处理

## 去除英文标点符号

string.punctuation包含所有英文标点符号


```python
import string
string.punctuation
```




    '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'




```python
text = '''Don't worry, be happy!''' # 'Don\'t worry, be happy'

punctuation_string = string.punctuation
for i in punctuation_string:
    text = text.replace(i, '')
print(text)
```

    Dont worry be happy
    


```python
import re
re.sub('[{}]'.format(punctuation_string),"",text)
```




    'Dont worry be happy'



## 去除中文标点符号
调用zhon包的zhon.hanzi.punctuation函数即可得到中文的标点符号集合。


```python
from zhon.hanzi import punctuation
punctuation
```




    '＂＃＄％＆＇（）＊＋，－／：；＜＝＞＠［＼］＾＿｀｛｜｝～｟｠｢｣､\u3000、〃〈〉《》「」『』【】〔〕〖〗〘〙〚〛〜〝〞〟〰〾〿–—‘’‛“”„‟…‧﹏﹑﹔·！？｡。'




```python
text = '生活就像【】，如果＃＃'

punctuation_str = punctuation
for i in punctuation_str:
    text = text.replace(i, '')

text
```




    '生活就像如果'




```python
import re
re.sub('[{}]'.format(punctuation),"",text)
```




    '生活就像如果'



# 去除中文


```python
import re

text = '生活就像【】，如果＃＃'

temp = re.sub('[\u4e00-\u9fa5]','',text)
temp
```




    '【】，＃＃'




```python
from zhon.hanzi import characters
import re 

text = '生活就像【】，如果＃＃'

temp = re.sub('[{}]'.format(characters),'',text)
temp
```




    '【】，＃＃'



# 去除英文


```python
import re
 
text="aksjn ekljfk # ! len223"
 
temp = re.sub('[a-zA-Z]','',text)
temp
```




    '  # ! 223'



# 去除数字
其实对于\d \s \w这些，小写是数字\空格\数字字母，大写即是非数字\非空格\非数字字母，可以合理运用~


```python
import re
 
text="哈aksjn ekljfk # ! len223"
 
temp = re.sub('[\d]','',text) # [0-9]
temp
```




    '哈aksjn ekljfk # ! len'



# 去除空格
有很多方法，比如：
[Python 字符串去除空格的方法](https://blog.csdn.net/u010180815/article/details/112845424)


```python
import re
 
text="aksjn ekljfk # ! len223"
 
temp = re.sub('[\s]','',text) #temp = text.strip()
temp
```




    'aksjn ekljfk # ! len223'



