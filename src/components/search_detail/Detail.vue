<template>
  <div>
  <div class="container-fluid con">
    <div class="row">
      <div class="col-md-12">
        <search-nav :router="routers"></search-nav>
      </div>
    </div>
  </div>
  <div class="container" id="con-2">
    <div class="row">
      <div class="col-md-12 " id="good-content">
        <div class="row r-1">

        </div>
        <good-detail :gooddetail="goodsinfo" v-if="goodsinfo"></good-detail>
        <div class="row r-3">
          <hot-goods @transferProduct="productinfo"></hot-goods>
          <parameter :gooddetail="goodsinfo" v-if="goodsinfo"></parameter>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
    import SearchNav2 from './SearchNav2'
    import GoodDetail from './GoodDetail'
    import HotGoods from './HotGoods'
    import Parameter from './Parameter'
    import axios from 'axios'
    export default {
        name: "Detail",
        data:function () {
          return{
            keywords:'',
            kind:'产品',
            list:[],
            goodsinfo:false,
            page:1,
            routers:{
              searchAll:'search/searchAll/',
              searchProduct:'search/searchProduct/',
              searchBrand:'search/searchBrand/',
              searchComponent:'search/searchComponent/',
              searchEffect:'search/searchEffect/',
              searchVarieties:'search/searchVarieties/',
              searchDynamic:'search/searchDynamic/',
              searchJournal:'search/searchJournal/',
              searchTest:'search/searchTest/',
              hotSearch:'search/hotSearch/',
              hotTest:'search/hotTest/',
              hotCosmetics:'search/hotCosmetics/',
              hotKey:'search/hotKey/',
              oneProduct:'search/oneProduct/',
            }
          }
        },
        components:{
          'search-nav':SearchNav2,
          'good-detail':GoodDetail,
          'hot-goods':HotGoods,
          'parameter':Parameter,
        },
        mounted:function () {
          if (this.$route.params.com_id){
            axios.get(this.GLOBAL.HOST+'search/oneProduct/'+'?id='+this.$route.params.com_id)
              .then((res) =>{
                if (res){
                  this.goodsinfo=res.data
                  this.goodsinfo=JSON.stringify(this.goodsinfo)
                }
                // console.log(this.goodsinfo+'detail>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
              }).catch((err)=>{
              console.log(err);
            })
          }
        },
        methods:{
          productinfo:function (msg) {
            this.goodsinfo=msg
            console.log(this.goodsinfo+'productinfo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
          }
        }
    }
</script>

<style scoped>
  body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0}
  body{
    background-color:#f2f2f2;
  }
  *{padding:0;margin:0;}
  #con-2{
    width: 1200px;
    margin: auto;
  }
  .r-1{
    color: white;
    background: rgba(191, 20, 73, 0.75);
    font-size: 1.7em;
    margin-top: 50px;
    padding-top: 10px;
    padding-bottom: 17px;
  }
  .r-3{
    margin-top: 30px;
  }
</style>
