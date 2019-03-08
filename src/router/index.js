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
      component: Dynamic
    },
    {
      path: '/sharing_index',
      name: 'SharingIndex',
      component: SharingIndex
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/my_center',
      name: 'MyCenter',
      component: MyCenter
    },
    {
      path: '/my_dynamic',
      name: 'MyDynamic',
      component: MyDynamic
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/search_detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search_index',
      name: 'Search',
      component: Search
    },
    {
      path: '/search_result',
      name: 'Result',
      component: Result
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    }
  ]
})
