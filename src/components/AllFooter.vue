<template>
  <!--网页底部-->
  <div class="container-fluid under_nav min_width">
    <div class="container">
      <div class="row row-margin">
        <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <table class="under_table">
            <tr>
              <td class="colour">彩虹日记&nbsp;&nbsp;</td>
            </tr>
            <tr>
              <td><a href="#">关于我们</a></td>
              <td><a href="#">联系我们</a></td>
              <td><a href="#">加入我们</a></td>
              <td><a href="#">友情链接</a></td>
              <td class="hidden-xs hidden-sm"><a href="#">彩虹认证</a></td>
            </tr>
          </table>
        </div>
        <div class="hidden-xs col-sm-1 col-md-1 col-lg-1 under_line"></div>
        <div class="col-xs-12 col-sm-5 col-md-5 col-lg-5">
          <table class="under_table">
            <tr>
              <td class="colour">传送门&nbsp;&nbsp;&nbsp;&nbsp;</td>
            </tr>
            <tr>
              <td><a href="#">帮助中心</a></td>
              <td><a href="#">侵权申诉</a></td>
              <td><a href="#">活动中心</a></td>
              <td><a href="#">用户反馈</a></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row last_center">
        &copy;rainbow diary 2019 belong to Ji yuan /Qian zhen /Rui hong sheng
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "AllFooter"
    }
</script>

<style scoped>
  .under_nav{
    border-radius: 5px;
    margin-top: 40px;
    background: lightpink;
  }
  .under_table td{
    width: 100px;
    line-height: 30px;
    text-align: center;
  }
  .under_line{
    margin: 0;
    padding: 0;
    width: 1px;
    height: 50px;
    position: relative;
    top: 20px;
    border-left: solid 1px darkgrey;
  }
  .colour{
    color: darkgrey;
  }
  .last_center{
    margin-top: 20px;
    text-align: center;
  }
</style>
