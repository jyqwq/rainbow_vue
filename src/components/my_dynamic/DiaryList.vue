<template>
  <!--日记本页-->
  <div class="qz_dynamic" style="zoom:1;overflow: hidden;margin-top: 50px">
    <div v-for="(dy,index) in res" :key="index" class="row all_dy dy_margin">
      <div class="row">
        <div class="col-lg-1"></div>
        <div class="col-lg-1 dy_c_content dy_c_icon"><img src="" class="img-responsive" alt="Responsive image"></div>
        <div class="col-lg-8 dy_c_content" style="overflow: hidden">
          <div class="row">
            <span><strong style="font-size: 1.1em">昵称</strong>
              <div style="margin-top: -18px;margin-left: 38px;">
                <img src="../../assets/my_dynamic/delete.png" class="img-responsive" alt="Responsive image">
              </div>
            </span>
            <br>
            <div class="font_time" style="color: darkgrey;font-size: 0.9em">
              <span class="rel_time">{{dy.date}}</span>
            </div>
            <div class="dy_tags">
              <div v-for="tag in dy.tags.split(',')" class="one_tag">{{tag}}</div>
            </div>
          </div>
          <div class="row dy_c_content to_one">
            <!--动态-->
            <div v-if="dy.type==='dynamic'" class="qz_dinf">{{dy.content}}</div>
            <!--日记-->
            <span v-if="dy.type==='dairy'" style="font-size: 1.1em"><strong>{{dy.title}}</strong><br>{{dy.ceshiceshi}}</span>
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
              <li class="dy_c_nav"><a><img src="" alt="${col.alt}" class="dy_c">&nbsp;<span>{{dy.cols}}</span></a></li>
              <li class="dy_c_nav"><a><img src="../../assets/my_dynamic/dy_comment.png" alt="1" class="dy_p">&nbsp;<span>{{dy.com}}</span></a></li>
              <li class="dy_c_nav"><a><img src="" alt="${com.alt}" class="dy_f">&nbsp;<span>{{dy.fbs}}</span></a></li>
            </ul>
          </div>
        </div>
        <div class="col-lg-2 margin_top">
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
    export default {
      name: "DiaryList",
      data:function(){
        return{
          res:''
        }
      },
      mounted:function () {
        let that = this;
        axios.get(this.GLOBAL.HOST+'user/myDynamics/1/1/')
          .then(function (response) {
            that.res=response.data;
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }

</script>

<style scoped>
  /*分割线*/
  .qz_line{
    height: 1px;
    margin: 5px;
    background: #EEEEEE;
  }

  /*收藏夹页样式*/
  .qz_collect{
    margin: 15px 0;
  }


  /*日记本，收藏夹页开始*/
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
  /*日记本，收藏夹页结束*/
  .text_active{
    animation: fadeInUp 1s;
  }
  /*收纳盒页结束*/

</style>
