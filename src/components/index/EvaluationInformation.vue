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
      <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 md_over_hid">
        <div class="to_one_three"><img src="img/z_md.jpg" class="img-responsive center-block img-rounded pro_img" alt="Responsive image"></div>
        <div class="dy_type" style="display: none">test</div>
        <div class="dy_id_1" style="display: none"></div>
        <div class="md_content_div pro_detail pro_t">产品评测</div>
      </div>
      <div class="hidden-xs col-sm-6 col-md-6 col-lg-6 md_over_hid">
        <div class="to_one_three"><img src="img/z_md.jpg" class="img-responsive center-block img-rounded pro_img" alt="Responsive image"></div>
        <div class="dy_type" style="display: none">test</div>
        <div class="dy_id_1" style="display: none"></div>
        <div class="md_content_div pro_detail pro_t">产品评测</div>
      </div>
    </div>
    <div class="row row-margin all_eva">
      <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 over_hid">
        <div class="to_one_three"><img src="img/z_sm.jpg" class="img-responsive center-block img-rounded pro_img" alt="Responsive image"></div>
        <div class="dy_type" style="display: none">test</div>
        <div class="dy_id_1" style="display: none"></div>
        <div class="content_div pro_detail pro_t">产品评测</div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-4 col-lg-4 over_hid">
        <div class="to_one_three"><img src="img/z_sm.jpg" class="img-responsive center-block img-rounded pro_img" alt="Responsive image"></div>
        <div class="dy_type" style="display: none">test</div>
        <div class="dy_id_1" style="display: none"></div>
        <div class="content_div pro_detail pro_t">产品评测</div>
      </div>
      <div class="hidden-xs col-sm-4 col-md-4 col-lg-4 over_hid">
        <div class="to_one_three"><img src="img/z_sm.jpg" class="img-responsive center-block img-rounded pro_img" alt="Responsive image"></div>
        <div class="dy_type" style="display: none">test</div>
        <div class="dy_id_1" style="display: none"></div>
        <div class="content_div pro_detail pro_t">产品评测</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EvaluationInformation"
    }
</script>

<style scoped>
  .row-margin{
    margin-top: 30px;
    margin-right: -15px;
    margin-left: -15px;
  }
  .animate_welcome2{
    animation: jackInTheBox 2s;
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
  .pro_detail{
    text-align: center;
  }
  .sm_commend{
    text-align: center;
    color: #FFB5B5;
    font-size: 1.2em
  }
  .content_div{
    width: 62%;
    height: 60px;
    line-height: 60px;
    background: rgba(255, 148, 165, 0.63);
    margin: auto;
    position: relative;
    top: -60px;
  }
  .over_hid{
    overflow: hidden;
    height: 227px;
  }
  .over_hid:hover{
    animation: pulse 1s;
  }
  .md_over_hid{
    overflow: hidden;
    height: 315px;
  }
  .md_over_hid:hover{
    animation: pulse 1s;
  }
  .md_content_div{
    width: 62%;
    height: 60px;
    line-height: 60px;
    background: rgba(255, 148, 165, 0.63);
    margin: auto;
    position: relative;
    top: -60px;
  }
  .to_one_three{
    cursor: pointer;
  }
</style>
