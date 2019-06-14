var chokidar = require('chokidar');
var shelljs = require('shelljs');
var watchFiles = require('../config').watchFiles;

watchFiles.forEach(function (file) {
    chokidar.watch(file).on('change', function () {
        shelljs.exec('npm run build')
    });
});

shelljs.exec('npm run build');

