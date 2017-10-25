import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login/login'
import Register from '@/components/Login/register'
import Forgotpwd from '@/components/Login/forgotpwd'
import Accountoverview from '@/components/accountoverview'
import AHistory from '@/components/account/history'
import Apendingorder from '@/components/account/pendingorder'
import Aposition from '@/components/account/position'
import Adeposit from '@/components/account/deposit'
import Awithdraw from '@/components/account/withdraw'
import Aadjustlever from '@/components/account/adjustlever'
import Achangepwd from '@/components/account/changepwd'
import Atransfer from '@/components/account/transfer'

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
    },
    {
      path: '/account/history',
      name: 'history',
      component: AHistory
    },
    {
      path: '/account/pendingorder',
      name: 'pendingorder',
      component: Apendingorder
    },
    {
      path: '/account/position',
      name: 'position',
      component: Aposition
    },
    {
      path: '/account/deposit',
      name: 'deposit',
      component: Adeposit
    },
    {
      path: '/account/withdraw',
      name: 'withdraw',
      component: Awithdraw
    },
    {
      path: '/account/adjustlever',
      name: 'adjustlever',
      component: Aadjustlever
    },
    {
      path: '/account/changepwd',
      name: 'changepwd',
      component: Achangepwd
    },
    {
      path: '/account/transfer',
      name: 'transfer',
      component: Atransfer
    }
  ],
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
