<template>
<div>
  <div class="container-fluid bg_img min_width">
    <div class="row">
      <div class="hidden-xs col-sm-5 col-md-5 col-lg-5"></div>
      <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 search_div">
        <button type="button" class="btn btn-primary btn-lg btn_search">开启搜索之旅</button>
      </div>
      <div class="hidden-xs col-sm-5 col-md-5 col-lg-5"></div>
    </div>
  </div>

  <div class="container min_width">
    <ranknav></ranknav>
    <router-view name="rank"></router-view>
  </div>


</div>
</template>

<script>
  import RankNav from './RankNav'
    export default {
        name: "Rank",
      components:{
          ranknav:RankNav
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
