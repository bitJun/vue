<template>
  <div class="MT_account">
    <ul class="MT_tab clearfix" v-bind:style="{left:toLeft+'px'}">
      <li>
        <a class="active" @click="tab($event, 'BaseInfo')">基本资料</a>
      </li>
      <li>
        <a @click="tab($event, 'Account')">开户设置</a>
      </li>
      <li>
        <a @click="tab($event, 'Gold')">入金设置</a>
      </li>
      <li>
        <a @click="tab($event, 'Transfer')">出金/转账设置</a>
      </li>
    </ul>
    <div class="main_container">
      <div class="main_content clearfix">
        <component :is="currentView" keep-alive></component>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import BaseInfo from './baseInfo.vue'
  import Account from './account.vue'
  import Gold from './gold.vue'
  import Transfer from './transfer.vue'
  import $ from 'jquery'
  import digital from '../../assets/filter/digital'
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'MT4',
    data () {
      return {
        currentView: 'BaseInfo',
        toLeft: '',
        platformId: 1
      }
    },
    created () {
      $self = this
      $self.init()
    },
    mounted () {
      let windowWidth = document.documentElement.clientWidth
      let tabwidth = $('.MT_tab').width()
      let left = (windowWidth - tabwidth) / 2
      this.toLeft = left
    },
    'methods': {
      'init': function () {
        $self.lever()
        $self.payment()
      },
      'lever': function () {
        let params = {
          dictName: 'lever'
        }
        $self.$http.get('/support-center/dict/get-dictlist',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              for (let i = 0; i < res.data.result.length; i++) {
                let lever = {
                  label: res.data.result[i].dictValue,
                  value: res.data.result[i].id
                }
                digital.digital.lever.push(lever)
              }
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'payment': function () {
        let params = {
          dictName: 'payment'
        }
        $self.$http.get('/support-center/dict/get-dictlist',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              digital.digital.payment = []
              for (let i = 0; i < res.data.result.length; i++) {
                let payment = {
                  text: res.data.result[i].dictValue,
                  value: res.data.result[i].id
                }
                digital.digital.payment.push(payment)
              }
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'tab': function (e, type) {
        let elme = $(e.currentTarget)
        elme.parent().siblings().find('a').removeClass('active')
        elme.addClass('active')
        $self.currentView = type
      }
    },
    components: {
      'BaseInfo': BaseInfo,
      'Account': Account,
      'Gold': Gold,
      'Transfer': Transfer
    }
  }
</script>
<style scoped>
  @import "../../assets/css/MT4.css"
</style>
