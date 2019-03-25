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
import HotSearchProduct from '@/components/rank/HotSearchProduct'
import HotSearchDynamic from '@/components/rank/HotSearchDynamic'
import HotSearch from '@/components/rank/HotSearch'
import MoodText from '@/components/sharing_index/MoodText'
import EvaluationText from '@/components/sharing_index/EvaluationText'
import DairyText from '@/components/sharing_index/DairyText'
import DiaryList from '@/components/my_dynamic/DiaryList'
import CollectionList from '@/components/my_dynamic/CollectionList'
import AdmissionList from '@/components/my_dynamic/AdmissionList'

import Global from '../components/Global'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/rank',
      components:{
        login:Rank
      },
      children:[
        {
          path:'hotsearchproduct',
          name: "HotSearchProduct",
          component:HotSearchProduct
        },
        {
          path:'hotsearchdynamic',
          name: "HotSearchDynamic",
          component:HotSearchDynamic
        },
        {
          path:'',
          name: "HotSearch",
          component:HotSearch
        }
      ]
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
    },
    {
      path: '/sharing_index',
      component: SharingIndex,
      children:[
        {
          path:'',
          name: "MoodText",
          component:MoodText
        },
        {
          path:'evaluationtext',
          name: "EvaluationText",
          component:EvaluationText
        },
        {
          path:'dairytext',
          name: "DairyText",
          component:DairyText
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        login:Login
      },
    },
    {
      path: '/my_center',
      name: 'MyCenter',
      component: MyCenter,
    },
    {
      path: '/my_dynamic',
      component: MyDynamic,
      children:[
        {
          path:'',
          name: "DiaryList",
          component:DiaryList
        },
        {
          path:'collectionlist',
          name:"CollectionList",
          component:CollectionList
        },
        {
          path:'admissionlist',
          name: "AdmissionList",
          component:AdmissionList
        }
      ]
    },
    {
      path: '/register',
      name: 'Register',
      components: {
        login:Register
      },
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
    }
  ]
});

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  const nextRoute = ['Setting', 'MyDynamic', 'MyCenter', 'SharingIndex', 'Dynamic'];
  let isLogin = Global.ISLOGIN;  // 是否登录
  // 未登录状态；当路由到nextRoute指定页时，跳转至login
  if (nextRoute.indexOf(to.name) >= 0) {
    if (!isLogin) {
      console.log('不要耍小聪明~~~~');
      next('/login');
      router.go(0);
    }
  }
  // 已登录状态；当路由到login时，跳转至home
  if (to.name === 'Login' || to.name === 'Register') {
    if (isLogin) {
      console.log('不要耍小聪明~~~~');
      next('/');
      router.go(0)
    }
  }
  next();
});

export default router
