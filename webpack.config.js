const path = require('path');
require('@babel/register');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "src/example.jsx"),
    output: {
        path: path.resolve(__dirname, 'public/scripts'),
        publicPath: '/scripts/',
        filename: 'example.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
        hints: false
    }
};