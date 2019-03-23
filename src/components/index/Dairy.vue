<template>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot_thing">
    <div class="to_one_two">
      <img src="../../assets/rank_img.jpg" class="img-responsive img-rounded hot_img" alt="Responsive image">
    </div>
    <div class="dy_type" style="display: none">journal</div>
    <div class="dy_id" style="display: none">1</div>
    <div class="row hot_thing_title"><span><strong>未闻花名</strong></span></div>
  </div>
</template>

<script>
    export default {
        name: "Diary",
      data:function () {
        return{

        }
      },
      mounted:function (){
        this.hot_dy()
      },
      methods:{
        hot_dy:function () {
          let hot_thing = document.querySelectorAll('.hot_thing');
          for (let i = 0; i < 4; i++) {
            hot_thing[i].onmouseover = function () {
              this.children[3].style.marginTop = '-40px';
              this.children[3].classList.add('hot_thing_title_act');
            };
            hot_thing[i].onmouseout = function () {
              this.children[3].style.marginTop = '0';
              this.children[3].classList.remove('hot_thing_title_act');
            }
      }
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
  .hot_thing{
    height: 141px;
    overflow: hidden;
    margin: 10px 0;
    text-align: center;
  }
  .hot_thing_title{
    line-height: 40px;
  }
  .hot_thing_title_act{
    animation: lightSpeedIn 1s;
  }
  .hot_thing:hover{
    animation: pulse 1s;
    outline: solid 5px rgba(255, 192, 203, 0.24);
  }
  .hot_thing img:hover{
    animation: myfirst 1s;
    opacity: 0.5;
  }

</style>
