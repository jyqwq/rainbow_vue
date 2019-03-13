<template>
  <div>
    <div class="row">
      <!--左边导航-->
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 choose_sharing">
        <ul class="nav nav-tabs nav-stacked shu_nav row_margin margin_end">
          <li role="presentation" class="shu_active nav_page"><a href="#"><img src="../../assets/setting/nav_setting.png" alt="">&nbsp;&nbsp;首页</a></li>
          <li role="presentation" class="nav_info"><a href="#"><img src="../../assets/setting/nav_message.png" alt="">&nbsp;&nbsp;我的信息</a></li>
          <li role="presentation" class="nav_head"><a href="#"><img src="../../assets/setting/nav_head.png" alt="">&nbsp;&nbsp;我的头像</a></li>
        </ul>
      </div>
      <!--右边内容-->
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 content_sharing">
        <!--首页部分-->
        <div class="dy_row text_active">
          <!--头像昵称-->
          <div class="row row_margin">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-1" style="height: 58px">
              <img src="" class="img-responsive head_img" alt="Responsive image">
            </div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-7 qz_nick">
              <span class="font_nick">南浅</span>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-3">
              <div class="button button--primary button--continue margin-top margin-bottom qz_edit">修改资料</div>
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
        <!--我的信息-->
        <div class="dairy_row" style="display: none">
          <div class="row row_margin">
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
            <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
              <table>
                <tr>
                  <td class="text_title">昵称：</td>
                  <td><input class="form-control qz_text qz_text1" maxlength="5" placeholder=""></td>
                  <td><span id="nic_err" class="log_bla"></span></td>
                </tr>
                <tr>
                  <td class="text_title">个性签名：</td>
                  <td><textarea class="form-control qz_text qz_text2" rows="2" maxlength="16">小仙女都是喝露水的</textarea></td>
                </tr>
                <tr>
                  <td class="text_title">手机号：</td>
                  <td><input class="form-control qz_text qz_text3" maxlength="11" placeholder="17355135718"></td>
                  <td><span id="tel_err" class="log_bla"></span></td>
                </tr>
                <tr>
                  <td class="text_title">性别：</td>
                  <td>
                    <button type="button" class="btn btn-info select_button button1">男</button>
                    <button type="button" class="btn btn-info select_button button2">女</button>
                    <button type="button" class="btn btn-info select_button button0">保密</button>
                  </td>
                </tr>
                <tr>
                  <td class="text_title">出生日期：</td>
                  <td>
                    <div class="qz_text">
                      <select></select>
                      <span>年</span>
                      <select></select>
                      <span>月</span>
                      <select></select>
                      <span>日</span>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
            <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          </div>
          <div class="qz_line"></div>
          <div class="row row_margin">
            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-6"></div>
            <div class="col-xs-7 col-sm-7 col-md-7 col-lg-6">
              <button type="button" class="btn btn-info select_button submit_button">提交</button>
            </div>
          </div>
        </div>
        <!--我的头像-->
        <div class="test_row" style="display: none">
          <div class="row row_margin">
            <div class="col-xs-2 col-sm-4 col-md-5 col-lg-5 guide">
              <img src="" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-10 col-sm-8 col-md-7 col-lg-7">
              <em class="change_em">
                <input type="file" class="change_head">
                <img src="" class="master_head" id="icon">
              </em>
            </div>
          </div>
          <div class="qz_line2"></div>
          <span class="font_pendant">挂件商城</span>
          <div class="row row_margin">
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant1.png" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant2.png" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant3.png" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant4.png" class="img-responsive" alt="Responsive image">
            </div>
          </div>
          <div class="row row_margin">
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant5.png" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant6.png" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant7.png" class="img-responsive" alt="Responsive image">
            </div>
            <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
              <img src="../../assets/setting/pendant8.png" class="img-responsive" alt="Responsive image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "Setting"
    }
</script>

<style scoped>

</style>
