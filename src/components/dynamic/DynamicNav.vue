<template>
  <div class="row all_dy dy_margin dy_nav">
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="flag===1? 'to_active':''" @click="flag=1"><a href="#" class="dy_m_nav dy_all"><strong>所有动态</strong></a></div>
    </div>
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="flag===2? 'to_active':''" @click="flag=2"><a href="#" class="dy_m_nav dy_x"><img src="../../assets/mood.png" alt="">&nbsp;<strong>心情</strong></a></div>
    </div>
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="flag===3? 'to_active':''" @click="flag=3"><a href="#" class="dy_m_nav dy_r"><img src="../../assets/diary.png" alt="">&nbsp;<strong>日记</strong></a></div>
    </div>
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="flag===4? 'to_active':''" @click="flag=4"><a href="#" class="dy_m_nav dy_pingjia"><img src="../../assets/evaluation.png" alt="">&nbsp;<strong>测评</strong></a></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "DynamicNav",
      data:function () {
        return{
          flag:1
        }
      }
    }
</script>

<style scoped>
  .dy_nav{
    height: 50px;
    line-height: 47px;
  }
  .all_dy{
    background: #e9faff;
    border-radius: 5px;
  }
  .dy_margin{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .xs_padding{
    padding: 0 3px;
    text-align: center;
  }
  .to_active{
    border-bottom: solid 3px lightpink;
  }
  .dy_m_nav{
    color: lightpink;
  }
</style>
