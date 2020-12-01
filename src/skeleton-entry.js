/*
 * @Author: your name
 * @Date: 2020-06-27 19:03:39
 * @LastEditTime: 2020-06-27 20:43:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/skeleton-entry.js
 */ 
import Vue from 'vue'
// import SkeletonQuestion from './views/skeleton/skeleton-question.vue'
// import SkeletonMy from './views/skeleton/skeleton-my.vue'

import skeleton from "./skeleton/index"
Vue.use(skeleton)

let skeletonComponents = Vue.prototype.skeletonComponents
let domTrees = '';
skeletonComponents.forEach(filename => {
    domTrees += `<${filename} id="${filename}" style="display:none" />`
})

export default new Vue({
    template: `
    <div>
      ${domTrees}
    </div>
  `
    // template: '<SkeletonMy />'
})
