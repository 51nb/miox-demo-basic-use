const webpackConfig = require('miox-vue2x-webpack-config');
const pkg = require('../package.json');
const proxy = require('./webpack.web.proxy.config');

module.exports = webpackConfig(config => {
    config.set({
        env: 'web',
        'source-compile': {
            dirs: [/^src/i],
            modules: [/miox\-/i, /webpack\-dev\-server/i]
        }
    });
    config.merge({
        entry: {
            app: config.resolve('src', 'index.js')
        },
        plugins: [
            config.html(config.resolve('src', 'index.html'))
        ],
        devServer: {
            contentBase: config.resolve('src'),
            proxy: proxy,
            host: pkg.service.ip,
            port: pkg.service.port,
            disableHostCheck: true
        }
    });

});