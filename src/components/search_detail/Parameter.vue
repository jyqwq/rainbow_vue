<template>
  <div class="r-3-right" id="r-3-right">
    <div class="row r-3-3" id="r-3-3">
      <ul class="list-inline">
        <li><a href="#specs">商品参数</a></li>
        <li><a href="#detail">商品详情</a></li>
        <li><a href="#reviews">用户评价</a></li>
      </ul>
    </div>
    <a name="specs"></a>
    <div class="row r-3-4" id="r-3-4">
      <div class="col-md-12">
        <span>商品参数</span>&nbsp;&nbsp;
        <span class="s-2">Specs</span>
        <table class="tab-1">
          <tr>
            <td>商品编号 <strong>:</strong></td>
            <td>104716804005</td>
          </tr>
          <tr>
            <td>商品品牌 <strong>:</strong></td>
            <td>莎娜 Sana</td>
          </tr>
          <tr>
            <td>商品名称 <strong>:</strong></td>
            <td>豆乳Q10弹力美肌洗面膏</td>
          </tr>
          <tr>
            <td>商品功效 <strong>:</strong></td>
            <td>深层清洁，保湿，美白，提亮肤色，抗氧化，去角质，去黑头，提拉紧致</td>
          </tr>
          <tr>
            <td>商品规格 <strong>:</strong></td>
            <td>150克</td>
          </tr>
          <tr>
            <td>保质期限 <strong>:</strong></td>
            <td>3年，具体日期以收到的实物为准，开封后跟产品包装指示为准</td>
          </tr>
        </table>
      </div>
    </div>
    <a name="detail"></a>
    <div class="row r-3-5" id="r-3-5" name="detail">
      <div class="col-md-12">
        <span>商品详情</span>&nbsp;&nbsp;
        <span class="s-2">Detail</span>
        <p><strong>产品介绍</strong></p>
        <p>莎娜(SANA) 豆乳Q10弹力美肌洗面膏：</p>
        <ul>
          <li>能形成浓密泡沫，吸附污垢、多余油脂、彩妆。</li>
          <li>质地滋润，能彻底洗净肌肤，用后不会感到崩紧。</li>
          <li>添加胶囊化的辅酶Q10 ，使肌肤充满水润，光泽有弹性。</li>
        </ul>
        <p><strong>使用方法</strong></p>
        <img src="../../assets/search_img/usefunction.jpg" alt="">
        <p><strong>成分</strong></p>
        <p>豆乳发酵提取物、Q10辅酶</p>
      </div>
    </div>
    <a name="reviews"></a>
    <comments></comments>

  </div>
</template>

<script>
  import Comments from './Comments'

  export default {
    name: "Parameter",
    components: {
      'comments': Comments
    }
  }
</script>

<style scoped>
  .r-3-right {
    display: inline-block;
    width: 73.6%;
    margin-left: 57px;
  }

  #r-3-3 {
    margin-right: 0px;
    /*margin-left:32px;*/
    height: 50px;

    line-height: 50px;
    background: white;
    font-size: 1.3em;
  }

  #r-3-3 ul {
    margin-left: 0px;
  }

  #r-3-3 li {
    /*display: inline-block;*/
    padding-left: 25px;
    padding-right: 25px;
    /*border-bottom: 3px solid brown;*/

  }

  #r-3-3 li a {
    color: black;
    text-decoration: none;
  }

  #r-3-3 li a:hover {
    color: black;
    text-decoration: none;
  }

  #r-3-4 {
    margin-top: 28px;
    background: white;
    padding-top: 20px;
    margin-right: 0px;

  }

  .r-3-4 span {
    font-size: 20px;
    padding-top: 20px;
    padding-left: 10px;
  }

  .r-3-4 .s-2 {
    color: #EC3E7D;
  }

  .r-3-4 table {
    margin-top: 25px;
    border-collapse: separate;
    border-spacing: 0px 20px;
    margin-bottom: 20px;
  }

  .r-3-4 table tr {
    margin-bottom: 20px;
  }

  .r-3-4 table tr td:nth-child(1) {
    color: grey;
    padding-left: 45px;
  }

  .r-3-4 table tr td:nth-child(2) {
    padding-left: 185px;
  }

  #r-3-5 {
    margin-top: 28px;
    background: white;
    padding-top: 20px;
    margin-right: 0px;
  }

  .r-3-5 span, .r-3-6 .col-md-12 > :nth-child(1), .r-3-6 .col-md-12 > :nth-child(2) {
    font-size: 20px;
    padding-top: 20px;
    padding-left: 10px;
  }

  .r-3-5 .s-2, .r-3-6 .s-2, .r-3-6 .s-3 {
    color: #EC3E7D;
  }

  .r-3-5 p {
    margin-top: 45px;
    margin-left: 30px;
  }

  .r-3-5 p:nth-child(4) {
    margin-top: 25px;
  }

  .r-3-5 ul {
    margin-top: 20px;
    margin-left: 70px;
  }

  #r-3-5 ul li {
    text-align: left;
    list-style: initial;
    padding-left: 10px;
  }

  .r-3-5 p:last-child {
    padding-bottom: 45px;
  }

  .r-3-5 p:last-child span {
    font-size: 1.2em;
  }

  #r-3-6 {
    margin-top: 28px;
    background: white;
    padding-top: 20px;
    margin-right: 0px;
  }

  .r-3-6 p {
    margin-top: 60px;
    margin-left: 30px;
  }

  .r-3-6-1 {
    margin-bottom: 20px;
  }

  .r-3-6-1 p span {
    font-family: Andalus;
    font-size: 20px;
    padding-top: 20px;
    padding-left: 10px;
  }

  .r-3-6 .s-3 {
    font-size: 2.6em;
  }

  .r-3-6-2 {
    margin-top: 80px;
    margin-bottom: 20px;

  }

  .r-3-6-2 .col-md-2 {
    text-align: center;
  }

  .r-3-6-2 img {
    width: 60px;
    height: 60px;
  }

  .r-3-6-2 .reviews {
    width: 620px;
    height: 200px;
    background: #f2f2f2;
    box-sizing: border-box;
    padding: 25px;
  }

  .reviews + :nth-child(1) {
    font-size: 1.5em;
    color: #EC3E7D;
    margin-right: 200px;
  }

  .r-3-6-2-content {
    border-top: 1px solid #EC3E7D;
    padding: 15px;
  }

  .r-3-6-2-content p {
    margin-top: 0px;
    margin-left: 0px;
  }

  .r-3-6-2-content :nth-child(2) {
    margin-top: 60px;
    color: rgba(64, 64, 64, 0.55);
  }

  /*评论栏目*/
  .dy_c, .dy_f, .dy_p {
    cursor: pointer;
  }

  .dy_text {
    resize: none;
  }

  .content_margin {
    margin-left: 15px;
  }

  .remind_text {
    font-size: 0.9em;
    color: rgba(128, 128, 128, 0.6);
  }

  .line {
    border-top: 1px solid #dadada;
  }

  .margin_top {
    text-align: center;
    margin-top: 5px;
  }

  #dy_c_content {
    margin-top: 60px;
    margin-left: 186px;
  }

  #search:hover {
    border: 1px solid rgb(255, 20, 147);
    background: deeppink !important;
    color: white;
  }

  #search:focus {
    color: white;
    outline: 0px;
  }
</style>
