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
        price:400,
        brand:'菲诗小铺',
        effect:'盈润',
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
  .wickedpicker {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: 0 0 0 1px rgba(14, 41, 57, 0.12), 0 2px 5px rgba(14, 41, 57, 0.44), inset 0 -1px 2px rgba(14, 41, 57, 0.15);
    background: #fefefe;
    margin: 0 auto;
    border-radius: 0.1px;
    width: 297px;
    height: 157px;
    font-size: 14px;
    display: none;
  }

  .wickedpicker__title {
    background-image: -webkit-linear-gradient(top, #ffffff 0%, #f2f2f2 100%);
    background-image: linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%);
    position: relative;
    background: #f2f2f2;
    margin: 0 auto;
    border-bottom: 1px solid #e5e5e5;
    padding: 12px 11px 10px 15px;
    color: #4C4C4C;
    font-size: inherit;
  }

  .wickedpicker__close {
    -webkit-transform: translateY(-25%);
    -moz-transform: translateY(-25%);
    -ms-transform: translateY(-25%);
    -o-transform: translateY(-25%);
    transform: translateY(-25%);
    position: absolute;
    top: 25%;
    right: 5px;
    color: #3eb060;
    cursor: pointer;
  }

  .wickedpicker__close:before {
    content: '\e802';
  }

  .wickedpicker__controls {
    padding: 10px 0;
    line-height: normal;
    margin: 0;
  }

  .wickedpicker__controls__control,
  .wickedpicker__controls__control--separator {
    vertical-align: middle;
    display: inline-block;
    font-size: inherit;
    margin: 0 auto;
    width: 35px;
    letter-spacing: 1.3px;
  }

  .wickedpicker__controls__control-up,
  .wickedpicker__controls__control-down {
    color: #3eb060;
    position: relative;
    display: block;
    margin: 3px auto;
    font-size: 18px;
    cursor: pointer;
  }

  .wickedpicker__controls__control-up:before {
    content: '\e800';
  }

  .wickedpicker__controls__control-down:after {
    content: '\e801';
  }

  .wickedpicker__controls__control--separator {
    width: 5px;
  }

  .text-center,
  .wickedpicker__title,
  .wickedpicker__controls,
  .wickedpicker__controls__control,
  .wickedpicker__controls__control--separator,
  .wickedpicker__controls__control-up,
  .wickedpicker__controls__control-down {
    text-align: center;
  }

  .hover-state {
    color: #337ab7;
  }

  @font-face {
    font-family: 'fontello';
    /*src: url("../fonts/fontello.eot?52602240");*/
    /*src: url("../fonts/fontello.eot?52602240#iefix") format("embedded-opentype"), url("../fonts/fontello.woff?52602240") format("woff"), url("../fonts/fontello.ttf?52602240") format("truetype"), url("../fonts/fontello.svg?52602240#fontello") format("svg");*/
    font-weight: normal;
    font-style: normal;
  }

  .fontello:before,
  .wickedpicker__close:before,
  .wickedpicker__controls__control-up:before,
  .fontello-after:after,
  .wickedpicker__controls__control-down:after {
    font-family: 'fontello';
    font-style: normal;
    font-weight: normal;
    speak: none;
    display: inline-block;
    text-decoration: inherit;
    width: 1em;
    margin-right: .2em;
    text-align: center;
    font-variant: normal;
    text-transform: none;
    line-height: 1em;
    margin-left: .2em;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media (max-width: 384px) {
    .wickedpicker {
      width: 258px;
      height: 153px;
    }
  }

  @media (max-width: 320px) {
    .wickedpicker {
      width: 226px;
    }
  }
  /*--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
--*/

  /* reset */

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  dl,
  dt,
  dd,
  ol,
  nav ul,
  nav li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* start editing from here */

  a {
    text-decoration: none;
  }

  .txt-rt {
    text-align: right;
  }

  /* text align right */

  .txt-lt {
    text-align: left;
  }

  /* text align left */

  .txt-center {
    text-align: center;
  }

  /* text align center */

  .float-rt {
    float: right;
  }

  /* float right */

  .float-lt {
    float: left;
  }

  /* float left */

  .clear {
    clear: both;
  }

  /* clear float */

  .pos-relative {
    position: relative;
  }

  /* Position Relative */

  .pos-absolute {
    position: absolute;
  }

  /* Position Absolute */

  .vertical-base {
    vertical-align: baseline;
  }

  /* vertical align baseline */

  .vertical-top {
    vertical-align: top;
  }

  /* vertical align top */

  nav.vertical ul li {
    display: block;
  }

  /* vertical menu */

  nav.horizontal ul li {
    display: inline-block;
  }

  /* horizontal menu */

  img {
    max-width: 100%;
  }

  /*end reset*/

  body {
    /*background: url(../images/bg.jpg)no-repeat;*/
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    -ms-background-size: cover;
    background-attachment: fixed;
    background-position: center;
    font-family: 'Open Sans', sans-serif;
    font-size: 100%;
  }

  /*--header--*/

  h1 {
    font-size: 3.5em;
    color: #fff;
    font-style: italic;
    letter-spacing: 5px;
    text-align: center;
    margin: 1.5vw 2vw;
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    text-shadow: 1px 1px 2px #000;
  }

  h1 span {
    color: #3eb060;
  }

  /*--//header--*/

  /*-- content --*/

  .sub-main-w3 {
    display: -webkit-flex;
    display: -webkit-box;
    display: -moz-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 2vw;
    color: #fff;
    text-align: center;
    font-weight: 600;
    margin-bottom: 1vw;
  }

  .sub-main-w3 form {
    max-width: 41%;
    margin: 0 5vw;
    padding: 3.5vw;
    box-sizing: border-box;
    display: -webkit-flex;
    display: -moz-flex;
    display: flex;
    flex-wrap: wrap;
    background: rgba(20, 21, 20, 0.32);
  }

  .form-style-agile {
    flex-basis: 100%;
    -webkit-flex-basis: 100%;
  }

  .sub-main-w3 label {
    color: #000;
    font-size: 14px;
    letter-spacing: 1px;
    margin-bottom: 10px;
    display: inline-block;
  }

  .form-style-agile input[type="text"],
  .form-style-agile input[type="email"],
  select.category,
  .form-style-agile textarea {
    outline: none;
    font-size: 14px;
    border: none;
    color: #000;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 1px;
    padding: 12px 15px;
    background: #fff;
    margin-bottom: 16px;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 2px solid #3eb060;
    box-shadow: 0px 2px 7px 2px rgba(0, 0, 0, 0.08);
  }

  select option {
    background: #fff;
    color: #000;
  }

  .form-style-agile textarea {
    resize: none;
    height: 8em;
  }

  .sub-main-w3 input[type="submit"] {
    color: #fff;
    background: #3eb060;
    border: none;
    padding: 13px 0;
    margin-top: 30px;
    outline: none;
    width: 40%;
    border-radius: 18px;
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

  .sub-main-w3 input[type="submit"]:hover {
    color: #3eb060;
    background: #fff;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
  }

  /*--placeholder-color--*/

  ::-webkit-input-placeholder {
    color: #000;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    color: #000;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #000;
  }

  :-ms-input-placeholder {
    color: #000;
  }

  /*--//placeholder-color--*/

  /*--//main--*/

  /*--footer--*/

  .footer {
    margin: 1.4vw .3vw;
  }

  .footer p {
    font-size: 14px;
    color: #fff;
    letter-spacing: 2px;
    text-align: center;
    line-height: 1.8;
  }

  .footer p a {
    color: #3eb060;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
  }

  .footer p a:hover {
    color: #fff;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -moz-transition: 0.5s all;
    -ms-transition: 0.5s all;
    transition: 0.5s all;
  }

  /*--//footer--*/

  /*--responsive--*/
  @media(max-width: 1920px) {
    h1 {
      font-size: 3.5vw;
    }
  }
  @media(max-width: 1366px) {
    .sub-main-w3 input[type="submit"] {
      width: 50%;
    }
  }

  @media(max-width: 1080px) {
    .sub-main-w3 form {
      max-width: 54%;
    }
    h1 {
      font-size: 5vw;
    }
  }

  @media(max-width: 1024px) {
    h2 {
      font-size: 3vw;
    }
  }

  @media(max-width: 900px) {
    .sub-main-w3 form {
      max-width: 70%;
    }
    .sub-main-w3 {
      -webkit-box-pack: center;
      -moz-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
    }
  }

  @media(max-width: 768px) {
    h1 {
      font-size: 6vw;
    }
    .sub-main-w3 form {
      max-width: 80%;
    }
  }

  @media(max-width: 667px) {
    h2 {
      font-size: 4vw;
    }
    h2 {
      margin-bottom: 3vw;
    }
  }

  @media(max-width: 640px) {
    .footer p {
      font-size: 14px;
      letter-spacing: 1px;
    }
  }

  @media(max-width: 600px) {
    h1 {
      font-size: 7vw;
      letter-spacing: 2px;
      margin: 1.5vw 2vw 2vw;
    }
    .sub-main-w3 form {
      max-width: 90%;
    }
    .sub-main-w3 input[type="submit"] {
      width: 42%;
      font-size: 15px;
    }
  }

  @media(max-width: 480px) {
    .form-style-agile input[type="text"],
    .form-style-agile input[type="email"],
    select.category,
    .form-style-agile textarea {
      font-size: 13px;
      padding: 11px 12px;
      margin-bottom: 15px;
    }
    .sub-main-w3 input[type="submit"] {
      width: 52%;
      font-size: 15px;
      padding: 13px 0;
      margin-top: 16px;
    }
  }

  @media(max-width: 414px) {
    .sub-main-w3 form {
      max-width: 100%;
    }
    h1 {
      font-size: 7.5vw;
    }
    .footer p {
      font-size: 13px;
    }
    .sub-main-w3 input[type="submit"] {
      width: 60%;
    }
    h2 {
      font-size: 4.5vw;
    }
  }

  @media(max-width: 320px) {
    .form-style-agile input[type="text"],
    .form-style-agile input[type="email"],
    select.category,
    .form-style-agile textarea {
      font-size: 12px;
      padding: 11px 11px;
      margin-bottom: 12px;
    }
    h1 {
      font-size: 7.8vw;
      letter-spacing: 1px;
    }
    .sub-main-w3 input[type="submit"] {
      width: 68%;
      font-size: 14px;
      padding: 12px 0;
      margin-top: 10px;
    }
    .footer p {
      font-size: 12px;
    }
  }

  /*--//responsive--*/

</style>
