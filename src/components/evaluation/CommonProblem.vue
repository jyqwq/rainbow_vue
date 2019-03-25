<template>
<div>
  <img src="../../assets/ad.jpg" class="img-responsive" alt="Responsive image">
  <div class="row Q_and_A">
    <br>
    <h4>常见问题</h4>
    <br>
    <h5 class="Q_and_Aline">&nbsp;&nbsp;为什么没有搜到我想要的产品？</h5>
    <br>
    <span>可能的原因有：<br>
                    1、输入的产品名称不是正规名称，或者有错别字等。<br>
                    2、部分海外产品尚未收录，可以发产品成分表和图片到邮箱qinyuping@bevol.cn,以便及时补录。<br>
                    3、查不到的国产品牌，绝大多数是因为没有在药监局备案，不予补录。</span>
    <br><br>
    <h5 class="Q_and_Aline">&nbsp;&nbsp;什么是三无产品？</h5>
    <br>
    <span>
                    “三无”一般指无生产日期、无质量合格证、无生产厂名，与违禁添加和假货不同。从法规层面看，没有将产品的生产信息、配方成分在国内药监局进行备案的产品，都是三无产品。
                </span>
  </div>
</div>
</template>

<script>
    export default {
        name: "CommonProblem"
    }
</script>

<style scoped>
  .Q_and_A{
    padding-left: 15px;
  }
  .Q_and_Aline{
    border-left: solid 3px gray;
  }
</style>
