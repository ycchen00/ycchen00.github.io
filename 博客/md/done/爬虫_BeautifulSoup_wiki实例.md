
---
 title: 爬虫 | wiki实例
 date: 
 updated: 
 categories:
 - 
 tags:
 - 
---
>
<!--less-->
﻿

最近帮忙解决一个关于爬虫的小问题，发现爬虫相关学了很多次，总是用完就忘，这里做个记录。
以读取维基百科并提取某些区域的位置信息为例

# 总代码
先放代码，后面有步骤解释~

**获取wiki里面geohack网址的函数：**
```python
import re
from bs4 import BeautifulSoup as sp
from urllib import request
from urllib.request import urlopen

def get_geohack_wiki(url):
    # YOUR CODE HERE
    head={
     "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0" 
    }
    
    req = request.Request(url, headers=head)
    html = urlopen(req).read()
    soup = sp(html,"html.parser")
    
    listgeo = soup.find_all('a',href=re.compile('^//geohack'))
    if len(listgeo)>0:
        return 'https:'+listgeo[0]["href"]
    else:
        raise ValueError("no Geohack page")
```
**验证：**

```python
assert get_geohack_wiki(
    'https://en.wikipedia.org/wiki/Ann_Arbor,_Michigan'
) == 'https://geohack.toolforge.org/geohack.php?pagename=Ann_Arbor,_Michigan&params=42_16_53_N_83_44_54_W_region:US-MI_type:city(113934)'  # noqa:  E501
assert get_geohack_wiki(
    'https://en.wikipedia.org/wiki/Buenos_Aires'
) == 'https://geohack.toolforge.org/geohack.php?pagename=Buenos_Aires&params=34_36_12_S_58_22_54_W_region:AR_type:city'  # noqa: E501
assert get_geohack_wiki(
    'https://en.wikipedia.org/wiki/Harbin'
) == 'https://geohack.toolforge.org/geohack.php?pagename=Harbin&params=45.7576_N_126.6409_E_type:adm2nd_region:CN-23_source:Gaode'  # noqa: E501
assert get_geohack_wiki(
    'https://en.wikipedia.org/wiki/Monte_Carlo'
) == 'https://geohack.toolforge.org/geohack.php?pagename=Monte_Carlo&params=43_44_23_N_7_25_38_E_region:MC_type:city'  # noqa: E501
try:
    get_geohack_wiki('https://en.wikipedia.org/wiki/Google')
    assert False
except ValueError:
    assert True
except:  # noqa: E722
    assert False

# pylint: disable=E501
assert get_geohack_wiki(
    'https://en.wikipedia.org/wiki/University_of_Michigan'
) == 'https://geohack.toolforge.org/geohack.php?pagename=University_of_Michigan&params=42_16_37_N_83_44_17_W_'  # noqa: E501
assert get_geohack_wiki(
    'https://en.wikipedia.org/wiki/Michigan_State_University'
) == 'https://geohack.toolforge.org/geohack.php?pagename=Michigan_State_University&params=42_43_30_N_84_28_48_W_region:US_type:edu'  # noqa: E501
```

**提取geohack网页里面gps信息函数：**
```python
def get_gps_wiki(wiki_url):
    url = get_geohack_wiki(wiki_url)
    head={
     "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:87.0) Gecko/20100101 Firefox/87.0" 
    }
    
    req = request.Request(url, headers=head)
    html = urlopen(req).read()
    soup = sp(html,"html.parser")
    
    geo = listgeo = soup.find_all('a',href=re.compile('^geo:'))
    try:
        lat,lot = re.findall('geo:([- \d]*.[\d]*),([- \d]*.[\d]*)', geo[0]["href"])[0]
        return float(lat),float(lot)
    except:
        raise ValueError("no GPS coordinates")
```

**验证：**

```python
assert get_gps_wiki(
    'https://en.wikipedia.org/wiki/Ann_Arbor,_Michigan'
) == (42.281389, -83.748333)
assert get_gps_wiki(
    'https://en.wikipedia.org/wiki/Monte_Carlo'
) == (43.739722, 7.427222)
assert get_gps_wiki(
    'https://en.wikipedia.org/wiki/Johannesburg'
) == (-26.204444, 28.045556)
try:
    get_gps_wiki('https://en.wikipedia.org/wiki/Google')
    assert False
except ValueError:
    assert True
except:  # noqa: E722
    assert False
```

# 分开叨
## user-agent
user-agent主要是为了避免被识别为爬虫然后啪唧打死而用来将将自己伪装成浏览器，成功爬取数据的特殊字符串。

放几个参考博客：

[查看网页的cookie和user-agent](https://blog.csdn.net/weixin_44578172/article/details/109353017)

[User-Agent大全,可直接复制到python代码里](https://blog.csdn.net/weixin_42144379/article/details/85639397)

[User-Agent 如何查看及常见浏览器汇总](https://blog.csdn.net/xunxue1523/article/details/104579264)

## 提取信息
主要分为两方面，一方面是找到哪里是想要的内容，以及怎么通过正则提取出来

偷懒again，这里放两个分析页面，找的模板的博客：
[python的【爬虫】：使用urllib爬取wiki文章，使用beautifulSoup解析html](https://blog.csdn.net/mmc2015/article/details/50923309)
[python爬虫入门:1--爬取维基百科词条信息](https://blog.csdn.net/changjiale110/article/details/76145585)

然后正则的方法
[官方教程](https://docs.python.org/3/library/re.html)
[在线re转换工具，不错](https://regex101.com/)
