<template>
  <div class="row hot_cosmetics min_width">
    <div class="row row_margin rank_one" v-for="(i,index) in res" :key="index">
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 rank_num"><strong class="cosmetics_num_rank">{{index+1}}</strong></div>
      <div class="col-xs-10 col-sm-8 col-md-8 col-lg-8">
        <div class="col-xs-5 col-sm-3 col-md-3 col-lg-3 rank_img">
          <img src="../../assets/rank_img.jpg" class="img-responsive img-rounded cosmetics_img_rank" alt="Responsive image"   @click="godetail(i.id)">
        </div>
        <div class="col-xs-7 col-sm-9 col-md-9 col-lg-9 rank_content">
          <div class="row first_row">
            <a class="content_name to_com_one"><h5><strong class="cosmetics_title">{{(i.name).length>10? (i.name).slice(0,10)+'...':i.name}}</strong></h5></a>
            <div class="com_id" style="display: none;">{{i.id}}</div>
          </div>
          <div class="row second_row">
            <span class="glyphicon glyphicon-eye-open s_s_rank" aria-hidden="true">&nbsp;{{i.click}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-edit s_t_rank" aria-hidden="true">&nbsp;{{i.com}}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span class="glyphicon glyphicon-thumbs-up s_f_rank" aria-hidden="true">&nbsp;{{i.fbs}}</span>
          </div>
        </div>
      </div>
      <div class="hidden-xs col-sm-2 col-md-2 col-lg-2 rank_detail">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <span style="color: darkgrey"><strong>综合得分</strong></span> <br>
          <span style="color: deepskyblue; font-size: 1.2em"><strong class="cosmetics_fraction">{{parseInt(i.click)+parseInt(i.com)*4+parseInt(i.cols)*3+parseInt(i.fbs)*2}}</strong></span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "HotSearchProduct",
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
          axios.get(this.GLOBAL.HOST+'search/hotCosmetics?page=1').then(
            function (response) {
              that.res=response.data;
            }
          ).catch(
            function (err) {
              console.log(err);
            }
          )
        },
        godetail:function (id) {
          this.$router.push({name:'Detail',params:{com_id:id}})
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
  .hot_cosmetics{
    margin: 0;
  }
  .to_com_one{
    cursor: pointer;
  }
</style>
