<template>
  <div class="r-3-left" id="r-3-left">
    <div class="row r-3-1" id="r-3-1">
      <span>热门产品</span>
    </div>
    <div class="row r-3-2"  >
      <div class="col-md-4 r-3-2-1">
        <a href="#"><img src="../../assets/search_img/good-1.jpg" alt=""></a>
      </div>
      <div class="col-md-8 r-3-2-2">
        <span>大宝护手霜</span>
        <p><span class="glyphicon glyphicon-heart">100</span>
          <span class="glyphicon glyphicon-star">200</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HotGoods"
    }
</script>

<style scoped>
  .r-3-left{
    width: 21.25%;
    display: inline-block;
  }
  #r-3-1{
    margin-left: 0 !important;
    border-left: 5px solid #c69a62;
    height: 50px;
    padding-left: 40px;
    line-height: 50px;
    background: white;
    margin-bottom: 2px;
  }
  .r-3-1 span{
    font-size: 1.3em;
  }
  #r-3-left .r-3-2{
    margin-left: 0;
    /*margin-top: 2px;*/
    background: white;
    padding-left: 15px;
    padding-top: 20px;
    padding-bottom: 20px;
    box-sizing: border-box;
    margin-bottom: 4px;
  }
  #r-3-left .r-3-2:hover{
    cursor: pointer;
    box-shadow: 0 0 10px #888888;;
  }
  .r-3-2-1 img{
    margin-left:0;
    width: 65px;
  }
  .r-3-2-1 :nth-child(2){
    display: none;
  }
  .r-3-2-2{
    /*text-align: center;*/
  }
  .r-3-2-2>:nth-child(1){
    display: inline-block;
    background: rgba(0, 179, 238, 0.58);
    border-radius: 3px;
    color:white;
    padding: 3px;
    font-weight:600;

  }
  .r-3-2-2 p {
    margin-top: 20px;
  }
  .r-3-2-2 p img{
    margin-right: 10px;
    margin-bottom: 5px;
  }
</style>
