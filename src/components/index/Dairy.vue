<template>
  <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 hot_thing">
    <div class="to_one_two">
      <img :src="GLOBAL.IMG+info['imgs'][0]['url']" class="img-responsive img-rounded hot_img" alt="Responsive image" :data-other="info['userInfo']['user']" :data-type="'dairy'" :data-id="info['id']" @mouseover="mouseover" @mouseout="mouseout" @click="toone">
    </div>
    <div class="row hot_thing_title"><span><strong>{{info['title']}}</strong></span></div>
  </div>
</template>

<script>
    export default {
      props:['info'],
        name: "Diary",
      data:function () {
        return{
        }
      },
      mounted:function (){

      },
      methods:{
        mouseover:function (e) {
          let t = e.target.parentElement.nextElementSibling;
          t.style.marginTop = '-40px';
          t.classList.add('hot_thing_title_act');
        },
        mouseout:function (e) {
          let t = e.target.parentElement.nextElementSibling;
          t.style.marginTop = '0';
          t.classList.remove('hot_thing_title_act');
        },
        toone:function (e) {
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
