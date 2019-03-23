<template>
  <div class="box">
    <div class="odiv">
      <div class="sm_commend"><span>评测资讯...</span><div style="display: none">评测资讯评测资讯</div></div>
      <img src="../../assets/timg.jpg" alt="" @mouseenter="hover" @mouseleave="out">
    </div>
    <div class="odiv">
      <div class="sm_commend"><span>评测资讯...</span><div style="display: none">评测资讯评测资讯</div></div>
      <img src="../../assets/timg.jpg" alt="" @mouseenter="hover" @mouseleave="out">
    </div>
    <div class="odiv">
      <div class="sm_commend"><span>评测资讯...</span><div style="display: none">评测资讯评测资讯</div></div>
      <img src="../../assets/timg.jpg" alt="" @mouseenter="hover" @mouseleave="out">
    </div>
    <div class="odiv">
      <div class="sm_commend"><span>评测资讯...</span><div style="display: none">评测资讯评测资讯</div></div>
      <img src="../../assets/timg.jpg" alt="" @mouseenter="hover" @mouseleave="out">
    </div>
    <div class="odiv">
      <div class="sm_commend"><span>评测资讯...</span><div style="display: none">评测资讯评测资讯</div></div>
      <img src="../../assets/timg.jpg" alt="" @mouseenter="hover" @mouseleave="out">
    </div>
    <div class="odiv">
      <div class="sm_commend"><span>评测资讯...</span><div style="display: none">评测资讯评测资讯</div></div>
      <img src="../../assets/timg.jpg" alt="" @mouseenter="hover" @mouseleave="out">
    </div>
  </div>
</template>

<script>
    export default {
        name: "Evaluation",
      data:function () {
        return{

        }
      },
      mounted:function (){
      },
      methods:{
          hover:function (e) {
            let now = e.target;
            let all = now.parentElement.parentElement.children;
            for (let i=0;i<6;i++) {
              let txt = all[i].firstChild.firstChild.nextSibling.innerText;
              all[i].firstChild.firstChild.innerText=txt.slice(0,2)+'...'
            }
            let text = now.parentElement.children[0].children;
            text[0].innerText=text[1].innerText
          },
        out:function (e) {
          let now = e.target;
          let all = now.parentElement.parentElement.children;
          for (let i=0;i<6;i++) {
            let txt = all[i].firstChild.firstChild.nextSibling.innerText;
            all[i].firstChild.firstChild.innerText=txt.slice(0,4)+'...'
          }
        }
      }
    }
</script>

<style scoped>
  .box {
    width:1000px;
    height:450px;
    margin:100px auto;
    overflow:hidden;
  }
  .box .odiv {
    width:10%;
    float:left;
    transition:all 1s;
  }
  img {
    width:960px;
    cursor:pointer;
  }
  .box:hover .odiv {
    width:5%;
  }
  .box .odiv:hover {
    width:55%;
  }
  .sm_commend{
    height: 30px;
    text-align: center;
    color: #FFB5B5;
    font-size: 1em;
    font-family: 幼圆;
    overflow: hidden;
  }
</style>
