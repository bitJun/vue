import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/index'
import Bbrand from '@/components/CRM/brand.vue'
import Bemail from '@/components/CRM/email.vue'
import Cbrand from '@/components/client/brand.vue'
import Cemail from '@/components/client/email.vue'
import MT4 from '@/components/client/MT4.vue'
import MT5 from '@/components/client/MT5.vue'
import Download from '@/components/client/download.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/B-brand',
      name: 'B-brand',
      component: Bbrand
    },
    {
      path: '/B-email',
      name: 'B-email',
      component: Bemail
    },
    {
      path: '/C-brand',
      name: 'C-brand',
      component: Cbrand
    },
    {
      path: '/C-email',
      name: 'C-email',
      component: Cemail
    },
    {
      path: '/C-mt4',
      name: 'MT4',
      component: MT4
    },
    {
      path: '/C-mt5',
      name: 'MT5',
      component: MT5
    },
    {
      path: '/C-download',
      name: 'download',
      component: Download
    }
  ]
})
