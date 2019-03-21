<template>
  <div>
  <div class="container-fluid con">
    <div class="row">
      <div class="col-md-12">
        <search-nav></search-nav>
      </div>
    </div>

  </div>
  <div class="container" id="con-2">
    <div class="row">
      <div class="col-md-12 " id="good-content">
        <div class="row r-1">

        </div>
        <good-detail></good-detail>
        <div class="row r-3">
          <hot-goods></hot-goods>
          <parameter></parameter>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    import SearchNav from '../search_result/SearchNav'
    import GoodDetail from './GoodDetail'
    import HotGoods from './HotGoods'
    import Parameter from './Parameter'
    export default {
        name: "Detail",
        components:{
          'search-nav':SearchNav,
          'good-detail':GoodDetail,
          'hot-goods':HotGoods,
          'parameter':Parameter,
        }
    }
</script>

<style scoped>

</style>
