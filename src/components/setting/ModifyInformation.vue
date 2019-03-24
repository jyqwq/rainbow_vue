<template>
  <!--我的信息-->
  <div :class="seflag==1?['text_active']:''" class="dairy_row">
    <div class="row row_margin">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <table>
          <tr>
            <td class="text_title">昵称：</td>
            <td><input @change="checkName()" v-model="nick" class="form-control qz_text qz_text1" maxlength="5" placeholder="昵称"></td>
            <td><span v-text="nicerr" id="nic_err" class="log_bla"></span></td>
          </tr>
          <tr>
            <td class="text_title">个性签名：</td>
            <td><input :value="person.autograph" class="form-control qz_text qz_text2" maxlength="16" placeholder="个性签名"></td>
          </tr>
          <!--<tr>-->
            <!--<td class="text_title">手机号：</td>-->
            <!--<td><input @change="checkTelphone" v-model="tele" class="form-control qz_text qz_text3" maxlength="11" placeholder="手机号"></td>-->
            <!--<td><span v-text="telerr" id="tel_err" class="log_bla"></span></td>-->
          <!--</tr>-->
          <tr>
            <td class="text_title">性别：</td>
            <td>
              <button @click="sexflag=1" :class="sexflag==1?'button_active':''" type="button" class="btn btn-info select_button button1">男</button>
              <button @click="sexflag=2" :class="sexflag==2?'button_active':''" type="button" class="btn btn-info select_button button2">女</button>
              <button @click="sexflag=0" :class="sexflag==0?'button_active':''" type="button" class="btn btn-info select_button button0">保密</button>
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
      name: "ModifyInformation",
      props:['seflag'],
      data:function () {
        return{
          sexflag:'-1',
          person:'',
          nick:'',
          nicerr:'',
          tele:'',
          telerr:'',

        }
      },
      mounted:function(){
        let userInfo=sessionStorage.getItem('userInfo');
        this.person=JSON.parse(userInfo);
        this.nick=this.person.name;
        this.sexflag=this.person.sex;
        this.data_select()
      },
      methods:{
        // 检查昵称
        checkName: function () {
          if (this.nick=='') {
            this.nicerr='*请输入昵称*';
            return false;
          }
          return true;
        },
        // 检查手机号
        // checkTelphone: function checkTelphone() {
        //   var regMobile=/^1\d{10}$/;
        //   if(this.tele){
        //     if(regMobile.test(this.tele)) {
        //       this.telerr = '';
        //       return true;
        //     }else{
        //       this.telerr = '*手机号码格式不正确*';
        //       return false;
        //     }
        //   }else{
        //     this.telerr='*请输入手机号*';
        //     return false;
        //   }
        // },
        //生日选择器
        data_select:function (res) {
          var selects = document.getElementsByTagName("select");//通过标签名获取select对象
          var date = new Date();//获取系统当前时间
          var nowYear = date.getFullYear();//获取当前的年
          //生成年份选择框
          for(var i=nowYear-100;i<=nowYear;i++){
            var optionYear = document.createElement("option");
            optionYear.innerHTML=i;
            optionYear.value=i;
            selects[0].appendChild(optionYear);
          }
          //生成月份选择框
          for(var i=1;i<=12;i++){
            var optionMonth = document.createElement("option");
            optionMonth.innerHTML=i;
            optionMonth.value=i;
            selects[1].appendChild(optionMonth);
          }
          // 生成日选择框
          this.getDays(selects[1].value,selects[0].value,selects);
          selects[0].onchange=function () {
            this.setDays()
          }
          selects[1].onchange=function () {
            this.setDays()
          }
          // 显示用户缓存性别，生日(模拟数据)
          let option=document.querySelectorAll('option');
          for(i=0;i<101;i++){
            if(option[i].innerText==1948){//测试数据
              option[i].selected='selected';
            }
          }
          for (i=101;i<113;i++){
            if (option[i].innerText==2) {//测试数据
              option[i].selected='selected';
            }
          }
          for (i=113;i<option.length;i++){
            if (option[i].innerText==10) {//测试数据
              option[i].selected='selected';
            }
          }
        },
        setDays:function (){
          var selects = document.getElementsByTagName("select");
          var year = selects[0].options[selects[0].selectedIndex].value;
          var month = selects[1].options[selects[1].selectedIndex].value;
          this.getDays(month,year,selects);
        },
        getDays:function (month,year,selects){
          var days = this.getDaysInMonth(month,year);//当月获得天数
          selects[2].options.length = 0;
          for(var i=1;i<=days;i++){
            var optionDay = document.createElement("option");
            optionDay.innerHTML=i;
            optionDay.value=i;
            selects[2].appendChild(optionDay);
          }
        },
        // 获取某年某月存在多少天
        getDaysInMonth:function (month,year){
          var days;
          if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
            days=31;
          }else if (month==4 || month==6 || month==9 || month==11){
            days=30;
          }else{
            if ((year%4 == 0 && year%100 != 0) || (year%400 == 0)) {     // 判断是否为润二月
              days=29;
            }else {
              days=28;
            }
          }
          return days;
        }
      },
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
