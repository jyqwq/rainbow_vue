<template>
  <!--我的头像-->
  <div class="test_row" style="display: none">
    <div class="row row_margin">
      <div class="col-xs-2 col-sm-4 col-md-5 col-lg-5 guide">
        <img src="" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-10 col-sm-8 col-md-7 col-lg-7">
        <em class="change_em">
          <input type="file" class="change_head">
          <img src="" class="master_head" id="icon">
        </em>
      </div>
    </div>
    <div class="qz_line2"></div>
    <span class="font_pendant">挂件商城</span>
    <div class="row row_margin">
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant1.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant2.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant3.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant4.png" class="img-responsive" alt="Responsive image">
      </div>
    </div>
    <div class="row row_margin">
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant5.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant6.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant7.png" class="img-responsive" alt="Responsive image">
      </div>
      <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3">
        <img src="../../assets/setting/pendant8.png" class="img-responsive" alt="Responsive image">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ModifyHead"
    }
</script>

<style scoped>
  /*首页部分*/
  .row_margin{
    margin-top: 30px;
  }
  /*我的头像—开始*/
  /*背景*/
  .guide{
    margin-top: 100px;
  }
  .change_em {
    width: 200px;
    height: 200px;
    /*display: block;*/
    position: absolute;
    margin-top: 0px;
    border: solid 1px #d9d9d9;
    border-radius: 50%;
  }
  /*选择区域*/
  .change_head {
    opacity: 0;
    filter: alpha(opacity=0);
    height: 100px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    border-radius: 50%;
    margin: 50px;
  }
  /*头像图片*/
  .master_head {
    height: 100px;
    width: 100px;
    border-radius: 50%;
    margin: 50px;
  }
  .qz_line2{
    margin-top: 130px;
    height: 1px;
    background: #d9d9d9;
  }
  /*我的头像—结束*/
</style>
