<template>
  <div class="row all_dy user_message">
    <div class="row margin_top"><img src="../../assets/usericon.png" alt="" class="img-circle usericon"></div>
    <div class="row margin_top"><span class="user_nickname">纸上的彩虹</span></div>
    <div class="row user_fans margin_top">
      <ul class="nav">
        <li class="dy_user_nav"><a href="#"><strong class="fans">0</strong></a> <span>粉丝</span></li>
        <li class="dy_user_nav"><a href="#"><strong class="fcs">0</strong></a> <span>关注</span></li>
        <li class="dy_user_nav"><a href="#"><strong class="num_dy">0</strong></a> <span>动态</span></li>
      </ul>
    </div>
    <div class="row margin_top">
      <div class="exit"><a href="#" class="exit_col">退出登录</a></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "UserInfo"
    }
</script>

<style scoped>
  a:link{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }

  .all_dy{
    background: #e9faff;
    border-radius: 5px;
  }
  .user_message{
    height: 200px;
    overflow: hidden;
  }
  .margin_top{
    text-align: center;
    margin-top: 5px;
  }
  .user_fans{
    margin-left: 8px;
  }

  .dy_user_nav{
    float: left;
    margin-left: 40px;
    margin-bottom: 35px;
  }
  .exit{
    height: 40px;
    width: 300px;
    position: relative;
    left: 20px;
    margin-right: 30px;
    float: right;
    background: #f2f2f2;
    line-height: 30px;
  }
  .exit_col{
    color: #737373;
  }


</style>
