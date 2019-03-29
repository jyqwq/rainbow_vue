<template>
  <div class="row real_time">
    <div class="row row_margin rank_one" v-for="(i,index) in res" :key="index">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 rank_num"><strong>{{index+1}}</strong></div>
      <div class="col-xs-10 col-sm-8 col-md-8 col-lg-8">
        <div class="col-xs-5 col-sm-3 col-md-3 col-lg-3 rank_img">
          <img src="../../assets/rank_img.jpg" class="img-responsive img-rounded" alt="Responsive image">
        </div>
        <div class="col-xs-7 col-sm-9 col-md-9 col-lg-9 rank_content">
          <div class="row first_row">
            <a class="content_name to_one_dy"><h5><strong>{{i.type==='dynamic'? ((i.content).length>10? (i.content).slice(0,10)+'...':i.content):((i.title).length>10? (i.title).slice(0,10)+'...':i.title)}}</strong></h5></a>
            <div class="dy_type" style="display: none">{{i.type}}</div>
            <div class="dy_id" style="display: none">{{i.id}}</div>
          </div>
          <div class="row second_row">
            <span class="glyphicon glyphicon-eye-open" aria-hidden="true">&nbsp;{{i.click}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-edit" aria-hidden="true">&nbsp;{{i.com}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">&nbsp;{{i.fbs}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;<a class="to_one_person">{{i.userInfo.name}}</a></span>
          </div>
        </div>
      </div>
      <div class="hidden-xs col-sm-2 col-md-2 col-lg-2 rank_detail">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <span style="color: darkgrey"><strong>热度</strong></span> <br>
          <span style="color: #ffadbc; font-size: 1.2em"><strong>{{i.click+i.com}}</strong></span>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <span style="color: darkgrey"><strong>分类</strong></span> <br>
          <span style="color: #ffadbc; font-size: 1.2em"><strong>{{i.type==='dynamic'? '心情':i.type==='dairy'? '日记':'测评'}}</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "HotSearch",
      data:function () {
        return{
          res:null
        }
      },
      mounted:function () {
        this.getdata()
      },
      methods:{
        getdata:function () {
          let that = this;
          axios.get(this.GLOBAL.HOST+'search/hotSearch?page=1').then(
            function (response) {
              that.res=response.data
            }
          ).catch(
            function (err) {
              console.log(err);
            }
          )
        }
      }
    }
</script>

<style scoped>
  .row_margin{
    margin-top: 20px;
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
  .real_time{
    margin: 0;
  }
  .to_one_dy{
    cursor: pointer;
  }
</style>
