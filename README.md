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
## 3.uglify

```
把js文件压缩成一行,加密,在生产环境,可以实现代码保密
```
## 4.gulp-if
```
在gulp里面使用if语句
```