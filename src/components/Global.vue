<template>

</template>

<script>
    export default {
      //七牛云图片服务
      IMG: "http://por6yfn25.bkt.clouddn.com/",
      //后端服务地址
      HOST:"http://192.168.2.66:8000/",
      //登录状态
      ISLOGIN:Boolean(localStorage.getItem('islogin')) || false,
      //时间转换
      TIME:function number_to_time(num) {
        let num_second=num/1000;
        let days=Math.floor(num_second/(60*60*24));
        let hours=Math.floor((num_second%(60*60*24))/(60*60));
        let mimutes=Math.floor((num_second%(60*60))/60);
        let seconds=Math.floor((num_second%60));
        // 显示距系统时间时间差
        let result='';
        if (days>0){
          result=days+'天前';
        }else if (hours>0){
          result=hours+'小时前';
        } else if (mimutes>0){
          result=mimutes+'分钟前';
        } else if (seconds=>0) {
          result=seconds+'秒前';
        } else {
          result=null;
        }
        return result;
      }
    }
</script>

<style scoped>

</style>
