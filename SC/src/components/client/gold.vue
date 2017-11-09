<template>
  <div class="gold_view">
    <div class="gold_info clearfix">
      <div class="panel-left pull-left">
        <div class="form-group">
          <p class="pay_setting"><label class="bar"></label>汇率设置</p>
          <el-radio-group v-model="type">
            <el-radio :label="0">手动设置</el-radio>
            <el-radio :label="1">自动更新</el-radio>
          </el-radio-group>
        </div>
        <div class="form-group">
          <p>1美元=</p>
          <div class="unit" v-bind:style="{'margin-bottom':'25px'}">
            <input type="text" v-model="dbrate.recentlyRate" v-bind:readonly = 'readonly' v-bind:disabled = 'readonly' v-bind:class="errorRate">
            <span>CNY</span>
          </div>
          <el-checkbox v-model="dbrate.isDisplay" v-bind:true-label="1" v-bind:false-label="0">
            显示汇率
          </el-checkbox>
        </div>
        <div class="form-group">
          <p>上浮汇率</p>
          <div class="units">
            <input type="text" v-model="tradeconfigure.rateFloat" v-bind:readonly = 'Floatreadonly' v-bind:disabled = 'Floatreadonly' v-bind:class="errorFloat">
            <span>%</span>
          </div>
        </div>
        <div class="form-group">
          <p>手续费</p>
          <div class="units" v-bind:style="{'margin-bottom':'25px'}">
            <input type="text" v-model="tradeconfigure.charge" v-bind:class="errorCharge">
            <span>%</span>
          </div>
          <el-checkbox v-model="tradeconfigure.isDisplay" v-bind:true-label="1" v-bind:false-label="0">
            显示手续
          </el-checkbox>
        </div>
        <div class="form-group">
          <p>入金最低金额</p>
          <div class="unit">
            <input type="text" v-model="tradeconfigure.minMoney" v-bind:class="errorMin">
            <span>USD</span>
          </div>
        </div>
        <div class="form-group">
          <p>入金最高金额</p>
          <div class="unit">
            <input type="text" v-model="tradeconfigure.maxMoney" v-bind:class="errorMax">
            <span>USD</span>
          </div>
        </div>
      </div>
      <div class="panel-right pull-left">
        <p class="pay_setting"><label class="bar"></label>支付平台设置<!-- <i class="iconfont icon-wenhao"></i> --></p>
        <!-- <p>支付平台</p> -->
        <div class="platform clearfix">
          <el-transfer v-model="value1" :titles="['可选平台', '已选平台']" :data="data"></el-transfer>
        </div>
        <p class="pay_setting Electronic_entry"><label class="bar"></label>电汇入金设置<!-- <i class="iconfont icon-wenhao"></i> --></p>
        <vue-wangeditor id="editor" :options="options" v-model="tradeconfigure.messageConfigure" v-bind:max-length="10"></vue-wangeditor>
      </div>
    </div>
    <div class="operate clearfix">
      <a class="save" @click="save()">保存</a>
      <a class="reset" @click="init()">重置</a>
    </div>
  </div>  
