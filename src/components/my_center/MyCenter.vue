<template>

  <div class="container qz_con">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-5 col-lg-5 animal_sil qz_infor">
        <person-information></person-information>
      </div>
      <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
      <!--右边浏览历史-->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <browse-history></browse-history>
      </div>
    </div>

    <!--第二部分-->
    <my_skin></my_skin>

    <!--箭头指向第二页-->
    <!--第二页-->
    <open_mine></open_mine>

    <!--大导航栏-->
    <div class="row qz_row" id="qz_nav">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10">
        <div class="row qz_row">
          <!--日记本-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_dianav">
            <nav-diary></nav-diary>
          </div>
          <!--收藏夹-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_colnav">
            <nav-collection></nav-collection>
          </div>
          <!--收纳盒-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_admnav">
            <nav-admission></nav-admission>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <!--中心内容-->
    <div class="row qz_row qz_data">
      <!--日记本内容-->
      <div id="qz_diary" class="animal_sil">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
          </div>
        </div>
      </div>
      <!--收藏夹内容-->
      <div id="qz_collection" class="animal_sil" style="display: none">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
          </div>
        </div>
      </div>
      <!--收纳盒内容-->
      <div id="qz_admission" class="animal_sil" style="display: none">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <single-dynamic></single-dynamic>
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
  import PersonInformation from './PersonInformation'
  import BrowseHistory from './BrowseHistory'
  import SingleDynamic from './SingleDynamic'
  import NavDiary from './NavDiary'
  import NavCollection from './NavCollection'
  import NavAdmission from './NavAdmission'
  import MySkin from './MySkin'
  import OpenMine from './OpenMine'
  import ButtonMore from './ButtonMore'
    export default {
      components:{
        'person-information':PersonInformation,
        'browse-history':BrowseHistory,
        'single-dynamic':SingleDynamic,
        'nav-diary':NavDiary,
        'nav-collection':NavCollection,
        'nav-admission':NavAdmission,
        'my_skin':MySkin,
        'open_mine':OpenMine,
        'button-more':ButtonMore
      },
      props:[],
      name: "MyCenter",
      data: function () {
        return {
          primary_class:'button_primary',
          button_class:'button_qz'
        }
      },
      created:function(){},
      methods: {},
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
    background: #FFE3E5;
    background-image: url("../../assets/my_center/background_person.jpg");
    background-size: cover;
  }
  .qz_row{
    margin: 15px;
  }


</style>


