<template>
  <div class="row r-2">
    <ul class="nav nav-pills r-2-1" id="r-2-1-ul" >
      <li role="presentation" class="active" >
        <a  class="r-2-1">所有分类:</a>
      </li>
      <li role="presentation" class="active" @click="change"  v-if="checked"><a class="r-2-1">{{condition}}</a></li>
    </ul>
    <table class="table r-2-tb">
      <tr class="tr-1">
        <td class="col-md-1">种类:</td>
        <td class="col-md-6 r-2-td-1">
          <span v-for="brand in brands" @click="searchSelection1(brand)">{{brand}}</span>
        </td>
      </tr>
      <tr>
        <td class="col-md-1">功能:</td>
        <td class="col-md-6 r-2-td-3">
          <span v-for="(effect,index) in effects" @click="searchSelection2(effect,index)"
             :class="{active:index==isshow}" >{{effect}}</span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
    export default {
        name: "Selection",
        data:function () {
          return{
            pool:'',
            isshow:-1,
            ischeck:false,
            checked:false,
            condition:'',
            brands:['羽西','可口可乐','森田药妆','信美肌','我的美丽日记','瑞士葆丽美',
              '希思黎','伊丽莎白 · 雅顿','悦诗风吟','海蓝之谜','菲诗小铺'],
            effects:['提亮肤色','均匀肤色','保湿','遮瑕','痘痘護理','去红血丝','收缩毛孔',
            '舒缓/抗敏感','盈润','好喝'],
            a:false
          }
        },
        props:['router','keyword','goodinfo'],
        methods:{
          searchSelection1:function (li) {
            this.isshow=-1
            this.checked=true
            this.condition=li
            var a=[]
            var b=this.pool
              for (let i =0;i<b.length;i++){
              if (b[i].brand==li){
                a.push(b[i])
              }
            }
            let c={'count':a.length}
            a.push(c)
            this.a=a
            this.$emit('getset',a)
          },

          searchSelection2:function(li,index){


            if (index==this.isshow){
                this.isshow=-1
                if (this.a){
                  var g=this.a
                  this.$emit('getset',g)
                } else {
                  var h=this.pool
                  this.$emit('getset',h)
                }

            } else {
              this.isshow=index
              if (this.a){
                var d=[]
                for (let i =0;i<this.a.length-1;i++){
                  if (this.a[i].Effect.indexOf(li)!=-1) {
                        d.push(this.a[i])
                  }
                }
                let count={'count':d.length}
                d.push(count)
                this.$emit('getset',d)
              }else {
                var e=[]
                var f=this.pool
                for (let i=0;i<this.pool.length-1;i++) {
                  if (f[i].Effect.indexOf(li)!=-1){
                    e.push(f[i])
                  }
                }
                let count={'count':e.length}
                e.push(count)
                console.log(e);
                this.$emit('getset',e)
              }
            }
          },








          // searchSelection:function (li,router,index=0) {
          //   if (router==this.router.searchBrand) {
          //     this.checked=true
          //     this.condition=li
          //
          //   }else if (router==this.router.searchEffect) {
          //     if (index==this.isshow){
          //       this.isshow=-1
          //       this.searchSelection(this.keyword,this.router.searchAll)
          //       return
          //     } else {
          //       this.isshow=index
          //     }
          //   }
          //   this.$emit('search', li,router)
          // },
          change:function () {
            this.checked=false;
            this.$emit('search', this.keyword,this.router.searchProduct)
          }
        },
        mounted:function () {
          var vm=this
          if (window.sessionStorage.getItem('info')) {
            vm.pool=JSON.parse(window.sessionStorage.getItem('info'))
            console.log(vm.pool);
          }
        }

    }
</script>

<style scoped>
  .active{
    color: #e20000;
  }
  .r-2-1{
    background: white;
    /*background: #f2f2f2;*/
  }
  #r-2-1-ul li{
    border: 1px solid rgba(118, 118, 118, 0.51);
    /*border-right: 1px solid rgba(118, 118, 118, 0.51);*/
    background: pink;
  }
  #r-2-1-ul li a{
    background: white;
    color:rgba(128, 128, 128, 0.7);
    cursor: default;
    /*color: rebeccapurple;*/
  }

  .con .main_content .r-2 .r-2-tb{
    /*border: 1px solid rgba(128, 128, 128, 0.4);*/
  }
  .con .main_content .r-2 .r-2-tb tr td{
    /*border-top: 1px dashed rgba(128, 128, 128, 0.4);*/
    /*border-bottom: 1px dashed rgba(128, 128, 128, 0.4);*/
    padding-top: 15px;
    padding-left: 15px;
  }
  .con .main_content .r-2 .r-2-tb tr td:nth-child(1){
    color:rgba(128, 128, 128, 0.7);
  }
  .con .main_content .r-2 .r-2-tb tr td span{
    display: inline-block;
    cursor: pointer;
    margin-right:80px;
    margin-bottom:15px;
  }
  .con .main_content .r-2 .r-2-tb tr td span:hover{
    text-decoration: underline;
    color: red;
  }
  .r-2-tb{
    background-color: white;
  }
</style>
