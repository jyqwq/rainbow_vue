<template>
  <div  style="margin-top: 65px;min-height: 2000px">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-7 col-lg-7 animal_sil qz_infor">
        <person-information :disflag="0"></person-information>
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
              <img @mouseover="flag=index" :class="flag===index?['qz_cimg','cimg_active']:''" class="img-responsive qz_cimg" src="../../assets/my_center/background_dynamic.jpg" alt="Responsive image">
              <div :class="flag===index?['qz_coimg']:''" @mouseout="flag=-1" class="to_one">
                <span v-if="seen===-2" class="font_main"><br><br>{{dy.content}}</span>
                <span v-if="seen===-1" class="font_main"><br><br>{{dy.content}}</span>
                <span v-else-if="seen===0" class="font_main"><br><br>{{dy.content}}<br><br>发布时间：{{dy.date}}<br>点击量:{{dy.click}}</span>
                <span v-else-if="seen===1" class="font_main"><br><br>{{dy.colInfo.content}}<br><br>发布时间：{{dy.date}}<br>点击量:{{dy.colInfo.click}}</span>
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
  import PersonInformation from '../my_center/PersonInformation'
  import BrowseHistory from '../my_center/BrowseHistory'
  import GoTo from '../my_center/GoTo'
    export default {
      components:{
        'person-information':PersonInformation,
        'browse-history':BrowseHistory,
        'go-to':GoTo
      },
      name: "OtherCenter",
      data:function () {
        return{
          user_id:this.$route.params.id,
          flag:-1,
          seen:0,
          dynamic:[{"content":"彩虹日记"}],
        }
      },
      mounted: function () {
        let that=this;
        axios.get(this.GLOBAL.HOST+'user/myDynamics/'+this.user_id+'/1/')
          .then(function (response) {
            if (response.data.length===0) {
              that.seen=-1;
              that.dynamic=[{"content":"写日记 >"}];
            }else{
              that.seen=0;
              that.dynamic=response.data.slice(0,3);
            }
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      methods: {
        // 切换单个动态
        dyAxios: function () {
          let that = this;
          axios.get(this.GLOBAL.HOST + 'user/myDynamics/' + this.user_id + '/1/')
            .then(function (response) {
              if (response.data.length === 0) {
                that.seen = -1;
                that.dynamic = [{"content": "写日记 >"}];
              } else {
                that.seen = 0;
                that.dynamic = response.data.slice(0, 3);
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
                that.dynamic=[{"content":"去收藏 >"}];
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
              }
            })
            .catch(function (error) {
              console.log(error);
            })
        },
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
