<template>
  <div class="row all_dy" style="margin-top: 10px">
    <ul class="nav">
      <li><span style="font-size: 1.2em;position: relative;top: 15px;left: 15px;color: darkgrey"><strong>热门标签</strong></span><br><br><br></li>
      <li v-if="tags" v-for="(i,index) in tags" :key="index"><a href="#">{{i}}</a></li>
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
          count:[]
        }
      },
      methods:{
          gettags:function () {
            let that = this;
            axios.post(this.GLOBAL.HOST+'search/hotKey/',{"method":"check"}).then(function (res) {
              console.log(res.length);
              for (let i = 0; i <res.length ; i++) {
                that.tags.push(res[i].content);
                that.tags.push(res[i].count)
              }
            }).catch(function (err) {
              console.log(err);
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
