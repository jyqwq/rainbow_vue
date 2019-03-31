<template>
  <div class="row all_dy" style="margin-top: 10px">
    <ul class="nav">
      <li><span style="font-size: 1.2em;position: relative;top: 15px;left: 15px;color: darkgrey"><strong>热门搜索</strong></span><br><br><br></li>
      <li v-if="tags" v-for="(i,index) in tags" :key="index"><a href="#" @click="tos" :data-key="i">{{i}}  <span style="float: right;margin-right: 80px;color: red">{{count[index]}}  <span style="color: red" class="glyphicon glyphicon-fire"></span>  </span> </a></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "HotTags",
      data:function () {
        return{
          tags:[],
          count:[],
          goodsinfo:''
        }
      },
      mounted:function (){
        this.gettags()
      },
      methods:{
          gettags:function () {
            let that = this;
            axios.post(this.GLOBAL.HOST+'search/hotKey/',{"method":"check"}).then(function (res) {
              for (let i = 0; i <res.data.length ; i++) {
                that.tags.push(res.data[i].content);
                that.count.push(res.data[i].count)
              }
            }).catch(function (err) {
              console.log(err);
            })
          },
        tos:function (e) {
          let li = e.target.dataset.key;
          console.log(this.GLOBAL.HOST + 'search/searchAll?key=' + li + '&page=1');
          axios.get(this.GLOBAL.HOST+'search/searchAll?key='+li+'&page=1')
            .then((response) => {
              if (response.data.length>1) {
                this.goodsinfo=response.data;
                let goods=JSON.stringify(this.goodsinfo);
                window.sessionStorage.setItem('info',goods);
                window.sessionStorage.setItem('counts',this.goodsinfo[this.goodsinfo.length-1].count);
              }else {
                this.goodsinfo=[1];
              }
              this.$router.push({ name: 'Result', params: { info: JSON.stringify(this.goodsinfo) }})
            }).catch(function (error) {
            console.log(error);
          })

        }
      }
    }
</script>

<style scoped>
  .all_dy{
    background: #e9faff;
    border-radius: 5px;
  }
</style>
