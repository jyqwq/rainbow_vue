<template>
    <div class="row fbtn" id="fbtn">
    <div class="col-md-2 col-md-offset-1">
      <button type="button" class="btn btn-default col-sm-12 col-xs-12">综合</button>
    </div>
    <div class="col-md-2 ">
      <button type="button" class="btn btn-default col-sm-12 col-xs-12">面膜</button>
    </div>
    <div class="col-md-2  ">
      <button type="button" class="btn btn-default col-sm-12 col-xs-12">口红</button>
    </div>
    <div class="col-md-2  ">
      <button type="button" class="btn btn-default col-sm-12 col-xs-12">彩妆</button>
    </div>
    <div class="col-md-2  ">
      <button type="button" class="btn btn-default col-sm-12 col-xs-12">护手霜</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "FilterButton"
    }
</script>

<style scoped>
  #fbtn button:focus{
    outline: 0px;
  }
  .fbtn button{
    color: deeppink;
  }
</style>
