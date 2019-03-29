<template>
  <div class="row r-3-6"id="r-3-6" name="reviews">
    <div class="row r-3-6-main">
      <div class="col-md-12">
        <span>用户评价</span>&nbsp;&nbsp;
        <span class="s-2">Reviews</span>
        <div class="row r-3-6-1">
          <p>
            <span class="s-3">{{comments.length}}</span>
            <span>条评价</span>
          </p>
        </div>
        <div class="row r-3-6-2" v-for="i in comments">
          <div class="col-md-2">
            <img src="../../assets/search_img/usericon.png" alt=""><br>
            普通会员 <br>
            {{i.userInfo.name}}
          </div>
          <div class="col-md-6">
            <div class="reviews">
              <span>{{i.content.slice(0,5)+'...'}}</span>

              <div class="row r-3-6-2-content">
                <p>{{i.content}}</p>
                <p>
                  {{new Date(parseInt(i.date)).toLocaleString().replace(/:\d{1,2}$/,' ')  }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row r-3-6-btn">
      <div class="col-md-12">
        <div class="row" style="text-align: center;margin-top: 10px;margin-bottom: 10px">没有更多啦(〜￣△￣)〜</div>
        <div class="comment-area all_dy">
          <div class="row">
            <div class="col-lg-8 dy_c_content" id="dy_c_content">
              <div class="row dy_c_content my_com">
                <textarea class="form-control dy_text" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" rows="5" maxlength="140" v-model="content"></textarea>
                <div class="row row_margin" style="float: right;margin-right: 0;margin-top: 5px;">
                  <span class="content_margin remind_text">140</span>
                  <button type="button" class="btn btn-primary content_margin comment_btn" @click="comment">评论</button>
                </div>
              </div>
              <div class="row dy_c_content line"></div>
              <div class="row dy_c_content dy_comment">
                <!--评论区-->
              </div>

            </div>
            <div class="col-lg-2 margin_top">

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Comments",
        data:function () {
          return{
            comments:'',
            content:''
          }
        },
        props:['id'],
        mounted:function () {
          axios.post(this.GLOBAL.HOST+'user/viewComment/',{
            "method":"check",
            "target":[{"type":"commodity","id":this.id}]
          }).then((res)=>{
            if (res){
              this.comments=res.data;
              console.log(this.comments);
            }
          }).catch((err)=>{
            console.log(err);
          })
        },
        methods:{
          comment:function () {
            let date=(new Date()).getTime()
            axios.post(this.GLOBAL.HOST+'user/viewComment/',{
              "method":"add",
              "type":"commodity",
              "id":this.id,
              "user_id":1,
              "content":this.content,
              "date":date
            }).then((res)=>{
              if (res.data.status_code==10021) {
                this.content=''
                axios.post(this.GLOBAL.HOST+'user/viewComment/',{
                  "method":"check",
                  "target":[{"type":"commodity","id":this.id}]
                }).then((res)=>{
                  if (res){
                    this.comments=res.data
                  }
                }).catch((err)=>{
                  console.log(err);
                })
              }else {
                alert('评论失败')
              }

            }).catch((err)=>{
              console.log(err);
            });
          }
        },

    }
</script>

<style scoped>
  #r-3-6{
    margin-top: 28px;
    background: white;
    padding-top: 20px;
    margin-right: 0px;
  }
  .r-3-6 p{
    margin-top: 60px;
    margin-left: 30px;
  }
  .r-3-6-1{
    margin-bottom: 20px;
  }
  .r-3-6-1 p span{
    font-family: Andalus;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 10px;
  }
  .r-3-6 .s-3{
    font-size: 2.6em;
  }
  .r-3-6-2 {
    margin-top: 80px;
    margin-bottom: 20px;

  }
  .r-3-6-2 .col-md-2{
    text-align: center;
  }
  .r-3-6-2 img{
    width: 60px;
    height: 60px;
  }
  .r-3-6-2 .reviews{
    width: 620px;
    height: 200px;
    background: #f2f2f2;
    box-sizing: border-box;
    padding: 25px;
  }
  .reviews+:nth-child(1){
    font-size: 1.5em;
    color: #EC3E7D;
    margin-right: 200px;
  }
  .r-3-6-2-content{
    border-top: 1px solid #EC3E7D;
    padding: 15px;
  }
  .r-3-6-2-content p{
    margin-top: 0px;
    margin-left: 0px;
  }
  .r-3-6-2-content :nth-child(2){
    margin-top: 60px;
    color: rgba(64, 64, 64, 0.55);
  }
  .r-3-6 span{
    font-size: 20px;
    padding-top: 20px;
    padding-left: 25px;
  }
  .r-3-6 .s-2,.r-3-6 .s-3{
    color: #EC3E7D;
  }



  /*评论栏目*/
  .dy_c,.dy_f,.dy_p{
    cursor: pointer;
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

  .margin_top{
    text-align: center;
    margin-top: 5px;
  }

  #dy_c_content{
    margin-top: 60px;
    margin-left: 186px;
  }
  #search:hover{
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }
  #search:focus{
    color: white;
    outline: 0px;
  }
</style>
