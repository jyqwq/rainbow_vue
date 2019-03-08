<template>
  <div class="forTop">
    <!--导航栏-->
    <nav class="navbar navbar-default nav_col navbar-fixed-top">
      <div class="container">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">彩虹日记</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>

            <a class="navbar-brand" href="index.html">
              <img alt="彩虹日记" src="../assets/logo_.png" class="logo_img">
            </a>
            <span class="navbar-toggle navbar-brand logo_text" style="color: #ffdd90"><strong>彩&nbsp;&nbsp;虹&nbsp;&nbsp;日&nbsp;&nbsp;记</strong></span>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="nav_hover"><a href="index.html">首页</a></li>
              <li class="nav_hover"><a href="#">热门</a></li>
              <li class="nav_hover"><a href="search/rank.html">排行榜</a></li>
              <li class="nav_hover"><a href="sharing/evaluation.html">测评资讯</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right unlogin">
              <li>
                <button type="button" class="btn btn-success unlogin_btn">登录</button>
              </li>
              <li>
                <button type="button" class="btn btn-success unregister_btn">注册</button>
              </li>
            </ul>
            <ul class="nav navbar-nav navbar-right islogin" style="display: none">
              <li><a href="#"><img src="../assets/usericon.png" alt="user-icon" class="img-circle usericon_img"></a>
              </li>
              <li class="nav_hover"><a href="#" class="a_width">消息 <span class="badge new_num">4</span></a></li>
              <li class="nav_hover"><a href="user/dynamic.html" class="a_width">动态 <span class="badge new_num">4</span></a></li>
              <li class="nav_hover hidden-sm"><a href="#">收藏</a></li>
              <li>
                <button type="button" class="btn btn-info sharing_btn">
                  <strong>写&nbsp;&nbsp;日&nbsp;&nbsp;记</strong></button>
              </li>
            </ul>
          </div>
          <!--用户下拉-->
          <div class="container hidden-xs navbar-fixed-top user_nav" style="display: none">
            <div class="user_box">
              <ul class="nav">
                <li><a href="user/222center222.html"><img src="../assets/person.png" alt=""><strong style="color: hotpink">&nbsp;个人中心</strong></a></li>
                <li><a href="#" class="exit_login"><img src="../assets/exit.png" alt=""><strong style="color: #cecece">&nbsp;退出登录</strong></a></li>
              </ul>
            </div>
          </div>
          <!--日记下拉-->
          <div class="container hidden-xs navbar-fixed-top sharing_nav" style="display: none">
            <div class="sharing_nav_box">
              <div class="sharing_hover"><a href="sharing/sharing_index.html"><div class="sharing_nav_btn"><img src="../assets/mood.png" alt=""> <br> 心情</div></a></div>
              <div class="sharing_hover"><a href="sharing/sharing_index.html"><div class="sharing_nav_btn"><img src="../assets/diary.png" alt=""> <br> 日记</div></a></div>
              <div class="sharing_hover"><a href="sharing/sharing_index.html"><div class="sharing_nav_btn"><img src="../assets/evaluation.png" alt=""> <br> 测评</div></a></div>
            </div>
          </div>
          <!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </div>
    </nav>
    <!--导航栏下拉-->
    <div class="container-fluid navbar-fixed-top down_position">
      <div class="row down_nav" style="display: none">
        <div class="visible-xs">
          <ul class="nav navbar-nav navbar_nav">
            <li class="nav_hover down_nav_text"><a href="#"><strong>热&nbsp;&nbsp;门</strong></a></li>
            <li class="nav_hover down_nav_text"><a
              href="search/rank.html"><strong>排&nbsp;&nbsp;行&nbsp;&nbsp;榜</strong></a></li>
            <li class="nav_hover down_nav_text"><a
              href="sharing/evaluation.html"><strong>测&nbsp;&nbsp;评&nbsp;&nbsp;资&nbsp;&nbsp;讯</strong></a></li>
          </ul>
          <ul class="nav navbar-nav navbar_nav unlogin">
            <li class="nav_hover down_nav_text"><a href="#" class="unlogin_btn"><strong>登&nbsp;&nbsp;录</strong></a></li>
            <li class="nav_hover down_nav_text"><a href="#" class="unregister_btn"><strong>注&nbsp;&nbsp;册</strong></a></li>
          </ul>
          <ul class="nav navbar-nav navbar_nav islogin" style="display: none">
            <li class="nav_hover down_nav_text"><a
              href="#"><strong>个&nbsp;&nbsp;人&nbsp;&nbsp;中&nbsp;&nbsp;心</strong></a></li>
            <li class="nav_hover down_nav_text"><a href="#"><strong>消&nbsp;&nbsp;息</strong> <span
              class="badge">4</span></a></li>
            <li class="nav_hover down_nav_text"><a href="user/dynamic.html"><strong>动&nbsp;&nbsp;态</strong> <span
              class="badge">4</span></a></li>
            <li class="nav_hover down_nav_text"><a href="#"><strong>收&nbsp;&nbsp;藏</strong></a></li>
            <li class="nav_hover down_nav_text"><a href="sharing/sharing_index.html"><strong>写&nbsp;&nbsp;日&nbsp;&nbsp;记</strong></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AllNav"
    }
