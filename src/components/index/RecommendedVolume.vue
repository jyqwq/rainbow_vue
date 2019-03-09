<template>

  <div class="row row-margin">
    <div class="row hidden-xs style_title">
      <strong>&nbsp;&nbsp;&nbsp;RECOMMENDED VOLUME</strong> <br>
    </div>
    <div class="row hidden-xs">
      <span class="style_title1">BEST FOR YOU</span>
    </div>
    <div class="row hidden-xs">
      <span class="style_title2">量身推荐&nbsp;<span class="glyphicon glyphicon-play" aria-hidden="true"></span></span>
    </div>
    <div class="row visible-xs sm_commend">量身推荐</div>
    <div class="row infirst">
      <!--ajax请求内容区域-->
    </div>
  </div>

</template>

<script>
    export default {
        name: "RecommendedVolume"
    }
</script>

<style scoped>
  .animate_welcome{
    animation: bounceInLeft 2s;
  }
  .animate_welcome1{
    animation: bounceInRight 2s;
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

  .to_one_one{
    cursor: pointer;
  }
</style>
