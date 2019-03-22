<template>
  <div id="qz_collection" class="animal_sil" style="zoom:1;overflow: hidden;">
    <div class="row">
      <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
        ccccccccccccc
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
  import DynamicSingle from './DynamicSingle'
    export default {
    components:{
      'dynamic-single':DynamicSingle
    },
      name: "DynamicCollect"
    }
</script>

<style scoped>

</style>
