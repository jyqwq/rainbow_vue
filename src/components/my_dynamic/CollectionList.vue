<template>
  <!--收藏夹页-->
  <div class="dy_ajax" ref="all" style="margin-top: 20px">
    <!--关注动态ajax-->
    <div class="row all_dy dy_margin" v-if="res" v-for="(i,index) in res" :key="index" :data-type="i.type">
      <div class="row">
        <div class="col-lg-2 dy_c_content dy_c_icon"><img :src="GLOBAL.IMG+i.userInfo.icon" alt="" class="img-circle"></div>
        <div class="col-lg-8 dy_c_content"  style="overflow: hidden">
          <div class="row">
            <span><strong style="font-size: 1.1em">{{i.userInfo.name}}</strong></span>
            <br>
            <span style="color: darkgrey;font-size: 0.9em">收藏于{{GLOBAL.TIME(now-i.date)}}</span>
            <div class="dy_tags">
              <div class="one_tag" v-for="(j,idx) in i.colInfo.tags.split(',')" :key="idx" v-if="j">{{j}}</div>
            </div>
          </div>
          <div class="row dy_c_content">
            <span class="to_one" style="font-size: 1.1em;font-weight: bold;margin-left: 35%"  @click="tocom">{{i.colInfo.type==='dynamic'? '':((i.colInfo.title).length>10? (i.colInfo.title).slice(0,10)+'...':i.colInfo.title)}}</span>
            <span style="display: none">{{index}}</span><span style="display: none">{{i.user_id}}</span>
            <br>
            <span class="to_one" @click="tocom">{{i.colInfo.type==='test'? i.colInfo.subtitle[0].title:((i.colInfo.content).length>50? (i.colInfo.content).slice(0,50)+'...':i.colInfo.content)}}</span>
            <span style="display: none">{{index}}</span><span style="display: none">{{i.user_id}}</span>
            <br>
            <span class="to_one" @click="tocom">{{i.colInfo.type==='test'? i.colInfo.subtitle[1].title:''}}</span>
            <span style="display: none">{{index}}</span><span style="display: none">{{i.user_id}}</span>
          </div>
          <div class="row dy_c_content" style="text-align: center" ref="allimg">
            <img  class="img-responsive img-rounded" v-for="(img,idx) in i.imgs" :key="idx" :src="imgurl+img.url" alt="" style="height: 200px;margin: 10px 10px;display: inline;cursor: pointer" @click="tobig">
          </div>
          <div class="row margin_top">
            <ul class="nav">
              <li class="dy_c_nav"><a><img :src="colimg[index]" alt="" class="dy_c" @click="tocol"><span style="display: none">{{index}}</span><span style="display: none">{{i.user_id}}</span>&nbsp;<span>{{i.colInfo.cols}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="" class="dy_p" @click="tocom"><span style="display: none">{{index}}</span>&nbsp;<span>{{i.colInfo.com}}</span></a></li>
              <li class="dy_c_nav"><a><img :src="fbsimg[index]" alt="" class="dy_f" @click="tofbs"><span style="display: none">{{index}}</span><span style="display: none">{{i.user_id}}</span>&nbsp;<span>{{i.colInfo.fbs}}</span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 margin_top">
          <div class="dy_type" style="display: none">{{i.colInfo.type}}</div>
          <div class="dy_id" style="display: none">{{i.id}}</div>
          <div class="dy_user" style="display: none">{{i.user_id}}</div>
          <img src="../../assets/mood.png" alt="" v-if="i.colInfo.type==='dynamic'">
          <img src="../../assets/diary.png" alt="" v-if="i.colInfo.type==='dairy'">
          <img src="../../assets/evaluation.png" alt="" v-if="i.colInfo.type==='test'">
        </div>
      </div>
    </div>
    <div class="row all_dy dy_margin" v-else><h1>还没有任何收藏</h1></div>
    <div class="motai" id="mo" ref="motai">
      <span class="close" id="close" ref="close" @click="toclose">×</span>
      <img class="motaiimg" id="moimg" ref="moimg">
      <div id="caption" ref="caption"></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
    export default {
      name: "CollectionList",
      data:function(){
        return{
          now:(new Date()).getTime(),
          imgurl:this.GLOBAL.IMG,
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
      mounted:function () {
        this.getdata()
      },
      methods:{
        getdata:function () {
          let that = this;
          let uid = JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
            "method":"check",
            "target":[{"type":"dynamic","user_id":uid},{"type":"dairy","user_id":uid},{"type":"test","user_id":uid}]
          }).then(function (res) {
            console.log(res);
            let alldata=[];
            let target = [];
            for (let i=0;i<res.data.length;i++){
              if (res.data[i]['status_code']==='10016'){
                alldata.push(res.data[i]);
                let t = res.data[i]['colInfo']['type'];
                let id = res.data[i]['colInfo']['id'];
                let one = {"type":t,"id":id,"user_id":uid};
                target.push(one);
                that.colimg.push('../../../static/dynamic/iscol.png');
                that.fbsimg.push('../../../static/dynamic/fbs.png');
                that.iscol.push(true);
                that.isfbs.push(false);
                that.alltype.push(t);
                that.allid.push(id)
              } else {
                console.log(res.data[i]['status_text']);
              }
            }
            that.res=alldata;
            // console.log(alldata);
            // console.log(that.colimg);
            // console.log(that.fbsimg);
            // console.log(that.iscol);
            // console.log(that.isfbs);
            // console.log(that.alltype);
            // console.log(that.allid);
            if (target){
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
            }
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
                eve.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML--;
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
                eve.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML++;
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
                eve.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML--;
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
                eve.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML++;
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
          let this_userid = parseInt(eve.nextElementSibling.nextElementSibling.innerHTML);
          this.$router.push({path:'/dynamic_detail/'+this_userid+'/'+this.alltype[no]+'/'+this.allid[no]})
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
