<template>
  <div class="qz_cen" style="zoom:1;overflow: hidden;">
    <img src="../../assets/my_center/background_dynamic.jpg" class="img-responsive qz_cimg" alt="Responsive image">
    <div class="qz_coimg to_one">
      <span class="font_main"><br><br>彩虹日记</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "SingleDynamic",
      data: function () {
        return {

        }
      },
      created:function(){},
      methods: {},
      mounted: function () {

        // 图片动画
        qz_img();
        function qz_img(event) {
          let node=event && event.target;
          let qz_data=document.querySelector('.qz_data');
          // 鼠标滑入图片放大
          qz_data.onmouseover=function (event) {
            let node=event.target;
            if(node.nodeName.toLowerCase()=== 'img'){
              node.nextElementSibling.style.display='block';
              node.classList.toggle('qz_cimg');
              node.classList.toggle('cimg_active');
            }
          };
          // 鼠标滑出图片缩小
          qz_data.onmouseout=function (event) {
            let node=event.target;
            if(node.nodeName.toLowerCase()=== 'img'){
              node.classList.toggle('qz_cimg');
              node.classList.toggle('cimg_active');
            }
          };

          let qz_coimg=document.querySelectorAll('.qz_coimg');
          for(let coimg of qz_coimg){
            // 鼠标滑入蒙板
            coimg.onmouseover=function(event){
              let node=event&&event.target;
              if (node.nodeName!=='SPAN'){
                node.previousElementSibling.classList.toggle('qz_cimg');
                node.previousElementSibling.classList.toggle('cimg_active');
              }
            };
            // 鼠标滑出蒙板
            coimg.onmouseout=function (event) {
              let node=event&&event.target;
              coimg.style.display='none';
              if (node.nodeName!=='SPAN') {
                node.previousElementSibling.classList.toggle('qz_cimg');
                node.previousElementSibling.classList.toggle('cimg_active');
              }
            }
          }
        }

      },
      computed: {},
      watch: {},
      filter: {},
    }
</script>

<style scoped>
  /*字体*/
  .font_main{
    font-size: 0.9em;
    margin: auto;
    color: whitesmoke;
  }
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
    display: none;
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    text-align: center;
    font-size: 1.5em;
    height: 186px;
    top: -186px;
  }
  .to_one{
    cursor: pointer;
  }
</style>
