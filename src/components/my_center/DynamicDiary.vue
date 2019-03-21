<template>
  <div id="qz_diary" class="animal_sil" style="zoom:1;overflow: hidden;">
    <div class="row">
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        aaaaaaaaa
        <dynamic-single></dynamic-single>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <dynamic-single></dynamic-single>
      </div>
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        <dynamic-single></dynamic-single>
      </div>
    </div>
  </div>
</template>

<script>
  import DynamicSingle from'./DynamicSingle'
    export default {
      components:{
        'dynamic-single':DynamicSingle
      },
      name: "DynamicDiary"
    }
</script>

<style scoped>

</style>
