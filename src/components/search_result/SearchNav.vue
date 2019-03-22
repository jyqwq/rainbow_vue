<template>
  <div class="row top">
    <div class="col-md-3 col-md-offset-1 top-left">
      <img src="../../assets/search_img/icy_logo-2.png" class="">
      <img src="../../assets/search_img/icy_logo.png" alt="">
    </div>
    <div class="col-md-4 top-mid">
      <div class="row mid-1">
        <div class="input-group icy_sch">
          <input type="text" name="website" id="input-sch" list="list_web" class="form-control"  placeholder="搜索你想要的内容...">
          <datalist id="list_web">
          </datalist>
          <span class="input-group-btn">
                        <button class="btn  search" id="sch_btn" type="button">搜索</button>
                        </span>
        </div>
      </div>
      <div class="row mid-2">
        <nav class="navbar navbar-default mid-2-nav">
          <ul class="nav navbar-nav mid-2-ul">
            <li>洗面奶</li>
            <li>兰蔻粉水</li>
            <li>卸妆水</li>
            <li>彩妆</li>
            <li>科颜氏</li>
            <li>润唇膏</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-md-3 col-md-offset-1 top-right">
      <!--<img src="../img/newyear.png" class="top-right-img">-->
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchNav"
    }
</script>

<style scoped>
  .top-right-img{
    animation: flash 1s;
  }
  #icy-nav{
    background: #f2f2f2;
  }
  .top{
    background: white;
    /*background: #f2f2f2;*/
    padding-top: 20px;
    margin-top: 100px;
  }
  .top .top-left img{
    height: 40px;
  }
  .icy_sch{
    margin-top:3px;
  }
  .icy_sch input{
    border: 3px solid deeppink;
    border-radius: 0px;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0px 0px 0px;
  }
  .icy_sch button{
    border: 1px solid deeppink;
    border-radius: 0px;
    background-color: deeppink;
    color: white;
    width: 90px;
  }
  #sch_btn:hover{
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }
  #sch_btn:focus{
    color: white;
    outline: 0px;
  }
  .mid-2-nav{
    border: 0px;
    background: white;
    min-height: 1em;
  }
  .mid-2-ul li{
    margin-right: 30px;
    font-size: 0.5em;
    color: rgba(128, 128, 128, 0.69);
    padding: 0px;
    margin-top: 15px;
  }
  .mid-2-ul li:hover{
    cursor: pointer;
    color: black;
  }
</style>
