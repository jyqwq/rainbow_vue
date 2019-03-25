<template>
  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 choose_sharing">
    <ul class="nav nav-tabs nav-stacked shu_nav row_margin margin_end">
      <li role="presentation" :class="flag===1? 'shu_active':''" @click="flag=1"><router-link to="/sharing_index"><img src="../../assets/mood.png" alt="">&nbsp;&nbsp;心情</router-link></li>
      <li role="presentation" :class="flag===2? 'shu_active':''" @click="flag=2"><router-link to="/sharing_index/dairytext"><img src="../../assets/diary.png" alt="">&nbsp;&nbsp;日记</router-link></li>
      <li role="presentation" :class="flag===3? 'shu_active':''" @click="flag=3"><router-link to="/sharing_index/evaluationtext"><img src="../../assets/evaluation.png" alt="">&nbsp;&nbsp;测评</router-link></li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "SharingNav",
      data:function () {
        return{
          flag:1
        }
      }
    }
</script>

<style scoped>
  .choose_sharing {
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    height: 100%;
  }

  .shu_nav{
    border-bottom: none;
    border-right: solid 2px #f7c5c9;
    /*padding-right: -1px;*/
    box-sizing: border-box;
  }
  .shu_nav li{
    border: 2px solid rgba(255, 255, 255, 0.0);
  }
  .shu_active{
    margin-right: -2px !important;
    border: solid 2px #f7c5c9 !important;
    border-right: solid 2px white !important;
    border-top-left-radius: 5px !important;
    border-bottom-left-radius: 5px !important;
  }
  .shu_active:hover{
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  .shu_nav li a{
    text-align: center;
    line-height: 40px;
  }
  .shu_active a{
    font-size: 1.2em;
    background: #f7c5c9 !important;
    border-radius: 3px !important;
  }
  .shu_nav li a:hover{
    background: pink;
    border-radius: 3px;
  }

</style>
