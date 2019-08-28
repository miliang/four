import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import day1 from '@/components/day1'
import day2 from '@/components/day2'
import day3 from '@/components/day3'
import day4 from '@/components/day4'
import day5 from '@/components/day5'
import day6 from '@/components/day6'
import day7 from '@/components/day7'
import day8 from '@/components/day8'
import demo from '@/components/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',  //拦截所有
      name: 'HelloWorld',  // 路由的名字
      component: HelloWorld   //显示组件
    },
    {
      path: '/day1',  //拦截所有
      name: 'day1',  // 路由的名字
      component: day1   //显示组件
    },
    {
      path: '/day2',  //拦截所有
      name: 'day2',  // 路由的名字
      component: day2   //显示组件
    },
    {
      path: '/day3',  //拦截所有
      name: 'day3',  // 路由的名字
      component: day3   //显示组件
    },
    {
      path: '/day4',  //拦截所有
      name: 'day4',  // 路由的名字
      component: day4   //显示组件
    },
    {
      path: '/day5',  //拦截所有
      name: 'day5',  // 路由的名字
      component: day5   //显示组件
    }, {
      path: '/day6',  //拦截所有
      name: 'day6',  // 路由的名字
      component: day6   //显示组件
    },
    {
      path: '/day7',  //拦截所有
      name: 'day7',  // 路由的名字
      component: day7   //显示组件
    },
    {
      path: '/day8',  //拦截所有
      name: 'day8',  // 路由的名字
      component: day8   //显示组件
    },
    {
      path: '/demo',  //拦截所有
      name: 'demo',  // 路由的名字
      component: demo   //显示组件
    }
  ]
})
