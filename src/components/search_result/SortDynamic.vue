<template>
  <div class="row r-6">
    <div class="col-md-12">
      <div class="row r-6-1">
        <span>最多点击</span>
        <span>最新发布</span>
        <span>最多收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SortDynamic"
    }
</script>

<style scoped>
  .r-6{
    display: none;
  }
  .r-6-1{
    padding: 13px;
  }
  .r-6-1 span{
    cursor: pointer;
    margin-right: 25px;
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    color: black;
    border-radius: 3px;
  }
  .r-6-1 :nth-child(1){
    background: #71d2c3;
    color: white;
  }
</style>
