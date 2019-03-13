<template>
  <div class="row qz_row" style="zoom:1;overflow: hidden;">
    <!--肤质测试-->
    <div class="col-xs-12 col-sm-11 col-md-5 col-lg-5">
      <div class="qz_add" >
        <div class="row qz_row">
          <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div class="add_img">
              <img src="../../assets/my_center/add_skin.png" class="img-responsive" alt="Responsive image">
              <div class="add_iner">
                <span class="font_skinfo">肤质测试</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
    <!--护肤指南-->
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div class="qz_gui">
        <div class="bro_his">
          <span class="font_bro">护肤指南</span>
        </div>
        <div class="qz_skinfo">
          <span class="font_skinfo">OSNW皮肤容易敏感，所以建议对照美丽修行APP对产品安全星级评定，尽量选择安全星级在3星半以上产品，同时建议查看全成分表，避开不适合的易致敏和致粉刺性成分。</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MySkin"
    }
</script>

<style scoped>
  /*全局*/
  .qz_row{
    margin: 15px;
  }
  /*字体*/
  /*浏览历史，护肤指南标题*/
  .font_bro {
    font-size: 1.5em;
    line-height: 50px;
  }
  /*护肤指南*/
  .qz_skinfo{
    text-align: center;
  }
  .font_skinfo{
    font-family: 幼圆;
    font-size: 1.3em;
  }
  /*第二部分*/
  /*肤质测试*/
  .add_img{
    height: 150px;
  }
  .add_img img{
    height: 100%;
  }
  .add_iner{
    line-height: 150px;
    margin: -150px 40px;
  }
  /*护肤指南*/
  .qz_gui{
    margin-top: 20px;
  }
</style>
