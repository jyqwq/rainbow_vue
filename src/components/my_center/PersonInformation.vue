<template>
  <!--左边个人信息框-->
    <div class="qz_per" style="zoom:1;overflow: hidden;">
      <!--头像-->
      <div class="qz_cir hidden-xs col-sm-3 col-md-5 col-lg-4">
        <img src="" class="img-circle img-responsive qz_por" alt="Responsive image">
      </div>
      <div class="qz_cul col-xs-5 hidden-sm hidden-md hidden-lg">
        <img src="" class="img-circle img-responsive qz_por" alt="Responsive image">
      </div>
      <!--昵称个签-->
      <div class="qz_pernic">
        <div class="row qz_row">
          <div class="col-xs-7 col-sm-9 col-md-7 col-lg-8 qz_nick">
            <div class="qz_nic">
              <!--昵称-->
              <span class="font_nic">还没有昵称哦</span><br>
              <!--个性签名-->
              <span class="font_gra font_gra1">还没有签名哦</span><br><br>
            </div>
          </div>
        </div>
      </div>
      <!--个人信息-->
      <div class="qz_perinf">
        <div class="row qz_row">
          <div class="col-xs-8 col-sm-10 col-md-9 col-lg-8">
            <ul class="nav">
              <li class="nav_infor"><div class="nav_infor1">&nbsp;&nbsp;0</div><div>粉丝</div></li>
              <li class="nav_infor"><div class="nav_infor2">&nbsp;&nbsp;0</div><div>关注</div></li>
            </ul>
          </div>
          <div class="col-xs-4 col-sm-2 col-md-3 col-lg-4 qz_percha">
              <button-more v-bind:margin_bottom="'编辑'" v-bind:class="[edit_class,button_class]"></button-more>
          </div>
        </div>
        <div class="row qz_row">
          <div class="col-xs-8 col-sm-10 col-md-9 col-lg-12">
            <ul class="nav">
              <li class="nav_infor nav_infor3"><div>&nbsp;&nbsp;0</div><div>点赞</div></li>
              <li class="nav_infor nav_infor4"><div>&nbsp;&nbsp;0</div><div>评论</div></li>
              <li class="nav_infor nav_infor5"><div>&nbsp;&nbsp;0</div><div>日记</div></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
  import ButtonMore from './ButtonMore'
  export default {
    components:{
      'button-more':ButtonMore
    },
    name: "PersonInformation",
    data: function () {
      return {
        edit_class:'button_edit',
        button_class:'button_qz'
      }
    },
    created:function(){},
    methods: {},
    mounted: function () {

    },
    computed: {},
    watch: {},
    filter: {}
  }
</script>

<style scoped>
  /*字体*/
  /*昵称*/
  .font_nic{
    /*font-family: 幼圆;*/
    font-size: 1.5em;
    font-weight: bolder;
    margin-left: 10px;
  }
  /*个性签名*/
  .font_gra{
    /*font-family: 幼圆;*/
    font-size: 1.2em;
  }

  /*左边个人信息框*/
  .qz_infor{
    margin-top: -20px;
  }
  .qz_per{
    height: 280px;
    margin-top: 100px;
    border-radius: 20px;
    background: #FFE3E5;
    background-image: url("../../assets/my_center/background_person.jpg");
    background-size: cover;
  }
  /*头像*/
  .qz_cir{
    float: right;
    position: relative;
    left: 75px;
    top: -75px;
  }
  .qz_por{
    width: 100%;
  }
  .qz_cul{
    float: right;
    position: relative;
    top: -65px;
  }
  /*昵称个签*/
  .qz_nic{
    margin: 25px 30px;
    height: 60px;
  }
  /*个性签名*/
  .font_gra1{
    margin-left: 20px;
  }
  /*个人信息*/
  .qz_perinf{
    margin-top: -25px;
  }
  .nav_infor{
    float: left;
    margin-left: 30px;
  }


</style>
