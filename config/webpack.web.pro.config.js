const webpackConfig = require('miox-vue2x-webpack-config');

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
            'app': config.resolve('src', 'index.js')
        },
        output: {
            path: config.resolve('build'),
            filename: '[name].[hash:10].js'
        },
        plugins: [
            config.html(config.resolve('src', 'index.html')),
            config.resource('web.[hash:10].css')
        ]
    });
});