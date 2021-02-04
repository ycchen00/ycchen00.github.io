---
 title: Matplotlib | 架构概述
 date: 
 updated: 
 categories:
 - DSci
 - Visualization
 tags:
 - DataScience
 - Visualization
 - Matplotlib
---
>这里记下关于Matplotlib体系结构的笔记，主要是上课内容加上自己找的资料，夹英夹中，大家可以当个参考。
<!--less-->

Less is more effective 
Less is more attractive 
Less is more impactive 



# Matplotlib architecture

[for more info](http://aosabook.org/en/matplotlib.html)



Matplotlib体系结构分为三层，可以将其视为堆栈。位于另一层之上的每一层都知道如何与它下面的层进行通信，但是下层却不知道它上面的层。从下到上的三层是：Backend, Artist, Scripting Layer.

## Backend Layer (FigureCanvas, Renderer, Event)
Has three built-in abstract interface classes:
 - FigureCanvas: matplotlib.backened_bases.FigureCnvas
	- Encompasses the area onto which the figure is drawn
    - 例如画纸
 - Renderer: matplotlib.backened_bases.Renderer
 	- Knows how to draw on the FigureCanvas
    - 例如画笔
 - Event: matplotlib.backend_bases.Event
    - Handles user inputs such as keyboard strokes and mouse clicks

## Artist Layer (Artist)
- Comprised of one main object - Artist:
    - Knows how to use the Renderer to draw on the canvas.
    - 在matplotlib中看到的所有内容Figure都是一个 Artist实例。
- Title, lines, tick labels, and images, all correspond to individual Artist instances.
- Two types of Artist objects:
  - Primitive: Line2D, Rectangle, Circle, and Text
  - Composite: Axis, Tick, Axes, and Figure
- Each  artist may contain other composite artists as well as primitive artists.

一个用Artist作图例子~

```python
# Putting the Artist Layer to Use
# generate a histogram of some data using the Artist layer
from matplotlib.backends.backend_agg import FigureCanvasAgg as FigureCanvas # import FigureCanvas
from matplotlib.figure import Figure # import Figure artist
fig = Figure()
canvas = FigureCanvas(fig)

# create 10000 random numbers using numpy
import numpy as np
x = np.random.randn(10000)

ax = fig.add_subplot(111) # create an axes artist

ax.hist(x, 100) # generate a histgram of the 10000 numbers

# add a little to the figure and save it
ax.set_title('Normal distribution with $\mu=0, \sigma=1$')
fig.savefig('matplotlib_histogram.png')
```

![](https://img-blog.csdnimg.cn/20210121222149735.png#pic_center)

## Scripting Layer (pyplot)

- 日常用途，更简洁
- Comprised mainly of **pyplot**, a scripting interface that is lighter that the **Artist** layer.
- Let's see how we can generate the same histogram of 10000 random values using the **pyplot** interface


```python
import matplotlib.pyplot as plt
import numpy as np

x = np.random.randn(10000)

plt.hist(x, 100)
plt.title(r'Normal distribution with $\mu=0, \sigma=1$')
plt.savefig('matplotlib_histogram.png')
plt.show()
```

![](https://img-blog.csdnimg.cn/20210122203721967.png#pic_center)

    


