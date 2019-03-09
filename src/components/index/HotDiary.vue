<template>
  <div class="row row-margin" >
    <div class="col-lg-6">
      <div class="row hidden-xs style_title">
        <strong>&nbsp;&nbsp;&nbsp;HOT DYNAMIC</strong> <br>
      </div>
      <div class="row hidden-xs">
        <span class="style_title1">HOT AND INTERESTING</span>
      </div>
      <div class="row hidden-xs">
        <span class="style_title2">热门日记&nbsp;<span class="glyphicon glyphicon-play" aria-hidden="true"></span></span>
      </div>
      <div class="row visible-xs sm_commend">热门日记</div>
      <div class="row insecond">
        <!--热门动态ajax请求区-->
      </div>
    </div>
    <div class="col-lg-6 most_hot">

    </div>
  </div>
</template>

<script>
    export default {
        name: "HotDiary"
    }
</script>

<style scoped>
  @keyframes myfirst
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }

  @-moz-keyframes myfirst /* Firefox */
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }

  @-webkit-keyframes myfirst /* Safari 和 Chrome */
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }

  @-o-keyframes myfirst /* Opera */
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }
  .row-margin{
    margin-top: 30px;
    margin-right: -15px;
    margin-left: -15px;

  }
  .animate_welcome{
    animation: bounceInLeft 2s;
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
  .recommend_one a{
    color: #464646;
  }
  .recommend_one a:hover{
    text-decoration: none;
  }
  .hot_thing img:hover{
    animation: myfirst 1s;
    opacity: 0.5;
  }
  .sm_commend{
    text-align: center;
    color: #FFB5B5;
    font-size: 1.2em
  }
  .to_one_two{
    cursor: pointer;
  }
</style>
