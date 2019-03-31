<template>
  <!--我的头像-->
  <div :class="seflag==2?['text_active']:''" class="test_row">
    <div class="row cut">
    <vue-cropper ref="cropper" :img="option.img" :output-size="option.size" :output-type="option.outputType" :info="true" :full="option.full"
                 :can-move="option.canMove" :can-move-box="option.canMoveBox" :fixed-box="option.fixedBox" :original="option.original"
                 :auto-crop="option.autoCrop" :auto-crop-width="option.autoCropWidth" :auto-crop-height="option.autoCropHeight" :center-box="option.centerBox"
                 @real-time="realTime" :high="option.high"
                 @img-load="imgLoad" ></vue-cropper>
    </div>
    <div class="row">
      <div class="col-lg-4" style="text-align: right">
        <span style="line-height: 96px;font-weight: bold;font-family: 幼圆;font-size: 2em;color: #02c7ff">旧头像</span>
      </div>
      <div class="col-lg-2">
        <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}" style="border-radius: 50%">
          <div :style="previews.div">
            <img :src="GLOBAL.IMG+oldicon" style="width: 96px;height: 96px">
          </div>
        </div>
      </div>
      <div class="col-lg-2">
        <div class="show-preview" :style="{'width': previews.w + 'px', 'height': previews.h + 'px',  'overflow': 'hidden', 'margin': '5px'}" style="border-radius: 50%">
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img">
          </div>
        </div>
      </div>
      <div class="col-lg-4" style="text-align: left">
        <span style="line-height: 96px;font-weight: bold;font-family: 幼圆;font-size: 2em;color: #02c7ff">新头像</span>
      </div>
    </div>
    <br>
    <br>
    <br>
    <div class="test-button">
      <label for="choose" class="btn">上传新头像</label>
      <input ref="chooseimg" id="choose" style="display: none" type="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="uploadImg($event)">
      <span style="width: 80px"></span>
      <button class="btn" @click="choosesave">确认更改</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
      name: "ModifyHead",
      props:['seflag'],
    data:function () {
      return{
        newImg:'',
        oldicon:JSON.parse(sessionStorage.getItem('userInfo'))['icon'],
        model: false,
        modelSrc: '',
        crap: false,
        previews: {},
        option: {
          img: this.GLOBAL.IMG+JSON.parse(sessionStorage.getItem('userInfo'))['icon'],
          size: 1,
          full: false,
          outputType: 'png',
          canMove: true,
          fixedBox: true,
          original: false,
          canMoveBox: true,
          autoCrop: true,
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 96,
          autoCropHeight: 96,
          centerBox: true,
          high: true
        },
        show: true
      }
    },
    mounted:function (){
      let ico = JSON.parse(sessionStorage.getItem('userInfo'))['icon'];
      if (ico == 'usericon.png') {
        this.option.img = '../../../static/upicon.png'
      }
    },
    methods:{
      changeImg() {
        // console.log(this.$refs.chooseimg.files[0]);
        this.option.img=this.$refs.chooseimg.files[0];
        // this.option.img = this.lists[~~(Math.random() * this.lists.length)].img
      },
      realTime(data) {
        this.previews = data;
        // console.log(data)
      },
      uploadImg(e) {
        //上传图片
        // this.option.img
        let file = e.target.files[0];
        if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
          alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种');
          return false
        }
        let data = window.URL.createObjectURL(file);
        this.option.img = data
      },
      imgLoad(msg) {
        console.log(msg)
      },
      choosesave:function () {
        let that = this;
        this.$refs.cropper.getCropBlob((data) => {
          this.newImg = window.URL.createObjectURL(data);
          let filename = this.newImg.split('/').pop()+'.png';
          console.log(data);
          axios.post(this.GLOBAL.HOST+'user/qiniuToken/',{"method":"icon","iconname":filename}).then(function (res) {
            console.log(res);
            if(res.data['status_code']==='20000'){
              let qiniu = require('qiniu-js');
              // let file=$('#upload_file').get(0).files[0];
              let file=res.data.filename; //返回的新文件名和token
              let domain=res.data.domain;
              let token = res.data.qiniu_token;
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
              // 添加上传dom面板
              putExtra.params["x:name"] = file.split(".")[0];
              let subscription;
              // 调用sdk上传接口获得相应的observable，控制上传和暂停
              let observable = qiniu.upload(data, file, token, putExtra);
              subscription = observable.subscribe({
                next(res){
                  // ...
                },
                error(err){
                  alert('图片上传失败,错误信息:'+err)
                },
                complete(res){
                  axios.post(that.GLOBAL.HOST+'user/imgSave/',{"type":"icon","id":JSON.parse(sessionStorage.getItem('userInfo'))['user'],"url":res.key}).then(function (res) {
                    console.log(res);
                    alert('更改成功');
                    that.$router.go(0);
                  }).catch(function (err) {
                    console.log(err);
                  })
                }
              });
            }else {
              alert(res.data['status_text'])
            }
          }).catch(function (err) {
            console.log(err);
          })
        })
      },
    }
    }
</script>

<style scoped>
  .cut {
    width: 300px;
    height: 300px;
    margin: 30px auto;
  }
  .test-button {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }
  .btn {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin:20px 10px 0 0;
    padding: 9px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
    transition: all .2s ease;
    text-decoration: none;
    user-select: none;
  }
</style>
