<template>

    <div class="row" style="margin-top: 50px">
      <!--左边导航-->
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 choose_sharing">
        <nav-main></nav-main>
      </div>
      <!--右边内容-->
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 content_sharing">
        <!--首页部分-->
        <home-page></home-page>
        <!--我的信息-->
        <modify-information></modify-information>
        <!--我的头像-->
        <modify-head></modify-head>
      </div>
    </div>

</template>

<script>
  import NavMain from './NavMain'
  import HomePage from './HomePage'
  import ModifyInformation from './ModifyInformation'
  import ModifyHead from './ModifyHead'
    export default {
      components:{
        'nav-main':NavMain,
        'home-page':HomePage,
        'modify-information':ModifyInformation,
        'modify-head':ModifyHead
      },
      name: "Setting"
    }
</script>

<style scoped>
  /*全局*/
  .choose_sharing {
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    height: 100%;
  }
  .content_sharing {
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    min-height: 700px;
  }
  /*--------------输入部分--------------*/
  .text_active{
    animation: fadeInUp 1s;
  }

</style>
