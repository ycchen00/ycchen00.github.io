**报错信息**
`Could not build a TypeSpec for <KerasTensor: shape=(None, 64, 64, 256) dtype=float32 (created by layer 'tf.image.resize')> with type KerasTensor`
**分析**
参考[博客](https://stackoverflow.com/questions/65383964/typeerror-could-not-build-a-typespec-with-type-kerastensor)，认为是`tensorflow`版本问题，该问题经常出现在1.x和2.x的代码之间。可能是tensorflow或keras的API改变造成的。

**解决方法**
换`tensorflow`版本！
因为是在`google colab`情况下运行代码，import时加上`%tensorflow_version 1.x `然后`restart runtime`即可，然后用`tf.__version__`查看版本，如图：
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210303181403816.png#pic_center)

