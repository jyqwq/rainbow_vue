<template>
<div>
  <div class="container-fluid bg_img hidden-xs">
    <div class="row">
      <div class="hidden-xs col-sm-5 col-md-5 col-lg-5"></div>
      <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2 search_div">
        <button type="button" class="btn btn-primary btn-lg btn_search">开&nbsp;启&nbsp;搜&nbsp;索&nbsp;之&nbsp;旅</button>
      </div>
      <div class="hidden-xs col-sm-5 col-md-5 col-lg-5"></div>
    </div>
  </div>
  <div class="container">
    <div class="row"><h3>测评资讯</h3></div>
    <div class="row">
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 title_content main_title">
        <!--ajax-->
        <evaluation-detail></evaluation-detail>
      </div>
      <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 title_content title_margin">
        <common-problem></common-problem>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import CommonProblem from './CommonProblem'
  import EvaluationDetail from './EvaluationDetail'
    export default {
        name: "Evaluation",
      created:function(){

      },
      components:{
          'common-problem':CommonProblem,
        'evaluation-detail':EvaluationDetail
      }
    }
</script>

<style scoped>
  .bg_img{
    margin-top: 50px;
    height: 170px;
    background-image: url("../../assets/longbg.png");
    background-repeat: round;
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
  .search_div{
    text-align: center;
  }
  .title_content{
    /*height: 800px;*/
    border:  solid 1px rgba(128, 128, 128, 0.46);
    border-radius: 5px;
    padding-bottom: 20px;
  }
  .title_margin{
    margin-left: 30px;
    padding-top: 20px;
  }
</style>
