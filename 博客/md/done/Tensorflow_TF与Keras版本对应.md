
---
 title: 
 date: 
 updated: 
 categories:
 - 
 tags:
 - 
---
>
<!--less-->
﻿在写代码的时候，由于各种原因，tensforlow要换个版本，keras要换个，最后导致版本不对应，因此造成了很多麻烦。

这里mark一下对应关系：
[List of Available Environments](https://docs.floydhub.com/guides/environments/)
P.S. 这个网站还有pytorch和fastai，caffe和python等 :)

| Framework(TF)       | Env name (--env parameter) | Description                                    | Docker Image                                                 | Packages and Nvidia Settings                                 |
| :---------------- | :------------------------- | :--------------------------------------------- | :----------------------------------------------------------- | :----------------------------------------------------------- |
| TensorFlow 2.2  | tensorflow-2.2             | TensorFlow 2.2.0 + Keras 2.3.1 on Python 3.7.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-2.2](https://docs.floydhub.com/guides/tensorflow/#tensorflow-22) |
| TensorFlow 2.1  | tensorflow-2.1             | TensorFlow 2.1.0 + Keras 2.3.1 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-2.1](https://docs.floydhub.com/guides/tensorflow/#tensorflow-21) |
| TensorFlow 2.0  | tensorflow-2.0             | TensorFlow 2.0.0 + Keras 2.3.1 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-2.0](https://docs.floydhub.com/guides/tensorflow/#tensorflow-20) |
| TensorFlow 1.15 | tensorflow-1.15            | TensorFlow 1.15.0 + Keras 2.3.1 on Python 3.6. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.15](https://docs.floydhub.com/guides/tensorflow/#tensorflow-115) |
| TensorFlow 1.14 | tensorflow-1.14            | TensorFlow 1.14.0 + Keras 2.2.5 on Python 3.6. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.14](https://docs.floydhub.com/guides/tensorflow/#tensorflow-114) |
| TensorFlow 1.13 | tensorflow-1.13            | TensorFlow 1.13.0 + Keras 2.2.4 on Python 3.6. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.13](https://docs.floydhub.com/guides/tensorflow/#tensorflow-113) |
| TensorFlow 1.12 | tensorflow-1.12            | TensorFlow 1.12.0 + Keras 2.2.4 on Python 3.6. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.12](https://docs.floydhub.com/guides/tensorflow/#tensorflow-112) |
|                 | tensorflow-1.12:py2        | TensorFlow 1.12.0 + Keras 2.2.4 on Python 2.   | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.11 | tensorflow-1.11            | TensorFlow 1.11.0 + Keras 2.2.4 on Python 3.6. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.11](https://docs.floydhub.com/guides/tensorflow/#tensorflow-111) |
|                 | tensorflow-1.11:py2        | TensorFlow 1.11.0 + Keras 2.2.4 on Python 2.   | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.10 | tensorflow-1.10            | TensorFlow 1.10.0 + Keras 2.2.0 on Python 3.6. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.10](https://docs.floydhub.com/guides/tensorflow/#tensorflow-110) |
|                 | tensorflow-1.10:py2        | TensorFlow 1.10.0 + Keras 2.2.0 on Python 2.   | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.9  | tensorflow-1.9             | TensorFlow 1.9.0 + Keras 2.2.0 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.9](https://docs.floydhub.com/guides/tensorflow/#tensorflow-19) |
|                 | tensorflow-1.9:py2         | TensorFlow 1.9.0 + Keras 2.2.0 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.8  | tensorflow-1.8             | TensorFlow 1.8.0 + Keras 2.1.6 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.8](https://docs.floydhub.com/guides/tensorflow/#tensorflow-18) |
|                 | tensorflow-1.8:py2         | TensorFlow 1.8.0 + Keras 2.1.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.7  | tensorflow-1.7             | TensorFlow 1.7.0 + Keras 2.1.6 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.7](https://docs.floydhub.com/guides/tensorflow/#tensorflow-17) |
|                 | tensorflow-1.7:py2         | TensorFlow 1.7.0 + Keras 2.1.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.5  | tensorflow-1.5             | TensorFlow 1.5.0 + Keras 2.1.6 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) | [TensorFlow-1.5](https://docs.floydhub.com/guides/tensorflow/#tensorflow-15) |
|                 | tensorflow-1.5:py2         | TensorFlow 1.5.0 + Keras 2.1.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.4  | tensorflow-1.4             | TensorFlow 1.4.0 + Keras 2.0.8 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
|                 | tensorflow-1.4:py2         | TensorFlow 1.4.0 + Keras 2.0.8 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.3  | tensorflow-1.3             | TensorFlow 1.3.0 + Keras 2.0.6 on Python 3.6.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
|                 | tensorflow-1.3:py2         | TensorFlow 1.3.0 + Keras 2.0.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.2  | tensorflow-1.2             | TensorFlow 1.2.0 + Keras 2.0.6 on Python 3.5.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
|                 | tensorflow-1.2:py2         | TensorFlow 1.2.0 + Keras 2.0.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.1  | tensorflow                 | TensorFlow 1.1.0 + Keras 2.0.6 on Python 3.5.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
|                 | tensorflow:py2             | TensorFlow 1.1.0 + Keras 2.0.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 1.0  | tensorflow-1.0             | TensorFlow 1.0.0 + Keras 2.0.6 on Python 3.5.  | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
|                 | tensorflow-1.0:py2         | TensorFlow 1.0.0 + Keras 2.0.6 on Python 2.    | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
| TensorFlow 0.12 | tensorflow-0.12            | TensorFlow 0.12.1 + Keras 1.2.2 on Python 3.5. | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |
|                 | tensorflow-0.12:py2        | TensorFlow 0.12.1 + Keras 1.2.2 on Python 2.   | [floydhub/tensorflow](https://hub.docker.com/r/floydhub/tensorflow/) |                                                              |


