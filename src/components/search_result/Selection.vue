<template>
  <div class="row r-2">
    <ul class="nav nav-pills r-2-1" id="r-2-1-ul" >
      <li role="presentation" class="active  " ><a href="#" class="r-2-1">所有分类:</a></li>
      <!--<li role="presentation" class="active  " ><a href="#" class="r-2-1">SNP</a></li>-->
    </ul>
    <table class="table r-2-tb">
      <tr class="tr-1">
        <td class="col-md-1">种类:</td>
        <td class="col-md-6 r-2-td-1">
          <span>SNP</span>
          <span>毛穴革命</span>
          <span>森田药妆</span>
          <span>信美肌</span>
          <span>我的美丽日记</span>
          <span>瑞士葆丽美</span>
          <span>希思黎</span>
          <span>伊丽莎白 · 雅顿</span>
          <span>悦诗风吟</span>
          <span>海蓝之谜</span>
          <span>菲诗小铺</span>
        </td>

      </tr>
      <tr>
        <td class="col-md-1">功能:</td>
        <td class="col-md-6 r-2-td-3">
          <span>提亮肤色</span>
          <span>均匀肤色</span>
          <span>保湿</span>
          <span>遮瑕</span>
          <span>痘痘護理</span>
          <span>去红血丝</span>
          <span>收缩毛孔</span>
          <span>舒缓/抗敏感</span>
          <span>去黑头</span>
          <span>去角质</span>
        </td>
        <!--<td class="col-md-1"></td>-->
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "Selection"
    }
</script>

<style scoped>
  .r-2-1{
    background: white;
    /*background: #f2f2f2;*/
  }
  #r-2-1-ul li{
    border: 1px solid rgba(118, 118, 118, 0.51);
    /*border-right: 1px solid rgba(118, 118, 118, 0.51);*/
    background: pink;
  }
  #r-2-1-ul li a{
    background: white;
    color:rgba(128, 128, 128, 0.7);
    cursor: default;
    /*color: rebeccapurple;*/
  }
  .con{
    margin-top: 50px;
  }
  .con .main_content .r-2 .r-2-tb{
    /*border: 1px solid rgba(128, 128, 128, 0.4);*/
  }
  .con .main_content .r-2 .r-2-tb tr td{
    /*border-top: 1px dashed rgba(128, 128, 128, 0.4);*/
    /*border-bottom: 1px dashed rgba(128, 128, 128, 0.4);*/
    padding-top: 15px;
    padding-left: 15px;
  }
  .con .main_content .r-2 .r-2-tb tr td:nth-child(1){
    color:rgba(128, 128, 128, 0.7);
  }
  .con .main_content .r-2 .r-2-tb tr td span{
    display: inline-block;
    cursor: pointer;
    margin-right:80px;
    margin-bottom:15px;
  }
  .con .main_content .r-2 .r-2-tb tr td span:hover{
    text-decoration: underline;
    color: red;
  }
</style>
