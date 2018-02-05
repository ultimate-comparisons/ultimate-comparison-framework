var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './node_modules/ultimate-comparison-framework/app/polyfills.ts',
        'vndr': './node_modules/ultimate-comparison-framework/app/vendor.ts',
        'app': './node_modules/ultimate-comparison-framework/app/main.ts',
        'data': './tmp/data.json'
    },

    resolve: {
        extensions: ['*', '.ts', '.js']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader?minimize=false'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('node_modules/ultimate-comparison-framework/app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('node_modules/ultimate-comparison-framework/app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['node_modules/ultimate-comparison-framework/app', 'vndr', 'polyfills']
        }),
        new CopyWebpackPlugin([
          {
            "from": "tmp/data.json"
          }
        ], {
          "ignore": [
            ".gitkeep",
            "**/.DS_Store",
            "**/Thumbs.db"
          ],
          "debug": "warning"
        }),

        new HtmlWebpackPlugin({
            template: 'node_modules/ultimate-comparison-framework/index.html'
        })
    ]
};
