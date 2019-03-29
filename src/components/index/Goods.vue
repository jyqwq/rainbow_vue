<template>
  <div class="col-xs-6 col-sm-6 col-md-3 col-lg-3">
    <div class="row recommend_one">
      <a class="to_one_one">
        <img src="../../assets/search_img/ziran.jpg" class="img-responsive img-rounded" alt="Responsive image">
        <div class="row pro_detail">
          <br>
          <span style="font-size: 1.2em;"><strong>喜马拉雅龙血能量润肤露</strong></span> <br>
          <span>70ml</span>
        </div>
        <div class="row">
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 div_line"></div>
          <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
        </div>
        <div class="row pro_detail" style="margin-bottom: 10px">
          <span>安全指数:5</span><br><br class="hidden-sm">
          <span>一抹化水<br>补水、舒缓、醒肤、抗油光一步完成<br>爽肤水、精华、乳液三步合一<br>
            一瓶搞定!</span><br><br class="hidden-sm">
          <span>参考价:¥ 109.00 </span>
        </div>
      </a>
      <div class="dy_type" style="display: none">commodity</div>
      <div class="dy_id" style="display: none">{{i}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Goods",
      props:['i'],
      data:function () {
        return{

        }
      }
    }
</script>

<style scoped>
  .to_one_one{
    cursor: pointer;
  }
  .recommend_one{
    font-family: 幼圆;
    background: whitesmoke;
    margin: 30px 0;
    /*height: 400px;*/
    border: solid 2px rgba(128, 128, 128, 0.3);
    border-radius: 3px;
    /*text-align: center;*/
    font-size: 1.1em;
  }
  .recommend_one a{
    color: #464646;
  }
  .recommend_one a:hover{
    text-decoration: none;
  }
  .recommend_one:hover{
    animation: pulse 1s;
    border: solid 2px rgba(216, 147, 167, 0.92);
    /*transform: scale(1.1, 1.1);*/
  }
  .pro_detail{
    text-align: center;
  }
  .div_line{
    margin: 20px 0;
    height: 1px;
    background: pink;
  }
</style>
