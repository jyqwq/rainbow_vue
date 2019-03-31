<template>
  <div class="row row_margin test_row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div class="row row_margin">
        <h4 class="row_margin">标题</h4>
        <input type="text" class="form-control row_margin" maxlength="50" placeholder="你想说说哪种产品呢,字数上限为50" ref="t_title">
        <h4 class="row_margin">内容</h4>
        <textarea class="form-control dairy_text row_margin" cols="30" rows="5" placeholder="说说总体感觉吧~~" ref="t_content"></textarea>
        <h4 class="row_margin">副标题一</h4>
        <input type="text" class="form-control row_margin" maxlength="50" placeholder="这里可以是产品分析,安全分析,总结等等,字数上限为50" ref="t_title1">
        <h4 class="row_margin">内容</h4>
        <textarea class="form-control dairy_text row_margin" cols="30" rows="5" placeholder="具体点呢~~" ref="t_content1"></textarea>
        <h4 class="row_margin">副标题二</h4>
        <input type="text" class="form-control row_margin" maxlength="50" placeholder="这里可以是产品分析,安全分析,总结等等,字数上限为50" ref="t_title2">
        <h4 class="row_margin">内容</h4>
        <textarea class="form-control dairy_text row_margin" cols="30" rows="5" placeholder="具体点呢~~" ref="t_content2"></textarea>

        <div class="row row_margin pic_show">
          <upload-image ref="getimg"></upload-image>
        </div>
        <write-tags ref="mytag"></write-tags>
        <release-btn :name="'发  布'" @rr="release"></release-btn>
      </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  import WriteTags from './WriteTags'
  import ReleaseBtn from './ReleaseBtn'
  import UploadImage from './UploadImage'
  export default {
        name: "EvaluationText",
    components:{
      'write-tags':WriteTags,
      'release-btn':ReleaseBtn,
      'upload-image':UploadImage
    },
    methods:{
      release:function () {
        let that = this;
        let content = this.$refs.t_content.value;
        let title = this.$refs.t_title.value;
        let title1 = this.$refs.t_title1.value;
        let title2 = this.$refs.t_title2.value;
        let content1 = this.$refs.t_content1.value;
        let content2 = this.$refs.t_content2.value;
        let myDate = new Date();
        if (content && title && title1 && title2 && content1 && content2){
          let qiniu = require('qiniu-js');
          let tag = this.$refs.mytag.check();
          let user_id = JSON.parse(sessionStorage.getItem('userInfo'))['user'];
          let imgform = this.$refs.getimg.submit(); //获取图片form
          let imgs = imgform.getAll('multipartFiles');
          let imgname = [];
          for (let i in imgs) {
            imgname.push(imgs[i].name)
          }
          axios.post(this.GLOBAL.HOST+'sharing/releaseSharing/',{
            "type":"test",
            "title":title,
            "content":content,
            "tags":tag,
            "date":myDate.getTime(),
            "user_id":user_id,
            "subtitle":[{"title":title1,"content":content1},{"title":title2,"content":content2}]
          }).then(function (res) {
            let txt = res.data;
            if (parseInt(txt['status_code'])===10008){
              // 图片上传
              axios.post(that.GLOBAL.HOST+'user/qiniuToken/',{"method":"sharing","name":imgname}).then(function (res) {
                console.log(res);
                if(res.data['status_code']==='20000'){
                  // let file=$('#upload_file').get(0).files[0];
                  let allfile=res.data.file; //返回的新文件名和token
                  let domain=res.data.domain;
                  let config = {
                    useCdnDomain: false,
                    disableStatisticsReport: true,
                    retryCount: 6,
                    region: qiniu.region.z0   //此处表示服务器所在的区域
                  };
                  let putExtra = {
                    fname: "",
                    params: {},
                    mimeType: ["image/png", "image/jpeg", "image/gif", "image/jpg"]
                  };
                  for (let o=0;o<allfile.length;o++) {
                    // 添加上传dom面板
                    putExtra.params["x:name"] = allfile[o]['filename'].split(".")[0];
                    let subscription;
                    // 调用sdk上传接口获得相应的observable，控制上传和暂停
                    let observable = qiniu.upload(imgs[o], allfile[o]['filename'], allfile[o]['token'], putExtra);
                    subscription = observable.subscribe({
                      next(res){
                        // ...
                      },
                      error(err){
                        alert('第'+o+'张图片上传失败,错误信息:'+err)
                      },
                      complete(res){
                        axios.post(that.GLOBAL.HOST+'user/imgSave/',{"type":"test","id":txt['id'],"url":res.key}).then(function (res) {
                          console.log(res);
                        }).catch(function (err) {
                          console.log(err);
                        })
                      }
                    });
                  }
                }else {
                  alert(res.data['status_text'])
                }
              }).catch(function (err) {
                console.log(err);
              });
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

  /*日记部分*/
  .dairy_text{
    resize: none;
  }
</style>
