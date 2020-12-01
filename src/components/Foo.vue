<!--
 * @Author: your name
 * @Date: 2018-12-18 18:34:46
 * @LastEditTime: 2020-06-27 20:04:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/components/Foo.vue
--> 
<template>
  <div class="foo">
    <router-link to="/bar">Goto Bar</router-link> 
    <h1 @click="onHandleClick">Foo</h1>
  </div>
</template>

<script>
export default {
  methods: {
    onHandleClick() {
      alert('foo');
    }
  },
}
</script>

<style>
.foo {
  font-size: 14px;
}
</style>
