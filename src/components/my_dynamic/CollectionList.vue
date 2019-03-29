<template>
  <!--收藏夹页-->
  <div class="qz_collect text_active" style="zoom:1;overflow: hidden;margin-top: 50px">
    <div v-if="res.status_code==='10017'"></div>
    <div v-else v-for="(dy,index) in res" :key="index" class="row all_dy dy_margin">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-1 dy_c_content dy_c_icon"><img src="" class="img-responsive" alt="Responsive image"></div>
        <div class="col-lg-8 dy_c_content" style="overflow: hidden">
          <div class="row">
            <span>
              <strong style="font-size: 1.1em">昵称</strong>
              <div style="margin-top: -18px;margin-left: 38px;">
                <img @click="delete_dy" src="../../assets/my_dynamic/delete.png" class="img-responsive" alt="Responsive image">
              </div>
            </span>
            <br>
            <div class="font_time" style="color: darkgrey;font-size: 0.9em">
              <span class="rel_time">{{dy.date}}</span>
            </div>
            <div class="dy_tags">
              <div v-for="tag in dy.colInfo.tags.split(',')" class="one_tag">{{tag}}</div>
            </div>
          </div>
          <div class="row dy_c_content to_one">
            <!--动态-->
            <div v-if="dy.type==='dynamic'" class="qz_dinf">{{(dy.content).length>50? (dy.content).slice(0,50)+'...':dy.content }}</div>
            <!--日记-->
            <span v-if="dy.type==='dairy'" style="font-size: 1.1em"><strong>{{(dy.title).length>10? (dy.title).slice(0,10)+'...':dy.title}}</strong><br>{{dy.ceshiceshi}}</span>
            <!--测评-->
            <span v-if="dy.type==='test'" style="font-size: 1.1em"><strong>{{dy.content}}</strong><br>{{dy.subtitle[0].title}}<br>{{dy.subtitle[1].title}}</span>
          </div>
          <div class="row">
            <div class="col-lg-5">
              <div class="row dy_c_content">
                <img src="" class="img-responsive" alt="Responsive image">
              </div>
            </div>
          </div>
          <div class="row margin_top">
            <ul class="nav">
              <li class="dy_c_nav"><a><img @click="click_col" :src="colspic[index]" alt="" class="dy_c"><span style="display: none">{{index}}</span>&nbsp;<span>{{dy.cols}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="1" class="dy_p">&nbsp;<span>{{dy.com}}</span></a></li>
              <li class="dy_c_nav"><a><img @click="click_fab" :src="fbspic[index]" alt="" class="dy_f"><span style="display: none">{{index}}</span>&nbsp;<span>{{dy.fbs}}</span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 margin_top">
          <div class="dy_type" style="display: none">{{dy.colInfo.type}}</div>
          <div class="dy_id" style="display: none">{{dy.id}}</div>
          <img src="../../assets/my_dynamic/dy_like.png" alt="">
        </div>
      </div>
      <!--分割线-->
      <div class="qz_line"></div>
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
          res:'',
          colspic:[],
          fbspic:[],
          colsflag:[],
          fbsflag:[],
          dyid:[],
          alltype:[]
        }
      },
      mounted:function () {
        let user_id=JSON.parse(sessionStorage.getItem('userInfo'))['user'];
        let that = this;
        axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
          "method":"check",
          "target":[
            {"type":"dynamic","user_id":user_id},
            {"type":"dairy","user_id":user_id},
            {"type":"test","user_id":user_id},
            ]
        })
          .then(function (response) {
            that.res=response.data;
            let targets=[];
            for (let i=0;i<that.res.length;i++){
              let id=that.res[i].colInfo.id;
              let type=that.res[i].colInfo.type;
              let target={"type":type, "id":id, "user_id":user_id};
              that.dyid.push(id);
              that.alltype.push(type);
              targets.push(target)
            }
            // 查-当前用户是否点赞
            axios.post(that.GLOBAL.HOST+'user/viewCompliment/',{
              "method":"check",
              "target":targets})
              .then(function (response) {
                for (let j=0;j<response.data.length;j++){
                  if (response.data[j].status_code==='10020') {
                    that.colspic.push('../../../static/dynamic/col.png');
                    that.colsflag.push(false)
                  }else if (response.data[j].status_code==='10019') {
                    that.colspic.push('../../../static/dynamic/iscol.png');
                    that.colsflag.push(true)
                  }
                }
              })
              .catch(function (error) {
                console.log(error);
              });
            // 查-当前用户是否收藏
            axios.post(that.GLOBAL.HOST+'user/viewCollections/',{
              "method":"check",
              "target":targets})
              .then(function (response) {
                for (let j=0;j<response.data.length;j++){
                  if (response.data[j].status_code==='10017') {
                    that.fbspic.push('../../../static/dynamic/fbs.png');
                    that.fbsflag.push(false)
                  }else if (response.data[j].status_code==='10016') {
                    that.fbspic.push('../../../static/dynamic/isfbs.png');
                    that.fbsflag.push(true)
                  }
                }
              })
              .catch(function (error) {
                console.log(error);
              })
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      methods:{
        // 删除单个收藏
        delete_dy:function () {
          let that=this;
          let node = event.target;
          axios.post(this.GLOBAL.HOST+'user/viewCollections/',{
            "method":"del",
            "type":node.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[0].innerHTML,
            "id":node.parentElement.parentElement.parentElement.parentElement.nextElementSibling.children[1].innerHTML,
            "user_id":JSON.parse(sessionStorage.getItem('userInfo'))['user']
          }
            ).then(function (response) {
            node.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none'
          })
            .catch(function (error) {
              console.log(error);
            })
        },
        // 收藏，取消收藏
        click_col:function (event) {
          console.log('ok');
          let node=event.target;
          let myDate = new Date();
          let that=this;
          let index=node.nextElementSibling.innerHTML;
          let user_id=JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          console.log(this.colsflag[index]);
          if(this.colsflag[index]){
            // 删-收藏
            axios.post(this.GLOBAL.HOST+'user/viewCollections/',
              {"method":"del",
                "type":this.alltype[index],
                "id":this.dyid[index],
                "user_id":user_id})
              .then(function (response) {
                if (response.data.status_code==='10010') {
                  console.log('删除成功');
                  Vue.set(that.colspic, index, '../../../static/dynamic/col.png');
                  Vue.set(that.colsflag, index, false);
                  node.nextElementSibling.nextElementSibling.innerHTML--;
                }else {
                  console.log(response.data.status_code);
                }
              })
              .catch(function (error) {
                console.log(error);
              })} else {
            // 增-收藏
            axios.post(this.GLOBAL.HOST+'user/viewCollections/',
              {"method":"add",
                "type":this.alltype[index],
                "id":this.dyid[index],
                "user_id":user_id,
                "date":myDate.getTime()})
              .then(function (response) {
                if (response.data.status_code==='10015') {
                  console.log('收藏成功');
                  Vue.set(that.colspic, index, '../../../static/dynamic/iscol.png');
                  Vue.set(that.colsflag, index, true);
                  node.nextElementSibling.nextElementSibling.innerHTML++;
                }else {
                  console.log(response.data.status_code);
                }
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        },
        // 点赞，取消赞
        click_fab:function (event) {
          let node=event.target;
          let myDate = new Date();
          let that=this;
          let index=node.nextElementSibling.innerHTML;
          let user_id=JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          if(this.fbsflag[index]){
            // 删-点赞
            axios.post(this.GLOBAL.HOST+'user/viewCompliment/',
              {"method":"del",
                "type":this.alltype[index],
                "id":this.dyid[index],
                "user_id":user_id})
              .then(function (response) {
                if (response.data.status_code==='10010') {
                  console.log('删除成功');
                  Vue.set(that.fbspic, index, '../../../static/dynamic/fbs.png');
                  Vue.set(that.fbsflag, index, false);
                  node.nextElementSibling.nextElementSibling.innerHTML--;
                }else {
                  console.log(response.data.status_code);
                }
              })
              .catch(function (error) {
                console.log(error);
              })} else {
            // 增-点赞
            axios.post(this.GLOBAL.HOST+'user/viewCompliment/',
              {"method":"add",
                "type":this.alltype[index],
                "id":this.dyid[index],
                "user_id":user_id,
                "date":myDate.getTime()})
              .then(function (response) {
                if (response.data.status_code==='10018') {
                  console.log('赞成功');
                  Vue.set(that.fbspic, index, '../../../static/dynamic/isfbs.png');
                  Vue.set(that.fbsflag, index, true);
                  node.nextElementSibling.nextElementSibling.innerHTML++;
                }else {
                  console.log(response.data.status_code);
                }
              })
              .catch(function (error) {
                console.log(error);
              })
          }
        }
      }
    }

</script>

<style scoped>
  /*全局*/
  /*分割线*/
  .qz_line{
    height: 1px;
    margin: 5px;
    background: #EEEEEE;
  }
  /*收藏夹页开始*/
  .qz_collect{
    margin: 15px 0;
  }
  .all_dy{
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
    text-align: right;
  }
  .dy_c_icon img{
    border-radius: 5px;
  }
  .dy_tags{
    float: right;
  }
  .font_full{
    display: none;
  }
  .font_full:hover{
    cursor: pointer;
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
  /*动画*/
  .text_active{
    animation: fadeInUp 1s;
  }
</style>
