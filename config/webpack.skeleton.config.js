/*
 * @Author: your name
 * @Date: 2020-06-27 17:30:22
 * @LastEditTime: 2020-06-27 20:39:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/config/webpack.skeleton.config.js
 */ 
'use strict';

const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = merge(baseWebpackConfig, {
    target: 'node',
    devtool: false,
    entry: {
        client: resolve('../src/skeleton-entry.js')
    },
    output: Object.assign({}, baseWebpackConfig.output, {
        libraryTarget: 'commonjs2'
    }),
    externals: nodeExternals({
        whitelist: /\.css$/
    }),
    plugins: []
})
