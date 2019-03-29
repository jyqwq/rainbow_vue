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
              goods.sort(this.sort3)
            }else{
              goods.sort(this.sort4)
            }
            goods=JSON.stringify(goods)
            window.sessionStorage.setItem('goods',goods)
          },
          sort1:function (b,a) {
            return (a.fbs+a.cots+a.click)-(b.fbs+b.cots+b.click)
          },
          sort2:function (b,a) {
            return a.commodity_price-b.commodity_price
          },
          sort3:function (b,a) {
            return a.cots-b.cots
          },
          sort4:function (b,a) {
            return a.commodity_date-b.commodity_date
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
