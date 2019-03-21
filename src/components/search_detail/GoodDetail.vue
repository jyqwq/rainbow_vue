<template>
  <div class="row r-2" id="r-2">
    <div class="col-md-6">
      <div class="row r-2-1">
        <span class="r-2-1-span">好评</span>
      </div>
      <div class="row r-2-2">
        <div class="col-md-6 col-md-offset-3">
          <img src="../../assets/search_img/mygood.jpg" class="r-2-img" alt="">
        </div>
      </div>
      <div class="row r-2-3">
        <img src="../../assets/search_img/fire.png" alt=""><span>热搜中</span>
        <img src="../../assets/search_img/gg.png" alt=""><span>好评中</span>
      </div>
      <div class="row r-2-4">
        <div class="div-img">
          <img src="../../assets/search_img/good-1.jpg" alt="">
        </div>
        <div class="div-img">
          <img src="../../assets/search_img/good-2.jpg" alt="">
        </div>
        <div class="div-img">
          <img src="../../assets/search_img/good-3.jpg" alt="">
        </div>
        <div class="div-img">
          <img src="../../assets/search_img/good-4.jpg" alt="">
        </div>

      </div>
    </div>
    <div class="col-md-6">
      <div class="row r-2-5">
        <span class="glyphicon glyphicon-shopping-cart"></span>
        <span>SNP 金丝燕窝深层保湿面膜含有高浓缩燕窝原液，集中供给皮肤水分锁水能力突出，在皮肤水分子表面形成保护膜防止水分快速流失。</span>
      </div>
      <div class="row r-2-6">
        <span>保湿</span>
      </div>
      <div class="row r-2-7">
        <span>市场价60.0元</span>
      </div>
      <div class="row r-2-8">
        <p>
          <span>产品安全简述</span>
        </p>
        <p>
          <span>本产品含有香精0种</span>
        </p>
        <p>
          <span>本产品含有防腐剂0种</span>
        </p>
        <p>
          <span>本产品含有风险成分0种</span>
        </p>
      </div>
      <div class="row r-2-9">

      </div>
      <div class="row r-2-10 r-2-8">
        <p>
          <span>产品清洁解读</span>
        </p>
        <p>
          <span>本产品含有主要功效成分2种</span>
        </p>
        <p>
          <span>本产品含有清洁成分2种</span>
        </p>
      </div>
      <div class="row r-2-9">

      </div>
      <div class="row r-2-13">
        <span>评分</span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star"></span>
        <span class="glyphicon glyphicon-star-empty"></span>
      </div>
      <div class="row r-2-14">
        <img src="../../assets/search_img/cot.png" alt="">
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodDetail"
    }
</script>

<style scoped>
  .r-2{
    background: white;
  }
  #content{
    /*width: 400px;*/
    /*height: 60px;*/
    color: white;
    /*font-size: 1.5em;*/
    border: none;
    outline: none;
  }
  #r-2{
    /*margin-left: 0px;*/
    /*margin-right: 0px;*/
  }
  .r-2-1{
    padding-top: 15px;
    padding-left: 35px;
  }
  .r-2-1-span{
    display: inline-block;
    width: 110px;
    height: 110px;
    /*background:url("../../../static/search_img/color.png");*/
    background-size: cover;
    border-radius: 50%;
    text-align: center;
    font-size: 1.7em;
    /*color: white;*/
    line-height: 110px;
  }
  .r-2-img{
    /*height: 300px;*/
  }
  .r-2-3{
    padding-left: 50px;
    font-size: 0.8em;
  }
  .r-2-3 img{
    height: 20px;
  }
  .r-2-4{
    padding-left: 50px;
    margin-top: 30px;
  }
  .r-2-4 div{
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    display: inline-block;
    width: 20%;
    margin-right: 5px;
    box-sizing: border-box;
    border: 1px solid rgba(128, 128, 128, 0.31);
  }
  .r-2-4 div img{
    width: 60px;
  }
  .r-2-5{
    padding-top: 35px;
    padding-right: 45px;
  }

  .r-2-5 span{
    font-size: 20px;
  }
  .r-2-6{
    margin-top: 50px;
  }
  .r-2-6 span{
    display: inline-block;
    padding: 3px;
    margin-left: 10px;

    border-radius: 10px;
    border: 1px solid rgba(98, 132, 34, 0.54);
    text-align: center;
    line-height: 26px;
    color: rgba(98, 132, 34, 0.6);
  }
  .r-2-6 span:hover{
    border: 1px solid rgba(57, 77, 20, 0.69);
    cursor: pointer;
    color: rgba(59, 80, 21, 0.78);
  }
  .r-2-7{
    margin-top: 30px;
  }
  .r-2-7 :first-child{
    color: #EC3E7D;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 5px;
  }
  .r-2-7 :nth-child(2){
    color: grey;
    text-decoration: line-through;
  }
  .r-2-8{
    margin-top: 60px;
  }
  .r-2-8 :first-child :first-child{
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    background:#c69a62;
    color: white;
    border-radius: 3px;
  }
  .r-2-8 p{
    margin-bottom: 12px;
  }
  .r-2-8 p :nth-child(1){
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    color: white;
    border-radius: 3px;
    background:#71d2c3;
  }
  .r-2-9{
    margin-top: 20px;
    margin-bottom: 25px;
    width: 98%;
    border-top: 1px solid rgba(111, 111, 111, 0.39);
  }
  .r-2-10{
    margin-top: 20px;
  }
  /*.r-2-10 p{*/
  /*margin-bottom: 15px;*/
  /*}*/
  /*.r-2-10 p :nth-child(1){*/
  /*color: grey;*/
  /*letter-spacing: 5px;*/
  /*margin-right: 15px;*/
  /*}*/
  /*.r-2-10 :nth-child(4) :nth-child(3),.r-2-10 :nth-child(4) :nth-child(4){*/
  /*margin-left: 25px;*/
  /*}*/
  .r-2-11 input[type='text']{
    width: 30px;
    height: 20px;
    outline: none;
    border: none;
    text-align: center;
  }
  .r-2-11 input[type='button']{
    width: 23px;
    height: 23px;
    background: rgba(128, 128, 128, 0.25);
    outline: none;
    border: none;
  }
  .r-2-11 input[type='button']:hover{
    background: rgba(128, 128, 128, 0.65);
  }

  .r-2-11 input[type='button']:disabled{
    background: grey;
  }
  .r-2-11 :nth-child(2){
    margin-right: 10px;
  }
  .r-2-12 span{
    display: inline-block;
    width: 220px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    background: #EC3E7D;
    color: white;
    margin-top: 23px;
    font-size: 1.2em;
  }
  .r-2-12 span:hover{
    cursor: pointer;
  }
  .r-2-13{
    margin-top: 30px;
  }
  .r-2-13 :nth-child(1){
    letter-spacing: 5px;
  }
  .r-2-14{
    margin-top: 45px;
    margin-bottom: 50px;
  }
  .r-2-14 img{
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
  }
  .r-2-14 img,.r-2-14 span:hover{
    cursor: pointer;
  }
</style>
