<template>
  <div class="row top">
    <div class="col-md-3 col-md-offset-1 top-left">
      <img src="../../assets/search_img/logo3.png" class="">
      <img src="../../assets/search_img/logo4.png" alt="">
    </div>
    <div class="col-md-4 top-mid">
      <div class="row mid-1">
        <div class="input-group icy_sch">
          <input type="text" name="website" id="input-sch" list="list_web" class="form-control" v-model="keywords" @blur="message"  placeholder="搜索你想要的内容...">
          <datalist id="list_web">
            <option v-for="his in history" :value="his"></option>
          </datalist>
          <span class="input-group-btn">
           <button class="btn  search" id="sch_btn" type="button" @click="searchbasic(keywords)">搜索</button>
            </span>
        </div>
      </div>
      <div class="row mid-2">
        <nav class="navbar navbar-default mid-2-nav">
          <ul class="nav navbar-nav mid-2-ul">
            <li v-for="li in varieties" @click="searchnav(li,router.searchVarieties)">{{li}}</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="col-md-3 col-md-offset-1 top-right">
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "SearchNav",
        data:function () {
            return{
              page:1,
              keywords:'',
              history:'',
              varieties:['口红','兰蔻粉水','卸妆水','彩妆','科颜氏','润唇膏'],
              goodsinfo:{},
            }
        },
        props:['router','kinds'],
        methods:{
          searchnav:function (li,router) {
            this.$emit('search', li,router)
          },
          searchbasic:function (li) {
            var routered
            if (this.kinds=='产品') {
              routered=this.router.searchProduct
            }else if (this.kinds=='心情'){
              routered=this.router.searchDynamic
            } else if (this.kinds=='日记') {
              routered=this.router.searchJournal
            }else if (this.kinds=='测评') {
              routered=this.router.searchTest
            }
            this.$emit('search', li,routered)
          },
          message:function () {
            this.$emit('message',this.keywords)
          }
        },
        mounted:function () {
            if (window.localStorage.getItem('history')) {
            this.history=JSON.parse(window.localStorage.getItem('history')).reverse()
          }
            if (window.sessionStorage.getItem('skey')) {
              this.keywords=window.sessionStorage.getItem('skey')
              this.$emit('message',this.keywords)
            }
        }
    }
</script>

<style scoped>
  .top-right-img{
    animation: flash 1s;
  }
  .top{
    background: white;
    /*background: #f2f2f2;*/
    padding-top: 20px;
    margin-top: 60px;
  }
  .top .top-left img{
    height: 40px;
  }
  .icy_sch{
    margin-top:3px;
  }
  .icy_sch input{
    border: 3px solid deeppink;
    border-radius: 0px;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0px 0px 0px;
  }
  .icy_sch button{
    border: 1px solid deeppink;
    border-radius: 0px;
    background-color: deeppink;
    color: white;
    width: 90px;
  }
  #sch_btn:hover{
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }
  #sch_btn:focus{
    color: white;
    outline: 0px;
  }
  .mid-2-nav{
    border: 0px;
    background: white;
    min-height: 1em;
  }
  .mid-2-ul li{
    margin-right: 30px;
    font-size: 0.5em;
    color: rgba(128, 128, 128, 0.69);
    padding: 0px;
    margin-top: 15px;
  }
  .mid-2-ul li:hover{
    cursor: pointer;
    color: black;
  }




  .btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: normal;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
  }
</style>
