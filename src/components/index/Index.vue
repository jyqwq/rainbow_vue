<template>
  <div>
    <!--欢迎巨幕-->
    <giant-screen></giant-screen>

    <!--分割线-->
    <div class="div_line"></div>

    <!--量身推荐-->
    <recommended-volume></recommended-volume>

    <!--分割线-->
    <div class="div_line"></div>

    <!--热门动态-->
    <hot-diary></hot-diary>

    <!--分割线-->
    <div class="div_line"></div>

    <!--评测资讯-->
    <evaluation-information></evaluation-information>

  </div>
</template>

<script>
  import GiantScreen from './GiantScreen'
  import HotDiary from './HotDiary'
  import EvaluationInformation from './EvaluationInformation'
  import RecommendedVolume from './RecommendedVolume'
    export default {
        name: "Index",
      components:{
        "giant-screen":GiantScreen,
        "hot-diary":HotDiary,
        "evaluation-information":EvaluationInformation,
        "recommended-volume":RecommendedVolume
      }
    }
</script>

<style scoped>

  .div_line{
    margin: 20px 0;
    height: 1px;
    background: pink;
  }

</style>
