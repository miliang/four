import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import day3 from '@/components/day3'
import day4 from '@/components/day4'
import table from '@/components/table'
import chuang from '@/components/chuang'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/day3',
      name: 'day3',
      component: day3
    },
    {
      path: '/day4',
      name: 'day4',
      component: day4,
      children:[
        // {
        // path:"/",
        // name:"table",
        // component:table
        // },
        {
          path:"/shafa/:id",
          name:"table",
          component:table
        },
        {
          path:"/chuang/:id",
          name:"table",
          component:table
        }
      ]
    }

  ]
})
