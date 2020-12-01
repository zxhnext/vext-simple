/*
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 23:07:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/app.js
 */ 
import Vue from 'vue';
import createStore from './store/store.js';
import createRouter from './router';
import App from './App.vue';

export function createApp() {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    router,
    store,
    render: h => h(App),
    // 添加mounted，不然不会执行预编译
    mounted() {
      document.dispatchEvent(new Event("render-event"));
    }
  });

  return { app, store, router };
}
