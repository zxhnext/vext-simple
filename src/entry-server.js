/*
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 23:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/entry-server.js
 */ 
import { createApp } from './app.js';

export default context => {
  return new Promise((resolve, reject) => {
    const { app, store, router } = createApp();

    router.push(context.url);

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents();

      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }

      Promise.all(matchedComponents.map(component => {
        if (component.asyncData) {
          return component.asyncData({ 
            route: router.currentRoute, // 匹配当前路由
            router,
            store
         });
        }
      })).then(() => {
        // 当使用 template 时，context.state 将作为 window.__INITIAL_STATE__ 状态，自动嵌入到最终的 HTML 中
        context.state = store.state;
        context.path = router.currentRoute.path
        context.isSSR = router.currentRoute.meta.isSSR
        // 返回根组件
        resolve(app);
      });
    }, reject);
  });
}
