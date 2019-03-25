<template>
  <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2 choose_sharing">
    <ul class="nav nav-tabs nav-stacked shu_nav row_margin margin_end">
      <li role="presentation" class="shu_active"><router-link to="/sharing_index"><img src="../../assets/mood.png" alt="">&nbsp;&nbsp;心情</router-link></li>
      <li role="presentation"><router-link to="/sharing_index/dairytext"><img src="../../assets/diary.png" alt="">&nbsp;&nbsp;日记</router-link></li>
      <li role="presentation"><router-link to="/sharing_index/evaluationtext" href="#"><img src="../../assets/evaluation.png" alt="">&nbsp;&nbsp;测评</router-link></li>
    </ul>
  </div>
</template>

<script>

    export default {
        name: "SharingNav",

    }
</script>

<style scoped>

</style>
