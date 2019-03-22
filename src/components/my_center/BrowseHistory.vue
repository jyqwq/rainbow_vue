<template>
  <div style="zoom:1;overflow: hidden;">
    <!--右边浏览历史-->
    <!--浏览历史标题-->
    <div class="bro_his">
      <span class="font_bro">浏览历史</span>
    </div>
    <!--浏览历史——主体-->
    <div class="news-list">
      <div class="news-item">
        <div class="decoration">
          <div class="news-circle">
            <div class="solid-circle"></div>
          </div>
        </div>
        <div class="news-box">
          <a href="#" class="news-title" data-id="17862" target="_blank">依云天然矿泉水喷雾测评</a>
          <div class="news-time">
            2018-12-29
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="decoration">
          <div class="news-circle">
            <div class="solid-circle"></div>
          </div>
        </div>
        <div class="news-box">
          <a href="#" class="news-title" data-id="17861" target="_blank">雪肌精化妆水介绍</a>
          <div class="news-time">
            2018-12-28
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="decoration">
          <div class="news-circle">
            <div class="solid-circle"></div>
          </div>
        </div>
        <div class="news-box">
          <a href="#" class="news-title" data-id="17860" target="_blank">理肤泉舒缓调理喷雾测评</a>
          <div class="news-time">
            2018-12-26
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="decoration">
          <div class="news-circle">
            <div class="solid-circle"></div>
          </div>
        </div>
        <div class="news-box">
          <a href="#" class="news-title" data-id="17856" target="_blank">科颜氏金盏花爽肤水的介绍</a>
          <div class="news-time">
            2018-12-20
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="decoration">
          <div class="news-circle">
            <div class="solid-circle"></div>
          </div>
        </div>
        <div class="news-box">
          <a href="#" class="news-title" data-id="17857" target="_blank">FANCL无添加物理防晒隔离霜（日版）SPF50</a>
          <div class="news-time">
            2018-12-20
          </div>
        </div>
      </div>
      <div class="news-item">
        <div class="decoration">
          <div class="news-circle">
            <div class="solid-circle"></div>
          </div>
        </div>
        <div class="news-box">
          <a href="#" class="news-title" data-id="17859" target="_blank">欧莱雅防晒露怎么样</a>
          <div class="news-time">
            2018-12-20
          </div>
        </div>
      </div>
    </div>
    <!--浏览历史——结束-->
  </div>
</template>

<script>
    export default {
      name: "BrowseHistory",
    }
</script>

<style scoped>
  /*字体*/
  /*浏览历史，护肤指南标题*/
  .font_bro {
    font-size: 1.5em;
    line-height: 50px;
  }
  /*右边浏览历史—开始*/
  /*浏览历史，护肤指南标题*/
  .bro_his{
    height: 50px;
    text-align: center;
  }
  .news-list {
    height: 200px;
    display: table;
    table-layout: fixed;
    width: 100%;
    font-size: 1.2rem;
    line-height: 3rem;
  }
  .news-item {
    display: table-row;
    width: 100%;
  }
  .decoration:before,
  .decoration:after {
    content: "";
    display: block;
    width: 1px;
    height: 50%;
    background: #ccc;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  }
  .news-item:nth-child(1) .decoration:before {
    display: none;
  }
  .news-item:nth-last-child(1) .decoration:after {
    display: none;
  }
  .decoration:before {
    top: 0;
  }
  .decoration:after {
    bottom: 0;
  }
  .decoration {
    display: table-cell;
    width: 10%;
    position: relative;
    vertical-align: middle;
    text-align: center;
  }
  .news-item:hover .news-box {
    background-color: #66B3F5;
    color: #fff;
  }
  .news-item:hover .news-box:before {
    content: "";
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid #66B3F5;
    border-bottom: 10px solid transparent;
    position: absolute;
    left: -10px;
    top: 0;
    bottom: 0;
    margin: auto;
  }
  .news-item:hover .solid-circle {
    background: #66B3F5;
  }
  .news-item .news-title {
    display: block;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .news-item:hover .news-title {
    color: #fff;
    text-decoration: underline;
  }
  .news-item:hover .news-time {
    color: #fff;
  }
  .news-box {
    display: table-cell;
    line-height: 2.2rem;
    width: 80%;
    vertical-align: middle;
    color: #000;
    padding-left: 15px;
    position: relative;
    border-radius: 2px;
  }
  .news-circle {
    display: inline-block;
    border-radius: 50%;
    border: 1px solid #ccc;
    background-color: #fff;
    vertical-align: middle;
  }
  .solid-circle {
    background: #ccc;
    border-radius: 50%;
    width: 0.6rem;
    height: 0.6rem;
    overflow: hidden;
    margin: 0.3rem;
  }
  /*浏览历史结束*/
</style>


