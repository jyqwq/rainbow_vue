<template>
    <search_main v-on:rooms_axios="rooms_axios"></search_main>
      <rooms :room_list="rooms"></rooms>
</template>
<script>
  export default {
    components:{
      'search_main':search_main,
      'rooms':rooms,
      'pages':pages,
    },
    data:function () {
      return{
        city:'苏州',
        start_time:'111',
        end_time:'111',
        startPrice:'',
        endPrice:'',
        page:1,
        rooms:[]
      }
    },
    methods:{
      rooms_axios:function (rooms) {
        this.rooms=rooms
      }
    }
  }
</script>
