<template>
  <div class="row r-2" id="r-2">
    <div class="col-md-6">
      <!--待修改-->
      <div class="row r-2-1">
        <span class="r-2-1-span">好评</span>
      </div>
      <div class="row r-2-2">
        <div class="col-md-6 col-md-offset-3">
          <img :src="nowimg" class="r-2-img" alt="">
        </div>
      </div>
      <div class="row r-2-3">
        <img src="../../assets/search_img/fire.png" alt=""><span>热搜中</span>
        <img src="../../assets/search_img/gg.png" alt=""><span>好评中</span>
      </div>
      <div class="row r-2-4">
        <div :class="{check:index==isshow}" class="div-img" v-for="(img,index) in imgs.length<4?imgs:4" @click="checked(index)">
        <img :src="imgs[index]" alt="">
      </div>
      </div>
    </div>
    <div class="col-md-6">
      <div class="row r-2-5">
        <span class="glyphicon glyphicon-shopping-cart"></span>
        <span>{{JSON.parse(gooddetail)['name']}}{{JSON.parse(gooddetail)['Effect']}}</span>
      </div>
      <div class="row r-2-6">
        <span v-for="adapt in JSON.parse(gooddetail).adaptability">{{adapt}}</span>
      </div>
      <div class="row r-2-7">
        <span>市场价{{JSON.parse(gooddetail)['price']}}</span>
      </div>
      <div class="row r-2-8">
        <p>
          <span>产品安全简述</span>
        </p>
        <p>
          <span>本产品含有香精0种</span>
        </p>
        <p>
          <span>本产品含有防腐剂0种</span>
        </p>
        <p>
          <span>本产品含有风险成分0种</span>
        </p>
      </div>
      <div class="row r-2-9">

      </div>
      <div class="row r-2-10 r-2-8">
        <p>
          <span>产品清洁解读</span>
        </p>
        <p>
          <span>本产品含有主要功效成分2种</span>
        </p>
        <p>
          <span>本产品含有清洁成分2种</span>
        </p>
      </div>
      <div class="row r-2-9">

      </div>
      <div class="row r-2-13">
        <span>产品热度评级</span>
        <span class="glyphicon glyphicon-star" v-if="star>10"></span>
        <span class="glyphicon glyphicon-star" v-if="star>100"></span>
        <span class="glyphicon glyphicon-star" v-if="star>1000"></span>
        <span class="glyphicon glyphicon-star" v-if="star>10000"></span>
        <span class="glyphicon glyphicon-star" v-if="star>50000"></span>
      </div>
      <div class="row r-2-14">
        <img src="../../assets/search_img/已收藏.png" alt="" v-if="iscollect">
        <img src="../../assets/search_img/收藏.png" alt="" v-else>
        <span @click="collect" v-if="!iscollect">收藏</span>
        <span @click="drop" v-else>取消收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Bus from '../../bus'
    export default {
        name: "GoodDetail",
        data:function () {
          return{
            imgs:[ 'static/search_img/good-1.jpg',
                  'static/search_img/good-2.jpg',
                  'static/search_img/good-1.jpg',
                  'static/search_img/good-2.jpg'],
            isshow:0,
            nowimg:'',
            info:'',
            star:JSON.parse(this.gooddetail).fbs*10+JSON.parse(this.gooddetail).click*5+JSON.parse(this.gooddetail).cols*20,
            goodid:'',
            iscollect:false
          }
        },
        props:['gooddetail'],
        methods:{
          checked:function (index) {
            this.isshow=index
            this.nowimg=this.imgs[index]
          },
          collect:function () {
              if (sessionStorage.getItem('userInfo')) {
                let time=(new Date()).getTime();
                let userid=JSON.parse(sessionStorage.getItem('userInfo'))['user']
                axios.post(this.GLOBAL.HOST+'user/viewCollections/',
                {"method":"add","type":"commodity","id":JSON.parse(this.gooddetail).id,"user_id":userid,"date":time}
                ).then((res)=>{
                  if (res) {
                    console.log(res);
                    if (res.data.status_code==10015) {
                      this.iscollect=true
                    }
                  }
                }).catch((err)=>{
                  console.log(err);
                })
              }else {
                this.$router.push({name:'Login'})
              }
          },
          drop:function () {
            let userid=JSON.parse(sessionStorage.getItem('userInfo'))['user']
            axios.post(this.GLOBAL.HOST+'user/viewCollections/',
              {"method":"del","type":"commodity","id":JSON.parse(this.gooddetail).id,"user_id":userid}
            ).then((res)=>{
              if (res){
                console.log(res);
                if (res.data.status_code==10010) {
                  this.iscollect=false
                }else {
                  alert('删除失败')
                }
              }
            }).catch((err)=>{
              console.log(err);
            })
          }
        },
        mounted:function () {
          //自定义用户id用于测试
          let userInfo={user:1}
          window.sessionStorage.setItem('userInfo',JSON.stringify(userInfo))
          this.nowimg=this.imgs[0];

          axios.post(this.GLOBAL.HOST+'user/viewCollections/',
            {"method":"check","target":[{"type":"commodity","id":JSON.parse(this.gooddetail).id,"user_id":1}]}
          ).then((res)=>{
              if (res){
                console.log(res);
                if (res.data[0].status_code==10017) {
                  this.iscollect=false
                }else {
                  this.iscollect=true
                }
              }
          }).catch((err)=>{
            console.log(err);
          });
          let vm=this;
          Bus.$on('transfercollect', (data)=>{
            vm.iscollect = data
            console.log(vm.iscollect);
          })
        }

    }
