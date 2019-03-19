<template>
  <div style="zoom:1;overflow: hidden;">
    <!--箭头指向第二页-->
    <div class="row qz_row">
      <div class="qz_lead ">
        <div class="qz_leaimg animal_rin">
          <a class="anchor_link">
            <img src="../../assets/my_center/open_mine.png" class="img-responsive lea_img " alt="Responsive image">
          </a>
        </div>
      </div>
    </div>

    <!--第二页-->
    <div class="row qz_row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 qz_open">
        <span class="font_open">开 启 我 的 梳 妆 盒</span>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
      name: "OpenMine",
      data: function () {
        return {

        }
      },
      created:function(){},
      methods: {},
      mounted: function () {
        //滚动条匀速滑动
        let anc_lin=document.querySelector('.anchor_link');
        anc_lin.onclick = function () {
          startMover(666);
        }
        var timer = null;
        function startMover(itarget) {//目标值
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
        }
      },
      computed: {},
      watch: {},
      filter: {},
    }
</script>

<style scoped>
  /*全局*/
  .qz_row{
    margin: 15px;
  }
  /*字体*/
  /*第二页*/
  .qz_open{
    text-align: center;
  }
  .font_open{
    font-size: 2em;

    height: 60px;
    line-height: 60px;
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
</style>
