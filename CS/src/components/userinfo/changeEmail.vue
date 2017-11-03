<template>
  <div class="dialog addbank_view">
    <div class="panel_title">
      <label></label>
      <h4>修改邮箱</h4>
      <i class="iconfont icon-cha" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="label-control pull-left">新邮箱</label>
          <input class="input-control pull-left" type="text" v-model="data.email">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">登录密码</label>
          <input class="input-control pull-left" type="password" v-model="data.password">
        </div>
      </form>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a @click="submit()">确认</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {loginHandle, errorRequestHandle} from '../../assets/js/tool'
export default {
  name: 'changeEmail',
  data () {
    return {
      data: {
        email: '',
        password: ''
      }
    }
  },
  'methods': {
    'init': function () {
      this.data.email = this.$parent.data.email
    },
    'submit': function () {
      let params = this.data
      this.$http.post('/customer-point/customer/modify-email',
        params,
        {
          headers: {
            'Content-Type': 'application/json',
            'charset': 'utf-8'
          },
          emulateJSON: true
        }).then(loginHandle).then((res) => {
          console.log(res.body)
          let json = res.body
          if (json.code === 10000) {
            this.$parent().init()
          }
        }).catch(errorRequestHandle)
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/userinfo.scss'
</style>
