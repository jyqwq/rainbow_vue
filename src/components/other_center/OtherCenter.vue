<template>
  <div  style="margin-top: 65px;min-height: 900px">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-7 col-lg-7 animal_sil qz_infor">
        <person-information :skin_text="isfollow? '已关注':'关注'" :my_skin="isfollow? '关注成功！':'取消成功！'" :type="'other'" :id="user_id" v-on:follow="fllow_other"></person-information>
      </div>
      <!--右边浏览历史-->
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <browse-history></browse-history>
      </div>
    </div>

    <!--大导航栏-->
    <div class="row qz_row" id="qz_nav">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10">
        <div class="row qz_row">
          <!--日记本，收藏夹导航-->
          <div class="col-xs-12 col-sm-2 col-md-2 col-lg-2"></div>
          <div @click="dyAxios()" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_dianav">
            <div class="qz_nimg anima_jel">
              <img src="../../assets/my_center/nav_diary.png" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">日 记 本</span></div>
            <div class="qz_ndis"><span class="font_inf">快来写日记吧！</span></div>
          </div>
          <div @click="coAxios()" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_colnav">
            <div class="qz_nimg anima_jel">
              <img src="../../assets/my_center/nav_collection.png" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">收 藏 夹</span></div>
            <div class="qz_ndis"><span class="font_inf">喜欢，我收下啦！</span></div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <!--中心内容-->
    <div class="row qz_row qz_data">
      <!--日记本，收藏夹，收纳盒内容-->
      <div id="qz_diary" class="animal_sil">
        <div class="row">
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4"  v-for="(dy, index) in dynamic">
            <div class="qz_cen">
              <img @mouseover="flag=index" :class="flag===index?['qz_cimg','cimg_active']:''" class="img-responsive qz_cimg" :src="GLOBAL.IMG+dy_bg[index]" alt="Responsive image">
              <div :class="flag===index?['qz_coimg']:''" @mouseout="flag=-1" class="to_one">
                <span v-if="seen===-2" @click="toone" class="font_main"><br><br>{{dy_tits[index]}}</span>
                <span v-else-if="seen===-1" @click="toone" class="font_main"><br><br>{{dy_tits[index]}}</span>
                <span v-else-if="seen===0" @click="toone" :data-autho="dy.user_id" :data-type="dy.type" :data-id="dy.id" class="font_main"><br><br>{{dy_tits[index]}}<br><br>发布时间：{{GLOBAL.TIME(now-dy.date)}}<br>点击量:{{dy.click}}</span>
                <span v-else-if="seen===1" @click="toone" :data-autho="dy.user_id" :data-type="dy.colInfo.type" :data-id="dy.colInfo.id" class="font_main"><br><br>{{dy_tits[index]}}<br><br>发布时间：{{GLOBAL.TIME(now-dy.date)}}<br>点击量:{{dy.colInfo.click}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import PersonInformation from '../my_center/PersonInformation'
  import BrowseHistory from '../my_center/BrowseHistory'
    export default {
      components:{
        'person-information':PersonInformation,
        'browse-history':BrowseHistory,
      },
      name: "OtherCenter",
      data:function () {
        return{
          now:(new Date()).getTime(),
          user_id:this.$route.params.id,
          flag:-1,
          seen:0,
          dynamic:[{"content":"彩虹日记"}],
          dy_tits:[],
          dy_bg:[],
          di_len:'',
          isfollow:false,
          flash:true
        }
      },
      mounted: function () {
        this.dyAxios();
        this.getfollow();
      },
      methods: {
        // 是否关注
        getfollow:function (){
          let that = this;
          axios.post(this.GLOBAL.HOST+'user/viewConcern/',{
            "method":"check",
            "concern_id":this.user_id,
            "follower_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
          }).then(function (res) {
            console.log(res);
            if (res.data[0]['status_code']==='10011'){
              that.isfollow=true;
              that.flash=false
            }else if (res.data[0]['status_code']==='10012') {
              that.isfollow=false;
              that.flash=false
            }else  {
              that.isfollow=false;
              that.flash=false;
              console.log(res.data[0]['status_text']);
            }
            that.flash=true
          }).catch(function (err) {
            console.log(err);
          })
        },
        // 点击关注他人
        fllow_other:function(){
          let that = this;
          let myDate=new Date();
          if (that.isfollow){
            axios.post(this.GLOBAL.HOST+'user/viewConcern/',{
              "method":"del",
              "concern_id":this.user_id,
              "follower_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
            }).then(function (res) {
              if (res.data['status_code']==='10010'){
                that.isfollow=false;
                that.flash=false
              }else {
                alert(res.data['status_text'])
              }
              that.flash=true
            }).catch(function (err) {
              console.log(err);
            })
          } else {
            axios.post(this.GLOBAL.HOST+'user/viewConcern/',
              {
                "method":"add",
                "concern_id":this.user_id,
                "follower_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
                "date":myDate.getTime()
              })
              .then(function (res) {
                console.log(res);
                if (res.data['status_code']==='10009'){
                  that.isfollow=true;
                  that.flash=false
                }else if (res.data[0]['status_code']==='10022'){
                  that.isfollow=false;
                  alert(res.data[0]['status_text'])
                }else{
                  alert(res.data['status_text'])
                }
                that.flash=true
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        },
        // 切换单个动态
        dyAxios: function () {
          let that = this;
          axios.get(this.GLOBAL.HOST + 'user/myDynamics/' + this.user_id + '/1/')
            .then(function (response) {
              if (response.data.length === 0) {
                that.seen = -1;
                Vue.set(that.dy_bg,0,'background_dynamic.jpg');
                Vue.set(that.dy_tits,0,'写日记 >');
              } else {
                that.seen = 0;
                that.dynamic = response.data.slice(0, 3);
                for (let i=0;i<that.dynamic.length;i++){
                  // 图片
                  if (that.dynamic[i].imgs.length) {
                    Vue.set(that.dy_bg,i,that.dynamic[i].imgs[0].url);
                  }else{
                    Vue.set(that.dy_bg,i,'background_dynamic.jpg');
                  }
                  // 内容
                  if (that.dynamic[i].type==='dynamic') {
                    Vue.set(that.dy_tits,i,that.dynamic[i].content.length>11?that.dynamic[i].content.slice(0,11):that.dynamic[i].content);
                  }else if (that.dynamic[i].type==='dairy') {
                    Vue.set(that.dy_tits,i,that.dynamic[i].title.length>11?that.dynamic[i].title.slice(0,11):that.dynamic[i].title);
                  }else if (that.dynamic[i].type==='test'){
                    Vue.set(that.dy_tits,i,that.dynamic[i].title.length>11?that.dynamic[i].title.slice(0,11):that.dynamic[i].title);
                  }
                }
                that.di_len=that.dynamic.length;
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        },
        coAxios: function () {
          let that = this;
          axios.post(this.GLOBAL.HOST + 'user/viewCollections/', {
            "method": "check",
            "target": [
              {"type": "dynamic", "user_id": this.user_id},
              {"type": "dairy", "user_id": this.user_id},
              {"type": "test", "user_id": this.user_id}]
          })
            .then(function (response) {
              let res=response.data;
              if (res[0].status_code==='10017' && res[1].status_code==='10017' &&  res[2].status_code==='10017') {
                that.seen=-2;
                Vue.set(that.dy_bg,0,'background_dynamic.jpg');
                Vue.set(that.dy_tits,0,'去收藏 >');
              }else{
                let dyna=[];
                for(let i=0;i<res.length;i++){
                  if(res[i].status_code!=='10017'){
                    dyna.push(res[i])
                  }
                }
                dyna.sort((x,y)=>(y.date - x.date));
                that.dynamic=dyna.slice(0,3);
                that.seen=1;
                for (let i=0;i<that.dynamic.length;i++){
                  // 图片
                  if (that.dynamic[i].imgs.length) {
                    Vue.set(that.dy_bg,i,that.dynamic[i].imgs[0].url);
                  }else{
                    Vue.set(that.dy_bg,i,'background_dynamic.jpg');
                  }
                  // 内容
                  let type=that.dynamic[i].colInfo.type;
                  if (type==='dynamic') {
                    Vue.set(that.dy_tits,i,that.dynamic[i].colInfo.content.length>11?that.dynamic[i].colInfo.content.slice(0, 11):that.dynamic[i].colInfo.content);
                  }else if (type==='dairy') {
                    Vue.set(that.dy_tits,i,that.dynamic[i].colInfo.title.length>11?that.dynamic[i].colInfo.title.slice(0, 11):that.dynamic[i].colInfo.title);
                  }else if (type==='test'){
                    Vue.set(that.dy_tits,i,that.dynamic[i].colInfo.title.length>11?that.dynamic[i].colInfo.title.slice(0, 11):that.dynamic[i].colInfo.title);
                  }
                }
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        },
        // 跳转单个动态
        toone:function (event) {
          let node=event.target;
          console.log(node);
          let autho = node.dataset.autho;
          let type = node.dataset.type;
          let id = node.dataset.id;
          if (this.seen===-2){
            this.$router.push({path:'/rank/'})
          } else if (this.seen===-1){
            this.$router.push({path:'/sharing_index/'})
          } else if (this.seen===0){
            this.$router.push({path:'/dynamic_detail/'+autho+'/'+type+'/'+id})
          } else if (this.seen===1) {
            this.$router.push({path:'/dynamic_detail/'+autho+'/'+type+'/'+id})
          }
        }
      }
    }
</script>

<style scoped>
  /*全局*/
  .qz_row{
    margin: 15px;
  }
  /*字体*/
  .font_main{
    font-size: 0.9em;
    margin: auto;
    color: whitesmoke;
  }
  /*大导航栏开始*/
  /*字体*/
  .qz_nav{
    text-align: center;
  }
  .font_nav{
    font-family: 幼圆;
    font-size: 1.5em;

    height: 30px;
    line-height: 30px;
  }
  .qz_ndis{
    text-align: center;
  }
  .font_inf{
    font-family: 幼圆;
    height: 20px;
    line-height: 20px;
  }
  /*日记本*/
  .qz_nimg{
    margin: auto;
    width: 70px;
    height: 70px;
  }
  .img_diary{
    height: 100%;
    margin: auto;
  }
  /*动画*/
  /*摇晃颤抖*/
  .anima_jel:hover{
    animation: jello 1s;
  }
  /*大导航栏结束*/
  /*单个动态开始*/
  .qz_cen{
    margin: 10px;
    overflow: hidden;
    border-radius: 15px;
    height: 186px;
  }
  .qz_cen img{
    height: 186px;
    width: 100%;
  }
  .qz_cimg{
    margin: auto;
    transition: all 1s ease-in-out;
    border-radius: 15px;
    height: 186px;
  }
  .cimg_active{
    margin: auto;
    transition: all 1s ease-in-out;
    transform: scale(1.5,1.5);
  }
  .qz_coimg{
    position: relative;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    text-align: center;
    font-size: 1.5em;
    height: 186px;
    top: -186px;
  }
  .disblock{
    display: block;
  }
  .to_one{
    cursor: pointer;
  }
  /*单个动态结束*/
</style>
