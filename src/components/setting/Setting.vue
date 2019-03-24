<template>

    <div class="row" style="margin-top: 80px">
      <!--左边导航-->
      <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 choose_sharing">
        <!--子传父1.'v-on'监听事件，随子组件数据改变-->
        <!--<nav-main v-on:childByTab="childByTab"></nav-main>-->
        <ul class="nav nav-tabs nav-stacked shu_nav row_margin margin_end">
          <li @click="seflag=0" :class="seflag==0?['shu_active']:''" role="presentation" class="nav_page"><div @click="tabChange('homePage')"><img src="../../assets/setting/nav_setting.png" alt="">&nbsp;&nbsp;首页</div></li>
          <li @click="seflag=1" :class="seflag==1?['shu_active']:''" role="presentation" class="nav_info"><div @click="tabChange('modifyInformation')"><img src="../../assets/setting/nav_message.png" alt="">&nbsp;&nbsp;我的信息</div></li>
          <li @click="seflag=2" :class="seflag==2?['shu_active']:''" role="presentation" class="nav_head"><div @click="tabChange('modifyHead')"><img src="../../assets/setting/nav_head.png" alt="">&nbsp;&nbsp;我的头像</div></li>
        </ul>
      </div>
      <!--右边内容-->
      <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 content_sharing">
        <!--首页部分，我的信息，我的头像-->
        <!--':is'动态改变组件-->
        <div :is="currenView" :seflag="seflag" v-on:childByflag="childByflag" v-on:tabChange="tabChange"></div>
      </div>
    </div>

</template>

<script>
  import HomePage from './HomePage'
  import ModifyInformation from './ModifyInformation'
  import ModifyHead from './ModifyHead'
    export default {
      components:{
        HomePage,
        ModifyInformation,
        ModifyHead
      },
      name: "Setting",
      data(){
        return{
          seflag:0,
          homePage:'HomePage',
          modifyInformation:'ModifyInformation',
          modifyHead:'ModifyHead',
          currenView:'HomePage'
        }
      },
      methods:{
        tabChange:function (tabItem) {
          this.currenView=tabItem
          // this.$emit('childByTab', this.currenView)//子传父（子组件里面写）
        },
        // 子传父2.'childByTab'监听方法，父组件随子数据改变
        // childByTab: function (currenView) {
        //   this.currenView = currenView
        // }
        // 子传父2.'childByTab'监听方法，父组件随子数据改变
        childByflag: function (event) {
          this.seflag = event;
        }
      },
      watch:{}
    }
</script>

<style scoped>
  /*全局*/
  .choose_sharing {
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    height: 100%;
  }
  .content_sharing {
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    min-height: 700px;
  }
  /*--------------输入部分--------------*/
  .text_active{
    animation: fadeInUp 1s;
  }
  /*左边导航开始*/
  /*全局*/
  .shu_nav{
    border-bottom: none;
    border-right: solid 2px #f7c5c9;
    /*padding-right: -1px;*/
    box-sizing: border-box;
  }
  /*首页部分*/
  .row_margin{
    margin-top: 30px;
  }
  /*--------------输入部分--------------*/
  .margin_end{
    margin-bottom: 50px;
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
  .shu_active a{
    font-size: 1.2em;
    background: #f7c5c9 !important;
    border-radius: 3px !important;
  }
  /*左边导航结束*/
</style>
