<template>
  <div class="container-fluid con">
    <div class="row">
      <div class="col-md-12">
        <div class="row top">
          <div class="col-md-3 col-md-offset-1 top-left">
            <img src="../../assets/search_img/icy_logo-2.png" class="">
            <img src="../../assets/search_img/icy_logo.png" alt="">
          </div>
          <div class="col-md-4 top-mid">
            <div class="row mid-1">
              <div class="input-group icy_sch">
                <input type="text" name="website" id="input-sch" list="list_web" class="form-control"  placeholder="搜索你想要的内容...">
                <datalist id="list_web">
                </datalist>
                <span class="input-group-btn">
                        <button class="btn  search" id="sch_btn" type="button">搜索</button>
                        </span>
              </div>
            </div>
            <div class="row mid-2">
              <nav class="navbar navbar-default mid-2-nav">
                <ul class="nav navbar-nav mid-2-ul">
                  <li>洗面奶</li>
                  <li>兰蔻粉水</li>
                  <li>卸妆水</li>
                  <li>彩妆</li>
                  <li>科颜氏</li>
                  <li>润唇膏</li>
                </ul>
              </nav>
            </div>
          </div>
          <div class="col-md-3 col-md-offset-1 top-right">
            <!--<img src="../img/newyear.png" class="top-right-img">-->
          </div>
        </div>
      </div>
      <div class="col-md-10 col-md-offset-1">
        <div class="row main_content">
          <div class="col-md-12">
            <a name="top"></a>
            <div class="row r-1">
              <ul class="nav nav-tabs  dao_ul "id="dao_ul">
                <!--<li role="presentation" class=""><a href="#">综合</a></li>-->
                <li role="presentation" class=""><a href="#">产品</a></li>
                <li role="presentation" class=""><a href="#">心情</a></li>
                <li role="presentation" class=""><a href="#">日记</a></li>
                <li role="presentation" class=""><a href="#">测评</a></li>
              </ul>
            </div>
            <div class="row r-2">
              <ul class="nav nav-pills r-2-1" id="r-2-1-ul" >
                <li role="presentation" class="active  " ><a href="#" class="r-2-1">所有分类:</a></li>
                <!--<li role="presentation" class="active  " ><a href="#" class="r-2-1">SNP</a></li>-->
              </ul>
              <table class="table r-2-tb">
                <tr class="tr-1">
                  <td class="col-md-1">种类:</td>
                  <td class="col-md-6 r-2-td-1">
                    <span>SNP</span>
                    <span>毛穴革命</span>
                    <span>森田药妆</span>
                    <span>信美肌</span>
                    <span>我的美丽日记</span>
                    <span>瑞士葆丽美</span>
                    <span>希思黎</span>
                    <span>伊丽莎白 · 雅顿</span>
                    <span>悦诗风吟</span>
                    <span>海蓝之谜</span>
                    <span>菲诗小铺</span>
                  </td>

                </tr>
                <tr>
                  <td class="col-md-1">功能:</td>
                  <td class="col-md-6 r-2-td-3">
                    <span>提亮肤色</span>
                    <span>均匀肤色</span>
                    <span>保湿</span>
                    <span>遮瑕</span>
                    <span>痘痘護理</span>
                    <span>去红血丝</span>
                    <span>收缩毛孔</span>
                    <span>舒缓/抗敏感</span>
                    <span>去黑头</span>
                    <span>去角质</span>
                  </td>
                  <!--<td class="col-md-1"></td>-->
                </tr>
              </table>
            </div>
            <div class="row r-3">
              <nav class="navbar navbar-default r-3-nav">
                <ul class="nav navbar-nav  dao_ul " id="sot-ul">
                  <li role="presentation" class=""><a href="#">综合排序</a></li>
                  <li role="presentation" class=""><a href="#">最多点赞</a></li>
                  <li role="presentation" class=""><a href="#">最新发布</a></li>
                  <li role="presentation" class=""><a href="#">最多收藏</a></li>
                </ul>
              </nav>
            </div>
            <div class="row r-4" >
              <div class="col-md-12">
                <div class="row r-4-1 "id="r-4-1" >

                </div>
              </div>
            </div>
            <div class="row r-5">
              <div class="col-md-6 col-md-offset-3 r-5-1" id="div-fenye">
                <a href="#top">
                  <ul id='ul-fenye'>
                    <!--<li>首页</li>-->
                    <!--<li>上一页</li>-->
                    <!--<li></li>-->
                    <!--<li></li>-->
                    <!--<li></li>-->
                    <!--<li>下一页</li>-->
                    <!--<li>尾页</li>-->
                  </ul>
                </a>
              </div>
            </div>
            <div class="row r-6">
              <div class="col-md-12">
                <div class="row r-6-1">
                  <span>最多点击</span>
                  <span>最新发布</span>
                  <span>最多收藏</span>
                </div>
              </div>
            </div>
            <div class="row r-7">

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Classes from './Classes'
    import Dynamic from './Dynamic'
    import Goods from './Goods'
    import Paging from './Paging'
    import SearchNav from './SearchNav'
    import Selection from './Selection'
    import SortDynamic from './SortDynamic'
    import SortGoods from './SortGoods'
    export default {
        name: "Result",
        components:{
          'classes':Classes,
          'dynamic':Dynamic,
          'goods':Goods,
          'paging':Paging,
          'search-nav':SearchNav,
          'selection':Selection,
          'sort-dynamic':SortDynamic,
          'sort-goods':SortGoods
        }
    }
