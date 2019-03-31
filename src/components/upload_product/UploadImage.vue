<template>
<div id="upimg">
  <form>
    <label for="upload_file"><img src="../../assets/upimg.png" alt="" style="cursor: pointer"></label>
    <input type="file" class="upload" name="dynamic" id="upload_file"  accept="image/png,image/jpeg,image/gif,image/jpg" style="display: none" @change="addImg" ref="inputer" multiple>
  </form>
  <div ref="preview">
    <div v-for="(value, key) in imgs" style="display: inline;position: relative">
      <div class="img" style="display: inline"><img  class="img-thumbnail img-responsive seeimg" :src="getObjectURL(value)"><a class="close" @click="delImg(key)">×</a></div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios'
  export default {
        name: "UploadImage",
    data() {
      return {
        formData:new FormData(),
        imgs: {},
        imgLen:0,
      }
    },
    methods: {
      addImg(event){
        let inputDOM = this.$refs.inputer;
        // 通过DOM取文件数据
        this.fil = inputDOM.files;
        let oldLen=this.imgLen;
        let len=this.fil.length+oldLen;
        if(len>3){
          alert('最多可上传3张');
          return false;
        }
        for (let i=0; i < this.fil.length; i++) {
          let size = Math.floor(this.fil[i].size / 1024);
          if (size > 5*1024*1024) {
            alert('请选择5M以内的图片！');
            return false
          }
          this.imgLen++;
          this.$set(this.imgs,this.fil[i].name+'?'+new Date().getTime()+i,this.fil[i]);
        }
      },
      getObjectURL(file) {
        var url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        } else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        } else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }
        return url ;
      },
      delImg(key){
        this.$delete(this.imgs,key);
        this.imgLen--;
      },
      submit:function(){
        for(let key in this.imgs){
          let name=key.split('?')[0];
          this.formData.append('multipartFiles',this.imgs[key],name);
        }
        return this.formData
      },
    }
  }
</script>

<style scoped>
  .seeimg{
    display: inline;
    height: 100px;
    cursor: pointer;
  }
  .close{
    display: block;
    float: top;
    position: absolute;
    left: 5px;
    top: -40px;
    line-height: 1;
    font-size: 2em;
    color: #be666f;
  }
  #upimg{
    padding-left: 68px;
  }
</style>
