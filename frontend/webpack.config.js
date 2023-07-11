const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/app.js',
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'static'),
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
            },
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        ],
    },
    devtool : 'source-map',
    resolve : {
        fallback: {
            "os": false ,
            "crypto": false,
            "path": false
        }
    },
    // plugins : [
    //     new webpack.DefinePlugin({ // <-- key to reducing React's size
    //         'process.env': {
    //           'NODE_ENV': JSON.stringify('production')
    //         }
    //       }),
    //       new webpack.optimize.DedupePlugin(), //dedupe similar code
    //       new webpack.optimize.UglifyJsPlugin(), //minify everything
    //       new webpack.optimize.AggressiveMergingPlugin()//Merge chunks
    // ]
};