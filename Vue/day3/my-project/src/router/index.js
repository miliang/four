import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import day3 from '@/components/day3'
import day2 from '@/components/day2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'day3',
      component: day3
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day2',
      name: 'day2',
      component: day2
    }
  ]
})
