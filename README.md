# gulp-best-practice
prace for gulp

## 1.gulp 打包jade编译命令
```
gulp jade
```

## 2.browserify的功能

```
把 require('XXX'),这种语法,转换成可以被浏览器识别的js文件
这样,在本地可以使用require这种语法,来实现代码模块化,然后打包到前端,依旧可以使用~~
```
## 3.uglify 加密js

```
把js文件压缩成一行,加密,在生产环境,可以实现代码保密
```
## 4.gulp-if 编译时引入if判断
```
在gulp里面使用if语句
```

## 5.gulp-sass编译sass问价为css文件
### 这儿有两个坑,在定义的时候
* 不能用大括号,只能用空格表示
* 属性:之后加空格,然后写上属性值
```
@import "variables";
body
	color: $red;
```