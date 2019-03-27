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
            <span style="color: darkgrey;font-size: 0.9em">{{i.date}}</span>
            <div class="dy_tags">
              <div class="one_tag" v-for="(j,idx) in i.tags.split(',')" :key="idx">{{j}}</div>
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
          <div class="row dy_c_content">
            <img src="" alt="">
          </div>
          <div class="row margin_top">
            <ul class="nav">
              <li class="dy_c_nav"><a><img :src="colimg" alt="" class="dy_c" @click="tocol">&nbsp;<span>{{i.cols}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="" class="dy_p">&nbsp;<span>{{i.com}}</span></a></li>
              <li class="dy_c_nav"><a><img :src="fbsimg" alt="" class="dy_f">&nbsp;<span>{{i.fbs}}</span></a></li>
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
      props:{type:String,id:null},
        name: "DynamicContent",
      data:function () {
        return{
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
        getcol:function () {
          let that = this;
          axios.post(this.GLOBAL.HOST+'user/viewCompliment/',{
            "method":"check",
            "target":[{"type":this.type,"id":this.id,"user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']}]
          }).then(function (res) {
            console.log(res.data[0]['status_code']);
              if (res.data[0]['status_code']==='10020'){
                console.log('未赞');
                that.isfbs=false;
            }else if (res.data[0]['status_code']==='10019') {
                console.log('已赞');
                that.isfbs=true;
                that.fbsimg='../../../static/dynamic/isfbs.png'
              }
          }).catch(function (err) {
            console.log(err);
          })
        },
        getfbs:function () {
          let that = this;
          axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
            "method":"check",
            "target":[{"type":this.type,"id":this.id,"user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']}]
          }).then(function (res) {
            console.log(res.data[0]);
            if (res.data[0]['status_code']==='10017'){
              console.log('未收藏');
              that.iscol=false
            }else if (res.data[0]['status_code']==='10016') {
              console.log('已收藏');
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
            }).then(fun )
          }
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
