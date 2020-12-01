/*
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 16:54:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/router/index.js
 */ 
import Vue from 'vue';
import Router from 'vue-router';
import Bar from '../components/Bar.vue';

Vue.use(Router);

function createRouter() {
  const routes = [
    {
      path: '/bar',
      component: Bar,
      meta: {
        isSSR: true
      }
    },
    {
      path: '/foo',
      component: () => import('../components/Foo.vue'),   // 异步路由
      meta: {
        isSSR: false
      }
    },
    {
      path: '/prerender',
      meta: {
          title: '预渲染',
          description: '预渲染',
          isSSR: false,
      },
      component: () => import( /* webpackChunkName: "prerender" */ '../components/prerender.vue')
    }
  ];

  const router = new Router({
    mode: 'history',
    routes
  });

  return router;
}

export default createRouter;
