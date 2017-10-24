import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login'
import Register from '@/components/Login/register'
import Forgotpwd from '@/components/Login/forgotpwd'
import Accountoverview from '@/components/accountoverview'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Accountoverview,
      redirect: '/accountoverview'
    },
    {
      path: '/accountoverview',
      name: 'accountoverview',
      component: Accountoverview
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/forgotpwd',
      name: 'forgotpwd',
      component: Forgotpwd
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
