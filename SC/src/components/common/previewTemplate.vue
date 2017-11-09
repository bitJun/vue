<template>
  <div class="dialog previewTemplate">
    <h2><label></label>修改邮件模板<i class="iconfont icon-close" @click="cancel()"></i></h2>
    <div class="panel_dialog template_panel">
      <h5 class="text-center">{{json.mailTheme}}</h5>
      <p class="text-center">
       <span>{{json.modifyDate | time}}</span>
       <span></span>
      </p>
      <div class="content" v-html="json.mailContent">{{json.mailContent}}</div>
      <div class="notice clearfix">
        <div class="pull-left support">
          <i class="iconfont icon-gantanhao"></i>
          模版支持参数:
        </div>
        <div class="pull-right parameter">
          <p>${name}: 用户名 / ${login}: 登录名 / ${password}: 登录密码</p>
          <p>${password_investor}: 只读密码 / ${CompanyName}: 公司名称</p>
        </div>
      </div>
    </div>
    <div class="btns-group">
      <ul class="clearfix">
        <li><a class="save" @click="cancel()">确认</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'addEmail',
    data () {
      return {
        params: {},
        json: {}
      }
    },
    created () {
      $self = this
      $self.init()
    },
    methods: {
      init () {
        let params = {
          id: $self.$parent.template_id,
          type: $self.$parent.type
        }
        $self.$http.get('/support-center/mailTemplate/preview',
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
              $self.json = res.data.result
            } else {
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      cancel () {
        $self.$layer.closeAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/template.scss'
</style>
