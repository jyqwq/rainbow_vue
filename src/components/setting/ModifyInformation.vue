<template>
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
</template>

<script>
    export default {
        name: "ModifyInformation"
    }
</script>

<style scoped>
  /*字体*/
  /*我的信息—开始*/
  .text_title{
    font-family: 幼圆;
    font-size: 1.1em;
    float: right;
    margin-top: 15px;
  }
  .qz_text{
    font-family: 幼圆;
    font-size: 1.1em;

    /*width: 95%;*/
    margin: 15px;
    resize: none;
    /*float: right;*/
  }
  .font_pendant{
    font-size: 1.1em;
  }
  /*我的信息—结束*/
  /*首页部分*/
  .row_margin{
    margin-top: 30px;
  }
  /*我的信息—开始*/
  .log_bla{
    margin-left: 30px;
  }
  .select_button{
    margin: 15px 5px;
    background: #FFAAAA;
    border: #FFAAAA;
  }
  .button_active{
    background: #2DAED4;
  }
  .qz_line{
    margin-top: 50px;
    height: 1px;
    background: #d9d9d9;
  }
  .submit_button{
    background: #FFAAAA;
    border: #FFAAAA;
  }
  /*我的信息—结束*/
</style>
