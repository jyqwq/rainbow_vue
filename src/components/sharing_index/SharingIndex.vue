<template>
<div class="row" style="margin-top: 100px">
  <sharingnav></sharingnav>
  <router-view></router-view>
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

</style>
