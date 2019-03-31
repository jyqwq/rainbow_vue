// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/animate.css'
import '../node_modules/particles.min'
//导航组件
import AllNav from './components/AllNav'
import AllFooter from './components/AllFooter'
import VueCropper from 'vue-cropper'

Vue.use(VueCropper)
//引用全局模块
import global_ from './components/Global'//引用文件

Vue.prototype.GLOBAL = global_; //挂载到Vue实例上面

//注册成为全局组件
Vue.component('all-nav',AllNav);
Vue.component('all-footer',AllFooter);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
