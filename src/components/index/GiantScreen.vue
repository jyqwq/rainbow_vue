<template>
  <div>
    <div class="row row-margin animate_welcome">
      <div class="hidden-xs hidden-sm col-md-2 col-lg-2"></div>
      <div class="hidden-xs col-sm-12 col-md-10 col-lg-10">
        <div class="jumbotron show_img">
          <h1>Hello 彩虹日记!</h1>
          <p class="change_text"></p>
          <p><router-link class="btn btn-primary btn-lg more_color" to="/login" role="button">加入彩虹日记</router-link></p>
        </div>
      </div>
    </div>

    <div class="row row-margin animate_welcome1">
      <div class="hidden-xs col-sm-12 col-md-10 col-lg-10">
        <div class="jumbotron show_img1">
          <h1>寻找属于你的生活</h1>
          <p class="change_text"></p>
          <p><router-link class="btn btn-primary btn-lg more_color" to="/search_index" role="button">开启搜索之旅</router-link></p>
        </div>
      </div>
      <div class="hidden-xs hidden-sm col-md-2 col-lg-2"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GiantScreen",
      data:function () {
        return{

        }
      },
      mounted:function (){
        this.welcome();
      },
      methods:{
        //巨幕
        welcome:function () {
          let content = {
            '0': ' 开启你的专属美妆网站 '
          };
          let content1 = {
            '0': ' 量身推荐只为最好的你 '
          };
          let change_text = document.querySelectorAll('.change_text');
          let inter;
          let inter01;
          let inter02;

          function timeout(s,c,i,content){
            inter = setTimeout(function () {
              change_text[i].innerText += content[s][c];
              clearTimeout(inter);
            }, 200*c);
          }
          function createInteral(content,cb,m) {
            change_text[m].innerText = '';
            for (let t in content) {
              for (let index = 0; index < content[t].length; index++) {
                cb(t,index,m,content);
              }
            }
          }
          createInteral(content,timeout,0);
          createInteral(content1,timeout,1);
          inter01 = setInterval(function () {
            createInteral(content,timeout,0)
          }, 2200);
          inter02 = setInterval(function () {
            createInteral(content1,timeout,1)
          }, 2200);
        }
      }
    }
</script>

<style scoped>
  .row-margin{
    margin-top: 30px;
    margin-right: -15px;
    margin-left: -15px;
  }
  .animate_welcome{
    animation: bounceInLeft 2s;
  }
  .animate_welcome1{
    animation: bounceInRight 2s;
  }
  .show_img{
    background-color: white;
    background-image: url("../../assets/tim.png");
    background-repeat: round;
    color: #ff5044;
  }
  .show_img1{
    background-color: white;
    background-image: url("../../assets/tim1.png");
    background-repeat: round;
    color: #ff5044;
    text-align: right;
  }
  .more_color{
    background: rgba(255, 105, 180, 0.7);
    border: solid 1px rgba(255, 105, 180, 0.7);
  }
  .more_color:hover{
    background: deeppink;
    border: solid 1px deeppink;
  }
  .change_text{
    height: 30px;
  }

</style>
