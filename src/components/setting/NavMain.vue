<template>
  <!--左边导航-->
    <ul class="nav nav-tabs nav-stacked shu_nav row_margin margin_end">
      <li role="presentation" class="shu_active nav_page"><a href="#"><img src="../../assets/setting/nav_setting.png" alt="">&nbsp;&nbsp;首页</a></li>
      <li role="presentation" class="nav_info"><a href="#"><img src="../../assets/setting/nav_message.png" alt="">&nbsp;&nbsp;我的信息</a></li>
      <li role="presentation" class="nav_head"><a href="#"><img src="../../assets/setting/nav_head.png" alt="">&nbsp;&nbsp;我的头像</a></li>
    </ul>
</template>

<script>
    export default {
        name: "NavMain"
    }
</script>

<style scoped>
  /*全局*/
  .shu_nav{
    border-bottom: none;
    border-right: solid 2px #f7c5c9;
    /*padding-right: -1px;*/
    box-sizing: border-box;
  }
  /*首页部分*/
  .row_margin{
    margin-top: 30px;
  }
  /*--------------输入部分--------------*/
  .margin_end{
    margin-bottom: 50px;
  }
  .shu_active{
    margin-right: -2px !important;
    border: solid 2px #f7c5c9 !important;
    border-right: solid 2px white !important;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }
  .shu_active:hover{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .shu_active a{
    font-size: 1.2em;
    background: #f7c5c9 !important;
    border-radius: 3px !important;
  }
</style>
