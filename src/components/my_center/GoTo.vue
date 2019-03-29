<template>
  <div id="mine" class="row qz_row" style="zoom:1;overflow: hidden;">
    <div class="qz_lead ">
      <div class="qz_leaimg animal_rin">
        <div @click="anchor_slip">
          <img src="../../assets/my_center/open_mine.png" class="img-responsive lea_img " alt="Responsive image">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "GoTo",
      methods:{
        //滚动条匀速滑动
        anchor_slip:function () {
          this.$options.methods.startMover(500)
        },
        startMover: function (itarget) {//目标值
          var timer = null;
          clearInterval(timer);//执行当前动画同时清除之前的动画
          timer = setInterval(function () {
            let scroll_distance = document.documentElement.scrollTop||document.body.scrollTop;
            var speed = 0;
            if (scroll_distance > itarget) {
              speed = -5;
            }
            else {
              speed = 5;
            }
            if (scroll_distance == itarget) {
              clearInterval(timer);
            }
            else {
              var a= parseInt(scroll_distance + speed);
              if ((itarget-scroll_distance)<5) {
                a= parseInt(itarget);
              }
              window.scrollTo(0,a);
            }
          }, 1);
        },
      }
    }
</script>

<style scoped>
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
</style>
