<template>
  <div class="row succss_margin">
    <div>
      <img src="../../assets/sharing_index/defeat.png" alt="">
      <br>
      <span class="succss_text"><strong>发布失败</strong></span>
      <br>
      <span style="font-size: 1.2em;font-family: 幼圆;">很抱歉,由于一些奇奇怪怪的问题导致发布失败,请重试...</span>
      <br><br>
      <span class="defeat_message">错误码:{{$route.params.status_code}} 错误信息:{{$route.params.status_text}}</span>
      <br><br>
      <router-link to="/sharing_index"><button type="button" class="btn btn-success again_re">再发布</button></router-link>
      <router-link to="/my_dynamic"><button type="button" class="btn btn-success back_from">查看动态</button></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Defeat"
    }
</script>

<style scoped>
  .succss_margin{
    margin-top: 100px;
    text-align: center;
  }
  .succss_text{
    font-size: 2em;
    line-height: 48px;
    font-family: 幼圆;
    color: #e2b3b7;
  }
  .defeat_message{
    color: darkgray;
  }
</style>
