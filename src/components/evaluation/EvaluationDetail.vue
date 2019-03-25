<template>
<div>
  <div class="row content_margin" v-for="(t,index) in res" :key="index">
    <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <a class="to_one_img"><img src="../../assets/ad.jpg" class="img-responsive img-rounded" alt="Responsive image"></a>
      <div class="dy_type" style="display: none">{{t.type}}</div>
      <div class="dy_id" style="display: none">{{t.id}}</div>
    </div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8 content_detail">
      <br>
      <div class="row style_title">
        &nbsp;&nbsp;
        <span class="glyphicon glyphicon-eye-open" aria-hidden="true">&nbsp;{{t.click}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="glyphicon glyphicon-edit" aria-hidden="true">&nbsp;{{t.com}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">&nbsp;{{t.fbs}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;<a href="#">{{t.userInfo.name}}</a></span> <br>
      </div>
      <br>
      <div class="row">
        <a class="a_style to_one_t1"><span class="style_title1">{{(t.title).length>10? (t.title).slice(0,10)+'...':t.title}}</span></a>
        <div class="dy_type" style="display: none">{{t.type}}</div>
        <div class="dy_id" style="display: none">{{t.id}}</div>
      </div>
      <br><br>
      <div class="row">
        <a class="a_style  to_one_t2"><span class="style_title2">{{(t.subtitle[0].title).length>10? (t.subtitle[0].title).slice(0,10)+'...':t.subtitle[0].title}}&nbsp;<span class="glyphicon glyphicon-play" aria-hidden="true"></span></span></a>
        <div class="dy_type" style="display: none">{{t.type}}</div>
        <div class="dy_id" style="display: none">{{t.id}}</div>
      </div>

      <div class="row">
        <a class="a_style  to_one_t3"><span class="style_title2">{{(t.subtitle[1].title).length>10? (t.subtitle[1].title).slice(0,10)+'...':t.subtitle[1].title}}&nbsp;<span class="glyphicon glyphicon-play" aria-hidden="true"></span></span></a>
        <div class="dy_type" style="display: none">{{t.type}}</div>
        <div class="dy_id" style="display: none">{{t.id}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "EvaluationDetail",
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
           axios.get(this.GLOBAL.HOST+'search/hotTest?page=1').then(function (response) {
             that.res = response.data

           }).catch(function (err) {
             console.log(err);
           })
         }
      }
    }
</script>

<style scoped>
  .content_margin{
    margin-top: 20px;
  }
  .style_title{
    border-left: lightpink solid 3px;
    font-size: 1.1em;
  }
  .style_title1{
    font-size: 2.5em;
    color: rgba(255,192,203,0.53);
  }
  .style_title2{
    font-family: 幼圆;
    font-size: 1.5em;
    color: hotpink;
  }
  .a_style:hover{
    text-decoration: none;
  }
  .to_one_img,.to_one_t1,.to_one_t2,.to_one_t3{
    cursor: pointer;
  }
</style>
