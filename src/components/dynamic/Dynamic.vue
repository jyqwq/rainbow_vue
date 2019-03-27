<template>
  <div class="con">
    <div class="container">
      <div class="col-lg-3" style="margin-top: 90px">
        <user-info></user-info>
      </div>
      <div class="col-lg-6" style="margin-top: 90px">
        <to-write></to-write>
        <dynamic-nav></dynamic-nav>
        <simple-dynamic></simple-dynamic>
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
