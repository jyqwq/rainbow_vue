<template>
  <div class="row row-margin">
    <div class="row hidden-xs style_title">
      <strong>&nbsp;&nbsp;&nbsp;EVALUATION INFORMATION</strong> <br>
    </div>
    <div class="row hidden-xs">
      <span class="style_title1">LATEST INFORMATION</span>
    </div>
    <div class="row hidden-xs">
      <span class="style_title2">评测资讯&nbsp;<span class="glyphicon glyphicon-play" aria-hidden="true"></span></span>
    </div>
    <div class="row visible-xs sm_commend">评测资讯</div>
    <div class="row all_eva">
      <evaluation></evaluation>
    </div>
  </div>
</template>

<script>
  import Evaluation from './Evaluation'
    export default {
        name: "EvaluationInformation",
      components:{
          "evaluation":Evaluation
      }

    }
</script>

<style scoped>
  .row-margin{
    margin-top: 30px;
    margin-right: -15px;
    margin-left: -15px;
  }
  .style_title{
    border-left: lightpink solid 3px;
    font-size: 1.1em;
  }
  .style_title1{
    font-size: 2.5em;
    color: rgba(255,192,203,0.53);
  }
  .style_title2{
    font-size: 2em;
    color: hotpink;
  }
  .sm_commend{
    text-align: center;
    color: #FFB5B5;
    font-size: 1.2em
  }
</style>
