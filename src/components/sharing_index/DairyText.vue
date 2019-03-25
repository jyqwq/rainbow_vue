<template>
  <div class="row row_margin dairy_row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div class="row row_margin">
        <h4 class="row_margin">标题</h4>
        <input type="text" class="form-control row_margin" maxlength="50" placeholder="给今天写个标题吧,字数上限为50"  ref="da_title">
        <h4 class="row_margin">内容</h4>
        <textarea class="form-control dairy_text row_margin" cols="30" rows="10" placeholder="今天发生了什么呢~~" ref="da_text"></textarea>
        <div class="row row_margin pic_show" style="display: none;">
          <!--图片预览区-->
        </div>
        <write-tags ref="mytag"></write-tags>
        <release-btn @rr="release"></release-btn>
      </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import WriteTags from './WriteTags'
  import ReleaseBtn from './ReleaseBtn'
  export default {
        name: "DiaryText",
    components:{
      'write-tags':WriteTags,
      'release-btn':ReleaseBtn
    },
    data:function () {
      return{

      }
    },
    methods:{
      release:function () {
        let that = this;
        let content = this.$refs.da_text.value;
        let title = this.$refs.da_title.value;
        let myDate = new Date();
        if (content && title){
          let tag = this.$refs.mytag.check();
          let user_id = JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          axios.post(this.GLOBAL.HOST+'sharing/releaseSharing/',{
            "type":"dairy",
            "title":title,
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

  .margin_end{
    margin-bottom: 50px;
  }


  /*心情部分*/
  .row_margin{
    margin-top: 30px;
  }

  .content_margin{
    margin-left: 15px;
  }

  .release_btn{
    background: #f7c5c9;
    border: solid 1px #f7c5c9;
  }
  .release_btn:hover{
    background: #deadb1;
    border: solid 1px #deadb1;
  }

  /*日记部分*/
  .dairy_text{
    resize: none;
  }
</style>
