<!--
 * @Author: your name
 * @Date: 2020-06-27 19:07:36
 * @LastEditTime: 2020-06-27 20:12:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ppt-demo/src/skeleton/skeleton-bar.vue
--> 
<template>
    <div class="skeleton">
        <div class="skeleton-head"></div>
        <div class="skeleton-body">
            <div class="skeleton-title"></div>
            <div class="skeleton-content"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'skeleton',
    
}
</script>

<style scoped>
    .skeleton {
        padding: 10px;
    }
    
    .skeleton .skeleton-head,
    .skeleton .skeleton-title,
    .skeleton .skeleton-content {
        background: rgb(194, 207, 214);
    }
    
    .skeleton-head {
        width: 100px;
        height: 100px;
        float: left;
    }
    
    .skeleton-body {
        margin-left: 110px;
    }
    
    .skeleton-title {
    width: 500px;
    height: 60px;
    transform-origin: left;
        animation: skeleton-stretch .5s linear infinite alternate;
    }
    
    .skeleton-content {
    width: 260px;
    height: 30px;
    margin-top: 10px;
    transform-origin: left;
        animation: skeleton-stretch .5s -.3s linear infinite alternate;
    }
    
    @keyframes skeleton-stretch {
        from {
            transform: scalex(1);
        }
        to {
            transform: scalex(.3);
        }
    }
</style>
