<template>
  <div class="dy_ajax" ref="all">
    <!--关注动态ajax-->
    <div class="row all_dy dy_margin" v-for="(i,index) in res" :key="index" :data-type="i.type">
      <div class="row">
        <div class="col-lg-2 dy_c_content dy_c_icon"><img src="../../assets/usericon.png" alt="" class="img-circle"></div>
        <div class="col-lg-8 dy_c_content"  style="overflow: hidden">
          <div class="row">
            <span><strong style="font-size: 1.1em">{{i.userInfo.name}}</strong></span>
            <br>
            <span style="color: darkgrey;font-size: 0.9em">{{i.date}}</span>
            <div class="dy_tags">
              <div class="one_tag" v-for="(j,idx) in i.tags.split(',')" :key="idx" v-if="j">{{j}}</div>
            </div>
          </div>
          <div class="row dy_c_content">
            <span class="to_one" style="font-size: 1.1em;font-weight: bold;margin-left: 35%"  @click="tocom">{{i.type==='dynamic'? '':((i.title).length>10? (i.title).slice(0,10)+'...':i.title)}}</span>
            <span style="display: none">{{index}}</span>
            <br>
            <span class="to_one" @click="tocom">{{i.type==='test'? i.subtitle[0].title:((i.content).length>50? (i.content).slice(0,50)+'...':i.content)}}</span>
            <span style="display: none">{{index}}</span>
            <br>
            <span class="to_one" @click="tocom">{{i.type==='test'? i.subtitle[1].title:''}}</span>
            <span style="display: none">{{index}}</span>
          </div>
          <div class="row dy_c_content">
            <img src="" alt="">
          </div>
          <div class="row margin_top">
            <ul class="nav">
              <li class="dy_c_nav"><a><img :src="colimg[index]" alt="" class="dy_c" @click="tocol"><span style="display: none">{{index}}</span>&nbsp;<span>{{i.cols}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="" class="dy_p" @click="tocom"><span style="display: none">{{index}}</span>&nbsp;<span>{{i.com}}</span></a></li>
              <li class="dy_c_nav"><a><img :src="fbsimg[index]" alt="" class="dy_f" @click="tofbs"><span style="display: none">{{index}}</span>&nbsp;<span>{{i.fbs}}</span></a></li>
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
  import vm from 'vue'
  import Vue from 'vue'
  import axios from 'axios'
    export default {
    props:['flag'],
        name: "SimpleDynamic",
      components:{

      },
      data:function () {
        return{
          idx:-1,
          res:null,
          colimg:[],
          fbsimg:[],
          iscol:[],
          isfbs:[],
          alltype:[],
          allid:[]
        }
      },
      watch:{
        flag:function () {
          if (parseInt(this.flag) === 1){
            for (let i = 0; i <this.$refs.all.children.length ; i++) {
              this.$refs.all.children[i].style.display='block'
            }
          }else if (parseInt(this.flag) === 2){
            for (let i = 0; i <this.$refs.all.children.length ; i++) {
              if (!(this.$refs.all.children[i].dataset.type === 'dynamic')){
                this.$refs.all.children[i].style.display='none'
              }else {
                this.$refs.all.children[i].style.display='block'
              }
            }
          }else if (parseInt(this.flag) === 3) {
            for (let i = 0; i <this.$refs.all.children.length ; i++) {
              if (!(this.$refs.all.children[i].dataset.type === 'dairy')){
                this.$refs.all.children[i].style.display='none'
              }else {
                this.$refs.all.children[i].style.display='block'
              }
            }
          }else if (parseInt(this.flag) === 4) {
            for (let i = 0; i <this.$refs.all.children.length ; i++) {
              if (!(this.$refs.all.children[i].dataset.type === 'test')){
                this.$refs.all.children[i].style.display='none'
              }else {
                this.$refs.all.children[i].style.display='block'
              }
            }
          }
        }
      },
      mounted:function(){
        this.getdata()
      },
      methods:{
          getdata:function () {
            let that = this;
            let uid = JSON.parse(sessionStorage.getItem('userInfo'))['user'];
            axios.get(this.GLOBAL.HOST+'user/trendsConcern/'+uid+'/1/').then(function (res) {
              that.res = res.data;
              let target = [];
              for (let i=0;i<res.data.length;i++){
                let t = res.data[i]['type'];
                let id = res.data[i]['id'];
                let one = {"type":t,"id":id,"user_id":uid};
                target.push(one);
                that.colimg.push('../../../static/dynamic/col.png');
                that.fbsimg.push('../../../static/dynamic/fbs.png');
                that.iscol.push(false);
                that.isfbs.push(false);
                that.alltype.push(t);
                that.allid.push(id)
              }
              axios.post(that.GLOBAL.HOST+'user/viewCompliment/',{
                "method":"check",
                "target":target
              }).then(function (res) {
                for (let j = 0; j <res.data.length ; j++) {
                  if (res.data[j]['status_code']==='10019') {
                    // vm.items.splice(that.fbsimg, j, '../../../static/dynamic/isfbs.png');
                    Vue.set(that.fbsimg, j, '../../../static/dynamic/isfbs.png');
                    // vm.items.splice(that.isfbs, j, true);
                    // that.fbsimg[j]='../../../static/dynamic/isfbs.png';
                    that.isfbs[j]=true
                  }else if (res.data[j]['status_code']==='10020'){

                  }else {
                    console.log(res.data[j]['status_text']);
                  }
                }

              }).catch(function (err) {
                console.log(err);
              });
              axios.post(that.GLOBAL.HOST+'user/viewCollections/',{
                "method":"check",
                "target":target
              }).then(function (res) {
                for (let j = 0; j <res.data.length ; j++) {
                  if (res.data[j]['status_code']==='10016') {
                    Vue.set(that.colimg, j, '../../../static/dynamic/iscol.png');
                    that.iscol[j]=true;
                    // that.colimg[j]='../../../static/dynamic/iscol.png';
                    // that.iscol[j]=true
                  }else if (res.data[j]['status_code']==='10017'){

                  }else {
                    console.log(res.data[j]['status_text']);
                  }
                }
              }).catch(function (err) {
                console.log(err);
              })
            }).catch(function (err) {
              console.log(err);
            })
          },
          tocol:function (e) {
            let eve = e.target;
            let that = this;
            let myDate = new Date();
            let no = parseInt(eve.nextElementSibling.innerHTML);
            if (that.iscol[no]){
              axios.post(that.GLOBAL.HOST+'user/viewCollections/',{
                "method":"del",
                "type":that.alltype[no],
                "id":that.allid[no],
                "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
              }).then(function (res) {
                if (res.data['status_code']==='10010'){
                  eve.nextElementSibling.nextElementSibling.innerHTML--;
                  that.iscol[no]=false;
                  Vue.set(that.colimg, no, '../../../static/dynamic/col.png');
                }else {
                  alert(res.data['status_text'])
                }
              } ).catch(function (err) {
                console.log(err);
              })
            }else {
              axios.post(that.GLOBAL.HOST+'user/viewCollections/',{
                "method":"add",
                "type":that.alltype[no],
                "id":that.allid[no],
                "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
                "date":myDate.getTime()
              }).then(function (res) {
                if (res.data['status_code']==='10015'){
                  eve.nextElementSibling.nextElementSibling.innerHTML++;
                  that.iscol[no]=true;
                  Vue.set(that.colimg, no, '../../../static/dynamic/iscol.png');
                }else {
                  alert(res.data['status_text'])
                }
              } ).catch(function (err) {
                console.log(err);
              })
            }
          },
        tofbs:function (e) {
          let eve = e.target;
          let that = this;
          let myDate = new Date();
          let no = parseInt(eve.nextElementSibling.innerHTML);
          if (that.isfbs[no]){
            axios.post(that.GLOBAL.HOST+'user/viewCompliment/',{
              "method":"del",
              "type":that.alltype[no],
              "id":that.allid[no],
              "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
            }).then(function (res) {
              if (res.data['status_code']==='10010'){
                eve.nextElementSibling.nextElementSibling.innerHTML--;
                that.isfbs[no]=false;
                Vue.set(that.fbsimg, no, '../../../static/dynamic/fbs.png');
              }else {
                alert(res.data['status_text'])
              }
            } ).catch(function (err) {
              console.log(err);
            })
          }else {
            axios.post(that.GLOBAL.HOST+'user/viewCompliment/',{
              "method":"add",
              "type":that.alltype[no],
              "id":that.allid[no],
              "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
              "date":myDate.getTime()
            }).then(function (res) {
              if (res.data['status_code']==='10018'){
                eve.nextElementSibling.nextElementSibling.innerHTML++;
                that.isfbs[no]=true;
                Vue.set(that.fbsimg, no, '../../../static/dynamic/isfbs.png');
              }else {
                alert(res.data['status_text'])
              }
            } ).catch(function (err) {
              console.log(err);
            })
          }
        },
        tocom:function (e) {
          let eve = e.target;
          let no = parseInt(eve.nextElementSibling.innerHTML);
          this.$router.push({path:'/dynamic_detail/'+JSON.parse(sessionStorage.getItem('userInfo'))['user']+'/'+this.alltype[no]+'/'+this.allid[no]})
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
