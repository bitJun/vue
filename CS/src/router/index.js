import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
