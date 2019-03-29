<template>
  <div class="row r-7">
    <div class="row row_margin rank_one" v-for="(i,index) in goodinfo.length-1">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 rank_num"><strong>22</strong><span>33</span></div>
      <div class="col-xs-10 col-sm-8 col-md-8 col-lg-8">
        <div class="col-xs-5 col-sm-3 col-md-3 col-lg-3 rank_img">
          <img src="../../assets/search_img/good-1.jpg" class="img-responsive img-rounded" alt="Responsive image">
        </div>
        <div class="col-xs-7 col-sm-9 col-md-9 col-lg-9 rank_content">
          <div class="row first_row">
            <a  class="content_name"><h5><strong>TT</strong></h5></a>
          </div>
          <div class="row second_row">
            <span class="glyphicon glyphicon-eye-open" aria-hidden="true">123</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-edit" aria-hidden="true">456</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">789</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;<a href="#">ICYTAIL</a></span>
          </div>
        </div>
      </div>
      <div class="hidden-xs col-sm-2 col-md-2 col-lg-2 rank_detail">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <span style="color: darkgrey"><strong>热度</strong></span><br>
          <span style="color: #ffadbc; font-size: 1.2em"><strong>1234</strong></span>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <span style="color: darkgrey"><strong>分类</strong></span> <br>
          <span style="color: #ffadbc; font-size: 1.2em"><strong>日记</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Dynamic",
        data:function () {
          return{

          }
        },
        props:['goodinfo'],

        mounted:function () {

        }
    }
</script>

<style scoped>
  .r-7 {
    /*display: none;*/
    text-align: center;
    /*min-height: 300px;*/
  }
  /*.r-7 #no_data{*/
    /*margin-top: 50px;*/
    /*margin-bottom: 50px;*/
  /*}*/
  .rank_num span{
    display: none;
  }
  .row_margin{
    margin-top: 20px;
  }
  .unaction a{
    text-decoration: none;
    color: #25003f;
  }
  .my_active{
    border-bottom: solid 3px lightpink;
  }
  .my_active>a{
    color: lightpink;
  }
  .xs_padding{
    padding: 0 3px;
    text-align: center;
  }
  .rank_one{
    animation: fadeInLeft 1s;
    border-bottom: solid 1px #d5d5d5;
  }
  .rank_one:hover{
    box-shadow: 0 5px 10px #ffc1c3;
  }
  .rank_one>div{
    text-align: center;
    height: 150px;
  }
  .rank_num{
    line-height: 150px;
    color: darkgrey;
    font-size: 2.5em;
  }
  .min_width{
    min-width: 620px;
  }
  .rank_img{
    /*边框*/
    border: solid 1px rgba(128, 128, 128, 0);
    height: 150px;
    padding: 0;
  }
  .rank_img img{
    max-height: 148px;
  }
  .rank_content{
    /*边框*/
    border: solid 1px rgba(128, 128, 128, 0);
    height: 150px;
  }
  .first_row{
    box-sizing: border-box;
    padding: 0 15px;
    text-align: left;
    line-height: 40px;
  }
  .first_row strong:hover{
    cursor: pointer;
  }
  .second_row{
    box-sizing: border-box;
    padding: 0 15px;
    text-align: left;
    line-height: 40px;
    font-size: 12px;
  }
  .content_name{
    text-align: left;
  }
  .content_name h5{
    font-size: 1.1em;
    line-height: 50px;
  }
  .content_name:hover{
    text-decoration: none;
  }
  .rank_detail{
    /*边框*/
    border: solid 1px rgba(128, 128, 128, 0);
    height: 150px;
    padding: 0;
    line-height: 40px;
    padding-top: 20px;
  }
  .rank_detail div{
    padding: 0;
  }
  .see_more{
    text-align: center;
  }
  .real_time ,.hot_dairy ,.hot_cosmetics{
    margin: 0;
  }
</style>
