<template>
  <div class="row row_margin dy_row text_active">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <textarea class="form-control dy_text" placeholder="说出你的心情吧~~" rows="5" maxlength="140"  ref="dy_text" @keyup="num"></textarea>
      <div class="row row_margin">
        &nbsp;&nbsp;&nbsp;&nbsp;<span class="content_margin remind_text" ref="remind_text">140</span>
      </div>
      <div class="row row_margin pic_show">
        <upload-image ref="getimg"></upload-image>
      </div>
      <write-tags ref="mytag"></write-tags>
      <release-btn :name="'发  布'" @rr="release"></release-btn>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
  </div>
</template>

<script>
  // import * as qiniu from 'qiniu-js'
  import axios from 'axios'
  import WriteTags from './WriteTags'
  import ReleaseBtn from './ReleaseBtn'
  import UploadImage from './UploadImage'
  export default {
        name: "MoodText",
      components:{
        'write-tags':WriteTags,
        'release-btn':ReleaseBtn,
        'upload-image':UploadImage
      },
      methods:{
          num:function () {
            this.$refs.remind_text.innerText=140-(this.$refs.dy_text.value.length);
          },
        release:function () {
          let qiniu = require('qiniu-js');
          let that = this;
          let content = this.$refs.dy_text.value;
          let myDate = new Date();
          if (content){
            let tag = this.$refs.mytag.check();
            let user_id = JSON.parse(sessionStorage.getItem('userInfo'))['user'];
            let imgform = this.$refs.getimg.submit(); //获取图片form
            let imgs = imgform.getAll('multipartFiles');
            let imgname = [];
            for (let i in imgs) {
              imgname.push(imgs[i].name)
            }


            // 内容上传
            axios.post(this.GLOBAL.HOST+'sharing/releaseSharing/',{
              "type":"dynamic",
              "content":content,
              "tags":tag,
              "date":myDate.getTime(),
              "user_id":user_id
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
                          axios.post(that.GLOBAL.HOST+'user/imgSave/',{"type":"dynamic","id":txt['id'],"url":res.key}).then(function (res) {
                            console.log(res);
                          }).catch(function (err) {
                            console.log(err);
                          })
                        }
                      });
                    }
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
  .pic_show{
    margin-left: 0;
  }
</style>
