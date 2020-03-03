const path = require('path')


module.export = {
    entry: './src/index.js',

    output: {
        path: path.resolve('dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
        ]
    }
}
