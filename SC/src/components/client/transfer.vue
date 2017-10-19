<template>
  <div class="transfer_view">
    <div class="entry_setting">
      <p class="panel_title"><label></label>出金设置</p>
      <ul>
        <li>
          <el-checkbox v-model="tradeconfigure.requiredBankname" v-bind:true-label="1" v-bind:false-label="0">
            支行名称必填
          </el-checkbox>
        </li>
        <li>
          <el-checkbox v-model="tradeconfigure.requiredSwift" v-bind:true-label="1" v-bind:false-label="0">
            SWIFT代码必填
          </el-checkbox>
        </li>
        <li>
          <el-checkbox v-model="tradeconfigure.requiredAddress" v-bind:true-label="1" v-bind:false-label="0">
            银行地址必填
          </el-checkbox>
        </li>
      </ul>
    </div>
    <div class="External_transfer">
      <p class="panel_title"><label></label>对外转账设置</p>
      <!-- <p class="External_title">
        第三方转账协议
      </p> -->
      <vue-wangeditor id="editor" :options="options" v-model="tradeconfigure.transferAgreement"></vue-wangeditor>
      <div class="operate clearfix">
        <a class="save" @click="save()">保存</a>
        <a class="reset" @click="init()">重置</a>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import $ from 'jquery'
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'transfer',
    data () {
      return {
        tradeconfigure: {},
        options: {
          width: 705,
          height: 350,
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
        }
      }
    },
    created () {
      $self = this
      $self.init()
    },
    'methods': {
      'init': function () {
        let id = $self.$parent.platformId
        let params = {
          platformId: id
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
              $('.w-e-text').html('')
              var $str = $self.tradeconfigure.transferAgreement
              $('.w-e-text').html($str)
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'save': function () {
        let params = {
          id: $self.tradeconfigure.id,
          requiredAddress: $self.tradeconfigure.requiredAddress,
          requiredSwift: $self.tradeconfigure.requiredSwift,
          requiredBankname: $self.tradeconfigure.requiredBankname,
          transferAgreement: $self.tradeconfigure.transferAgreement
        }
        let test = $self.tradeconfigure.transferAgreement
        test = test.replace(/(\n)/g, '')
        test = test.replace(/(\t)/g, '')
        test = test.replace(/(\r)/g, '')
        test = test.replace(/<\/?[^>]*>/g, '')
        test = test.replace(/\s*/g, '')
        if (test.length > 200) {
          toast('对外转账设置最多输入200字', 2000, 'error')
          return false
        }
        $self.$http.get('/support-center/trade/edit-tradeconfigure',
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
    }
  }
</script>
<style scoped>
  @import "../../assets/css/transfer.css"
</style>
