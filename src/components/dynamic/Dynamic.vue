<template>
  <div class="con">
    <div class="container">
      <div class="col-lg-3" style="margin-top: 90px">
        <user-info></user-info>
      </div>
      <div class="col-lg-6" style="margin-top: 90px">
        <to-write></to-write>
        <dynamic-nav v-bind:flag="flag" v-on:upflag="getNewFlag"></dynamic-nav>
        <simple-dynamic v-bind:flag="flag"></simple-dynamic>
      </div>
      <div class="col-lg-3" style="margin-top: 90px">
        <bulletin-board></bulletin-board>
        <hot-tags></hot-tags>
      </div>
    </div>
  </div>

</template>

<script>
  import UserInfo from './UserInfo'
  import ToWrite from './ToWrite'
  import DynamicNav from './DynamicNav'
  import SimpleDynamic from './SimpleDynamic'
  import BulletinBoard from './BulletinBoard'
  import HotTags from './HotTags'
    export default {
        name: "Dynamic",
      components:{
          'user-info':UserInfo,
        'to-write':ToWrite,
        'dynamic-nav':DynamicNav,
        'simple-dynamic':SimpleDynamic,
        'bulletin-board':BulletinBoard,
        'hot-tags':HotTags
      },
      data:function () {
        return{
          flag:1
        }
      },
      watch:{
          flag:function () {

          }
      },
      methods:{
        getNewFlag: function(newFlag){
          this.flag = newFlag;
        }
      }
    }
</script>

<style scoped>
  .con{
    width: 100%;
    height: 100%;
    min-height: 900px;
    background: #d2e9fb;
    background-image: url("../../assets/dy-background.png");
    background-repeat: no-repeat;
  }
</style>
