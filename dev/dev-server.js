var path = require('path');
var bs = require("browser-sync").create();
var proxy = require('http-proxy-middleware');

var config = require('../config');
var serverPath = path.join(__dirname, '../dist');

var jsonPlaceholderProxy = proxy('/api/', config.proxy);

bs.init({
    server: {
        baseDir: serverPath,
        middleware: [jsonPlaceholderProxy]
    },
    port: config.port
});

bs.watch(serverPath, function () {
    bs.reload()
});

