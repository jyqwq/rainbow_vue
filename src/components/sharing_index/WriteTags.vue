<template>
  <div class="row row_margin">
    <span class="content_margin">请添加标签</span><span class="remind_text">&nbsp;&nbsp;(添加标签让更多兴趣相仿的小伙伴看到你)</span>
    <div class="row my_label">
      <ul class="my_label_list" style="margin-top: 10px" ref="alltags">
        <li class="tag-item" @click="choose" v-for="(i,index) in tags" :key="index">{{i}}</li>
      </ul>
    </div>
    <div class="row form-group has-success has-feedback diy">
      <input type="text" class="div_tags" aria-describedby="inputSuccess2Status" maxlength="10" placeholder="自定义标签" onfocus="this.placeholder=''" onblur="this.placeholder='自定义标签'" onkeyup="this.value=this.value.replace(/\s+/g,'')" @keyup.enter="add">
    </div>
  </div>
</template>

<script>
    export default {
        name: "WriteTags",
      data:function () {
        return{
          tags:['买家秀','风景','鸡汤','文艺','忧伤']
        }
      },
      mounted:function () {

      },
      methods:{
        choose:function (event) {
          let node=event &&event.target;
          node.classList.toggle('tag-item-active');
        },
        add:function (event) {
          let ul=event.target.parentElement.previousElementSibling.children[0];
          if (event.target.value){
            this.tags.push(event.target.value);
            event.target.value='';
          }
        },
        check:function () {
          let all_tags='';
          let t = (this.$refs.alltags).children;
          for (let tag of t){
            if (tag.classList.contains('tag-item-active')){
              all_tags+=(tag.innerText+',')
            }
          }
          return all_tags
        }
      }
    }
</script>

<style scoped>
  .tag-item-active{
    color: #fff !important;
    background: #f7c5c9 !important;
  }
  .row_margin{
    margin-top: 20px;
  }
  .diy{
    margin-top: 15px;
    margin-left: 15px;
    width: 70px;
  }
  .div_tags{
    color: #f3fffd;
    background: #f7c5c9;
    border: none;
    border-radius: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    padding: 0 15px;
    position: relative;
  }
  .div_tags:focus{
    outline: none;
    box-shadow: 0 0 10px #e2b3b7;
  }
  .content_margin{
    margin-left: 15px;
  }
  .my_label_list{
    list-style: none;
  }
  .tag-item{
    float: left;
    color: #f7c5c9;
    background: #f3fffd;
    border: none;
    border-radius: 16px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    padding: 0 15px;
    margin-right: 12px;
    position: relative;
  }
  .remind_text{
    font-size: 0.9em;
    color: rgba(128,128,128,0.6);
  }

</style>
