<template>
  <div class="qz_cen" style="zoom:1;overflow: hidden;">
    <img @mouseover="flag=1" :class="flag?['qz_cimg','cimg_active']:''" class="img-responsive qz_cimg" src="../../assets/my_center/background_dynamic.jpg" alt="Responsive image">
    <div :class="flag?['qz_coimg']:''" @mouseout="flag=0" class="to_one">
      <span class="font_main"><br><br>彩虹日记</span>
    </div>
  </div>
</template>

<script>
    export default {
      name: "DynamicSingle",
      data: function () {
        return {
          flag:0
        }
      },
      methods: {

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
