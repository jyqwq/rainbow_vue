<template>
  <!--左边个人信息框-->
    <div class="qz_per" style="zoom:1;overflow: hidden;">
      <div class='card' style="margin-top: 60px">
        <input checked='checked' id='rad1' name='rad' type='radio'>
        <div for='rad1'>
          <h1>昵称：{{person.name}}<br>个签：{{person.autograph}}</h1>
          <div class='btn'></div>
        </div>
        <input id='rad2' name='rad' type='radio'>
        <div for='rad2'>
          <h1>性别：{{person.sex===1? '保密':person.sex===2? '男':'女'}}<br>生日：{{person.birth}}</h1>
          <div class='btn'></div>
        </div>
        <input id='rad3' name='rad' type='radio'>
        <div for='rad3'>
          <h1 >关注：{{person.follow}}<br>粉丝：{{person.fans}}<br>收藏：{{person.cols}}</h1>
          <div class='btn'></div>
        </div>
        <input type='checkbox' @click="tof">
        <a><span class="skin">{{skin_text}}</span></a><br><br>
        <p>{{my_skin}}</p>
        <div class='shapes'></div>
        <div class='photo'>
          <div><img :src="icon" alt="" style="position: relative;top: 50px;left: 45px;width: 60%" class="img-circle"></div>
          <div><img :src="icon" alt="" style="position: relative;top: 50px;left: 45px;width: 60%" class="img-circle"></div>
          <div><img :src="icon" alt="" style="position: relative;top: 50px;left: 45px;width: 60%" class="img-circle"></div>
        </div>
        <div class='blob'>
          <div class='glob'></div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "PersonInformation",
    props: ['skin_text','my_skin','type','id'],
    data: function () {
      return {
        icon:'',
        person:'',
        flag:true,
      }
    },
    mounted: function () {
      let that = this;
      if (this.type === 'my'){
        let userInfo=sessionStorage.getItem('userInfo');
        this.person=JSON.parse(userInfo);
        this.icon=this.GLOBAL.IMG+JSON.parse(userInfo)['icon'];
      } else if (this.type === 'other'){
        console.log(this.id);
        axios.post(this.GLOBAL.HOST+'user/personInfo/',{
          "user_id":this.id,
          "method":"check"
        }).then(function (res) {
          console.log(res);
          that.person=res.data;
          that.icon=that.GLOBAL.IMG+res.data.icon
        }).catch(function (err) {
          console.log(err);
        })
      }
    },
    methods:{
      tof:function () {
        if (this.flag){
          this.flag=false;
          this.$emit('follow')
        } else {
          this.flag=true;
          console.log('返回');
        }
      }
    }
  }
</script>

