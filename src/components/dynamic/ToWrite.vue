<template>
  <div class="row all_dy dy_margin re_dy">
    <a href="#"><button type="button" class="btn btn-success to_sharing"><strong>去写日记</strong></button></a>
  </div>
</template>

<script>
    export default {
        name: "ToWrite"
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
  .to_sharing{
    line-height: 35px;
    width: 100px;
    border: lightpink;
    background: lightpink;
    margin-left: 230px;
    margin-top: 60px;
  }
  .to_sharing:hover{
    border: #eea9b2;
    background: #eea9b2;
  }
</style>
