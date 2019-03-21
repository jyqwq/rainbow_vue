<template>
  <div class="row r-3-6"id="r-3-6" name="reviews">
    <div class="row r-3-6-main">
      <div class="col-md-12">
        <span>用户评价</span>&nbsp;&nbsp;
        <span class="s-2">Reviews</span>
        <div class="row r-3-6-1">
          <p>
            <span class="s-3">100</span>
            <span>条评价</span>
          </p>
        </div>
        <div class="row r-3-6-2">
          <div class="col-md-2">
            <img src="../../assets/search_img/usericon.png" alt=""><br>
            普通会员 <br>
            佚名
          </div>
          <div class="col-md-6">
            <div class="reviews">
              <span>还不错</span>

              <div class="row r-3-6-2-content">
                <p>是真滴不错</p>
                <p>
                  2019年2月13日
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row r-3-6-btn">
      <div class="col-md-12">
        <div class="row" style="text-align: center;margin-top: 10px;margin-bottom: 10px">没有更多啦(〜￣△￣)〜</div>
        <div class="comment-area all_dy">
          <div class="row">
            <div class="col-lg-8 dy_c_content" id="dy_c_content">
              <div class="row dy_c_content my_com">
                <textarea class="form-control dy_text" placeholder="请自觉遵守互联网相关的政策法规，严禁发布色情、暴力、反动的言论。" rows="5" maxlength="140"></textarea>
                <div class="row row_margin" style="float: right;margin-right: 0;margin-top: 5px;">
                  <span class="content_margin remind_text">140</span>
                  <button type="button" class="btn btn-primary content_margin comment_btn">评论</button>
                </div>
              </div>
              <div class="row dy_c_content line"></div>
              <div class="row dy_c_content dy_comment">
                <!--评论区-->
              </div>

            </div>
            <div class="col-lg-2 margin_top">

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "Comments"
    }
</script>

<style scoped>

</style>