</script>

<style scoped>
  .check{
    outline: 3px solid rgba(153, 43, 245, 0.65);
  }
  .r-2{
    background: white;
  }

  .r-2-1{
    padding-top: 15px;
    padding-left: 35px;
  }
  .r-2-1-span{
    display: inline-block;
    width: 110px;
    height: 110px;
    background-size: cover;
    border-radius: 50%;
    text-align: center;
    font-size: 1.7em;
    line-height: 110px;
  }
  .r-2-3{
    padding-left: 50px;
    font-size: 0.8em;
  }
  .r-2-3 img{
    height: 20px;
  }
  .r-2-4{
    padding-left: 50px;
    margin-top: 30px;
  }
  .r-2-4 div{
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    display: inline-block;
    width: 20%;
    margin-right: 5px;
    box-sizing: border-box;
    border: 1px solid rgba(128, 128, 128, 0.31);
  }
  .r-2-4 div img{
    width: 60px;
  }
  .r-2-5{
    padding-top: 35px;
    padding-right: 45px;
  }

  .r-2-5 span{
    font-size: 20px;
  }
  .r-2-6{
    margin-top: 50px;
  }
  .r-2-6 span{
    display: inline-block;
    padding: 3px;
    margin-left: 10px;

    border-radius: 10px;
    border: 1px solid rgba(98, 132, 34, 0.54);
    text-align: center;
    line-height: 26px;
    color: rgba(98, 132, 34, 0.6);
  }
  .r-2-6 span:hover{
    border: 1px solid rgba(57, 77, 20, 0.69);
    cursor: pointer;
    color: rgba(59, 80, 21, 0.78);
  }
  .r-2-7{
    margin-top: 30px;
  }
  .r-2-7 :first-child{
    color: #EC3E7D;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 5px;
  }
  .r-2-7 :nth-child(2){
    color: grey;
    text-decoration: line-through;
  }
  .r-2-8{
    margin-top: 60px;
  }
  .r-2-8 :first-child :first-child{
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    background:#c69a62;
    color: white;
    border-radius: 3px;
  }
  .r-2-8 p{
    margin-bottom: 12px;
  }
  .r-2-8 p :nth-child(1){
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    color: white;
    border-radius: 3px;
    background:#71d2c3;
  }
  .r-2-9{
    margin-top: 20px;
    margin-bottom: 25px;
    width: 98%;
    border-top: 1px solid rgba(111, 111, 111, 0.39);
  }
  .r-2-10{
    margin-top: 20px;
  }
  .r-2-13{
    margin-top: 30px;
  }
  .r-2-13 :nth-child(1){
    letter-spacing: 5px;
  }
  .r-2-14{
    margin-top: 45px;
    margin-bottom: 50px;
  }
  .r-2-14 img{
    width: 16px;
    height: 16px;
    margin-bottom: 4px;
  }
  .r-2-14 img,.r-2-14 span:hover{
    cursor: pointer;
  }
</style>
