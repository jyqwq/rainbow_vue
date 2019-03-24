<template>
  <!--首页部分-->
  <div :class="seflag==0?['text_active']:''" class="dy_row text_active">
    <!--头像昵称-->
    <div class="row row_margin">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-1" style="height: 58px">
        <img @click="ftwoChange" src="" class="img-responsive head_img" alt="Responsive image">
      </div>
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-7 qz_nick">
        <span class="font_nick">昵称</span>
      </div>
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-3">
        <div @click="foneChange" class="button button--primary button--continue margin-top margin-bottom qz_edit">修改资料</div>
        <a href="" class="button button--primary button--continue margin-top margin-bottom">个人空间 ></a>
      </div>
    </div>
    <div class="qz_line" style="margin-top: 15px"></div>
    <!--彩虹认证-->
    <div class="row row_margin">
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="qz_authent anima_pul">
          <div class="auth_pic">
            <img src="../../assets/setting/authent_daren.png" class="img-responsive" alt="Responsive image">
          </div>
          <span class="auth_tit">美妆达人认证 ></span><br>
          <span class="auth_inf">彩虹日记知名美妆达人</span>
        </div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="qz_authent anima_pul">
          <div class="auth_pic">
            <img src="../../assets/setting/authent_identity.png" class="img-responsive" alt="Responsive image">
          </div>
          <span class="auth_tit">身份认证 ></span><br>
          <span class="auth_inf">社会身份及职业</span>
        </div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="qz_authent anima_pul">
          <div class="auth_pic">
            <img src="../../assets/setting/authent_enterprise.png" class="img-responsive" alt="Responsive image">
          </div>
          <span class="auth_tit">企业认证 ></span><br>
          <span class="auth_inf">企业官方账号</span>
        </div>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <div class="qz_authent anima_pul">
          <div class="auth_pic">
            <img src="../../assets/setting/authent_organization.png" class="img-responsive" alt="Responsive image">
          </div>
          <span class="auth_tit">组织认证 ></span><br>
          <span class="auth_inf">社会团体官方账号</span>
        </div>
      </div>
    </div>
    <div class="qz_line" style="margin-bottom: 15px"></div>
    <!--账号安全-->
    <span class="font_account">账号安全</span>
    <div class="row row_margin">
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <div class="account_pic">
          <img src="../../assets/setting/security_letter.png" class="img-responsive" alt="Responsive image">
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <span class="font_bind">绑定邮箱</span><br>
        <span class="font_binin">绑定邮箱后即可使用邮箱登录</span><br>
        <a href="#" class="button button--primary button--continue margin-top margin-bottom" style="margin-top: 5px">去绑定 ></a>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <div class="account_pic">
          <img src="../../assets/setting/security_mobile.png" class="img-responsive" alt="Responsive image">
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <span class="font_bind">绑定手机</span><br>
        <span class="font_binin">绑定手机后即可使用手机号登录</span><br>
        <a href="#" class="button button--primary button--continue margin-top margin-bottom" style="margin-top: 5px">去绑定 ></a>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
    </div>
    <div class="row row_margin">
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <div class="account_pic">
          <img src="../../assets/setting/security_password.png" class="img-responsive" alt="Responsive image">
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <span class="font_bind">设置密保</span><br>
        <span class="font_binin">设置密保，账号更安全</span><br>
        <a href="#" class="button button--primary button--continue margin-top margin-bottom" style="margin-top: 5px">去设置 ></a>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1">
        <div class="account_pic">
          <img src="../../assets/setting/security_identity.png" class="img-responsive" alt="Responsive image">
        </div>
      </div>
      <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <span class="font_bind">实名认证</span><br>
        <span class="font_binin">实名认证成功后，可享受开通直播间等服务</span><br>
        <a href="#" class="button button--primary button--continue margin-top margin-bottom" style="margin-top: 5px">去认证 ></a>
      </div>
      <div class="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "HomePage",
      props:['seflag'],
      methods:{
        ftwoChange:function () {
          this.$emit('childByflag',2)//子传父（子组件里面写）
          this.$emit('tabChange', 'ModifyHead')//子传父（子组件里面写）
        },
        foneChange:function () {
          this.headpage=2;
          this.infopage=1;
          this.$emit('childByflag',1)//子传父（子组件里面写）
          this.$emit('tabChange', 'ModifyInformation')//子传父（子组件里面写）
        }
      },
    }
</script>

<style scoped>
  /*字体*/
  /*首页部分——开始*/
  /*头像昵称*/

  .qz_nick{
    height: 50px;
  }
  .font_nick{
    font-size: 1.1em;
    font-weight: bolder;
    line-height: 50px;
  }

  /*账号安全*/
  .font_account{
    font-size: 1.3em;
  }
  .font_bind{
    font-size: 1.1em
  }
  .font_binin{
    color: #A6A2AA;
    font-size: 0.8em
  }
  /*首页部分——结束*/
  /*首页部分*/
  .row_margin{
    margin-top: 30px;
  }
  /*--------------输入部分--------------*/
  .text_active{
    animation: fadeInUp 1s;
  }
  /*首页部分—开始*/
  /*头像昵称—开始*/
  .head_img{
    border-radius: 50%;
    height: 100%;
  }
  /*头像昵称—结束*/
  /*彩虹认证—开始*/
  .qz_authent{
    height: 240px;
    background: rgba(220, 20, 60, 0.6);
    border-radius: 10px;
    text-align: center;
    padding-top: 40px
  }
  .auth_pic{
    height: 110px;
  }
  .auth_pic img{
    margin: auto;
  }
  .auth_tit{
    font-weight: bolder;
    font-size: 1.6em;
    color: whitesmoke;
  }
  .auth_inf{
    font-size: 0.8em;
    color: whitesmoke;
  }
  /*彩虹认证—结束*/
  /*账号安全—开始*/
  .account_pic{
    border-radius: 50%;
    background: #ADB6C7;
    height: 50px;
    padding-top: 7px;
  }
  .account_pic img{
    margin: auto;
  }
  /*账号安全—结束*/
  /*首页部分—结束*/

  /*按钮—开始*/
  .button--continue {
    position: relative;
    padding-right: 2em;
  }
  .button--primary {
    background: rgba(220, 20, 60, 0.71);
    color: #fff;
    border: solid 2px rgba(220, 20, 60, 0.71);
  }
  .button--primary:hover{
    background: whitesmoke;
    text-decoration: none;
    color: rgba(220, 20, 60, 0.71);
  }
  /*编辑按钮—开始*/
  /*.button--edit {*/
  /*background: #FFAAAA;*/
  /*color: #fff;*/
  /*border: #FFAAAA;*/
  /*}*/
  /*.button--edit:hover{*/
  /*background: #FFE3E5;*/
  /*text-decoration: none;*/
  /*color: #FFAAAA;*/
  /*}*/
  /*编辑按钮—结束*/
  .button {
    border-radius: .6em;
    padding: .2em 1em .3em;
    line-height: 1.618;
    display: inline-block;
    text-align: center;
    text-align-last: center;
    vertical-align: middle;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    transition: all .2s ease-out;
    text-decoration: none;
  }
  .margin-bottom {
    margin-bottom: 2rem;
  }
  .margin-top {
    margin-top: 2rem;
  }
  /*按钮—结束*/

  /*动画*/
  /*放大*/
  .anima_pul:hover{
    animation: pulse 1s;
  }


</style>
