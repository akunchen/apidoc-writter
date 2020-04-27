# apidoc-writter
> 本工具在于编写接口文档时候能实时刷新浏览器，搭配双屏显示器使用效果更佳

## 前言
使用了几个接口文档编写工具后，总觉得都差点意思，回想起实习时候后端同事用的`apidoc`这个工具，就拿来用一用，后面发现一发不可收拾，彻底爱上了这个工具

再配合几个工具，实现编写实时编译并刷新等自动化功能

本项目用到几个npm模块，分别是
- [apidoc](http://apidocjs.com/)，基于注释的api接口文档自动生成工具
- [chokidar](https://github.com/paulmillr/chokidar) ，监听文件变化
- [browser-sync](http://browsersync.io)，省时的浏览器同步测试工具
- [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)，接口转发

## 实现逻辑

### apidoc相关
- apidoc是根据提供的目录，进行扫描，然后提取注释，生成数据
```shell
# 安装依赖
yarn add apidoc
# 编译，-i 指的就是扫描目录，-o为输出目录
./node_modules/.bin/apidoc -i src/ -o dist/
# 而且此时还会根据当前目录下的apidoc.json里的配置生成，详情可参看apidoc官方介绍
```
- 基于上述逻辑，可以实现监听文件夹改动并实时编译的功能
[dev/compile.js](https://github.com/akunchen/apidoc-writter/blob/master/dev/complie.js)
```javascript
var chokidar = require('chokidar');
var shelljs = require('shelljs');
var watchFiles = require('../config').watchFiles;

watchFiles.forEach(function (file) {
    // 监听文件变化，编译
    chokidar.watch(file).on('change', function () {
        shelljs.exec('npm run build')
    });
});

shelljs.exec('npm run build');
```

### 启动web服务器
接下来就是启动一个web服务器，用来访问编译后的html，而且需要根据文件变化，实时刷新，这里采用的`browser-sync`来实现
[dev/dev-server.js](https://github.com/akunchen/apidoc-writter/blob/master/dev/dev-server.js)
```javascript
var path = require('path');
var bs = require("browser-sync").create();
var proxy = require('http-proxy-middleware');

var config = require('../config');
var serverPath = path.join(__dirname, '../dist');

// 这里使用一个代理插件，可以完美的处理跨域问题
var jsonPlaceholderProxy = proxy('/api/', config.proxy);

bs.init({
    server: {
        baseDir: serverPath,
        // 中间件，跨域处理
        middleware: [jsonPlaceholderProxy]
    },
    port: config.port
});

bs.watch(serverPath, function () {
    bs.reload()
});


```
