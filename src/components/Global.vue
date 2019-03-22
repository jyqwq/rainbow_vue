<template>

</template>

<script>
    export default {
      //七牛云图片服务
      // IMG: "http://pgzl85n0n.bkt.clouddn.com/",
      //后端服务地址
      HOST:"http://192.168.1.105:8000/",
      //登录状态
      ISLOGIN:Boolean(localStorage.getItem('islogin')) || false
    }
</script>

<style scoped>

</style>
