<template>
  <div>
    <header>
      <all-nav></all-nav>
    </header>
    <div class="container">
      <section class="min-height">
        <router-view></router-view>
      </section>
      <footer>
        <all-footer></all-footer>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      con:null,
      conheight:null,
      mheight:null
    }
  },
  methods:{
    //网页最小高度
    minHeight:function () {
      this.con=document.querySelector('.min-height');
      this.conheight=parseInt(window.getComputedStyle(this.con).height);
      this.mheight=parseInt(window.screen.availHeight);
      if (this.conheight+260<this.mheight) {
        this.con.style.height=(this.mheight-303)+'px'
      }
    }
  },
  mounted:function () {
    this.minHeight();
  },

}
</script>

<style>

</style>
