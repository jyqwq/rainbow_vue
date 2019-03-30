<template>
  <nav id="menu" class="forTop">
    <div class="container">
      <img src="../assets/logo_.png" alt="" style="display: inline-block;position: relative;top: -30px;">
      <ul style="display: inline;padding: 0">
        <li class="item"><router-link to="/">首页</router-link></li>
        <li class="item"><router-link to="/search_index">搜索本站</router-link></li>
        <li class="item"><router-link to="/rank">排行榜</router-link></li>
        <li class="item"><router-link to="/evaluation">测评资讯</router-link></li>
      </ul>
      <ul v-bind:style="{'display':islogin ? 'none':'inline'}" style="padding: 0;float: right">
        <li class="item"><router-link to="/login">登录</router-link></li>
        <li class="item"><router-link to="/register">注册</router-link></li>
      </ul>
      <ul v-bind:style="{'display':islogin ? 'inline':'none'}" style="padding: 0;float: right">
        <li class="item user-info"><router-link to="/my_center"><img :src="GLOBAL.IMG+icon" alt=""></router-link></li>
        <li class="item"><router-link to="/dynamic">动态</router-link></li>
        <li class="item to-write"><router-link to="/sharing_index">写日记</router-link></li>
      </ul>
      <ul style="display: none;padding: 0;float: right" class="wel">
        <li class="item"><a style="cursor: pointer" @click="exitlogin">退出登录</a></li>
        <li class="item"><router-link to="/my_dynamic">我的动态</router-link></li>
        <li class="item"><router-link to="/setting">个人中心</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "AllNav",
      data:function () {
        return{
          islogin:this.GLOBAL.ISLOGIN,
          icon:'usericon.png',
          token:""
        }
      },
      created:function(){
        this.check_login();
        this.$emit('flash');
      },
      // 在mounted的时候调用属性和方法是最好的时机
      mounted:function(){
        this.exit();
      },
      methods:{
          check_login:function(){
            let that=this;
            this.token = window.localStorage.getItem("token");
            if (this.token){
              axios.post(this.GLOBAL.HOST+'user/login/',{
                'token':this.token
              }).then(function (response) {
                let txt = JSON.parse(response.data);
                if (parseInt(txt['status_code'])===10003){
                  let info = txt['userInfo'];
                  that.icon = txt['userInfo']['icon'];
                  sessionStorage.setItem('userInfo',JSON.stringify(info));
                  localStorage.setItem('islogin',true);
                  that.GLOBAL.ISLOGIN=true;
                }else if (parseInt(txt['status_code'])===10006){
                  console.log(txt['status_text']);
                  localStorage.setItem('token','');
                  localStorage.setItem('userInfo','');
                  localStorage.setItem('islogin','')
                }else {
                  console.log(txt['status_text']);
                }
              }).catch(function (err) {
                console.log(err);
              })
            }else {
              this.GLOBAL.ISLOGIN=false;
            }
          },
        //头像下拉&&退出登录
        exit:function () {
          let userinfo = document.querySelector('.user-info');
          let wel = document.querySelector('.wel');
          userinfo.onmouseover = function () {
            wel.style.display = 'inline';
            if (!wel.classList.contains('welcom')) {
              wel.classList.add('welcom');
            }

          };
          userinfo.onmouseout = function () {
            wel.classList.remove('welcom');
            wel.style.display = 'none';
          };
          wel.onmouseover = function () {
            wel.style.display = 'inline';
          };
          wel.onmouseout = function () {
            wel.classList.remove('welcom');
            wel.style.display = 'none';
          };
        },
        exitlogin:function (){
          localStorage.setItem('token','');
          sessionStorage.setItem('userInfo','');
          localStorage.setItem('islogin','');
          this.GLOBAL.ISLOGIN=false;
          this.islogin=false;
          this.$router.push({path:'/'})
        },
        //滚动监听
        rollStyle:function () {

        }
      }
    }
</script>

