<template>
<div class="row">
  <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3 hot_thing" v-for="(info,index) in dd" :key="index">
    <div class="to_one_two">
      <img :src="GLOBAL.IMG+imgs[index]+'?imageView2/1/w/262/h/154/q/75|imageslim'" class="img-responsive img-rounded hot_img" style="cursor: pointer" alt="Responsive image" :data-other="info['userInfo']['user']" :data-type="'test'" :data-id="info['id']" @mouseover="mouseover" @mouseout="mouseout" @click="toone">
    </div>
    <div class="row hot_thing_title"><span><strong>{{info['title']}}</strong></span></div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "Evaluation",
      data:function () {
        return{
          dd:null,
          imgs:null
        }
      },
      mounted:function (){
          this.getdata();
      },
      methods:{
        getdata:function () {
            let that = this;
          axios.get(this.GLOBAL.HOST+'search/hotTest?page=1').then(function (res) {
            let c = [];
            let d = [];
            if (res.data.length<=8) {
              for (let i=0;i<res.data.length;i++) {
                d.push(res.data[i]);
                if (res.data[i]['imgs'].length !== 0) {
                  c.push(res.data[i]['imgs'][0]['url'])
                } else {
                  c.push('timg.jpg')
                }
              }
            }else {
              for (let i=0;i<8;i++) {
                d.push(res.data[i]);
                if (res.data[i]['imgs'].length !== 0) {
                  c.push(res.data[i]['imgs'][0]['url'])
                } else {
                  c.push('timg.jpg')
                }
              }
            }
            that.imgs=c;
            that.dd=d;
          }).catch(function (err) {
            console.log(err);
          })
        },

        mouseover:function (e) {
          let t = e.target.parentElement.nextElementSibling;
          t.style.marginTop = '-90px';
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
          this.$router.push({path:'/dynamic_detail/'+other+'/test/'+id})
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
    margin: 20px 0;
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
