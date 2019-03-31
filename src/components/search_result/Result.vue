<template>
  <div class="container-fluid con" >
    <div class="row">
      <div class="col-md-12">
        <search-nav @search="search" :router="routers" :kinds="kind"  @message="getmessage"></search-nav>
      </div>
      <div class="col-md-10 col-md-offset-1">
        <div class="row main_content">
          <div class="col-md-12">
            <classes @getkind="getKind" @search="search" :router="routers" :keyword="keywords" ></classes>
            <selection @search="search" :router="routers" v-if="kind=='产品'" :keyword="keywords" :goodinfo="goodsinfo" @getset="getinfo"></selection>
            <sort-goods :goodinfo="goodsinfo" v-if="kind=='产品'" @getsort="sortinfo"></sort-goods>
            <goods :goodinfo="goodsinfo" v-if="kind =='产品' && goodsinfo.length>1"></goods>
            <sort-dynamic v-if="kind!='产品'"></sort-dynamic>
            <dynamic  v-if="kind!='产品'" :goodinfo="goodsinfo"></dynamic>
            <no-data v-if="goodsinfo.length<=1"></no-data>
            <paging @setpage="getpage"></paging>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Classes from './Classes'
    import Dynamic from './Dynamic'
    import Goods from './Goods'
    import Paging from './Paging'
    import SearchNav from './SearchNav'
    import Selection from './Selection'
    import SortDynamic from './SortDynamic'
    import SortGoods from './SortGoods'
    import NoData from './NoData'
    import axios from 'axios';
    import index from "../../router";
    import Bus from '../../bus'

    export default {
        name: "Result",
        data:function () {
          return{
            keywords:'',
            kind:'产品',
            list:[],
            goodsinfo:{},
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
          'classes':Classes,
          'dynamic':Dynamic,
          'goods':Goods,
          'paging':Paging,
          'search-nav':SearchNav,
          'selection':Selection,
          'sort-dynamic':SortDynamic,
          'sort-goods':SortGoods,
          'no-data':NoData
        },
        methods:{
          search:function (li,router) {
            // this.keywords=li;
            console.log(this.GLOBAL.HOST + router + '?key=' + li + '&page=' + this.page);
            axios.get(this.GLOBAL.HOST+router+'?key='+li+'&page='+this.page)
              .then((response) => {
                if (response.data.length>1) {
                  this.goodsinfo=response.data
                  let goods=JSON.stringify(this.goodsinfo)
                  window.sessionStorage.setItem('counts',this.goodsinfo[this.goodsinfo.length-1].count)
                  console.log(this.goodsinfo);
                }else {
                  this.goodsinfo=[1]
                  console.log(this.goodsinfo);
                }
                this.memory()
                this.record()
              }).catch(function (error) {
              console.log(error);
            })
          },
          memory:function () {
            if (localStorage.getItem('history')) {
              this.list=JSON.parse(window.localStorage.getItem('history'))
            }
            if (this.list.length>=10) {
              this.list.splice(0,1)
              this.list.push(this.keywords)
            }else {
              this.list.push(this.keywords)
            }
            window.localStorage.setItem('history',JSON.stringify(this.list))
          },
          record:function () {
            let date=(new Date()).getTime()
            let user_id=sessionStorage.getItem('userInfo')?JSON.parse(sessionStorage.getItem('userInfo'))['user']:null
            axios.post(this.GLOBAL.HOST+'search/hotKey/',{
              "method":"add","content":this.keywords,"date":date,"user_id":user_id})
              .then((res)=> {
                console.log(res);
              }).catch((err)=>{
              console.log(err);
            })

          },
          getKind:function (msg) {
            this.kind=msg
          },
          getmessage:function (msg) {
            this.keywords=msg
          },
          getinfo:function (msg) {
            this.goodsinfo=msg
            console.log(this.goodsinfo);
          },
          sortinfo:function (msg) {
            this.goodsinfo=msg
          },
          getpage:function (msg) {
            this.page=msg
          }
        },
        mounted:function () {
          if (window.sessionStorage.getItem('info')) {
            this.goodsinfo = JSON.parse(window.sessionStorage.getItem('info'))
          }
          if (this.$route.params.info) {
            this.goodsinfo = JSON.parse(this.$route.params.info)
          }


        }
    }
</script>

<style scoped>
  .con{
    background-image: url("../../assets/dy-background.png");
  }
</style>
