<template>

  <div class="container qz_con">

    <!--第一部分-->
    <div class="row qz_row">
      <!--左边个人信息框-->
      <div class="col-xs-12 col-sm-11 col-md-5 col-lg-5 animal_sil qz_infor">
        <person-information></person-information>
      </div>
      <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
      <!--右边浏览历史-->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <BrowseHistory></BrowseHistory>
      </div>
    </div>

    <!--第二部分-->
    <div class="row qz_row">
      <!--肤质测试-->
      <div class="col-xs-12 col-sm-11 col-md-5 col-lg-5">
        <div class="qz_add" >
          <div class="row qz_row">
            <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
            <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <div class="add_img">
                <img src="" class="img-responsive" alt="Responsive image">
                <div class="add_iner">
                  <img src="" class="img-responsive" alt="Responsive image">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
      <!--护肤指南-->
      <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <div class="qz_gui">
          <div class="bro_his">
            <span class="font_bro">护肤指南</span>
          </div>
          <div class="qz_skinfo">
            <span class="font_skinfo">OSNW皮肤容易敏感，所以建议对照美丽修行APP对产品安全星级评定，尽量选择安全星级在3星半以上产品，同时建议查看全成分表，避开不适合的易致敏和致粉刺性成分。</span>
          </div>
        </div>
      </div>
    </div>

    <!--箭头指向第二页-->
    <div class="row qz_row">
      <div class="qz_lead ">
        <div class="qz_leaimg animal_rin">
          <a class="anchor_link">
            <img src="" class="img-responsive lea_img " alt="Responsive image">
          </a>
        </div>
      </div>
    </div>

    <!--第二页-->
    <div class="row qz_row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 qz_open">
        <span class="font_open">开 启 我 的 梳 妆 盒</span>
      </div>
    </div>

    <!--大导航栏-->
    <div class="row qz_row" id="qz_nav">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-10">
        <div class="row qz_row">
          <!--日记本-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_dianav">
            <div class="qz_nimg anima_jel">
              <img src="" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">日 记 本</span></div>
            <div class="qz_ndis"><span class="font_inf">快来写日记吧！</span></div>
          </div>
          <!--收藏夹-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_colnav">
            <div class="qz_nimg anima_jel">
              <img src="" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">收 藏 夹</span></div>
            <div class="qz_ndis"><span class="font_inf">喜欢，我收下啦！</span></div>
          </div>
          <!--收纳盒-->
          <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 qz_sep" id="qz_admnav">
            <div class="qz_nimg anima_jel">
              <img src="" class="img-responsive img_diary" alt="Responsive image">
            </div>
            <div class="qz_nav"><span class="font_nav">收 纳 盒</span></div>
            <div class="qz_ndis"><span class="font_inf">记录妆品，防止过期哦！</span></div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-1"></div>
    </div>

    <!--中心内容-->
    <div class="row qz_row qz_data">
      <!--日记本内容-->
      <div id="qz_diary" class="animal_sil">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">




            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--收藏夹内容-->
      <div id="qz_collection" class="animal_sil">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--收纳盒内容-->
      <div id="qz_admission" class="animal_sil">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <div class="qz_cen">
                <img src="" class="img-responsive qz_cimg" alt="Responsive image">
                <div class="qz_coimg to_one">
                  <span class="font_main"><br><br>彩虹日记</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--更多按钮-->
    <div class="row">
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-5"></div>
      <div class="col-xs-6 col-sm-6 col-md-6 col-lg-2">
        <a href="" class="button button--primary button--continue margin-top margin-bottom">查看更多 ></a>
      </div>
    </div>

  </div>

</template>

<script>
  import PersonInformation from './PersonInformation'
  import BrowseHistory from './BrowseHistory'
    export default {
      components:{
        'person-information':PersonInformation,
        'BrowseHistory':BrowseHistory
      },
      props:[],
      name: "MyCenter",
      data: function () {
        return {

        }
      },
      created:function(){},
      methods: {},
      mounted: function () {

      },
      computed: {},
      watch: {},
      filter: {},
    }
</script>

<style scoped>

</style>


