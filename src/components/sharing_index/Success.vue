<template>
  <div class="row succss_margin">
    <div>
      <img src="../../assets/sharing_index/success.png" alt="">
      <br>
      <span class="succss_text"><strong>发布成功</strong></span>
      <br><br>
      <router-link to="/sharing_index"><button type="button" class="btn btn-success again_re">再发布</button></router-link>
      <router-link to="/my_dynamic"><button type="button" class="btn btn-success back_from">查看动态</button></router-link>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Success"
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
</style>
