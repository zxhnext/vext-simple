/*
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 22:53:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/server/server.js
 */ 
const Koa = require('koa');
const Router = require('koa-router');
const serve = require('koa-static');
const path = require('path');
const fs = require('fs');
const { createBundleRenderer } = require('vue-server-renderer');

const config = require('../config')

const backendApp = new Koa();
const backendRouter = new Router();

const serverBundle = require(path.resolve(__dirname, '../dist/vue-ssr-server-bundle.json'));
const clientManifest = require(path.resolve(__dirname, '../dist/vue-ssr-client-manifest.json'));
const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.ssr.html'), 'utf-8');

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: template,
  clientManifest: clientManifest
});

// 后端Server
backendApp.use(serve(path.resolve(__dirname, '../dist')));

const renderHtml = (ctx, string) => {
  ctx.type = 'html';
  ctx.status = 200;
  ctx.body = string;
}

const splitPath = (path) => {
  let pathList = path.split('/')
  let pathDir = '../dist'
  pathList.forEach(path => {
      path && (pathDir += '/' + path)
  })
  return pathDir + '/index.html'
}

backendRouter.get('*', async (ctx, next) => {

  let context = {
    url: ctx.url
  };

  // const ssrStream = renderer.renderToStream(context);
  let htmlString = await renderer.renderToString(context)

  if(!context.isSSR) {
    let staticPath = config.prerenderRoutes.includes(context.path) ? splitPath(context.path) : '../dist/index.html'
    htmlString = fs.readFileSync(path.resolve(__dirname, staticPath), 'utf-8');
  }

  renderHtml(ctx, htmlString)
});

backendApp
  .use(backendRouter.routes())
  .use(backendRouter.allowedMethods());

backendApp.listen(3000, () => {
  console.log('服务器端渲染地址： http://localhost:3000');
});
