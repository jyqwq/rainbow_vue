<template>
  <div  style="margin-top: 65px;min-height: 2000px">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-7 col-lg-7 animal_sil qz_infor">
        aaaa
        <person-information></person-information>
      </div>
      <!--右边浏览历史-->
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <!--<browse-history></browse-history>-->
      </div>
    </div>


  </div>

</template>

<script>
  import PersonInformation from '../my_center/PersonInformation'
    export default {
      components:{
        'person-information':PersonInformation
      },
      name: "OtherCenter"
    }
</script>

<style scoped>
  /*全局*/
  .qz_row{
    margin: 15px;
  }
  /*字体*/
  .font_main{
    font-size: 0.9em;
    margin: auto;
    color: whitesmoke;
  }
  /*箭头指向第二页*/
  .qz_lead{
    height: 70px;
  }
  .qz_leaimg{
    width: 80px;
    margin: auto;
  }
  .lea_img{
    margin: auto;
    height: 70px;
  }
  /*大导航栏开始*/
  /*字体*/
  .qz_nav{
    text-align: center;
  }
  .font_nav{
    font-family: 幼圆;
    font-size: 1.5em;

    height: 30px;
    line-height: 30px;
  }
  .qz_ndis{
    text-align: center;
  }
  .font_inf{
    font-family: 幼圆;
    height: 20px;
    line-height: 20px;
  }
  /*日记本*/
  .qz_nimg{
    margin: auto;
    width: 70px;
    height: 70px;
  }
  .img_diary{
    height: 100%;
    margin: auto;
  }
  /*动画*/
  /*摇晃颤抖*/
  .anima_jel:hover{
    animation: jello 1s;
  }
  /*大导航栏结束*/
  /*单个动态开始*/
  .qz_cen{
    margin: 10px;
    overflow: hidden;
    border-radius: 15px;
    height: 186px;
  }
  .qz_cen img{
    height: 186px;
    width: 100%;
  }
  .qz_cimg{
    margin: auto;
    transition: all 1s ease-in-out;
    border-radius: 15px;
    height: 186px;
  }
  .cimg_active{
    margin: auto;
    transition: all 1s ease-in-out;
    transform: scale(1.5,1.5);
  }
  .qz_coimg{
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    text-align: center;
    font-size: 1.5em;
    height: 186px;
    top: -186px;
  }
  .disblock{
    display: block;
  }
  .to_one{
    cursor: pointer;
  }
  /*单个动态结束*/
  /*结尾更多按钮—开始*/
  .button_qz{
    position: relative;
    padding-right: 2em;
    border-radius: .6em;
    padding: .2em 1em .3em;
    line-height: 1.618;
    display: inline-block;
    text-align: center;
    text-align-last: center;
    vertical-align: middle;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    transition: all .2s ease-out;
    text-decoration: none;

    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .button_primary {
    background: rgba(220, 20, 60, 0.71);
    color: #fff;
    border: solid 2px rgba(220, 20, 60, 0.71);
  }
  .button_primary:hover{
    background: whitesmoke;
    text-decoration: none;
    color: rgba(220, 20, 60, 0.71);
  }
  /*结尾更多按钮—结束*/
</style>