</script>

<style scoped>
  .forTop{
    height: 60px;
  }
  .logo_img{
    position: relative;
    top: -5px;
  }
  .usericon_img{
    margin: -15px;
    margin-right: 7px;
  }
  .sharing_btn{
    width: 100px;
    line-height: 35px;
    font-size: 1.2em;
    background: #00CCFF;
  }
  .sharing_btn:hover{
    border: solid 1px #00dcff;
    background: #00dcff;
  }
  .unlogin_btn{
    position: relative;
    top: 7px;
    margin-right: 20px;
  }
  .unlogin_btn:hover{
    border: solid 1px #00CC00;
    background: #00CC00;
  }
  .unregister_btn{
    position: relative;
    top: 7px;
    margin-right: 20px;
  }
  .unregister_btn:hover{
    border: solid 1px #00CC00;
    background: #00CC00;
  }
  .nav_col{
    background: rgba(255, 255, 255, 0.8);
  }
  .a_width{
    width: 83px;
  }
  .nav_hover:hover{
    background: rgba(255, 255, 255, 0.5);
  }

  .under_table td{
    width: 100px;
    line-height: 30px;
    text-align: center;
  }
  .under_line{
    margin: 0;
    padding: 0;
    width: 1px;
    height: 50px;
    position: relative;
    top: 20px;
    border-left: solid 1px darkgrey;
  }
  .colour{
    color: darkgrey;
  }
  .last_center{
    margin-top: 20px;
    text-align: center;
  }
  .down_nav{
    background: rgba(255, 255, 255, 0.8);
    text-align: center;
    animation: fadeInDown 1s;
  }
  .down_position{
    top: 50px;
  }
  .logo_text{
    border: none;
    padding: 0;
    margin: 0;
    line-height: 50px;
    right: 29%;
  }
  .logo_text:hover{
    background: none;
  }
  .sharing_nav{
    top:49px;
    animation: fadeInDown 0.5s;
  }
  .sharing_nav_box{
    margin-right: 15px;
    float: right;
    background: #ffffff;
    border-radius: 5px;
  }
  .sharing_hover{
    float: right;
    border-radius: 5px;
  }
  .sharing_hover:hover{
    background: #ebebeb;
  }
  .sharing_nav_btn{
    float: right;
    color: hotpink;
    margin: 10px 30px;
  }
  .user_nav{
    top:45px;
    right: 650px;
    animation: fadeInDown 0.5s;
  }
  .user_box {
    float: right;
    background: #ffffff;
    border-radius: 5px;
  }
</style>