<style scoped>
  /*个人信息开始*/
  .skin{
    position: relative;
    top: -10px;
  }
  body input[type="radio"] {
    position: absolute;
    z-index: 999;
    left: 0;
    bottom: 0;
    width: 33.33%;
    opacity: 0;
    overflow: hidden;
    height: 30px;
  }
  body input[type="radio"]:hover + div .btn {
    background: #B9ACCA;
  }
  body input[type="radio"]:hover + div .btn:after {
    color: #fff;
  }
  body input[type="radio"]:nth-of-type(2) {
    left: 33.33%;
  }
  body input[type="radio"]:nth-of-type(2) + div .btn {
    left: 33.33%;
  }
  body input[type="radio"]:nth-of-type(2) + div .btn:after {
    content: '粉·关';
  }
  body input[type="radio"]:nth-of-type(3) {
    left: 66.66%;
  }
  body input[type="radio"]:nth-of-type(3) + div .btn {
    left: 66.66%;
  }
  body input[type="radio"]:nth-of-type(3) + div .btn:after {
    content: '我的';
  }
  body input[type="radio"]:checked + div .btn {
    box-shadow: 0 0 0 2px #6D44B5;
    z-index: 10;
    padding: 5px 0;
  }
  body input[type="radio"]:checked + div .btn:before {
    left: -25%;
  }
  body input[type="radio"]:checked + div .btn:after {
    color: #fff;
  }
  body input[type="radio"] + div .btn {
    position: absolute;
    width: 33%;
    bottom: 0;
    left: 0;
    height: 25px;
    box-shadow: 0 0 0 2px #B9ACCA;
    overflow: hidden;
    z-index: 9;
    cursor: pointer;
  }
  body input[type="radio"] + div .btn:after {
    content: '个签';
    position: absolute;
    color: #FE8D58;
    font-weight: 900;
    font-size: 22px;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(calc(-50% - 2.5px));
    transform: translateX(-50%) translateY(calc(-50% - 2.5px));
    line-height: 0;
    color: #B9ACCA;
  }
  body input[type="radio"] + div .btn:before {
    content: '';
    position: absolute;
    width: 150%;
    height: 100%;
    left: 0;
    top: 0;
    background: #6D44B5;
    left: -150%;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  body svg {
    position: absolute;
    width: 0;
    height: 0;
  }
  body .card {
    width: 500px;
    min-width: 500px;
    height: 350px;
    position: relative;
    max-width: 100%;
    background: #fff;
  }
  body .card * {
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  body .card h1, body .card a {
    position: absolute;
    /*right: 30px;*/
    z-index: 9;
    color: rgba(0, 0, 0, 0.49);
    font-size: 20px;
    font-weight: 100;
    margin-left: 50px;
    top: 150px;
    line-height: 1.5;
    -webkit-transform: scale(0) rotateX(180deg);
    transform: scale(0) rotateX(180deg);
    opacity: 0;
  }
  body .card p {
    position: absolute;
    z-index: 999;
    width: 75%;
    font-size: 18px;
    font-weight: 100;
    font-family: "Raleway";
    line-height: 26px;
    left: 12.5%;
    color: #fff;
    display: inline-block;
    -webkit-clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
    transition: none;
  }
  body .card a {
    color: #6D44B5;
    font-size: 15px;
    bottom: 50px;
    top: auto;
    width: 50%;
    display: block;
    text-align: center;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 900;
    padding: 15px 5px;
    border: 2px solid;
    cursor: pointer;
    left: -50px;
    opacity: 1;
    -webkit-transform: none;
    transform: none;
    height: 12.5px;
    font-family: "Raleway";
  }
  body .card a:before {
    content: '返回';
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(0);
    transform: translateX(-50%) translateY(-50%) scale(0);
    font-size: 15px;
    opacity: 0;
  }
  body .card input[type="checkbox"] {
    z-index: 999;
    position: absolute;
    bottom: 50px;
    width: 50%;
    left: -50px;
    height: 50px;
    opacity: 0;
  }
  body .card input[type="checkbox"]:hover ~ a {
    background: #fba0cc;
    color: #fff;
    border-color: #fba0cc;
  }
  body .card input[type="checkbox"]:checked ~ p {
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.175);
    transition-delay: 0.2s;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
  body .card input[type="checkbox"]:checked ~ a {
    z-index: 100;
    color: #fff;
    font-size: 0;
  }
  body .card input[type="checkbox"]:checked ~ a:before {
    opacity: 1;
    -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
    transform: translateX(-50%) translateY(-50%) scale(1);
  }
  body .card input[type="checkbox"]:checked ~ .blob {
    z-index: 99;
    transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  body .card input[type="checkbox"]:checked ~ .blob:before, body .card input[type="checkbox"]:checked ~ .blob:after {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  body .card input[type="checkbox"]:checked ~ .blob .glob {
    transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1);
    min-width: 110%;
    min-height: 110%;
    border-radius: 0px;
    top: -5%;
    right: -5%;
  }
  body .card input[type="radio"] + div {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  body .card input[type="radio"]:checked + div h1 {
    -webkit-transform: scale(1) rotate(0deg);
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  body .card input[type="radio"]:nth-of-type(2):checked + div ~ .blob .glob {
    width: 70%;
    height: 75%;
    background: #FE8D58;
  }
  body .card input[type="radio"]:nth-of-type(2):checked + div ~ .blob:before {
    top: 40%;
    background: #FE8D58;
  }
  body .card input[type="radio"]:nth-of-type(2):checked + div ~ .blob:after {
    background: #FE8D58;
  }
  body .card input[type="radio"]:nth-of-type(3):checked + div ~ .blob .glob {
    width: 70%;
    height: 55%;
    background: #F45746;
  }
  body .card input[type="radio"]:nth-of-type(3):checked + div ~ .blob:before {
    top: 20%;
    background: #F45746;
    left: 40%;
  }
  body .card input[type="radio"]:nth-of-type(3):checked + div ~ .blob:after {
    background: #F45746;
    left: 70%;
  }
  body .card input[type="radio"]:nth-of-type(1):checked + div ~ .photo div:nth-of-type(1) {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  body .card input[type="radio"]:nth-of-type(2):checked + div ~ .photo div:nth-of-type(2) {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  body .card input[type="radio"]:nth-of-type(3):checked + div ~ .photo div:nth-of-type(3) {
    -webkit-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  body .card input[type="radio"]:nth-of-type(2):checked + div ~ .shapes {
    top: 35%;
    left: 65%;
    width: 90px;
  }
  body .card input[type="radio"]:nth-of-type(2):checked + div ~ .shapes:before {
    left: 120px;
    top: 170px;
    -webkit-clip-path: polygon(0 0, 0% 100%, 100% 50%);
    clip-path: polygon(0 0, 0% 100%, 100% 50%);
  }
  body .card input[type="radio"]:nth-of-type(3):checked + div ~ .shapes {
    top: 55%;
    left: 55%;
    width: 140px;
  }
  body .card input[type="radio"]:nth-of-type(3):checked + div ~ .shapes:before {
    left: 140px;
    top: -40px;
    -webkit-clip-path: polygon(100% 0, 0 0, 100% 100%);
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
  body .card:before {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
    z-index: 200;
  }
  body .card .photo {
    position: absolute;
    width: 50%;
    height: 100%;
    z-index: 0;
    overflow: hidden;
    -webkit-perspective: 300px;
    perspective: 300px;
  }
  body .card .photo div {
    position: absolute;
    width: 75%;
    height: 50%;
    -webkit-transform: rotateX(-180deg);
    transform: rotateX(-180deg);
    top: -12.5%;
    margin-left: -12.5%;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 100%;
    box-shadow: inset 0 0 0 5px #fff, 0 0 0 5px #fba0cc, 0 0 0 10px #fff;
  }
  body .card .photo div:before {
    /*content: " (" attr(data-icon) ")";*/
    /*font-size: 75px;*/
    position: absolute;
    left: 20%;
    top: 30%;
    margin: 20px 20px 20px 20px;
    opacity: 1;
  }
  body .card .photo div:first-of-type {
    background: #fba0cc;
  }
  body .card .photo div:nth-of-type(2) {
    background: #F45746;
    box-shadow: inset 0 0 0 5px #fff, 0 0 0 5px #F45746, 0 0 0 10px #fff;
  }
  body .card .photo div:nth-of-type(2):before {
    /*content: attr(data-icon);*/
  }
  body .card .photo div:nth-of-type(3) {
    background: #B9ACCA;
    box-shadow: inset 0 0 0 5px #fff, 0 0 0 5px #B9ACCA, 0 0 0 10px #fff;
  }
  body .card .photo div:nth-of-type(3):before {
    /*content: attr(data-icon);*/
  }
  body .card .shapes {
    position: absolute;
    left: 45%;
    top: 20%;
    background: #FE8D58;
    width: 60px;
    height: 4px;
    z-index: 2;
    box-shadow: 0 8px 0 0 #FE8D58, 0 16px 0 0 #FE8D58, 0 24px 0 0 #FE8D58, 0 32px 0 0 #FE8D58;
    mix-blend-mode: screen;
  }
  body .card .shapes:before {
    content: '';
    position: absolute;
    width: 40px;
    height: 40px;
    background: linear-gradient(to bottom, #FE8D58, #F45746);
    -webkit-clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    left: 175px;
    top: 160px;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  body .card .blob {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    -webkit-filter: url(#goo);
    filter: url(#goo);
  }
  body .card .blob .glob {
    position: absolute;
    width: 60%;
    height: 75%;
    background: #6D44B5;
    border-radius: 100%;
    top: -25%;
    right: -25%;
  }
  body .card .blob:before, body .card .blob:after {
    content: '';
    position: absolute;
    width: 50%;
    height: 60%;
    background: #6D44B5;
    border-radius: 100%;
    right: 0;
    top: 20px;
    transition: all 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  body .card .blob:after {
    right: -15%;
    top: 20%;
    width: 40%;
    height: 60%;
  }
  /*个人信息结束*/
</style>
