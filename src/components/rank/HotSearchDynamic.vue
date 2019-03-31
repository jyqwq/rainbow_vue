<template>
  <div class="row hot_dairy">
    <div class="row row_margin rank_one" v-for="(i,index) in res" :key="index">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 rank_num"><strong class="num_rank">{{index+1}}</strong></div>
      <div class="col-xs-10 col-sm-8 col-md-8 col-lg-8">
        <div class="col-xs-5 col-sm-3 col-md-3 col-lg-3 rank_img">
          <img :src="GLOBAL.IMG+(i.imgs.length>0? i.imgs[0]['url']:'rank_img.jpg')" class="img-responsive img-rounded img_rank" alt="Responsive image" :data-type="i.type" :data-id="i.id" :data-other="i.userInfo.user" @click="toone">
        </div>
        <div class="col-xs-7 col-sm-9 col-md-9 col-lg-9 rank_content">
          <div class="row first_row">
            <a class="content_name to_two_dy"><h5><strong class="title_rank" :data-type="i.type" :data-id="i.id" :data-other="i.userInfo.user" @click="toone">{{(i.title).length>10? (i.title).slice(0,10)+'...':i.title}}</strong></h5></a>
            <div class="dy_type" style="display: none">{{i.type}}</div>
            <div class="dy_id" style="display: none">{{i.id}}</div>
          </div>
          <div class="row second_row">
            <span class="glyphicon glyphicon-eye-open s_rank" aria-hidden="true">&nbsp;{{i.click}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-edit t_rank" aria-hidden="true">&nbsp;{{i.com}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-thumbs-up f_rank" aria-hidden="true">&nbsp;{{i.fbs}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-user" aria-hidden="true">&nbsp;<a class="u_rank to_two_person" style="cursor: pointer" @click="toother" :data-id="i.user_id">{{i.userInfo.name}}</a></span>
          </div>
        </div>
      </div>
      <div class="hidden-xs col-sm-2 col-md-2 col-lg-2 rank_detail">
        <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <span style="color: darkgrey"><strong>综合得分</strong></span> <br>
          <span style="color: deepskyblue; font-size: 1.2em"><strong class="fraction">{{parseInt(i.click)+parseInt(i.com)*4+parseInt(i.cols)*3+parseInt(i.fbs)*2}}</strong></span>
        </div>
        <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <span style="color: darkgrey"><strong>上周排行</strong></span> <br>
          <span style="color: deepskyblue; font-size: 1.2em"><strong>未上榜</strong></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "HotSearchDynamic",
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
          axios.get(this.GLOBAL.HOST+'search/hotDairy?page=1').then(
            function (response) {
              that.res=response.data;
            }
          ).catch(
            function (err) {
              console.log(err);
            }
          )
        },
        toone:function (e) {
          let id = e.target.dataset.id;
          let type = e.target.dataset.type;
          let other = e.target.dataset.other;
          this.$router.push({path:'/dynamic_detail/'+other+'/'+type+'/'+id})
        },
        toother:function (e) {
          let eve = e.target;
          this.$router.push({path:'/other_center/'+eve.dataset.id})
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
  .hot_dairy{
    margin: 0;
  }
  .to_two_dy{
    cursor: pointer;
  }

</style>
