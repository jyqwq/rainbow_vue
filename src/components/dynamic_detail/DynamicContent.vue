<template>
  <div class="dy_ajax">
    <!--单个动态ajax-->
    <div class="row all_dy dy_margin" v-for="(i,index) in res" :key="index">
      <div class="row">
        <div class="col-lg-2 dy_c_content dy_c_icon"><img src="../../assets/usericon.png" alt="" class="img-circle"></div>
        <div class="col-lg-8 dy_c_content" style="overflow: hidden">
          <div class="row">
            <span><strong style="font-size: 1.1em">{{i.userInfo.name}}</strong></span>
            <br>
            <span style="color: darkgrey;font-size: 0.9em">{{GLOBAL.TIME(now-i.date)}}</span>
            <div class="dy_tags">
              <div class="one_tag" v-for="(j,idx) in i.tags.split(',')" :key="idx" v-if="j">{{j}}</div>
            </div>
          </div>
          <div class="row dy_c_content" v-if="i.type==='dynamic'">
            <span>{{i.content}}</span>
          </div>
          <div class="row dy_c_content"  v-if="i.type==='dairy'">
            <div style="text-align: center"><span style="font-size: 1.2em;"><strong>{{i.title}}</strong></span></div>
            <br>
            <span>{{i.content}}</span>
          </div>
          <div class="row dy_c_content" v-if="i.type==='test'">
            <div style="text-align: center"><span style="font-size: 1.2em;"><strong>{{i.title}}</strong></span></div>
            <br>
            <div><span>{{i.content}}</span></div>
            <br>
            <div style="text-align: center"><span style="font-size: 1.1em;"><strong>{{i.subtitle[0].title}}</strong></span></div>
            <br>
            <div><span>{{i.subtitle[0].content}}</span></div>
            <br>
            <div style="text-align: center"><span style="font-size: 1.1em;"><strong>{{i.subtitle[1].title}}</strong></span></div>
            <br>
            <div><span>{{i.subtitle[1].content}}</span></div>
          </div>
          <div id="imgs" class="row dy_c_content" style="text-align: center">
            <img  class="img-responsive img-rounded" v-for="(img,idx) in i.imgs" :key="idx" :src="imgurl+img.url" alt="" style="height: 200px;margin: 10px 10px;display: inline" @click="tobig">
          </div>
          <div class="row margin_top">
            <ul class="nav">
              <li class="dy_c_nav"><a><img :src="colimg" alt="" class="dy_c" @click="tocol">&nbsp;<span ref="colnum">{{parseInt(i.cols)}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="" class="dy_p">&nbsp;<span>{{i.com}}</span></a></li>
              <li class="dy_c_nav"><a><img :src="fbsimg" alt="" class="dy_f" @click="tofbs">&nbsp;<span ref="fbsnum">{{i.fbs}}</span></a></li>
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
    <div class="motai" id="mo" ref="motai" style="vertical-align:middle;text-align: center;">
      <span class="close" id="close" ref="close" @click="toclose">×</span>
      <img class="motaiimg" id="moimg" ref="moimg">
      <div id="caption" ref="caption"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      props:{type:String,id:null},
        name: "DynamicContent",
      data:function () {
        return{
          now:(new Date()).getTime(),
          imgurl:this.GLOBAL.IMG,
          res:null,
          colimg:'../../../static/dynamic/col.png',
          fbsimg:'../../../static/dynamic/fbs.png',
          iscol:false,
          isfbs:false
        }
      },
      mounted:function () {
        this.getdate();
        this.getcol();
        this.getfbs()
      },
      methods:{
        getdate:function () {
          let that = this;
          axios.get(this.GLOBAL.HOST+'user/oneDynamic/'+this.type+'/'+this.id+'/').then(function (res) {
            that.res=[res.data];
          }).catch(function (err) {
            console.log(err);
          })
        },
        getfbs:function () {
          let that = this;
          axios.post(this.GLOBAL.HOST+'user/viewCompliment/',{
            "method":"check",
            "target":[{"type":this.type,"id":this.id,"user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']}]
          }).then(function (res) {
              if (res.data[0]['status_code']==='10020'){
                that.isfbs=false;
            }else if (res.data[0]['status_code']==='10019') {
                that.isfbs=true;
                that.fbsimg='../../../static/dynamic/isfbs.png'
              }
          }).catch(function (err) {
            console.log(err);
          })
        },
        getcol:function () {
          let that = this;
          axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
            "method":"check",
            "target":[{"type":this.type,"id":this.id,"user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']}]
          }).then(function (res) {
            if (res.data[0]['status_code']==='10017'){
              that.iscol=false
            }else if (res.data[0]['status_code']==='10016') {
              that.iscol=true;
              that.colimg='../../../static/dynamic/iscol.png'
            }
          }).catch(function (err) {
            console.log(err);
          })
        },
        tocol:function () {
          let myDate = new Date();
          let that = this;
          if (this.iscol){
            axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
              "method":"del",
              "type":this.type,
              "id":this.id,
              "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
            }).then(function (res) {
              console.log(res);
              if (res.data['status_code']==='10010'){
                that.$refs.colnum[0].innerHTML--;
                that.iscol=false;
                that.colimg='../../../static/dynamic/col.png'
              }else {
                alert(res.data['status_text'])
              }
            } ).catch(function (err) {
              console.log(err);
            })
          }else {
            axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
              "method":"add",
              "type":this.type,
              "id":this.id,
              "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
              "date":myDate.getTime()
            }).then(function (res) {
              console.log(res);
              if (res.data['status_code']==='10015'){
                that.$refs.colnum[0].innerHTML++;
                that.iscol=true;
                that.colimg='../../../static/dynamic/iscol.png'
              }else {
                alert(res.data['status_text'])
              }
            } ).catch(function (err) {
              console.log(err);
            })
          }
        },
        tofbs:function () {
          let myDate = new Date();
          let that = this;
          if (this.isfbs){
            axios.post(this.GLOBAL.HOST+'user/viewCompliment/',{
              "method":"del",
              "type":this.type,
              "id":this.id,
              "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
            }).then(function (res) {
              console.log(res);
              if (res.data['status_code']==='10010'){
                that.$refs.fbsnum[0].innerHTML--;
                that.isfbs=false;
                that.fbsimg='../../../static/dynamic/fbs.png'
              }else {
                alert(res.data['status_text'])
              }
            } ).catch(function (err) {
              console.log(err);
            })
          }else {
            axios.post(this.GLOBAL.HOST+'user/viewCompliment/',{
              "method":"add",
              "type":this.type,
              "id":this.id,
              "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
              "date":myDate.getTime()
            }).then(function (res) {
              console.log(res);
              if (res.data['status_code']==='10018'){
                that.$refs.fbsnum[0].innerHTML++;
                that.isfbs=true;
                that.fbsimg='../../../static/dynamic/isfbs.png'
              }else {
                alert(res.data['status_text'])
              }
            } ).catch(function (err) {
              console.log(err);
            })
          }
        },
        tobig:function(e) {
          let th = e.target;
          this.$refs.motai.style.display = "block";
          this.$refs.moimg.src = th.src;
          this.$refs.caption.innerHTML = th.alt
        },
        toclose:function() {
          this.$refs.motai.style.display = "none";
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




  #mo {
    display:none;
    /*隐藏*/
    width:100%;
    height:100%;
    position:fixed;
    overflow:auto;
    background-color:rgba(0,0,0,0.7);
    top:0;
    left:0;
    z-index:1;
  }
  #moimg {
    display:inline-block;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    /*margin:100px auto;*/
    width:60%;
    max-width:750px;
  }
  #caption {
    text-align:center;
    margin:15px auto;
    width:60%;
    max-height:750px;
    font-size:20px;
    color:#ccc;
  }
  #moimg,#caption {
    -webkit-animation:first 1s;
    -o-animation:first 1s;
    animation:first 1s;
  }
  @keyframes first {
    from {
      transform:scale(0.1);
    }
    to {
      transform:scale(1);
    }
  }
  .close {
     font-size:40px;
     font-weight:bold;
     position:absolute;
     top:100px;
     right:14%;
     color:#f1f1f1;
   }
  .close:hover,.close:focus {
    color:#bbb;
    cursor:pointer;
  }
</style>
