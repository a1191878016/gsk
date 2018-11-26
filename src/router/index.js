import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

// noinspection JSAnnotator
/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  // 登录背景页
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    //hidden: true,
    children: [{
      path: 'dashboard',
      meta:{title:'主页',icon:'home'},
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path:'/news',
    // component:Layout,
    name:'Newpage',
    // hidden:true,
    // children:[{
      // path:'page',
      component:()=>import('@/views/newpage/index'),
    // meta:{title:'新窗口',icon:'home'}

    // }]
  },
  //文章列表
  {
    path: '/article',
    component: Layout,
    children: [
      {
        path: 'table',
        name: 'Article',
        component: () => import('@/views/table/index'),
        meta:{title: '文章列表' , icon:'table'}
      }
    ]
  },
  // 统计分析
  {
    path:'/statistics',
    component:Layout,
    redirect:'/statistics/pie',
    name:'chart',
    meta:{
      title:'统计分析',icon:'chart-5'
    },
    children:[
      {
        path:'pie',
        component:()=>import('@/views/chart/pie'),
        name:'Pie',
        meta:{title:'文章来源统计'}
      },{
        path:'bar',
        component:()=>import('@/views/chart/bar'),
        name:'Cylinder',
        meta:{title:'关键词数量统计'}
      },
      // {
      //   path:'polyline',
      //   // component:,
      //   redirect:'/statistics/polyline/like',
      //   name:'Polyline',
      //   meta:{title:'折线图'},
      //   children:[
      //     {
      //       path:'like',
      //       component:()=>import('@/views/chart/polyline/like'),
      //       name:'Like',
      //       meta:{title:'点赞折线图'}
      //     },
      //     {
      //       path:'read',
      //       component:()=>import('@/views/chart/polyline/read'),
      //       name:'Read',
      //       meta:{title:'阅读折线图'}
      //     }
      //   ]
      // },
      {
        path:'like',
        component:()=>import('@/views/chart/like'),
        name:'Like',
        meta:{title:'点赞分析图'}
      },{
        path:'read',
        component:()=>import('@/views/chart/read'),
        name:'Read',
        meta:{title:'阅读折线图'}
      },{
        path:'filter',
        component:()=>import('@/views/chart/filter'),
        name:'Filter',
        meta:{title:'数据筛选对比'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
