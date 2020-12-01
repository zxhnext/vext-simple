/*
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 20:47:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/config/webpack.client.config.js
 */ 
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const {
  SkeletonPlugin,
} = require('page-skeleton-webpack-plugin')

const base = require('./webpack.base.config');
const config = require("../config")

module.exports = merge(base, {
  entry: {
    client: path.resolve(__dirname, '../src/entry-client.js'),
    vendor: ["vue"]
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
            {
                loader: MiniCssExtractPlugin.loader,
            },
            "css-loader",
            {
                loader: "postcss-loader",
                options: {
                    sourceMap: true
                }
            }
        ]
      },
    ]
  },
  plugins: [
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html'),
      filename: 'index.html'
    }),
    new PrerenderSPAPlugin({
      // 生成文件的路径，也可以与webpakc打包的一致。
      // 下面这句话非常重要！！！
      // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
      staticDir: path.join(__dirname, "../dist"),
      // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
      routes: config.prerenderRoutes,
    }),
    new MiniCssExtractPlugin(),
    new SkeletonWebpackPlugin({
      webpackConfig: require('./webpack.skeleton.config'),
      quiet: true,
      router: {
          mode: 'history',
          routes: config.skeletonRoutes
      }
    }),
  ],
});
