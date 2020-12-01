/*
 * @Author: your name
 * @Date: 2020-06-27 16:43:41
 * @LastEditTime: 2020-06-27 19:58:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/config.js
 */ 

 module.exports = {
    prerenderRoutes: ['/prerender'],
    // 骨架屏配置
    skeletonRoutes: [{
        path: '/foo', //对应使用路由
        skeletonId: 'Skeleton-foo' // 所用骨架屏的id标识
    }, {
        path: '/bar', //对应使用路由
        skeletonId: 'Skeleton-bar' // 所用骨架屏的id标识
    }],
 }
