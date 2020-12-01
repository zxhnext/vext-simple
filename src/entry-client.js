/*
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 23:07:20
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/entry-client.js
 */ 
import { createApp } from './app.js';

const { app, store } = createApp();

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__)
}

app.$mount('#app');
