<template>
  <div class="container-fluid con">
    <h1>
      <span>R</span>ainbow
      <span>D</span>iary
    </h1>

    <div class="main-content-agile">
      <div class="sub-main-w3">
        <form>
          <h2> Upload product information</h2>
          <div class="form-style-agile">
            <input placeholder="Product Name" name="Name" type="text" v-model="name">
          </div>
          <div class="form-style-agile">
            <input placeholder="Brand" name="Brand" type="text"  v-model="brand">
          </div>
          <div class="form-style-agile">
            <input placeholder="Effect" name="Effect" type="text"  v-model="effect">
          </div>
          <div class="form-style-agile">
            <input placeholder="Capacity" name="Capacity" type="text"  v-model="capacity">
          </div>
          <div class="form-style-agile">
            <input placeholder="Category" name="Category" type="text"  v-model="category">
          </div>
          <div class="form-style-agile">
            <input placeholder="Component" name="Component" type="text"  v-model="component">
          </div>
          <div class="form-style-agile">
            <input placeholder="Overdue" name="Overdue" type="text"  v-model="overdue">
          </div>
          <div class="form-style-agile">
            <input placeholder="Price" name="Price" type="text"  v-model="price">
          </div>
          <div class="form-style-agile">
            <input placeholder="Security" name="Security" type="text"  v-model="security">
          </div>
          <div class="form-style-agile" >
            <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="2" v-model="skin">中性皮肤
            <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="3" v-model="skin">干性皮肤
            <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="4" v-model="skin">油性皮肤
            <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="5" v-model="skin">混合性皮肤
            <input placeholder="Adaptability" name="Adaptability" type="checkbox" value="6" v-model="skin">敏感性皮肤
          </div>
        </form>
      </div>
      <upload-image ref="getimg" ></upload-image>
      <div class="btn" id="mysub" @click="product">Information upload</div>
    </div>
  </div>
</template>

<script>
  import UploadImage from './UploadImage'
  import axios from 'axios'
  export default {
    name: "Uploading",
    data:function(){
      return{
        name:'可乐',
        price:150,
        brand:'可口可乐',
        effect:'好喝',
        security:5,
        overdue:'1年',
        component:'水，碳酸',
        category:1,
        capacity:'100ml',
        skin:[2,3],
        formData:new FormData(),
        imgs:{},
        imgLen:0,
      }
    },
    components:{
      'upload-image':UploadImage
    },
    methods:{
      product:function () {
        let date=(new Date()).getTime();
        let qiniu = require('qiniu-js');
        let that = this;
        let imgform = this.$refs.getimg.submit(); //获取图片form
        let imgs = imgform.getAll('multipartFiles');
        let imgname = [];
        for (let i in imgs) {
          imgname.push(imgs[i].name)
        }
        axios.post(this.GLOBAL.HOST+'sharing/releaseSharing/',{
          "type":"commodity",
          "name":this.name,
          "price":this.price,
          "brand":this.brand,
          "component":this.component,
          "Effect":this.effect,
          "capacity":this.capacity,
          "security":this.security,
          "overdue":this.overdue,
          "date":date,
          "category_id":this.category,
          "skin":this.skin
        }).then(function (res) {
          console.log(res);
          let txt=res.data
          console.log(txt);
          if (txt.status_code==10008){
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
                      axios.post(that.GLOBAL.HOST+'user/imgSave/',{"type":"commodity","id":txt['id'],"url":res.key}).then(function (res) {
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
          }
        }).catch(function (err) {
          console.log(err);
        })
      },
    },
    mounted:function () {

    }
  }
</script>

<style scoped>

  .con{
    margin-top: 80px;
    padding-bottom: 39px;
  }
  .con{
    background-image: url("../../assets/dy-background.png");
  }
  #mysub{
    margin-left: 95px;
    width: 41%;
    color: #fff;
    background:rgba(74, 104, 122, 0.71);
    border: none;
    padding: 13px 0;
    outline: none;
    /*border-radius: 18px;*/
    font-size: 16px;
    cursor: pointer;
    letter-spacing: 1px;
    font-family: 'Open Sans', sans-serif;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
  }
  #mysub:hover{
    color: #000000;
    background:  #3eb060;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
  }
</style>
