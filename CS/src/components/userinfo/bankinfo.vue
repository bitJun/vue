<template>
  <div class="userinfo_view">
    <filiter></filiter>
    <div class="main_content Ubankinfo_view">
      <div class="operate">
        <a class="addBank" @click="edit('')">添加银行卡</a>
      </div>
      <ul class="banklist clearfix" v-if="bank.length > 0">
        <li v-for="item in bank">
          <a class="item">
            <div class="bank">
              <img src="../../assets/images/bank_icon.png">
              <p class="account">{{item.account}}</p>
            </div>
            <p class="info clearfix">
              <span class="pull-left">收款人</span>
              <label class="pull-right">{{item.payee}}</label>
            </p>
            <p class="info clearfix">
              <span class="pull-left">SWIFT代码</span>
              <label class="pull-right">{{item.SWIFT}}</label>
            </p>
            <p class="info clearfix">
              <span class="pull-left">支行名称</span>
              <label class="pull-right">{{item.branch}}</label>
            </p>
            <p class="info clearfix">
              <span class="pull-left">银行地址</span>
              <label class="pull-right">{{item.address}}</label>
            </p>
            <div class="mask">
            </div>
            <a class="btn delete" @click="del()">删除</a>
            <a class="btn edit" @click="edit(item.id)">编辑</a>
          </a>
        </li>
      </ul>
      <div class="no_result" v-if="bank.length == 0">
        <img src="../../assets/images/no_bank.png">
        <p>当前暂无银行卡</p>
      </div>
    </div>
  </div>
</template>
<script>
import filiter from './filiter.vue'
import Dialog from './editBank.vue'
import Tip from './tip.vue'
import {loginHandle, errorRequestHandle} from '../../assets/js/tool'
let $self = ''
export default {
  name: 'Ubankinfo',
  data () {
    return {
      bank: []
    }
  },
  created () {
    $self = this
    $self.init()
  },
  components: {
    'filiter': filiter
  },
  'methods': {
    'init': function () {
      let params = {
        customerId: localStorage.getItem('UserId')
      }
      $self.$http.get('/customer-point/bank/get-bankaccountlist',
        {
          headers: {
            'Content-Type': 'application/json',
            'charset': 'utf-8'
          },
          params,
          emulateJSON: true
        }).then(loginHandle).then((res) => {
          let json = res.body.result
          $self.bank = json
        }).catch(errorRequestHandle)
    },
    'edit': function (id) {
      $self.$layer.iframe({
        title: '',
        content: {
          content: Dialog,
          parent: $self,
          data: []
        },
        area: ['500px', 'auto']
      })
    },
    'del': function () {
      $self.$layer.iframe({
        title: '',
        content: {
          content: Tip,
          parent: $self,
          data: []
        },
        area: ['500px', 'auto']
      })
    }
  }
}
</script>
<style lang="sass" scoped>
@import "../../assets/sass/userinfo.scss"
</style>