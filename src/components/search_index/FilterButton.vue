<template>
    <div class="row fbtn " id="fbtn">
    <div class="col-md-2 col-md-offset-1">
      <button type="button" :key="0" class="btn btn-default col-sm-12 col-xs-12" :class="activeClass == 0 ? 'active':''" @click="filter(0)">综合</button>
    </div>
    <div class="col-md-2 ">
      <button type="button" :key="1" class="btn btn-default col-sm-12 col-xs-12" :class="activeClass == 1 ? 'active':''" @click="filter(1)">面膜</button>
    </div>
    <div class="col-md-2  ">
      <button type="button" :key="2" class="btn btn-default col-sm-12 col-xs-12" :class="activeClass == 2 ? 'active':''" @click="filter(2)">口红</button>
    </div>
    <div class="col-md-2  ">
      <button type="button" :key="3" class="btn btn-default col-sm-12 col-xs-12" :class="activeClass == 3 ? 'active':''" @click="filter(3)">彩妆</button>
    </div>
    <div class="col-md-2  ">
      <button type="button" :key="4" class="btn btn-default col-sm-12 col-xs-12" :class="activeClass == 4 ? 'active':''" @click="filter(4)">护手霜</button>
    </div>
  </div>
</template>

<script>
    import Bus from '../../bus.js'
    export default {
        name: "FilterButton",
        data:function () {
          return{
            activeClass:-1
          }
        },
        methods:{
          filter(index) {
            this.activeClass = index;
            Bus.$emit('btn', this.activeClass)
          }
        }
    }
</script>

<style scoped>

  #fbtn button:focus{
    outline: 0;
  }
  .fbtn button{
    background: rgba(255, 20, 147, 0.1);
  }
  .active{
    border: 1px;
  }














</style>
