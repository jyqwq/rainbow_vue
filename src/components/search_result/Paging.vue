<template>
  <div class="row r-5">
    <div class="col-md-6 col-md-offset-3 r-5-1" id="div-fenye">
      <a href="#top">
        <ul id='ul-fenye'>
          <!--<li>首页</li>-->
          <!--<li>上一页</li>-->
          <!--<li></li>-->
          <!--<li></li>-->
          <!--<li></li>-->
          <!--<li>下一页</li>-->
          <!--<li>尾页</li>-->
        </ul>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Paging"
    }
</script>

<style scoped>
  #ul-fenye{font-size:0;font-family:Microsoft YaHei;display:inline-block;}
  #ul-fenye li{
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    list-style: none;float:left;padding:6px;font-size:13px;border:1px solid #ccc;margin:2px;cursor:pointer;color:#585858;}
  #div-fenye{
    text-align: center;
  }
  #ul-fenye .background{background:#39C6F4;
    color:white;
    border:1px solid #39C6F4;
  }
</style>
