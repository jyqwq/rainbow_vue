<template>
  <div class="comment-area all_dy">
    <div class="row">
      <div class="col-lg-2 dy_c_icon" style="margin-top: 15px"><img src="../../assets/usericon.png" alt="" class="img-circle my_icon"></div>
      <div class="col-lg-8 dy_c_content">
        <div class="row dy_c_content my_com">
          <textarea class="form-control dy_text" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" rows="3" maxlength="140"   ref="dy_text" @keyup="num"></textarea>
          <div class="row row_margin" style="float: right;margin-right: 0;margin-top: 5px;">
            <span class="content_margin remind_text" ref="remind_text">140</span>
            <button type="button" class="btn btn-primary content_margin comment_btn" @click="comment">评论</button>
          </div>
        </div>
        <div class="row dy_c_content line"></div>
        <div class="row dy_c_content dy_comment">
          <!--评论区-->
          <div class="com_one" v-for="(c,idx) in res" :key="idx">
            <div class="col-lg-1 dy_c_icon" style="margin-top: 5px"><img :src="GLOBAL.IMG+c.userInfo.icon" alt="" class="img-circle"></div>
            <div class="col-lg-11 dy_c_content">
              <div class="row" style="margin-left: 10px">
                <span><strong>{{c.userInfo.name}}</strong></span>
                <br>
              </div>
              <div class="row" style="margin-left: 10px">
                <span>{{c.content}}</span>
              </div>
              <br>
              <div class="row" style="margin-left: 10px;color: darkgrey">
                <span>{{'#'+(idx+1)}}</span>
                <span style="color: darkgrey;font-size: 0.8em;margin-left: 15px">{{GLOBAL.TIME(now-c.date)}}</span>
              </div>
              <div class="row dy_c_content line"></div>
            </div>
          </div>
        </div>
        <div class="row" style="text-align: center;margin-top: 10px;margin-bottom: 10px">没有更多啦(〜￣△￣)〜</div>
      </div>
      <div class="col-lg-2 margin_top">

      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      props:{type:String,id:null},
      inject:['reload'],
        name: "CommentArea",
      data:function () {
        return{
          now:(new Date()).getTime(),
          res:null
          // i:[{'userInfo':{'name':''},'date':'','tags':'','title':'','content':'','subtitle':[{'title':'','content':''},{'title':'','content':''}],'cols':'','com':'','fbs':'','type':''}],
        }
      },
      mounted:function () {
        this.getdate()
      },
      methods:{
        getdate:function () {
          let that = this;
          axios.post(this.GLOBAL.HOST+'user/viewComment/',{
            "method":"check",
            "target":[{"type":this.type,"id":this.id}]
          }).then(function (res) {
            that.res=res.data;
          }).catch(function (err) {
            console.log(err);
          })
        },
        num:function () {
          this.$refs.remind_text.innerText=140-(this.$refs.dy_text.value.length);
        },
        comment:function () {
          if (sessionStorage.getItem('userInfo')){
           if (this.$refs.dy_text.value){
             let that = this;
             let com = this.$refs.dy_text.value;
             let myDate = new Date();
             axios.post(this.GLOBAL.HOST+'user/viewComment/',{
               "method":"add",
               "type":this.type,
               "id":this.id,
               "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
               "content":com,
               "date":myDate.getTime()
             }).then(function (res) {
               console.log(res);
               if (res.data['status_code']==='10021'){
                 that.reload()
               }else {
                 alert(res.data['status_text'])
               }
             }).catch(function (err) {
               console.log(err);
             })
           } else {
             alert('写点什么吧~~~')
           }
          } else {
            this.$router.push({path:'/login'})
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
  .dy_c_icon{
    text-align: center;
  }
  .dy_c_content{
    margin-top: 5px;
  }
  .margin_top{
     text-align: center;
     margin-top: 5px;
   }
  .dy_text{
    resize: none;
  }
  .content_margin{
    margin-left: 15px;
  }
  .remind_text{
    font-size: 0.9em;
    color: rgba(128,128,128,0.6);
  }
  .line{
    border-top: 1px solid #dadada;
  }
</style>
