<template>
<div class="row" style="margin-top: 100px">

  <sharingnav></sharingnav>
  <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10 content_sharing">
    <router-view></router-view>
  </div>

</div>
</template>

<script>
  import SharingNav from './SharingNav'
  export default {
        name: "SharingIndex",
      components:{
        sharingnav:SharingNav,
      },
      created:function(){
        this.$emit('flash');
      },
    }
</script>

<style scoped>
  .content_sharing {
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    min-height: 700px;
  }
  .content_succss{
    border: solid 1px #d9d9d9;
    border-radius: 5px;
    height: 500px;
  }
</style>
