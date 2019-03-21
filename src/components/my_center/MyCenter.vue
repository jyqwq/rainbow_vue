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
            <nav-diary @click.native="tabChange(diary)"></nav-diary>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_colnav">
            <nav-collection @click.native="tabChange(collect)"></nav-collection>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_admnav">
            <nav-admission @click.native="tabChange(admis)"></nav-admission>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
    </div>
    <!--中心内容-->
    <div class="row qz_row qz_data">
      <!--日记本，收藏夹，收纳盒内容-->
      <!--<div v-for="(dynamic,index) in tabDynamic" v-show="cur==index">{{dynamic}}</div>-->
      <div :is="currenView"></div>
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
  import PersonInformation from './PersonInformation'
  import BrowseHistory from './BrowseHistory'
  import NavDiary from './NavDiary'
  import NavCollection from './NavCollection'
  import NavAdmission from './NavAdmission'
  import OpenMine from './OpenMine'
  import DynamicDiary from './DynamicDiary'
  import DynamicCollect from './DynamicCollect'
  import DynamicAdmis from './DynamicAdmis'
  import ButtonMore from './ButtonMore'
    export default {
      components:{
        'person-information':PersonInformation,
        'browse-history':BrowseHistory,
        'nav-diary':NavDiary,
        'nav-collection':NavCollection,
        'nav-admission':NavAdmission,
        'open-mine':OpenMine,
        DynamicDiary,
        DynamicCollect,
        DynamicAdmis,
        'button-more':ButtonMore,
      },
      props:[],
      name: "MyCenter",
      data: function () {
        return {
          diary:'DynamicDiary',
          collect:'DynamicCollect',
          admis:'DynamicAdmis',
          primary_class:'button_primary',
          button_class:'button_qz',
          currenView:'DynamicDiary'
        }
      },
      created:function(){},
      methods: {
        tabChange:function(tabDynamic){
          this.currenView=tabDynamic;
        }
      },
      mounted: function () {

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
</style>


