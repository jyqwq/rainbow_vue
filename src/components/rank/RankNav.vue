<template>
  <div class="row row_margin">
    <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
    <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10 xs_padding">
      <div class="nav nav-tabs unaction">
        <div class="hidden-xs col-sm-2 col-md-2 col-lg-2"></div>
        <div class="col-xs-12 col-sm-8 col-md-8 col-lg-8">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 xs_padding">
            <div role="presentation" class="my_active"><router-link to="/hotsearch"><span class="glyphicon glyphicon-fire" aria-hidden="true">&nbsp;</span>实时热门</router-link></div>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 xs_padding">
            <div role="presentation"><router-link to="/hotsearchdynamic"><span class="glyphicon glyphicon-book" aria-hidden="true">&nbsp;</span>热门日记</router-link></div>
          </div>
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 xs_padding">
            <div role="presentation"><router-link to="/hotsearchproduct"><span class="glyphicon glyphicon-tint" aria-hidden="true">&nbsp;</span>热门妆品</router-link></div>
          </div>
        </div>
        <div class="hidden-xs col-sm-2 col-md-2 col-lg-2"></div>
      </div>
    </div>
    <div class="hidden-xs col-sm-1 col-md-1 col-lg-1"></div>
  </div>
</template>

<script>
    export default {
        name: "RankNav"
    }
</script>

<style scoped>
  a{
    text-decoration: none;
  }
  .row_margin{
    margin-top: 20px;
  }
  .xs_padding{
    padding: 0 3px;
    text-align: center;
  }
  .my_active{
    border-bottom: solid 3px lightpink;
  }
  .my_active>a{
    color: lightpink;
  }
</style>
