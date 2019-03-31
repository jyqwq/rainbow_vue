<template>
  <div class="row r-5">
    <div class="col-md-6 col-md-offset-3 r-5-1" id="div-fenye">
        <ul id='ul-fenye'>
          <li @click="headward" >首页</li>
          <li @click="upward">上一页</li>
          <li v-for="index in count<4?count:3" :class="page==show[index-1]?'background':''"
           @click="ward(show[index-1])">{{show[index-1]}}</li>
          <li @click="downward">下一页</li>
          <li @click="footward">尾页</li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Paging",
        data:function () {
          return{
            //当前页码
            page:1,
            //总共页数
            count:1,
            //显示页码
            show:[1,2,3]
          }
        },
        methods:{
          ward:function (index) {
            this.page=index
            console.log(this.page);
            this.$emit('setpage',this.page)
          },
          upward:function () {
            if (this.page>1) {
              this.page-=1
              this.$emit('setpage',this.page)
            }
            if (this.show.indexOf(this.page+1)==0) {
                this.show=this.show.map(function (i) {
                  return i-1
                })
            }
            console.log(this.page);
          },
          downward:function () {
            if (this.page<this.count) {
              this.page+=1
              this.$emit('setpage',this.page)
              if (this.show.indexOf(this.page-1)==this.show.length-1) {
                    this.show=this.show.map(function (i) {
                        return i+1
                    })
              }
            }
            console.log(this.page);
          },
          headward:function () {
            this.page=1
            this.show=[1,2,3]
            this.$emit('setpage',this.page)
          },
          footward:function () {
            this.page=this.count
            this.show=[this.count-2,this.count-1,this.count]
            this.$emit('setpage',this.page)
          }
        },
        mounted:function () {
          if (window.sessionStorage.getItem('counts')){
            this.count=Math.ceil(window.sessionStorage.getItem('counts')/16)
            this.count=5
          }
        }

    }
</script>

<style scoped>
  .background{background:#39C6F4;
    color:white;
    border:1px solid #39C6F4;
  }
  #ul-fenye{font-size:0;font-family:Microsoft YaHei;display:inline-block;}
  #ul-fenye li{
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    list-style: none;float:left;padding:6px;font-size:13px;border:1px solid #ccc;margin:2px;cursor:pointer;color:#585858;}
  #div-fenye{
    text-align: center;
  }

</style>
