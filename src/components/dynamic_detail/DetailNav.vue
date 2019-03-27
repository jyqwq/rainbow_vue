<template>
  <div class="row all_dy dy_margin dy_nav" style="margin-top: 90px">
    <div class="col-lg-4 xs_padding">
      <div role="presentation" class="tag-item"><a class="dy_m_nav one_tag theindex">他的主页</a></div>
    </div>
    <div class="col-lg-4 xs_padding">
      <div role="presentation" class="tag-item"><a class="dy_m_nav one_tag follow" @click="tofollow">{{isfollow? '已关注':'关注'}}</a></div>
    </div>
    <div class="col-lg-4 xs_padding">
      <div role="presentation" class="tag-item"><a class="dy_m_nav one_tag back" @click="back">返回</a></div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
      props:{user_id:null},
        name: "DetailNav",
      data:function () {
        return{
          isfollow:false
        }
      },
      mounted:function () {
        this.getfollow()
      },
      methods:{
        getfollow:function () {
          let that = this;
          if (sessionStorage.getItem('userInfo')) {
            axios.post(this.GLOBAL.HOST+'user/viewConcern/',{
              "method":"check",
              "concern_id":this.user_id,
              "follower_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
            }).then(function (res) {
              if (res.data[0]['status_code']==='10011'){
                that.isfollow=true
              }else if (res.data[0]['status_code']==='10012') {
                that.isfollow=false
              }else {
                that.isfollow=false;
                console.log(res.data[0]['status_text']);
              }
            }).catch(function (err) {
              console.log(err);
            })
          }else {
            this.isfollow=false
          }
        },
        tofollow:function () {
          if (sessionStorage.getItem('userInfo')){
            let that = this;
            if (this.isfollow){

              axios.post(this.GLOBAL.HOST+'user/viewConcern/',{
                "method":"del",
                "concern_id":this.user_id,
                "follower_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
              }).then(function (res) {
                if (res.data['status_code']==='10010'){
                  that.isfollow=false
                }else {
                  alert(res.data['status_text'])
                }

              }).catch(function (err) {
                console.log(err);
              })
            } else {
              let mydate = new Date();
              axios.post(this.GLOBAL.HOST+'user/viewConcern/',{
                "method":"add",
                "concern_id":this.user_id,
                "follower_id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],
                "date":mydate.getTime()
              }).then(function (res) {
                if (res.data['status_code']==='10009'){
                  that.isfollow=true
                }else {
                  alert(res.data['status_text'])
                }
              }).catch(function (err) {
                console.log(err);
              })
            }
          }else {
            this.$router.push({path:'/login'})
          }
        },
        back:function () {
          this.$router.go(-1)
        }
      }
    }
</script>

<style scoped>
  a:hover{
    text-decoration: none;
  }
  .all_dy{
    background: #e9faff;
    border-radius: 5px;
  }

  .dy_margin{
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 10px;
  }

  .dy_nav{
    height: 50px;
    line-height: 47px;
  }

  .xs_padding{
    padding: 0 3px;
    text-align: center;
  }

  .dy_m_nav{
    color: lightpink;
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
    cursor: pointer;
  }
  .tag-item{
    margin-top: 10px;
    margin-left: 80px;
  }
</style>
