<template>
  <div class="row row_margin dy_row text_active">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <textarea class="form-control dy_text" placeholder="说出你的心情吧~~" rows="5" maxlength="140"  ref="dy_text" @keyup="num"></textarea>
      <div class="row row_margin">
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="content_margin remind_text" ref="remind_text">140</span>
      </div>
      <div class="row row_margin pic_show" style="display: none;">
        <!--图片预览区-->
      </div>
      <write-tags ref="mytag"></write-tags>
      <release-btn @rr="release"></release-btn>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import WriteTags from './WriteTags'
  import ReleaseBtn from './ReleaseBtn'
  export default {
        name: "MoodText",
      components:{
        'write-tags':WriteTags,
        'release-btn':ReleaseBtn
      },
      methods:{
          num:function () {
            this.$refs.remind_text.innerText=140-(this.$refs.dy_text.value.length);
          },
        release:function () {
          let that = this;
          let content = this.$refs.dy_text.value;
          let myDate = new Date();
          if (content){
            let tag = this.$refs.mytag.check();
            let user_id = JSON.parse(sessionStorage.getItem('userInfo'))['user'];
            axios.post(this.GLOBAL.HOST+'sharing/releaseSharing/',{
              "type":"dynamic",
              "content":content,
              "tags":tag,
              "date":myDate.getTime(),
              "user_id":user_id
            }).then(function (res) {
              let txt = res.data;
              if (parseInt(txt['status_code'])===10008){
                that.$router.push({path:'/sharing_index/success'})
              }else {
                that.$router.push({path:'/sharing_index/defeat/'+txt['status_code']+'/'+txt['status_text']})
              }
            }).catch(function (err) {
              console.log(err);
            })
          } else {
            alert('写点什么吧~~~')
          }
        }
      }

    }
</script>

<style scoped>
  .dy_text{
    resize: none;
  }
  .row_margin{
    margin-top: 20px;
  }
  .remind_text{
    font-size: 0.9em;
    color: rgba(128,128,128,0.6);
  }
</style>
