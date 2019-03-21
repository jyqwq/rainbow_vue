<template>
  <div class="row r-3">
    <nav class="navbar navbar-default r-3-nav">
      <ul class="nav navbar-nav  dao_ul " id="sot-ul">
        <li role="presentation" class=""><a href="#">综合排序</a></li>
        <li role="presentation" class=""><a href="#">最多点赞</a></li>
        <li role="presentation" class=""><a href="#">最新发布</a></li>
        <li role="presentation" class=""><a href="#">最多收藏</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "SortGoods"
    }
</script>

<style scoped>
  .r-3{
    margin-top: 10px;
  }
  .r-2-tb{
    background-color: white;
  }

  .r-3-nav{
    background-color:white;
    /*background: #f2f2f2;*/
  }
</style>
