<template>
  <div  style="margin-top: 65px;min-height: 2000px">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-7 col-lg-7 animal_sil qz_infor">
        <person-information :skin_text="'肤质测试'" :my_skin="'我的肤质'" :type="'my'"></person-information>
      </div>
      <!--右边浏览历史-->
      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
        <browse-history></browse-history>
      </div>
    </div>

    <!--箭头指向第二页-->
    <go-to></go-to>

    <!--大导航栏-->
    <div class="row qz_row" id="qz_nav">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10">
        <div class="row qz_row">
          <!--日记本，收藏夹，收纳盒导航-->
          <div @click="dyAxios()" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_dianav">
            <!--切换方法1 <div v-for="(nav,index) in tabNav" @click="cur=index">{{nav}}</div>-->
            <!--切换方法2 <nav-diary @click.native="tabChange(diary)"></nav-diary>-->
            <!--切换方法3 <nav-diary @click.native="dyAxios()"></nav-diary>-->
            <div class="qz_nimg anima_jel">
              <img src="../../assets/my_center/nav_diary.png" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">日 记 本</span></div>
            <div class="qz_ndis"><span class="font_inf">快来写日记吧！</span></div>
          </div>
          <div @click="coAxios()" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_colnav">
            <!--2 <nav-collection @click.native="tabChange(collect)"></nav-collection>-->
            <!--3 <nav-collection @click.native="coAxios()"></nav-collection>-->
            <div class="qz_nimg anima_jel">
              <img src="../../assets/my_center/nav_collection.png" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">收 藏 夹</span></div>
            <div class="qz_ndis"><span class="font_inf">喜欢，我收下啦！</span></div>
          </div>
          <div @click="adFicti()" class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_admnav">
            <!--2 <nav-admission @click.native="tabChange(admis)"></nav-admission>-->
            <!--3 <nav-admission @click=""></nav-admission>-->
            <div class="qz_nimg anima_jel">
              <img src="../../assets/my_center/nav_admission.png" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">收 纳 盒</span></div>
            <div class="qz_ndis"><span class="font_inf">记录妆品，防止过期哦！</span></div>
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
                <span v-else-if="seen===2" @click="toone" class="font_main"><br><br>{{dy.content}}<br><br>剩余时间：{{dy.date}}<br></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--更多按钮-->
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-5"></div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2">
        <router-link to="/my_dynamic" class="button_primary button_qz" href="../setting/Setting.vue">更多 ></router-link>
      </div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import PersonInformation from './PersonInformation'
  import BrowseHistory from './BrowseHistory'
  import GoTo from './GoTo'
    export default {
      components:{
        'person-information':PersonInformation,
        'browse-history':BrowseHistory,
        'go-to':GoTo
      },
      name: "MyCenter",
      props:{},
      data: function () {
        return {
          now:(new Date()).getTime(),
          flag:-1,
          seen:-1,
          dynamic:[{"content":"彩虹日记"}],
          dy_tits:[],
          dy_bg:[],
          // 切换方法1，2 currenView:'DynamicDiary',
        }
      },
      mounted: function () {
        this.dyAxios();
      },
      methods: {
        // 切换单个动态
        // 切换方法1，2 tabChange:function(tabDynamic){
        //   this.currenView=tabDynamic;
        // }
        dyAxios:function () {
          let user_id=JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          let that=this;
          axios.get(this.GLOBAL.HOST+'user/myDynamics/'+user_id+'/1/')
            .then(function (response) {
              if (response.data.length===0) {
                that.seen=-1;
                Vue.set(that.dy_bg,0,'background_dynamic.jpg');
                Vue.set(that.dy_tits,0,'写日记 >');
              }else{
                that.seen=0;
                that.dynamic=response.data.slice(0,3);
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
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        },
        coAxios:function () {
          let user_id=JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          let that=this;
          axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
            "method":"check",
            "target":[{"type":"dynamic","user_id":user_id},{"type":"dairy","user_id":user_id},{"type":"test","user_id":user_id}]
          })
            .then(function (response) {
              let res=response.data;
              console.log(res);
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
                // 排序
                // function up(x,y){
                //   return x.data-y.data
                // }
                //  .hourList.sort(up);
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
        adFicti:function () {
          this.seen=2;
          for (let i=0;i<3;i++){
            Vue.set(this.dy_bg,i,'background_dynamic.jpg');
          }
          this.dynamic=[{"content":"兰蔻精华肌底液","date":"365天"},{"content":"兰蔻精华肌底液","date":"365天"},{"content":"兰蔻精华肌底液","date":"365天"}]

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
          }else if (this.seen===2) {
            this.$router.push({path:'/my_dynamic/admissionlist/'})
          }
        }
      },
      watch: {},
      computed: {},
      filter: {},
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
  /*结尾更多按钮—开始*/
  .button_qz{
    position: relative;
    padding-right: 2em;
    border-radius: .6em;
    padding: .2em 1em .3em;
    line-height: 1.618;
    display: inline-block;
    text-align: center;
    text-align-last: center;
    vertical-align: middle;
    user-select: none;
    touch-action: manipulation;
    cursor: pointer;
    transition: all .2s ease-out;
    text-decoration: none;

    margin-bottom: 2rem;
    margin-top: 2rem;
  }
  .button_primary {
    background: rgba(220, 20, 60, 0.71);
    color: #fff;
    border: solid 2px rgba(220, 20, 60, 0.71);
  }
  .button_primary:hover{
    background: whitesmoke;
    text-decoration: none;
    color: rgba(220, 20, 60, 0.71);
  }
  /*结尾更多按钮—结束*/
</style>
