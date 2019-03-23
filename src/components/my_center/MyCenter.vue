<template>

  <div class="container qz_con">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-7 col-lg-7 animal_sil qz_infor">
        <person-information></person-information>
      </div>
      <!--右边浏览历史-->
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <browse-history></browse-history>
      </div>
    </div>

    <!--箭头指向第二页-->
    <!--第二页-->
    <open-mine></open-mine>

    <!--大导航栏-->
    <div class="row qz_row" id="qz_nav">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10">
        <div class="row qz_row">
          <!--日记本，收藏夹，收纳盒导航-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_dianav">
            <!--<div v-for="(nav,index) in tabNav" @click="cur=index">{{nav}}</div>-->
            <!--<nav-diary @click.native="tabChange(diary)"></nav-diary>-->
            <nav-diary @click.native="dyAxios()"></nav-diary>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_colnav">
            <!--<nav-collection @click.native="tabChange(collect)"></nav-collection>-->
            <nav-collection @click.native="coAxios()"></nav-collection>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_admnav">
            <!--<nav-admission @click.native="tabChange(admis)"></nav-admission>-->
            <nav-admission @click=""></nav-admission>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
    </div>
    <!--中心内容-->
    <div class="row qz_row qz_data">
      <!--日记本，收藏夹，收纳盒内容-->
      <div id="qz_diary" class="animal_sil">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"  v-for="(dy, index) in dynamic.slice(0,3)">
            <div class="qz_cen">
              <img @mouseover="flag=index" :class="flag==index?['qz_cimg','cimg_active']:''" class="img-responsive qz_cimg" src="../../assets/my_center/background_dynamic.jpg" alt="Responsive image">
              <div :class="flag==index?['qz_coimg']:''" @mouseout="flag=-1" class="to_one">
                <span v-if="seen==0" class="font_main"><br><br>{{dy.content}}<br><br>发布时间：{{dy.date}}<br>点击量:{{dy.click}}</span>
                <span v-else class="font_main"><br><br>{{dy.colInfo.content}}<br><br>发布时间：{{dy.date}}<br>点击量:{{dy.colInfo.click}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--更多按钮-->
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-5"></div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2">
        <button-more v-bind:margin_bottom="'更多 >'" v-bind:class="[primary_class,button_class]"></button-more>
      </div>
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import PersonInformation from './PersonInformation'
  import BrowseHistory from './BrowseHistory'
  import NavDiary from './NavDiary'
  import NavCollection from './NavCollection'
  import NavAdmission from './NavAdmission'
  import OpenMine from './OpenMine'
  import ButtonMore from './ButtonMore'
    export default {
      components:{
        'person-information':PersonInformation,
        'browse-history':BrowseHistory,
        'nav-diary':NavDiary,
        'nav-collection':NavCollection,
        'nav-admission':NavAdmission,
        'open-mine':OpenMine,
        'button-more':ButtonMore,
      },
      props:{

      },
      name: "MyCenter",
      data: function () {
        return {
          flag:-1,
          seen:0,
          dynamic:[{"content":"彩虹日记","data":"2010101010","click":123,}],
          primary_class:'button_primary',
          button_class:'button_qz',
          currenView:'DynamicDiary',
        }
      },
      methods: {
        // tabChange:function(tabDynamic){
        //   this.currenView=tabDynamic;
        // }
        dyAxios:function () {
          let that=this;
          axios.get('http://192.168.2.66:8000/user/myDynamics/1/1/')
            .then(function (response) {
              console.log(response.data);
              that.dynamic=response.data;
              that.seen=0
            })
            .catch(function (error) {
              console.log(error);
            })
        },
        coAxios:function () {
          let that=this;
          axios.post('http://192.168.2.66:8000/user/viewCollections/',{
            "method":"check",
            "target":[{"type":"dynamic","user_id":1},{"type":"dairy","user_id":1},{"type":"test","user_id":1},{"type":"commodity","user_id":1}]
          })
            .then(function (response) {
              console.log(response.data);
              that.dynamic=response.data;
              that.seen=1
            })
            .catch(function (error) {
              console.log(error);
            })
        }
      },
      mounted: function () {
        let that=this;
        axios.get('http://192.168.2.66:8000/user/myDynamics/1/1/')
          .then(function (response) {
            console.log(response.data);
            that.dynamic=response.data;
            that.seen=0;
            that.flag=-1
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      computed: {},
      watch: {},
      filter: {},
    }
</script>

<style scoped>
  /*全局*/
  .qz_con{
    margin-top: 50px;
    padding: 0;
    height: 1500px;
  }
  .qz_row{
    margin: 15px;
  }
  /*字体*/
  .font_main{
    font-size: 0.9em;
    margin: auto;
    color: whitesmoke;
  }
  /*单个动态开始*/
  .qz_cen{
    margin: 10px;
    overflow: hidden;
    border-radius: 15px;
    height: 186px;
  }
  .qz_cen img{
    height: 186px;
    width: 100%;
  }
  .qz_cimg{
    margin: auto;
    transition: all 1s ease-in-out;
    border-radius: 15px;
    height: 186px;
  }
  .cimg_active{
    margin: auto;
    transition: all 1s ease-in-out;
    transform: scale(1.5,1.5);
  }
  .qz_coimg{
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    text-align: center;
    font-size: 1.5em;
    height: 186px;
    top: -186px;
  }
  .disblock{
    display: block;
  }
  .to_one{
    cursor: pointer;
  }
  /*单个动态结束*/
</style>



