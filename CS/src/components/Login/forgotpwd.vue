<template>
  <div class="login_view">
    <div class="login" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="login_template">
        <form>
          <p class="error_tips" v-if="iserror">{{error_msg}}</p>
          <h4>
            重置密码<span>RESET</span>
          </h4>
          <div class="step1" v-if="step1">
            <div class="form-group clearfix">
              <input type="text" v-model="data.mobile">
              <span>手机号</span>
            </div>
            <div class="form-group Captcha clearfix">
              <input class="code pull-left" type="text" v-model="data.code">
              <span>验证码</span>
              <a class="btn_1 getcode pull-left" v-if="iscode == false" @click="getsms()">获取验证码</a>
              <a class="btn_1 getcode disabled pull-left" v-if="iscode">({{wait}}s)后重新获取</a>
            </div>
            <div class="form-group clearfix">
              <a class="next btn_1" @click="next()">下一步</a>
            </div>
            <div class="form-group clearfix">
              <router-link to="/login" class="dologin btn_1">返回登录</router-link>
            </div>
          </div>
          <div class="step2" v-if="step2">
            <div class="form-group clearfix">
              <input type="password" v-model="data.password">
              <span>新密码</span>
            </div>
            <div class="form-group clearfix">
              <input type="password" v-model="repassword">
              <span>确认密码</span>
            </div>
            <div class="form-group clearfix">
              <a class="reset btn_1">确认重置</a>
            </div>
            <div class="form-group clearfix">
              <router-link to="/login" class="dologin btn_1">返回登录</router-link>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import reg from '../../assets/js/reg'
  let $self = ''
  export default {
    name: 'forgotpwd',
    data () {
      return {
        step1: true,
        step2: false,
        wait: 60,
        iscode: false,
        repassword: '',
        data: {
          mobile: '',
          password: '',
          code: ''
        },
        iserror: false,
        error_msg: ''
      }
    },
    created () {
      $self = this
      $self.onresize()
    },
    'methods': {
      'onresize': function () {
        let windowHeight = document.documentElement.clientHeight
        let logintop = windowHeight - 600
        logintop = logintop / 2
        let windowWidth = document.documentElement.clientWidth
        let loginleft = windowWidth - 1000
        loginleft = loginleft / 2
        let top = logintop
        let left = loginleft
        $self.size = {
          top: top,
          left: left
        }
      },
      'next': function () {
        let json = $self.data
        $self.iserror = false
        $self.error_msg = ''
        if (json.mobile === '') {
          $self.iserror = true
          $self.error_msg = '请输入手机号！'
          return false
        }
        if (json.code === '') {
          $self.iserror = true
          $self.error_msg = '请输入验证码！'
          return false
        } else {
          $self.step1 = !$self.step1
          $self.step2 = !$self.step2
        }
      },
      'update': function () {
        $self.iscode = true
        if ($self.wait <= 0) {
          $self.wait = 60
          $self.iscode = false
          clearInterval($self.Interval)
        } else {
          $self.wait--
        }
      },
      'getsms': function () {
        if ($self.data.mobile === '') {
          $self.iserror = true
          $self.error_msg = '请输入手机号！'
          return false
        }
        if (!reg.phone.test($self.data.mobile)) {
          $self.iserror = true
          $self.error_msg = '手机号有误！'
          return false
        } else {
          $self.iserror = false
          $self.error_msg = ''
          $self.Interval = setInterval($self.update, 1000)
          let params = {
            mobile: $self.data.mobile
          }
          $self.$http.get('/customer-point/customer/create-phone-code',
            {
              headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
              },
              params,
              emulateJSON: true
            }).then((res) => {
            }, (error) => {
              console.log('error', error)
            })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/login.scss'
</style>
