const AutoPrefixer = require('autoprefixer');

module.exports = {
    plugins: [
        AutoPrefixer({
            browsers: ['last 20 versions']
        })
    ]
}