</script>

<style scoped>

  body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,textarea,th,td{margin:0;padding:0}
  body{
    background-color:#f2f2f2;
    /*background: white;*/
  }

  *{padding:0;margin:0;}
  #ul-fenye{font-size:0;font-family:Microsoft YaHei;display:inline-block;}
  #ul-fenye li{
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    -khtml-user-select:none;/*早期浏览器*/
    user-select:none;
    list-style: none;float:left;padding:6px;font-size:13px;border:1px solid #ccc;margin:2px;cursor:pointer;color:#585858;}
  #div-fenye{
    text-align: center;
  }
  #ul-fenye .background{background:#39C6F4;
    color:white;
    border:1px solid #39C6F4;
  }

  .top-right-img{
    animation: flash 1s;
  }
  #icy-nav{
    background: #f2f2f2;
  }
  .top{
    background: white;
    /*background: #f2f2f2;*/
    padding-top: 20px;
  }
  .top .top-left img{
    height: 40px;
  }
  .icy_sch{
    margin-top:3px;
  }
  .icy_sch input{
    border: 3px solid deeppink;
    border-radius: 0px;
  }
  .icy_sch input:focus{
    border: 3px solid deeppink;
    box-shadow: 0px 0px 0px;
  }
  .icy_sch button{
    border: 1px solid deeppink;
    border-radius: 0px;
    background-color: deeppink;
    color: white;
    width: 90px;
  }
  #sch_btn:hover{
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }
  #sch_btn:focus{
    color: white;
    outline: 0px;
  }
  .mid-2-nav{
    border: 0px;
    background: white;
    min-height: 1em;
    /*background: #f2f2f2;*/

  }
  .mid-2-ul li{
    margin-right: 30px;
    font-size: 0.5em;
    color: rgba(128, 128, 128, 0.69);
    padding: 0px;
    margin-top: 15px;
  }
  .mid-2-ul li:hover{
    cursor: pointer;
    color: black;
  }

  .r-1 .dao_ul{
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .r-1 .dao_ul li a{
    color: gray;
  }
  .r-1 .dao_ul :nth-child(1) a{
    color: rebeccapurple;
  }
  li{
    text-align: center;
    list-style: none;
  }
  .r-2-1{
    background: white;
    /*background: #f2f2f2;*/
  }
  #r-2-1-ul li{
    border: 1px solid rgba(118, 118, 118, 0.51);
    /*border-right: 1px solid rgba(118, 118, 118, 0.51);*/
    background: pink;
  }
  #r-2-1-ul li a{
    background: white;
    color:rgba(128, 128, 128, 0.7);
    cursor: default;
    /*color: rebeccapurple;*/
  }
  .con{
    margin-top: 50px;
  }
  .con .main_content .r-2 .r-2-tb{
    /*border: 1px solid rgba(128, 128, 128, 0.4);*/
  }
  .con .main_content .r-2 .r-2-tb tr td{
    /*border-top: 1px dashed rgba(128, 128, 128, 0.4);*/
    /*border-bottom: 1px dashed rgba(128, 128, 128, 0.4);*/
    padding-top: 15px;
    padding-left: 15px;
  }
  .con .main_content .r-2 .r-2-tb tr td:nth-child(1){
    color:rgba(128, 128, 128, 0.7);
  }
  .con .main_content .r-2 .r-2-tb tr td span{
    display: inline-block;
    cursor: pointer;
    margin-right:80px;
    margin-bottom:15px;
  }
  .con .main_content .r-2 .r-2-tb tr td span:hover{
    text-decoration: underline;
    color: red;
  }
  .r-3{
    margin-top: 10px;
  }
  .r-2-tb{
    background-color: white;
  }

  .r-3-nav{
    background-color:white;
    /*background: #f2f2f2;*/
  }
  .r-4{
    padding-left: 0px;
    height: 500px;
  }
  .con .r-4 .goods{
    /*margin-top: 20px;*/
  }
  /*#img-1{*/
  /*padding-left: 0px;*/
  /*}*/
  .con .row .r-4 .r-4-1 .goods{
    padding-left: 0px;
    padding-top: 0px;
    padding-right: 15px;
    margin-bottom: 20px;
  }
  .goods .goods-content{
    background: white;
    /*background: #f2f2f2;*/
  }
  .goods .goods-content:hover{
    box-shadow: 0px 0px 5px #888888;
  }
  .goods img{

    border-bottom: 1px dashed rgba(128, 128, 128, 0.26);
  }
  #r-4-1 img{
    width: 266px;
    height: 266px;
  }
  .goods .goods-content .goods-d-1{
    padding: 10px;
  }
  .goods-p-1{
    padding-bottom: 10px;
    color: deeppink;
    font-size: 1.5em;
    border-bottom: 1px dashed rgba(128, 128, 128, 0.26);
  }
  .goods-p-1 .rect{
    background: deeppink;
    color: white;
  }
  .goods-p-2{
    margin-top: 15px;
  }
  .goods-p-2 a{
    color: black;
  }
  .goods-p-2 a:hover{
    color: red;
  }
  .goods-p-3{
    margin-top: 15px;
    margin-bottom: 35px;
    font-size: 0.8em;
  }
  .goods-p-3 a{
    color: gray;
  }
  .goods-p-3 a:hover{
    text-decoration: none;
    cursor: default;
  }
  .goods-p-3 a :nth-child(3),.goods-p-3 a :nth-child(3){
    display: inline-block;
    margin-left: 100px;
  }
  .main_content .r-4 .r-4-1{
    margin-bottom:20px;
  }
  .con .row .main_content .r-4 .r-4-1 .goods-4{
    padding-left: 15px;
    padding-right: 0px;
  }
  .con .row .main_content .r-4 .r-4-1 .goods-3{
    padding-left: 10px;
    padding-right:5px;
  }
  .con .row .main_content .r-4 .r-4-1 .goods-2{
    padding-left: 5px;
    padding-right:10px;
  }
  #r-5-input{
    height: 2.0em;
    width:3.5em;
  }
  #div-fenye ul{
  }
  #r-5-2{
    margin-top: 28px;
    color: gray;
    opacity: 0%;
  }
  .r-7 {
    text-align: center;
    min-height: 300px;
  }
  .r-7 #no_data{
    margin-top: 50px;
    margin-bottom: 50px;
  }




  .rank_num span{
    display: none;
  }
  .row_margin{
    margin-top: 20px;
  }
  .unaction a{
    text-decoration: none;
    color: #25003f;
  }
  .my_active{
    border-bottom: solid 3px lightpink;
  }
  .my_active>a{
    color: lightpink;
  }
  .xs_padding{
    padding: 0 3px;
    text-align: center;
  }
  .rank_one{
    animation: fadeInLeft 1s;
    border-bottom: solid 1px #d5d5d5;
  }
  .rank_one:hover{
    box-shadow: 0 5px 10px #ffc1c3;
  }
  .rank_one>div{
    text-align: center;
    height: 150px;
  }
  .rank_num{
    line-height: 150px;
    color: darkgrey;
    font-size: 2.5em;
  }
  .min_width{
    min-width: 620px;
  }
  .rank_img{
    /*边框*/
    border: solid 1px rgba(128, 128, 128, 0);
    height: 150px;
    padding: 0;
  }
  .rank_img img{
    max-height: 148px;
  }
  .rank_content{
    /*边框*/
    border: solid 1px rgba(128, 128, 128, 0);
    height: 150px;
  }
  .first_row{
    box-sizing: border-box;
    padding: 0 15px;
    text-align: left;
    line-height: 40px;
  }
  .first_row strong:hover{
    cursor: pointer;
  }
  .second_row{
    box-sizing: border-box;
    padding: 0 15px;
    text-align: left;
    line-height: 40px;
    font-size: 12px;
  }
  .content_name{
    text-align: left;
  }
  .content_name h5{
    font-size: 1.1em;
    line-height: 50px;
  }
  .content_name:hover{
    text-decoration: none;
  }
  .rank_detail{
    /*边框*/
    border: solid 1px rgba(128, 128, 128, 0);
    height: 150px;
    padding: 0;
    line-height: 40px;
    padding-top: 20px;
  }
  .rank_detail div{
    padding: 0;
  }
  .see_more{
    text-align: center;
  }
  .real_time ,.hot_dairy ,.hot_cosmetics{
    margin: 0;
  }
  .r-6,.r-7{
    display: none;
  }
  .r-6-1{
    padding: 13px;
  }
  .r-6-1 span{
    cursor: pointer;
    margin-right: 25px;
    padding-left: 7px;
    padding-right: 7px;
    display: inline-block;
    color: black;
    border-radius: 3px;
  }
  .r-6-1 :nth-child(1){
    background: #71d2c3;
    color: white;
  }
</style>
