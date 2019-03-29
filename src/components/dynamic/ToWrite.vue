<template>
  <div class="row all_dy dy_margin re_dy">
    <div style="margin-left: 230px;margin-top: 40px;"><router-link to="/sharing_index"><release-btn :name="'写  日  记'"></release-btn></router-link></div>
  </div>
</template>

<script>
  import ReleaseBtn from '../sharing_index/ReleaseBtn'
    export default {
        name: "ToWrite",
      components:{
          'release-btn':ReleaseBtn
      }
    }
</script>

<style scoped>
  .all_dy{
    background: #e9faff;
    border-radius: 5px;
  }
  .dy_margin{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .re_dy{
    height: 150px;
    background-image: url("../../assets/dytwbg.gif");
    background-repeat: round;
  }
</style>
