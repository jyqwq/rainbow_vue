<template>
  <div class="container con">
    <div class="col-lg-2"></div>
    <div class="col-lg-8">
      <detail-nav :user_id="$route.params.user_id"></detail-nav>
      <dynamic-content :type="$route.params.type" :id="$route.params.id"></dynamic-content>
      <comment-area :type="$route.params.type" :id="$route.params.id"></comment-area>
    </div>
    <div class="col-lg-2"></div>
  </div>
</template>

<script>
  import DetailNav from './DetailNav'
  import DynamicContent from './DynamicContent'
  import CommentArea from '../dynamic/CommentArea'
    export default {
        name: "DynamicDetail",
      components:{
        'dynamic-content':DynamicContent,
        'detail-nav':DetailNav,
        'comment-area':CommentArea
      },
      data:function (){
          return{

          }
      },
      mounted:function (){

      },
      methods:{

      }
    }
</script>

<style scoped>
  .con{
    width: 100%;
    height: 100%;
    min-height: 900px;
    background: #d2e9fb;
    background-image: url("../../assets/dy-background.png");
    background-repeat: no-repeat;
  }
</style>