<style scoped>
  .forTop{
    height: 60px;
  }
   #menu button,#menu hr,#menu input {
     overflow: visible
   }

  audio, canvas, progress, video {
    display: inline-block
  }

  progress, sub, sup {
    vertical-align: baseline
  }


  menu, article, aside, details, footer, header, nav, section {
    display: block
  }

  #menu h1 {
    font-size: 2em;
    margin: .67em 0
  }

  figcaption, figure, main {
    display: block
  }

  figure {
    margin: 1em 40px
  }

  hr {
    box-sizing: content-box;
    height: 0
  }

  code, kbd, pre, samp {
    font-family: monospace, monospace;
    font-size: 1em
  }

  #menu a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects
  }

  #menu a:active, a:hover {
    outline-width: 0
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted
  }

  #menu b,#menu strong {
    font-weight: bolder
  }

  dfn {
    font-style: italic
  }

  mark {
    background-color: #ff0;
    color: #000
  }

  small {
    font-size: 80%
  }

  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative
  }

  sub {
    bottom: -.25em
  }

  sup {
    top: -.5em
  }

  audio:not([controls]) {
    display: none;
    height: 0
  }

  #menu img {
    border-style: none
  }

  svg:not(:root) {
    overflow: hidden
  }

  #menu button{
    text-transform: none
  }

  [type=submit], [type=reset], button, html [type=button] {
    -webkit-appearance: button
  }

  [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {
    border-style: none;
    padding: 0
  }

  [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring {
    outline: ButtonText dotted 1px
  }

  fieldset {
    border: 1px solid silver;
    margin: 0 2px;
    padding: .35em .625em .75em
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal
  }

  progress {
  }

  [type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0
  }

  [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {
    height: auto
  }

  [type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px
  }

  [type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration {
    -webkit-appearance: none
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit
  }

  summary {
    display: list-item
  }

  [hidden], template {
    display: none
  }

  #warp {
    background: -webkit-linear-gradient(top, #F68344 0.00%, #98370F 60.00%);
    background: linear-gradient(top, #F68344 0.00%, #98370F 60.00%);
    background-size: 2500px 1600px;
    background-repeat: no-repeat;
    position: relative;
    width: 800px;
    height: 200px;
    margin: 100px auto 0px;
    padding: 5px;
    display: block;
    text-align: center;
    border-radius: 10px;
  }

  #menu {
    border-bottom: 1px solid #DDD;
    position: relative;
    background: -webkit-linear-gradient(top, #F8F8F8 0.00%, #EFEFEF 32.86%, #D7D7D7 68.93%, #CFCFCF 100.00%);
    background: linear-gradient(top, #F8F8F8 0.00%, #EFEFEF 32.86%, #D7D7D7 68.93%, #CFCFCF 100.00%);
    height: 50px;
    width: 100%;
    list-style: none;
    border-radius: 0 15px 0 0;
    box-shadow: 0 2px 1px 0 #BEBEBE, 0 4px 1px -1px #B8B8B8, 0 6px 1px -2px #B3B3B3, 0 8px 1px -3px #ADADAD, 0 10px 1px -4px #AAAAAA, 0 12px 1px -5px #A7A7A7, 0 14px 1px -6px #9C9C9C, 0 16px 1px -7px #939393, 0 18px 1px -8px #8B8B8B, 0 20px 1px -9px #666666, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3), 0 20px 4px -6px rgba(0, 0, 0, 0.9), 0 45px 5px -5px rgba(0, 0, 0, 0.05), 0 35px 10px -5px rgba(0, 0, 0, 0.1), 0 25px 55px 5px rgba(0, 0, 0, 0.15);
    z-index: 0;
  }

  #menu:before {
    content: "";
  }

  #menu:after {
    content: "";
  }

  #menu li {
    background: transparent;
    padding: 0px;
    width: 80px;
    height: 62px;
    margin: 0px;
    overflow: hidden;
    line-height: 50px !important;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
  }

  /* hover statut */
  #menu li:hover, #menu li.active {
    background: -webkit-linear-gradient(top, #f28b94 0.00%, #e78a93 32.86%, #dc777a 68.93%, #be666f 100.00%);
    background: linear-gradient(top, #f28b94 0.00%, #e78a93 32.86%, #dc777a 68.93%, #be666f 100.00%);
    z-index: 2;
    width: 80px;
    top: -8px;
    border-radius: 10px 10px 0 0;
    border-top: 1px solid #f7a273;
    border-left: none;
    border-right: none;
    text-align: center;
    box-shadow: 0 2px 1px 0 #963004, 0 4px 1px -1px #852A03, 0 6px 1px -2px #812802, 0 8px 1px -3px #7D2803, 0 10px 1px -4px #661F01, 0 12px 1px -5px #521A02, 0 14px 1px -6px #401601, 0 16px 1px -7px #3C1501, 0 18px 1px -8px #2D1001, 0 20px 1px -9px #110500, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.75), 0 20px 4px -6px rgba(0, 0, 0, 0.9), 0 45px 5px -5px rgba(0, 0, 0, 0.05), 0 35px 10px -5px rgba(0, 0, 0, 0.1), 0 25px 55px 5px rgba(0, 0, 0, 0.15);
    z-index: 0;
    -webkit-transition: border-radius 0.75s ease-in;
    transition: border-radius 0.75s ease-in;
    -webkit-transition: box-shadow 0.5s ease-in;
    transition: box-shadow 0.5s ease-in;
  }

  #menu li.active {
    background-color: #DADADA
  }

  .item:hover {
    position: relative;
    display: inline-block;
    text-align: center;
  }

  /* item */
  .item {
    font-size: 100%;
    position: relative;
    display: inline-block;
    text-align: center;
  }

  .item:hover:before, .active.item:before {
    content: "";
    background: -webkit-linear-gradient(top, rgba(247, 144, 88, 0.05) 60.00%, rgba(147, 50, 14, 0.5) 100.00%);
    background: linear-gradient(top, rgba(247, 144, 88, 0.05) 60.00%, rgba(147, 50, 14, 0.5) 100.00%);
    display: block;
    height: 200px;
    width: 200px;
    border-radius: 100px;
    position: absolute;
    top: -130px;
    left: -120px;
    z-index: -1;
  }

  /* item separateur */
  .item:after {
    content: "";
    padding: 0px;
    width: 0px;
    height: 12px;
    top: 20px;
    display: block;
    position: absolute;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    z-index: 2;
  }

  .item:hover:after, .item.active:after {
    content: "";
    display: none;
  }

  /* lien */
  .item a {
    text-align: center;
    color: #787878;
    font-size: 70%;
    text-decoration: none;
    text-shadow: 0px 1px 0px white;
  }

  .item:hover a, .item.active a {
    text-align: center;
    color: #FFF;
    z-index: 10;
    font-weight: lighter;
    text-shadow: 0px 1px 0px black;
    width: 80px;
    display: block;
  }

  a, a:hover {
    color: black;
    text-decoration: none;
  }

  .welcom {
    animation: fadeInLeft 0.5s;
  }

  .welexit {
    animation: fadeOutRight 1s;
  }
</style>
