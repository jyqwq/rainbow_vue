<template>
  <div style="margin-top: 80px;min-height: 850px">
    <!--头像个签-->
    <div class="row qz_head">
      <div class="col-xs-7 col-sm-3 col-md-3 col-lg-2">
        <div class="portrait"><img src="" class="img-responsive qz_portrait" alt="Responsive image"></div>
      </div>
      <div class="col-xs-7 col-sm-3 col-md-3 col-lg-2">
        <div class="pet_name">
          <div><a class="qz_an" href="#">{{name}}</a></div>
          <div><a class="qz_ag" href="#">{{autograph}}</a></div>
        </div>
      </div>
      <div class="col-xs-1 col-sm-6 col-md-6 col-lg-7"></div>
      <div class="col-xs-4 col-sm-2 col-md-2 col-lg-1">
        <div class="num_f">
          <a href="#" class="follow">关注数：{{follow}}</a><br>
          <a href="#" class="fanc">粉丝数：{{fans}}</a>
        </div>
      </div>
      <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>

    </div>

    <!--个人中心导航栏-->
    <div class="flex">
      <ul class="main_ul">
        <li class="main_li">
          <img src="../../assets/my_dynamic/nav_diary.png" class="img-responsive" alt="Responsive image" style="display: inline">
          <span class="">日记本</span>
        </li>
        <li class="main_li">
          <img src="../../assets/my_dynamic/nav_favorites.png" class="img-responsive" alt="Responsive image" style="display: inline">
          <span class="">收藏夹</span>
        </li>
        <li class="main_li">
          <img src="../../assets/my_dynamic/nav_package.png" class="img-responsive" alt="Responsive image" style="display: inline">
          <span class="">收纳盒</span>
        </li>
        <div class="bar"></div>
      </ul>
    </div>

    <router-view></router-view>

  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      name: "MyDynamic",
      data:function(){
        return{
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

  /*个人中心导航栏开始*/
  .flex {
    width: 350px;
    height: 50px;
    line-height: 50px;
    background-color: white;
    position: absolute;
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
  /*个人中心导航栏结束*/

  /*原本样式开始*/
  .qz_head{
    margin: 15px 0;
  }
  .wid_nav{
    background: #FFE3E5;
  }
  .cen_inf{
    margin:10px;
  }

  /*首页样式*/
  .qz_row{
    margin: 15px 0;
  }
  .qz_line{
    height: 1px;
    margin: 5px;
    background: #EEEEEE;
  }
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
  .qz_group{
    width: 200px;
    float: right;
    margin-top: 10px;
  }
  .qz_a{
    color: purple;
  }
  .qz_gly{
    color: purple;
  }
  .dedli_pic{
    height: 100px;
    margin-right: -15px;
    /*background: #FFAAAA;*/
  }
  .dedli_pic img{
    height: 100%;
    border-radius: 5px;
  }
  .dedli_inf{
    height: 100px;
    margin-left: -15px;
    /*background: #9783b9;*/
  }
  .qz_a{
    text-decoration: none;
  }
  .qz_dis{
    font-size: 1.2em;
    color: #0f0f0f;
  }
  .qz_dip{
    font-size: 0.8em;
    color: #0f0f0f;
  }
  .qz_das{
    font-size: 1.2em;
  }

  /*动态主体开始*/
  /*日记本，收藏夹*/

  /*分割线*/
  .qz_line{
    height: 1px;
    margin: 5px;
    background: #EEEEEE;
  }

  /*收藏夹页样式*/
  .qz_collect{
    margin: 15px 0;
  }

  /*收纳盒页样式*/
  .qz_set{
    margin: 15px 0;
  }
  /*原本样式结束*/



  /*日记本，收藏夹页开始*/
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
    border-radius: 5px;
  }
  .margin_top{
    text-align: center;
    margin-top: 5px;
  }
  .dy_margin{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .dy_c_content{
    margin-top: 5px;
  }
  .dy_c_icon{
    text-align: right;
  }
  .dy_c_icon img{
    border-radius: 5px;
  }
  .dy_tags{
    float: right;
  }
  .font_full{
    display: none;
  }
  .font_full:hover{
    cursor: pointer;
  }
  .one_tag{
    float: left;
    color: #FFFFFF;
    background: #efd9da;
    border: none;
    border-radius: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0 15px;
    margin-right: 12px;
    position: relative;
  }
  .dy_c_nav{
    float: left;
  }
  .to_one{
    cursor: pointer;
  }
  /*日记本，收藏夹页结束*/

  /*收纳盒页开始*/
  .shu_nav{
    width: 120px;
    border-bottom: none;
    border-right: solid 2px #f7c5c9;
    padding-right: -1px;
    box-sizing: border-box;
  }
  .shu_nav li{
    /*border: 2px solid rgba(255, 255, 255, 0.0);*/
  }
  .shu_active{
    margin-right: -2px !important;
    border: solid 2px #f7c5c9 !important;
    border-radius: 50%;
  }
  .shu_active:hover{
    border-radius: 50%;
  }
  .shu_nav li a{
    text-align: center;
    line-height: 40px;
  }
  .shu_active a{
    font-size: 1.2em;
  }
  .shu_nav li a:hover{
    background: pink;
    border-radius: 50%;
  }
  /*--------------输入部分--------------*/
  .text_active{
    animation: fadeInUp 1s;
  }
  /*心情部分*/
  .row_margin{
    margin-top: 30px;
  }
  /*收纳盒页结束*/


  /*动画*/
  /*由左滑入*/
  /*.animal_sil{*/
  /*animation: slideInLeft 1s;*/
  /*}*/
  /*由下滑入*/
  .animal_siu{
    animation: slideInUp 1s;
  }
  /*放大*/
  .anima_pul:hover{
    animation: pulse 1s;
  }
  /*挂着摇晃*/
  .animal_swi:hover{
    animation: swing 1s;
  }
</style>
