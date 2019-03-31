<template>
  <div style="margin-top: 80px;min-height: 850px">
    <!--头像个签-->
    <div class="row qz_head">
      <div class="col-xs-7 col-sm-3 col-md-3 col-lg-2">
        <div class="portrait"><img :src="icon" class="img-responsive qz_portrait" alt="Responsive image"></div>
      </div>
      <div class="col-xs-7 col-sm-3 col-md-3 col-lg-2">
        <div class="pet_name">
          <div><a class="qz_an">{{name}}</a></div>
          <div><a class="qz_ag">{{autograph}}</a></div>
        </div>
      </div>
      <div class="col-xs-1 col-sm-6 col-md-6 col-lg-7"></div>
      <div class="col-xs-4 col-sm-2 col-md-2 col-lg-1">
        <div class="num_f">
          <a class="follow">关注数：{{follow}}</a><br>
          <a class="fanc">粉丝数：{{fans}}</a>
        </div>
      </div>
      <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
    </div>

    <!--个人中心导航栏-->
    <div class="flex">
      <ul class="main_ul">
        <li class="main_li">
          <router-link to="/my_dynamic">
            <img src="../../assets/my_dynamic/nav_diary.png" class="img-responsive" alt="Responsive image" style="display: inline">
            <span class="">日记本</span>
          </router-link>
        </li>
        <li class="main_li">
          <router-link to="/my_dynamic/collectionlist">
            <img src="../../assets/my_dynamic/nav_favorites.png" class="img-responsive" alt="Responsive image" style="display: inline">
            <span class="">收藏夹</span>
          </router-link>
        </li>
        <li class="main_li">
          <router-link to="/my_dynamic/admissionlist">
            <img src="../../assets/my_dynamic/nav_package.png" class="img-responsive" alt="Responsive image" style="display: inline">
            <span class="">收纳盒</span>
          </router-link>
        </li>
        <div class="bar"></div>
      </ul>
    </div>

    <!--中心内容-->
    <router-view></router-view>

  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "MyDynamic",
      data:function(){
        return{
          icon:this.GLOBAL.IMG+JSON.parse(sessionStorage.getItem('userInfo'))['icon'],
          name:'',
          autograph:'',
          follow:'',
          fans:''
        }
      },
      created:function(){
        this.$emit('flash');
      },
      mounted:function () {
        let userInfo=sessionStorage.getItem('userInfo');
        this.person=JSON.parse(userInfo);
        this.name=this.person.name;
        this.autograph=this.person.autograph;
        this.follow=this.person.follow;
        this.fans=this.person.fans
      }
    }
</script>

<style scoped>
  /*头像个签*/
  .qz_head{
    margin: 15px 0;
  }
  /*个人中心导航栏开始*/
  /*原生开始*/
  .flex {
    width: 350px;
    height: 50px;
    line-height: 50px;
    background-color: white;
    position: relative;
    /*margin: -25px 0 0 -25px;*/
  }
  .flex .main_ul {
    display: flex;
    padding: 0;
    margin: 0;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.25);
  }
  .flex .main_ul .main_li {
    flex: 1;
    list-style: none;
    text-align: center;
    position: relative;
    /*font-size: 1em;*/
    /*font-weight: bold;*/
    transition: 0.5s ease;
    cursor: pointer;
  }
  .flex .main_ul .main_li:hover {
    background-color: rgba(255, 255, 255, 0.25);
    color: #f564a9;
  }
  .flex .main_ul .main_li:nth-of-type(1):hover + * + * + .bar {
    left: 4%;
  }
  .flex .main_ul .main_li:nth-of-type(2):hover + * + .bar {
    left: 40%;
  }
  .flex .main_ul .main_li:nth-of-type(3):hover + .bar {
    left: 70%;
  }
  .flex .main_ul .bar {
    width: 25%;
    background-color: #f564a9;
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: 0.5s ease;
  }
  /*原生结束*/
  /*附加开始*/
  .portrait{
    height: 80px;
  }
  .qz_portrait{
    height: 100%;
    border-radius: 50%;
  }
  .pet_name{
    padding-top: 20px;
  }
  .qz_an{
    font-size: 1.5em;
  }
  .qz_ag{
    font-size: 1.2em;
  }
  .num_f{
    margin-top: 15px;
  }
  /*附加结束*/
  /*个人中心导航栏结束*/
</style>
