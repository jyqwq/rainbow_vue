<template>
  <div class="dy_ajax">
    <!--关注动态ajax-->
    <div class="row all_dy dy_margin" v-for="(i,index) in res" :key="index">
      <div class="row">
        <div class="col-lg-2 dy_c_content dy_c_icon"><img src="../../assets/usericon.png" alt="" class="img-circle"></div>
        <div class="col-lg-8 dy_c_content"  style="overflow: hidden">
          <div class="row">
            <span><strong style="font-size: 1.1em">{{i.userInfo.name}}</strong></span>
            <br>
            <span style="color: darkgrey;font-size: 0.9em">{{i.date}}</span>
            <div class="dy_tags">
              <div class="one_tag" v-for="(j,idx) in i.tags.split(',')" :key="idx">{{j}}</div>
            </div>
          </div>
          <div class="row dy_c_content to_one">
            <span style="font-size: 1.1em"><strong>{{i.type==='dynamic'? '':((i.title).length>10? (i.title).slice(0,10)+'...':i.title)}}</strong></span>
            <br>
            <span>{{i.type==='test'? i.subtitle[0].title:i.content}}</span>
            <br>
            <span>{{i.type==='test'? i.subtitle[1].title:''}}</span>
          </div>
          <div class="row dy_c_content">
            <img src="" alt="">
          </div>
          <div class="row margin_top">
            <ul class="nav">
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/col.png" alt="" class="dy_c">&nbsp;<span>{{i.cols}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="" class="dy_p">&nbsp;<span>{{i.com}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/fbs.png" alt="" class="dy_f">&nbsp;<span>{{i.fbs}}</span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 margin_top">
          <div class="dy_type" style="display: none">{{i.type}}</div>
          <div class="dy_id" style="display: none">{{i.id}}</div>
          <div class="dy_user" style="display: none">{{i.user_id}}</div>
          <img src="../../assets/mood.png" alt="" v-if="i.type==='dynamic'">
          <img src="../../assets/diary.png" alt="" v-if="i.type==='dairy'">
          <img src="../../assets/evaluation.png" alt="" v-if="i.type==='test'">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "SimpleDynamic",
      components:{

      },
      data:function () {
        return{
          res:null,
        }
      },
      mounted:function(){
        this.getdata()
      },
      methods:{
          getdata:function () {
            let that = this;
            axios.get(this.GLOBAL.HOST+'user/trendsConcern/'+JSON.parse(sessionStorage.getItem('userInfo'))['user']+'/1/').then(function (res) {
              that.res = res.data;
            }).catch(function (err) {
              console.log(err);
            })
          },
        getcom:function (e) {
          let event = e.target;
          let that = this;
          let type = event.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].innerHTML;
          let id = event.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[1].innerHTML;
          let num = event.parentElement.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[2].innerHTML;
          axios.post(this.GLOBAL.HOST+'user/viewComment/',{"method":"check","target":[{"type":type,"id":id}]}).then(function (res) {
            console.log(res);
            that.com[num]='comment-area';
            // that.coms=
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
  .margin_top{
    text-align: center;
    margin-top: 5px;
  }
  .dy_margin{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .dy_c_content{
    margin-top: 5px;
  }
  .dy_c_icon{
    text-align: center;
  }
  .dy_tags{
    float: right;
  }
  .one_tag{
    float: left;
    color: #FFFFFF;
    background: #efd9da;
    border: none;
    border-radius: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0 15px;
    margin-right: 12px;
    position: relative;
  }
  .dy_c_nav{
    float: left;
  }
  .to_one{
    cursor: pointer;
  }
  .tag-item{
    margin-top: 10px;
    margin-left: 80px;
  }
  .dy_c_nav{
    width: 70px;
  }
  .dy_c,.dy_f,.dy_p{
    cursor: pointer;
  }
</style>
