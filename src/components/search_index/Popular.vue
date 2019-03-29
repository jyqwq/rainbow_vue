<template>
  <div class="row hot">
    <div class="hot-left ">
      <div class="hot-title">
        <span class="glyphicon glyphicon-fire"></span>
        <span class="hs">热门搜索</span>
      </div>
      <div class="hot-list">
        <div class="list-1  col-md-5">
          <table class="table table-condensed tab-1 " id="tab-1">
            <tr v-for="index in 10">
              <td>{{index}}</td>
              <td @click="cur_key(hot[index-1].content)">{{hot.length>=index? hot[index-1].content:''}}</td>
            </tr>
          </table>
        </div>
        <div class="list-2  col-md-5 col-md-offset-1">
          <table class="table table-condensed tab-2" id="tab-2">
            <tr v-for="index in 10">
              <td>{{index+10}}</td>
              <td></td>
            </tr>

          </table>
        </div>
      </div>
    </div>
    <div class="hot-right ">
      <div class="history-title">
        <span class="glyphicon glyphicon-time"></span>
        <span class="hs">搜索历史</span>
        <span class="glyphicon glyphicon-trash" @click="clear"></span>
      </div>
      <div class="history-list">
        <div class="list-1  col-md-12">
          <table class="table table-condensed tab-3" id="tab-3">
            <tr v-for="index in 10">
              <td>{{ index}}</td>
              <td @click="cur_key(history[index-1])">{{history[index-1]}}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Bus from '../../bus.js'
    import axios from 'axios';
    export default {
        name: "Popular",
        data:function(){
          return{
              flag:'',
              history:'',
              hot:'',
              curkey:'',
          }
        },
        methods:{
          clear:function () {
              this.flag=true;
              Bus.$emit('val',this.flag)
          },
          cur_key:function (cur) {
            this.curkey=cur
              Bus.$emit('cur',this.curkey)
          }
        },
        mounted:function () {
            if (window.localStorage.getItem('history')) {
              this.history=JSON.parse(window.localStorage.getItem('history')).reverse()
              console.log(this.history);
            }
            let vm = this;
            Bus.$on('his', (data)=>{
              vm.history = data
            })

            axios.post(this.GLOBAL.HOST+'search/hotKey/',{
              "method":"check"
            }).then((res) =>{
              this.hot=res.data
              // console.log(res.data[0].content);
              console.log(this.hot);
            }).catch(function (err) {
              console.log(err);
            })
        },
        updated:function () {

        }


    }
</script>

<style scoped>











  /*body{*/
  /*background-color:#f2f2f2;*/
  /*}*/
  #fbtn button:focus{
    outline: 0px;
  }
  .con{
    margin-top: 80px;
  }
  .con .fbtn button{
    color: deeppink;
  }
  /*.con .fbtn button:hover{*/
  /*background:pink;*/
  /*}*/
  .icy_sch input{
    border: 2px solid rgb(255, 20, 147);
    border-radius: 0px;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0px 0px 0px;
  }
  .icy_sch button{
    border: 1px solid rgb(255, 20, 147);
    border-radius: 0px;
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
    outline: 0px;
  }
  .top-img{
    margin-bottom: 30px;
  }
  .sch{
    margin-top: 20px;
  }
  .hot{
    /*border: 1px solid rgba(128, 128, 128, 0.67);*/
    border-radius: 2px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 20px;
    overflow: hidden;
  }
  #tab-1 tr td{
    border-top: 1px dashed rgba(128, 128, 128, 0.2);
  }
  #tab-2 tr td{
    border-top: 1px dashed rgba(128, 128, 128, 0.2);
  }
  #tab-3 tr td{
    border-top: 1px dashed rgba(128, 128, 128, 0.2);
  }
  .hot-left{
    display: inline-block;
    width: 66%;
    padding: 0px 10px 0px 0px;
    box-sizing:border-box;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin-right: 18px;

  }
  .hot-title,.history-title{
    padding: 15px;
  }
  .glyphicon-fire{
    /*color: rgba(255, 0, 0, 0.78);*/
    font-size: 1.6em;
  }
  .glyphicon-time{
    font-size: 1.6em;
  }
  .hs{
    font-size: 1.6em;
  }
  .hot-title .hs{
    /*color: rgba(255, 0, 0, 0.77);*/
    font-size: 1.6em;
  }
  .hot-right{
    margin-left: 3px;
    display: inline-block;
    width: 30%;
    padding: 0px;
    border: 1px solid rgba(0, 0, 0, 0.25);
  }
  .glyphicon-trash{
    font-size: 1em;
    color: rgb(128, 128, 128);
  }
  .glyphicon-trash:hover{
    cursor: pointer;
    color: rgba(0, 0, 255, 0.62);
  }
  button{
    border: deeppink;
  }


  .modal{
    display: none;
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
  }
  .modal-content{
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    width: 50%;
    max-width: 700px;
    height: 40%;
    max-height: 500px;
    margin: 100px auto;
    border-radius:10px;
    background-color:#fff;
    -webkit-animation: zoom 0.6s;
    animation: zoom 0.6s;
    resize: both;
    overflow: auto;
  }
  @-webkit-keyframes zoom{
    from {-webkit-transform: scale(0)}
    to {-webkit-transform: scale(1)}
  }
  @keyframes zoom{
    from {transform: scale(0)}
    to {transform: scale(1)}
  }
  .modal-header{
    box-sizing:border-box;
    border-bottom:1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .close{
    color: #b7b7b7;
    font-size: 30px;
    font-weight: bold;
    margin-right: 20px;
    transition: all 0.3s;
  }
  .close:hover, .close:focus{
    color: #95b4ed;
    text-decoration: none;
    cursor: pointer;
  }
  .modal-body{
    padding: 10px;
    font-size: 16px;
    box-sizing:border-box;
  }
  .modal-footer{
    box-sizing:border-box;
    border-top:1px solid #ccc;
    display: flex;
    padding: 15px;
    justify-content: flex-end;
    align-items: center;
  }
  .modal-footer button{
    width: 60px;
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
    margin-right: 10px;
    font-size: 16px;
    color: white;
    border-radius: 5px;
    background-color: cornflowerblue;
  }
  .modal-footer button:hover, .modal-footer button:focus{
    background-color: #95b4ed;
    cursor: pointer;
  }
  @media only screen and (max-width: 700px){
    .modal-content {
      width: 80%;
    }
  }


  #tab-1 tr :nth-child(2),#tab-2 tr :nth-child(2),#tab-3 tr :nth-child(2):hover{
    cursor: pointer;
  }
  tr{
    height: 36px;
  }
</style>
