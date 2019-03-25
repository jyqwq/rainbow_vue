<template>
  <div style="zoom:1;overflow: hidden;">
    <div class="qz_nimg anima_jel">
      <img src="../../assets/my_center/nav_diary.png" class="img-responsive img_diary" alt="Responsive image">
    </div>
    <div class="qz_nav"><span class="font_nav">日 记 本</span></div>
    <div class="qz_ndis"><span class="font_inf">快来写日记吧！</span></div>
  </div>
</template>

<script>
    export default {
      name: "NavDiary"
    }
</script>

<style scoped>
  /*字体*/
  .qz_nav{
    text-align: center;
  }
  .font_nav{
    font-family: 幼圆;
    font-size: 1.5em;

    height: 30px;
    line-height: 30px;
  }
  .qz_ndis{
    text-align: center;
  }
  .font_inf{
    font-family: 幼圆;
    height: 20px;
    line-height: 20px;
  }
  /*日记本*/
  .qz_nimg{
    margin: auto;
    width: 70px;
    height: 70px;
  }
  .img_diary{
    height: 100%;
    margin: auto;
  }
  /*动画*/
  /*摇晃颤抖*/
  .anima_jel:hover{
    animation: jello 1s;
  }
</style>
