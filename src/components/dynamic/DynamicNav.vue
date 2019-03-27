<template>
  <div class="row all_dy dy_margin dy_nav">
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="newFlag===1? 'to_active':''" @click="newFlag=1;changeFlag()"><a href="#" class="dy_m_nav dy_all"><strong>所有动态</strong></a></div>
    </div>
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="newFlag===2? 'to_active':''" @click="newFlag=2;changeFlag()"><a href="#" class="dy_m_nav dy_x"><img src="../../assets/mood.png" alt="">&nbsp;<strong>心情</strong></a></div>
    </div>
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="newFlag===3? 'to_active':''" @click="newFlag=3;changeFlag()"><a href="#" class="dy_m_nav dy_r"><img src="../../assets/diary.png" alt="">&nbsp;<strong>日记</strong></a></div>
    </div>
    <div class="col-lg-3 xs_padding">
      <div role="presentation" :class="newFlag===4? 'to_active':''" @click="newFlag=4;changeFlag()"><a href="#" class="dy_m_nav dy_pingjia"><img src="../../assets/evaluation.png" alt="">&nbsp;<strong>测评</strong></a></div>
    </div>
  </div>
</template>

<script>
    export default {
      props:['flag'],
        name: "DynamicNav",
      data:function () {
        return{
          newFlag:this.flag
        }
      },
      methods:{
        changeFlag: function(){
          this.$emit('upflag',this.newFlag);
        }
      }
    }
</script>

<style scoped>
  a:link{
    text-decoration: none;
  }
  a:visited{
    text-decoration: none;
  }
  a:hover{
    text-decoration: none;
  }
  a:active{
    text-decoration: none;
  }
  .dy_nav{
    height: 50px;
    line-height: 47px;
  }
  .all_dy{
    background: #e9faff;
    border-radius: 5px;
  }
  .dy_margin{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .xs_padding{
    padding: 0 3px;
    text-align: center;
    cursor: pointer;
  }
  .to_active{
    position: relative;
    transition: 0.5s;
    cursor: pointer;
    border-bottom: solid 3px lightpink;
  }
  .dy_m_nav{
    color: lightpink;
  }
</style>
