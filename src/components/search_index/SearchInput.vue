<template>
  <div class="row sch">
    <div class="col-md-12">
      {{keywords}}
      <div class="input-group icy_sch">
        <input type="text" class="form-control" placeholder="搜索你想要的内容..." v-model="keywords" >
        <span class="input-group-btn">
          <button class="btn " id="search" type="button" @click="search(keywords,router)">搜索</button>
         </span>
      </div>
    </div>
  </div>
</template>

<script>
    import Bus from '../../bus.js'
    import axios from 'axios'
    export default {
        name: "SearchInput",
        data:function () {
          return{
            keywords:'',
            condition:'10',
            list:[],
            page:1,
            goodsinfo:'',
            router:''
          }
        },
        methods:{
          search:function (li,router) {
            window.sessionStorage.setItem('skey',li)
            console.log(this.GLOBAL.HOST + router + '?key=' + li + '&page=' + this.page);
            axios.get(this.GLOBAL.HOST+router+'?key='+li+'&page='+this.page)
              .then((response) => {
                if (response.data.length>1) {
                  this.goodsinfo=response.data
                  let goods=JSON.stringify(this.goodsinfo)
                  window.sessionStorage.setItem('info',goods)
                  window.sessionStorage.setItem('counts',this.goodsinfo[this.goodsinfo.length-1].count)
                  console.log(this.goodsinfo);
                }else {
                  this.goodsinfo=[1]
                  console.log(this.goodsinfo);
                }
                this.memory()
                this.record()
                this.$router.push({ name: 'Result', params: { info: JSON.stringify(this.goodsinfo) }})
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
        },
        mounted:function () {
          var vm = this
          // 用$on事件来接收参数
          Bus.$on('btn', (data) => {
            vm.condition = data
          });
          Bus.$on('cur',(data) =>{
            vm.keywords=data
          });
          if (this.condition==0) {
            this.router='search/searchAll/'
          }else {
            this.router='search/searchVarieties/'
          }
        }
    }
</script>

<style scoped>
  .icy_sch input{
    border: 2px solid rgb(255, 20, 147);
    border-radius: 0;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0 0 0;
  }
  .icy_sch button{
    border: 1px solid rgb(255, 20, 147);
    border-radius: 0;
    background-color: rgb(255, 20, 147);
    color: white;
    width: 90px;
  }

  #search:hover{
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }
  #search:focus{
    color: white;
    outline: 0;
  }
  .sch{
    margin-top: 20px;
  }
</style>