</template>
<script>
  let $self = ''
  import digital from '../../assets/filter/digital'
  import {toast} from '../../assets/js/tool'
  import $ from 'jquery'
  export default {
    name: 'gold',
    data () {
      return {
        data: [],
        value1: [],
        tradeconfigure: {},
        dbrate: {},
        options: {
          width: 460,
          height: 200,
          menus: [
            'head',
            'bold',
            'italic',
            'underline',
            'strikeThrough',
            'foreColor',
            'backColor',
            'link',
            'list',
            'justify',
            /* 'image', */
            'table'
          ],
          pasteText: true,
          uploadImgServer: 'https://up-z2.qbox.me/'
        },
        readonly: false,
        Floatreadonly: false,
        type: '',
        rateFloat: '',
        errorRate: '',
        errorFloat: '',
        errorCharge: '',
        errorMin: '',
        errorMax: ''
      }
    },
    created () {
      $self = this
      $self.init()
      $self.payment()
    },
    methods: {
      contains (arr, obj) {
        let i = arr.length
        while (i--) {
          if (arr[i] === obj) {
            return true
          }
        }
        return false
      },
      init () {
        let platformId = $self.$parent.platformId
        let params = {
          platformId: platformId
        }
        $self.$http.get('/support-center/trade/find-tradeconfigure',
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
              $self.tradeconfigure = {}
              $self.tradeconfigure = res.data.result
              $self.type = res.data.result.type
              if (res.data.result.type === null) {
                $self.type = 1
              }
              if (res.data.result.isDisplay === null) {
                $self.tradeconfigure.isDisplay = 1
              }
              if (res.data.result.minMoney === '') {
                $self.tradeconfigure.minMoney = 1
              }
              if (res.data.result.maxMoney === '') {
                $self.tradeconfigure.maxMoney = 1
              }
              $('.w-e-text').html('')
              var $str = $self.tradeconfigure.messageConfigure
              $('.w-e-text').html($str)
              let json = res.data.result.payPlatform.split(',')
              $self.value1 = []
              for (let i = 0; i < json.length; i++) {
                $self.value1.push(Number(json[i]))
              }
              if (res.data.result.type === 1) {
                $self.autorate()
              } else {
                $self.handrate()
              }
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      autorate () {
        $self.$http.get('/support-center/rateSpider/get-rate',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              $self.dbrate = {
                recentlyRate: res.data.result.recentlyRate,
                tradeCurrency: res.data.result.currency,
                payCurrency: '人民币',
                isDisplay: res.data.result.isDisplay
              }
              if (res.data.result.isDisplay === undefined) {
                $self.dbrate.isDisplay = 0
              } else {
                $self.dbrate.isDisplay = res.data.result.isDisplay
              }
              $self.readonly = true
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      handrate () {
        $self.$http.get('/support-center/rate/get-rate',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              $self.dbrate = res.data.result
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      payment () {
        let json = digital.digital.payment
        for (let i = 0; i < json.length; i++) {
          $self.data.push({key: json[i].value, label: json[i].text})
        }
      },
      save () {
        let reg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
        let checkreg = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,5})))$/
        let float = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/
        let payPlatform = ''
        for (let i = 0; i < $self.value1.length; i++) {
          if (payPlatform === '') {
            payPlatform = $self.value1[i]
          } else {
            payPlatform = payPlatform + ',' + $self.value1[i]
          }
        }
        let params = {
          'configure.id': $self.tradeconfigure.id,
          'configure.charge': $self.tradeconfigure.charge,
          'configure.isDisplay': $self.tradeconfigure.isDisplay,
          'configure.minMoney': $self.tradeconfigure.minMoney,
          'configure.maxMoney': $self.tradeconfigure.maxMoney,
          'configure.messageConfigure': $self.tradeconfigure.messageConfigure,
          'configure.rateFloat': $self.tradeconfigure.rateFloat,
          'configure.type': $self.type,
          'configure.payPlatform': payPlatform,
          'rate.recentlyRate': $self.dbrate.recentlyRate,
          'rate.tradeCurrency': $self.dbrate.tradeCurrency,
          'rate.payCurrency': '人民币',
          'rate.isDisplay': $self.dbrate.isDisplay,
          'rate.type': $self.type
        }
        $self.errorRate = ''
        $self.errorFloat = ''
        $self.errorCharge = ''
        $self.errorMin = ''
        $self.errorMax = ''
        if (!checkreg.test($self.dbrate.recentlyRate) || $self.dbrate.recentlyRate === '') {
          $self.errorRate = 'errortips'
          $self.errorRate = 'errortips'
          toast('请输入有效的汇率', 2000, 'error')
          return false
        }
        if ($self.type === 1) {
          if ($self.tradeconfigure.rateFloat !== '' && !float.test($self.tradeconfigure.rateFloat)) {
            $self.errorFloat = 'errortips'
            toast('请输入有效的上浮汇率', 2000, 'error')
            return false
          }
        }
        if ($self.tradeconfigure.charge !== '' && !float.test($self.tradeconfigure.charge)) {
          $self.errorCharge = 'errortips'
          toast('请输入有效的手续费', 2000, 'error')
          return false
        }
        if (!reg.test($self.tradeconfigure.minMoney)) {
          $self.errorMin = 'errortips'
          toast('请输入有效的最低金额', 2000, 'error')
          return false
        }
        if (!reg.test($self.tradeconfigure.maxMoney)) {
          $self.errorMax = 'errortips'
          toast('请输入有效的最高金额', 2000, 'error')
          return false
        }
        if ($self.tradeconfigure.maxMoney < $self.tradeconfigure.minMoney) {
          $self.errorMax = 'errortips'
          toast('最高金额不能小于最低金额', 2000, 'error')
          return false
        }
        let test = $self.tradeconfigure.messageConfigure
        test = test.replace(/(\n)/g, '')
        test = test.replace(/(\t)/g, '')
        test = test.replace(/(\r)/g, '')
        test = test.replace(/<\/?[^>]*>/g, '')
        test = test.replace(/\s*/g, '')
        if (test.length > 1000) {
          toast('电汇入金设置最多输入1000字', 2000, 'error')
          return false
        }
        $self.$http.get('/support-center/trade/edit-deposit',
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
              toast('保存成功', 2000, 'success')
              $self.init()
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    },
    watch: {
      'type' (val, oldVal) {
        if (val === 1) {
          $self.readonly = true
          $self.Floatreadonly = false
          $self.rateFloat = $self.tradeconfigure.rateFloat
        } else {
          $self.readonly = false
          $self.Floatreadonly = true
          $self.rateFloat = ''
        }
      },
      'tradeconfigure.minMoney' (val) {
        if (val === '' || val === 0) {
          $self.tradeconfigure.minMoney = 1
        }
      },
      'tradeconfigure.maxMoney' (val) {
        if (val === '' || val === 0) {
          $self.tradeconfigure.maxMoney = 1
        }
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/gold.css"
</style>
