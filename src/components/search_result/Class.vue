<template>
  <div class="row r-1">
    <ul class="nav nav-tabs  dao_ul "id="dao_ul">
      <li role="presentation" class=""><a href="#">产品</a></li>
      <li role="presentation" class=""><a href="#">心情</a></li>
      <li role="presentation" class=""><a href="#">日记</a></li>
      <li role="presentation" class=""><a href="#">测评</a></li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "Class"
    }
</script>

<style scoped>
  .r-1 .dao_ul{
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .r-1 .dao_ul li a{
    color: gray;
  }
  .r-1 .dao_ul :nth-child(1) a{
    color: rebeccapurple;
  }
  li{
    text-align: center;
    list-style: none;
  }
</style>
