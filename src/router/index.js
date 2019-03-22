import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index/Index'
import Rank from '@/components/rank/Rank'
import Evaluation from '@/components/evaluation/Evaluation'
import DynamicDetail from '@/components/dynamic_detail/DynamicDetail'
import Dynamic from '@/components/dynamic/Dynamic'
import SharingIndex from '@/components/sharing_index/SharingIndex'
import Login from '@/components/login/Login'
import MyCenter from '@/components/my_center/MyCenter'
import MyDynamic from '@/components/my_dynamic/MyDynamic'
import Register from '@/components/register/Register'
import Detail from '@/components/search_detail/Detail'
import Search from '@/components/search_index/Search'
import Result from '@/components/search_result/Result'
import Setting from '@/components/setting/Setting'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/dynamic_detail',
      name: 'DynamicDetail',
      component: DynamicDetail
    },
    {
      path: '/dynamic',
      name: 'Dynamic',
      component: Dynamic,
      meta:{
        ISLOGIN:true
      }
    },
    {
      path: '/sharing_index',
      name: 'SharingIndex',
      component: SharingIndex,
      meta:{
        ISLOGIN:true
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        login:Login
      },
      meta:{
        ISLOGIN:false
      }
    },
    {
      path: '/my_center',
      name: 'MyCenter',
      component: MyCenter,
      meta:{
        ISLOGIN:true
      }
    },
    {
      path: '/my_dynamic',
      name: 'MyDynamic',
      component: MyDynamic,
      meta:{
        ISLOGIN:true
      }
    },
    {
      path: '/register',
      name: 'Register',
      components: {
        login:Register
      },
      meta:{
        ISLOGIN:false
      }
    },
    {
      path: '/search_detail',
      name: 'Detail',
      components: {
        login:Detail
      },
    },
    {
      path: '/search_index',
      name: 'Search',
      components: {
        login:Search
      },
    },
    {
      path: '/search_result',
      name: 'Result',
      components: {
        login:Result
      },
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting,
      meta:{
        ISLOGIN:true
      }
    }
  ]
})

// const router = new Router({
//   routes
// });
//
// /**
//  * to:表示目标路由
//  * from:表示来源路由
//  * next:表示执行下一步操作
//  */
// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') { // 当路由为login时就直接下一步操作
//     next();
//   } else { // 否则就需要判断
//     if(sessionStorage.username){  // 如果有用户名就进行下一步操作
//       next()
//     }else{
//       next({path: '/login'})  // 没有用户名就跳转到login页面
//     }
//   }
// });
//
// export default router
