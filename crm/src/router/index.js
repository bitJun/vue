import Vue from 'vue'
import Router from 'vue-router'
import Datacenter from '@/components/Index'
import Login from '@/components/Login'
import NewAccount from '@/components/digital/NewAccount'
import newcustomer from '@/components/digital/NewOpen'
import volume from '@/components/digital/volume'
import desposit from '@/components/digital/desposit'
import User from '@/components/user/user'
import Account from '@/components/account/account'
import History from '@/components/statistics/history'
import Position from '@/components/statistics/position'
import Pendingorder from '@/components/statistics/pendingorder'
import withdrawrecord from '@/components/statistics/desposit'
import Accountstatemen from '@/components/statistics/accountstatemen'
import Sl from '@/components/statistics/Sl'
import Tradecategory from '@/components/statistics/tradecategory'
import TradecategoryDetail from '@/components/statistics/detail'
import Despositcommission from '@/components/statistics/despositcommission'
import Tradecommission from '@/components/statistics/tradecommission'
import Mission from '@/components/mission/mission'
import Customer from '@/components/customer/customer'
import Operatelog from '@/components/system/operatelog'
import Hierarchy from '@/components/system/hierarchy'
import Categorygroup from '@/components/system/categorygroup'
import Tradecom from '@/components/system/tradecom'
import Despoistcom from '@/components/system/despoistcom'
import Saccount from '@/components/system/account'
import Role from '@/components/system/role'
import Referrallink from '@/components/system/referrallink'
import Basicinfo from '@/components/myzone/basicinfo'
import Mreferrallink from '@/components/myzone/referrallink'
import Changepwd from '@/components/myzone/changepwd'
import Setemail from '@/components/myzone/setemail'
import Message from '@/components/myzone/message'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Datacenter,
      redirect: '/datacenter'
    },
    {
      path: '/datacenter',
      name: 'datacenter',
      component: Datacenter
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/datacenter/newaccount',
      name: 'newaccount',
      component: NewAccount
    },
    {
      path: '/datacenter/newcustomer',
      name: 'newcustomer',
      component: newcustomer
    },
    {
      path: '/datacenter/volume',
      name: 'volume',
      component: volume
    },
    {
      path: '/datacenter/desposit',
      name: 'desposit',
      component: desposit
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/statistics/history',
      name: 'history',
      component: History
    },
    {
      path: '/statistics/position',
      name: 'position',
      component: Position
    },
    {
      path: '/statistics/pendingorder',
      name: 'pendingorder',
      component: Pendingorder
    },
    {
      path: '/statistics/desposit&withdrawrecord',
      name: 'withdrawrecord',
      component: withdrawrecord
    },
    {
      path: '/statistics/accountstatemen',
      name: 'accountstatemen',
      component: Accountstatemen
    },
    {
      path: '/statistics/Sl&Sp',
      name: 'Sl',
      component: Sl
    },
    {
      path: '/statistics/tradecategory',
      name: 'tradecategory',
      component: Tradecategory
    },
    {
      path: '/statistics/detail/:id',
      name: 'tradecategorydetail',
      component: TradecategoryDetail
    },
    {
      path: '/statistics/despositcommission',
      name: 'despositcommission',
      component: Despositcommission
    },
    {
      path: '/statistics/tradecommission',
      name: 'tradecommission',
      component: Tradecommission
    },
    {
      path: '/mission',
      name: 'mission',
      component: Mission
    },
    {
      path: '/customer',
      name: 'customer',
      component: Customer
    },
    {
      path: '/system/operatelog',
      name: 'operatelog',
      component: Operatelog
    },
    {
      path: '/system/hierarchy',
      name: 'hierarchy',
      component: Hierarchy
    },
    {
      path: '/system/categorygroup',
      name: 'categorygroup',
      component: Categorygroup
    },
    {
      path: '/system/tradecom',
      name: 'tradecom',
      component: Tradecom
    },
    {
      path: '/system/despoistcom',
      name: 'despoistcom',
      component: Despoistcom
    },
    {
      path: '/system/account',
      name: 'saccount',
      component: Saccount
    },
    {
      path: '/system/role',
      name: 'role',
      component: Role
    },
    {
      path: '/system/referrallink',
      name: 'referrallink',
      component: Referrallink
    },
    {
      path: '/myzone/basicinfo',
      name: 'basicinfo',
      component: Basicinfo
    },
    {
      path: '/myzone/referrallink',
      name: 'mreferrallink',
      component: Mreferrallink
    },
    {
      path: '/myzone/changepwd',
      name: 'changepwd',
      component: Changepwd
    },
    {
      path: '/myzone/setemail',
      name: 'setemail',
      component: Setemail
    },
    {
      path: '/myzone/message',
      name: 'message',
      component: Message
    }
  ]
})
