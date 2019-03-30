<template>
<div style="min-height: 800px;">
  <div class="container-fluid bg_img min_width">
    <div class="row">
      <div class="hidden-xs col-sm-5 col-md-5 col-lg-5"></div>
      <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 search_div">
        <div style="margin-top: 50px"><router-link to="/search_index"><release-btn :name="'开启搜索之旅'"></release-btn></router-link></div>
      </div>
      <div class="hidden-xs col-sm-5 col-md-5 col-lg-5"></div>
    </div>
  </div>

  <div class="container min_width">
    <ranknav></ranknav>
    <router-view></router-view>
  </div>


</div>
</template>

<script>
  import RankNav from './RankNav'
  import ReleaseBtn from '../sharing_index/ReleaseBtn'
    export default {
        name: "Rank",
      components:{
          ranknav:RankNav,
        'release-btn':ReleaseBtn
      },
      created:function(){

      },
    }
</script>

<style scoped>
  .bg_img{
    margin-top: 50px;
    height: 170px;
    background-image: url("../../assets/longbg.png");
    background-repeat: round;
  }
  .min_width{
    min-width: 620px;
  }
  .search_div{
    text-align: center;
  }
  .btn_search{
    margin-top: 90px;
    background: hotpink;
    border: darkgrey;
  }
  .btn_search:hover{
    background: white;
    color: hotpink;
  }
</style>
