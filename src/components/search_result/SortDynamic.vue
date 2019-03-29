<template>
  <div class="row r-6">
    <div class="col-md-12">
      <div class="row r-6-1">
        <span :class="{check:show==index}" v-for="(sort,index) in sorts" @click="sorted(index)">{{sort}}</span>

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SortDynamic",
        data:function () {
          return{
            sorts:['最多点击','最新发布','最多收藏'],
            show:0
          }
        },
        methods:{
          sorted:function (index) {
              this.show=index
              if (index==0){

              }
          },
          sort1:function (b,a) {
            return (a.fbs+a.cots+a.click)-(b.fbs+b.cots+b.click)
          },
          sort2:function (b,a) {
            return a.commodity_date-b.commodity_date
          },
          sort3:function (b,a) {
            return a.cots-b.cots
          },

        }
    }
</script>

<style scoped>
  .r-6{
    /*display: none;*/
  }
  .r-6-1{
    padding: 13px;
  }
  .r-6-1 span{
    cursor: pointer;
    margin-right: 25px;
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    /*color: black;*/
    border-radius: 3px;
  }
  .check{
    background: #71d2c3;
    color: white;
  }
</style>
