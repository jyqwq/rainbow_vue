<template>
  <div class="row row_margin dairy_row">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <div class="row row_margin">
        <h4 class="row_margin">标题</h4>
        <input type="text" class="form-control row_margin" maxlength="50" placeholder="给今天写个标题吧,字数上限为50">
        <h4 class="row_margin">内容</h4>
        <textarea class="form-control dairy_text row_margin" cols="30" rows="10" placeholder="今天发生了什么呢~~"></textarea>
        <div class="row row_margin pic_show" style="display: none;">
          <!--图片预览区-->
        </div>
        <write-tags></write-tags>
        <release-btn></release-btn>
      </div>
    </div>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>
  </div>
</template>

<script>
  import WriteTags from './WriteTags'
  import ReleaseBtn from './ReleaseBtn'
  export default {
        name: "DiaryText",
    components:{
      'write-tags':WriteTags,
      'release-btn':ReleaseBtn
    }
    }
</script>

<style scoped>

  .margin_end{
    margin-bottom: 50px;
  }


  /*心情部分*/
  .row_margin{
    margin-top: 30px;
  }

  .content_margin{
    margin-left: 15px;
  }

  .release_btn{
    background: #f7c5c9;
    border: solid 1px #f7c5c9;
  }
  .release_btn:hover{
    background: #deadb1;
    border: solid 1px #deadb1;
  }

  /*日记部分*/
  .dairy_text{
    resize: none;
  }
</style>
