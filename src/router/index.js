import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/layout'
import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/pages/homepage/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/homepage',
      children: [
        {
          path: 'homepage',
          name: 'homepage',
          component: Homepage
        },
        {
          path: 'helloWorld',
          name: 'helloWorld',
          component: HelloWorld
        }
      ]
    }
  ]
})
