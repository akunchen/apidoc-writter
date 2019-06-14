var path = require('path');

module.exports = {
    port: 3000,
    proxy: { // 接口转发，方便接口编写的时候跨域问题
        target: 'http://localhost:9002',
        changeOrigin: true,
        pathRewrite: {
            '^/api': '/api'
        },
        logLevel: 'debug'
    },
    watchFiles: [ // 文件变化需要服务器刷新的文件列表
        path.join(__dirname, '../src'),
        path.join(__dirname, '../apidoc.json')
    ]
};
