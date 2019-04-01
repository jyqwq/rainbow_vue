<template>
  <div class="row r-3">
    <nav class="navbar navbar-default r-3-nav">
      <ul class="nav navbar-nav  dao_ul " id="sot-ul">
        <li role="presentation" v-for="sort in sorts" @click="sortGood(sort)"><a href="#">{{sort}}</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "SortGoods",
        data:function () {
          return{
            sorts:['综合排序','最多点赞','最新发布','最多收藏']
          }
        },
        props:['goodinfo'],
        methods:{
          sortGood:function (sort) {
            let goods=this.goodinfo
            if (sort=='综合排序') {
              goods.sort(this.sort1)
            }else if (sort=='最多点赞') {
              goods.sort(this.sort2)
            }else if (sort=='最新发布') {
              goods.sort(this.sort4)
            }else{
              goods.sort(this.sort3)
            }
            console.log(goods);
            this.$emit('getsort',goods)
          },
          sort1:function (b,a) {
            return (a.fbs+a.cols+a.click)-(b.fbs+b.cols+b.click)
          },
          sort2:function (b,a) {
            return a.price-b.price
          },
          sort3:function (b,a) {
            return a.cols-b.cols
          },
          sort4:function (b,a) {
            return a.date-b.date
          },
        }
    }
</script>

<style scoped>
  .r-3{
    margin-top: 10px;
  }
  .r-2-tb{
    background-color: white;
  }

  .r-3-nav{
    background-color:white;
    /*background: #f2f2f2;*/
  }
</style>
