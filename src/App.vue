<template>
  <div class="bod min-height">
    <header class="navbar-fixed-top">
      <all-nav v-if="show"></all-nav>
    </header>
    <div class="container">
      <section>
        <router-view @flash="flash"></router-view>
      </section>
    </div>
    <div>
      <section>
        <router-view name="login"></router-view>
      </section>
    </div>
    <footer>
      <all-footer></all-footer>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data:function(){
    return{
      show:true,
      con:null,
      conheight:null,
      mheight:null,
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
    },
    flash:function () {
      this.show = false;
      this.$nextTick(()=>{
        this.show = true;
      })
    }
  },
  mounted:function () {
    this.minHeight();

  },

}
</script>

<style>
.bod{
  background: -webkit-linear-gradient(top, #d2e9fb 0.00%, #d2e9fb 60.00%);
  background: linear-gradient(top, #d2e9fb 0.00%, #d2e9fb 60.00%);
}
</style>
