<template>
  <div id="particles-js">
    <div class="login">
      <div class="login-top">
        注册
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img"><img src="../../assets/person.png"/></div>
        <div class="login-center-input">
          <input type="text" name="" value="" v-model="name" placeholder="请输入您的昵称" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的昵称'"/>
          <div class="login-center-input-text">昵称</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img"><img src="../../assets/usericon.png"/></div>
        <div class="login-center-input">
          <input type="text" name="" value="" v-model="telephone" placeholder="请输入您的手机号" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的手机号'"/>
          <div class="login-center-input-text">{{user}}</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img"><img src="../../assets/password.png"/></div>
        <div class="login-center-input">
          <input type="password" name="" value="" v-model="password" placeholder="请输入您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请输入您的密码'"/>
          <div class="login-center-input-text">密码</div>
        </div>
      </div>
      <div class="login-center clearfix">
        <div class="login-center-img"><img src="../../assets/password.png"/></div>
        <div class="login-center-input">
          <input type="password" name="" value="" v-model="pwd" placeholder="请确认您的密码" onfocus="this.placeholder=''" onblur="this.placeholder='请确认您的密码'"/>
          <div class="login-center-input-text">{{cof}}</div>
        </div>
      </div>
      <div class="login-button" @click="oncli">
        注册
      </div>
    </div>
    <div class="sk-rotating-plane"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Register",
    data:function () {
      return{
        user:'手机号',
        name:null,
        telephone:null,
        password:null,
        pwd:null,
        cof:'确认密码'
      }
    },
    watch:{
      telephone:function () {
        if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.telephone))){
          this.user="手机号码有误";
        }else {
          this.user="用户名";
        }
      },
      pwd:function () {
        if (!(this.pwd===this.password)){
          this.cof='两次密码不一致'
        } else {
          this.cof='确认密码'
        }
      }
    },
    mounted:function () {
      this.a();
    },
    methods:{
      confirm:function () {

      },
      a:function () {
        particlesJS('particles-js',
          {
            "particles": {
              "number": {
                "value": 40,
                "density": {
                  "enable": true,
                  "value_area": 800
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "circle",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 0.7,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 3,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.6,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 200,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": false
          }
        );
      },
      hasClass:function (elem, cls) {
        cls = cls || '';
        if (cls.replace(/\s/g, '').length == 0) return false; //当cls没有参数时，返回false
        return new RegExp(' ' + cls + ' ').test(' ' + elem.className + ' ');
      },
      addClass:function (ele, cls) {
        if (!this.$options.methods.hasClass.bind(this)(ele, cls)) {
          ele.className = ele.className == '' ? cls : ele.className + ' ' + cls;
        }
      },
      removeClass:function (ele, cls) {
        if (this.$options.methods.hasClass.bind(this)(ele, cls)) {
          let newClass = ' ' + ele.className.replace(/[\t\r\n]/g, '') + ' ';
          while (newClass.indexOf(' ' + cls + ' ') >= 0) {
            newClass = newClass.replace(' ' + cls + ' ', ' ');
          }
          ele.className = newClass.replace(/^\s+|\s+$/g, '');
        }
      },
      oncli:function(){
        if((/^1(3|4|5|7|8)\d{9}$/.test(this.telephone)) && this.pwd===this.password){
          this.$options.methods.addClass.bind(this)(document.querySelector(".login"), "active");
          setTimeout(this.b,800);
        }else {
          alert('手机号码有误或两次密码不一致')
        }
      },
      b:function(){
        let that=this;
        let myDate = new Date();
        this.$options.methods.addClass.bind(this)(document.querySelector(".sk-rotating-plane"), "active");
        document.querySelector(".login").style.display = "none";
        axios.post(this.GLOBAL.HOST+'user/register/',{
          'telephone':this.telephone,
          'password':this.password,
          'name':this.name,
          'register_time':myDate.getTime()
        }).then(function (response) {
          let txt = response.data;
          if (parseInt(txt['status_code'])===10001){
            alert('注册成功');
            that.$router.push({path:'/login'})
          }else {
            document.querySelector(".sk-rotating-plane").classList.remove("active");
            document.querySelector(".login").classList.remove("active");
            document.querySelector(".login").style.display = "block";
            alert(txt['status_text']);
          }
        }).catch(function (err) {
          console.log(err);
        })
      }
    }
  }
</script>

<style scoped>
  *{box-sizing:content-box;}
  a:hover, a:focus{text-decoration:none;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{margin:0;padding:0;}
  table{border-collapse:collapse;border-spacing:0;}
  body{-webkit-text-size-adjust:none;}
  fieldset,img{border:0;}
  img{ vertical-align: top; max-width: 100%; }
  address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:normal;}
  ol,ul{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}
  q:before,q:after{content:'';}
  abbr,acronym {border:0;}
  .clearfix:after{visibility:hidden;display: block;font-size:0;content:" ";clear:both;height:0;}
  * html .clearfix{ zoom: 1; } /* IE6 */
  *:first-child+html .clearfix { zoom: 1; } /* IE7 */
  .cli{ clear:both; font-size:0; height:0; overflow:hidden;display:block;}
  .lclear{clear:left;font-size:0;height:0;overflow:hidden;}
  .fl{float:left;}
  .fr{float:right;}
  body{font-size:12px;font-family:'微软雅黑',"宋体","Arial Narrow",Helvetica,sans-serif;color:#000;line-height:1.2;text-align:left;}
  a{color:#333;text-decoration:none;}
  html,body{
    width:100%;
    height:100%;
  }

  canvas{
    display:block;
    vertical-align:bottom;
  }

  .count-particles{
    background: #000022;
    position: absolute;
    top: 48px;
    left: 0;
    width: 80px;
    color: #13E8E9;
    font-size: .8em;
    text-align: left;
    text-indent: 4px;
    line-height: 14px;
    padding-bottom: 2px;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: bold;
  }

  .js-count-particles{
    font-size: 1.1em;
  }

  #stats,
  .count-particles{
    -webkit-user-select: none;
    margin-top: 5px;
    margin-left: 5px;
  }

  #stats{
    border-radius: 3px 3px 0 0;
    overflow: hidden;
  }

  .count-particles{
    border-radius: 0 0 3px 3px;
  }


  #particles-js{
    width: 100%;
    height: 100%;
    position: relative;
    background-image: url(../../assets/dy-background.png);
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: auto;
    margin-right: auto;
  }

  .sk-rotating-plane {
    display: none;
    width: 80px;
    height: 80px;
    margin: auto;
    background-color: white;
    -webkit-animation: sk-rotating-plane 1.2s infinite ease-in-out;
    animation: sk-rotating-plane 1.2s infinite ease-in-out;
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -80px;
  }
  .sk-rotating-plane.active{display: block;}

  @keyframes sk-rotating-plane{
    0% {
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }

  @keyframes login-small{
    0%{
      transform: scale(1);-moz-transform: scale(1);	/* Firefox 4 */-webkit-transform: scale(1);	/* Safari 和 Chrome */-o-transform: scale(1);	/* Opera */-ms-transform:scale(1); 	/* IE 9 */
    }
    100%{
      transform: scale(0.2);-moz-transform: scale(0.1);	/* Firefox 4 */-webkit-transform: scale(0.2);	/* Safari 和 Chrome */-o-transform: scale(0.1);	/* Opera */-ms-transform:scale(0.1); 	/* IE 9 */
    }
  }

  .login{z-index: 2;position:absolute;width: 350px;border-radius: 5px;height: 500px;background: white;box-shadow: 0px 0px 5px #333333;top: 50%;left: 50%;margin-top: -250px;margin-left: -175px;transition: all 1s;-moz-transition: all 1s;	/* Firefox 4 */-webkit-transition: all 1s;	/* Safari 和 Chrome */-o-transition: all 1s;	/* Opera */}
  .login-top{font-size: 24px;margin-top: 100px;padding-left: 40px;box-sizing: border-box;color: #333333;margin-bottom: 50px;}
  .login-center{width: 100%;box-sizing: border-box;padding: 0 40px;margin-bottom: 30px;}
  .login-center-img{width: 20px;height: 20px;float: left;margin-top: 5px;}
  .login-center-img>img{width: 100%;}
  .login-center-input{float: left;width: 230px;margin-left: 15px;height: 30px;position: relative;}
  .login-center-input input{z-index: 2;transition: all 0.5s;padding-left: 10px;color: #333333;width: 100%;height: 30px;border: 0;border-bottom: 1px solid #cccccc;border-top: 1px solid #ffffff;border-left: 1px solid #ffffff;border-right: 1px solid #ffffff;box-sizing: border-box;outline: none;position: relative;}
  .login-center-input input:focus{border: 1px solid dodgerblue;}
  .login-center-input-text{background: white;padding: 0 5px;position: absolute;z-index: 0;opacity: 0;height: 20px;top: 50%;margin-top: -10px;font-size: 14px;left: 5px;color: dodgerblue;line-height: 20px;transition: all 0.5s;-moz-transition: all 0.5s;	/* Firefox 4 */-webkit-transition: all 0.5s;	/* Safari 和 Chrome */-o-transition: all 0.5s;	/* Opera */}
  .login-center-input input:focus~.login-center-input-text{top: 0;z-index: 3;opacity: 1;margin-top: -15px;}
  .login.active{-webkit-animation: login-small 0.8s ; animation: login-small 0.8s ;animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards}
  .login-button{cursor: pointer;width: 250px;text-align: center;height: 40px;line-height: 40px;background-color: dodgerblue;border-radius: 5px;margin: 0 auto;margin-top: 50px;color: white;}


</style>
