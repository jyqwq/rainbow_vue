<template>
  <div class="row row-margin" >
    <div class="col-lg-6">
      <div class="row hidden-xs style_title">
        <strong>&nbsp;&nbsp;&nbsp;HOT DYNAMIC</strong> <br>
      </div>
      <div class="row hidden-xs">
        <span class="style_title1">HOT AND INTERESTING</span>
      </div>
      <div class="row hidden-xs">
        <span class="style_title2">热门日记&nbsp;<span class="glyphicon glyphicon-play" aria-hidden="true"></span></span>
      </div>
      <div class="row visible-xs sm_commend">热门日记</div>
      <div class="row insecond">
        <!--热门动态ajax请求区-->
        <dairy v-if="dairy_data" v-for="(i,index) in dairy_data" :key="index" :info="i"></dairy>
      </div>
    </div>
    <div class="col-lg-6 most_hot">
      <div class="row most_content" v-if="dairy_hot">
        <span class="most_">&nbsp;&nbsp;最热日记&nbsp;&nbsp;</span><span class="most_ glyphicon glyphicon-fire" aria-hidden="true"></span>
        <br>
        <span class="most_title"><strong>&nbsp;&nbsp;{{dairy_hot['title']}}</strong></span>
        <br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to=""><span class="most_author">{{dairy_hot['userInfo']['name']}}</span></router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="glyphicon glyphicon-eye-open" aria-hidden="true">&nbsp;{{dairy_hot['click']}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="glyphicon glyphicon-edit" aria-hidden="true">&nbsp;{{dairy_hot['com']}}</span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true">&nbsp;{{dairy_hot['fbs']}}</span>
      </div>
      <div class="row hot_thing row_most_margin">
        <div class="to_one_two">
          <img :src="GLOBAL.IMG+hotimg" class="img-responsive img-rounded" alt="Responsive image" :data-other="dairy_hot['userInfo']['user']" :data-type="'dairy'" :data-id="dairy_hot['id']" @click="tohot">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Dairy from './Dairy'
    export default {
        name: "HotDiary",
      components:{
        "dairy":Dairy
      },
      data:function () {
        return{
          dairy_data:false,
          dairy_hot:false,
          hotimg:null,
        }
      },
      mounted:function (){
        this.getdata()
      },
      methods:{
          getdata:function () {
            let that = this;
            axios.get(this.GLOBAL.HOST+'search/hotDairy?page=1').then(function (res) {
              that.dairy_hot=res.data[0];
              console.log(that.dairy_hot);
              that.hotimg=res.data[0]['imgs'][0]['url'];
              res.data.splice(0,1);
              that.dairy_data=res.data;
            }).catch(function (err) {
              console.log(err);
            })
          },
        tohot:function (e) {
          let id = e.target.dataset.id;
          let other = e.target.dataset.other;
          this.$router.push({path:'/dynamic_detail/'+other+'/dairy/'+id})
        }
      }
    }
</script>

<style scoped>
  @keyframes myfirst
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }

  @-moz-keyframes myfirst /* Firefox */
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }

  @-webkit-keyframes myfirst /* Safari 和 Chrome */
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }

  @-o-keyframes myfirst /* Opera */
  {
    0%   {opacity: 1;}
    25%  {opacity: 0.8;}
    50%  {opacity: 0.6;}
    100% {opacity: 0.5;}
  }
  .row-margin{
    margin-top: 30px;
    margin-right: -15px;
    margin-left: -15px;

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
    font-size: 2em;
    color: hotpink;
  }
  .recommend_one a{
    color: #464646;
  }
  .recommend_one a:hover{
    text-decoration: none;
  }
  .hot_thing img:hover{
    animation: myfirst 1s;
    opacity: 0.5;
  }
  .sm_commend{
    text-align: center;
    color: #FFB5B5;
    font-size: 1.2em
  }
  .to_one_two{
    cursor: pointer;
  }
  .most_content{
    height: 111px;
    border-left: deeppink solid 5px;
    background: rgba(255,192,203,0.24);
  }
  .most_{
    line-height: 40px;
    font-size: 1.8em;
    color: #ff9341;
  }
  .most_title{
    font-size: 1.5em;
    font-family: 幼圆;
    line-height: 40px;
  }
  .most_author{
    font-family: 幼圆;
  }
  .row_most_margin{
    margin-top: 10px;
    padding-left: 20px;
    height: 100%;
  }
</style>
