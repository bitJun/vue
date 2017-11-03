<template>
  <div class="login_view">
    <div class="login" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="login_template">
        <form>
          <p class="error_tips" v-if="iserror">{{error_msg}}</p>
          <h4>
            登录<span>Sign In</span>
          </h4>
          <div class="form-group clearfix">
            <input type="text" v-model="data.mobile">
            <span>手机</span>
          </div>
          <div class="form-group clearfix">
            <input type="password" v-model="data.password">
            <span>密码</span>
          </div>
          <div class="form-group Captcha clearfix">
            <input class="code pull-left" type="text" v-model="data.code">
            <span>验证码</span>
            <img class="codeImg pull-left" v-bind:src="codeImg" @click="getcode()">
          </div>
          <div class="operate clearfix">
            <label class="choose pull-left">
               <el-checkbox v-model="checked">记住我</el-checkbox>
            </label>
            <router-link to="/forgotpwd" class="forget_pwd pull-right">忘记密码？</router-link>
          </div>
          <div class="form-group clearfix">
            <a class="login btn_1" @click="login()">登录</a>
          </div>
          <div class="form-group clearfix">
            <router-link to="/register" class="doregister btn_1">免费注册</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  export default {
    name: 'login',
    data () {
      return {
        wait: 60,
        iscode: false,
        data: {
          mobile: '',
          password: '',
          code: ''
        },
        iserror: false,
        error_msg: '',
        codeImg: '',
        checked: true,
        errorTime: ''
      }
    },
    created () {
      $self = this
      if (this.$cookies.isKey('mobile')) {
        $self.data.mobile = this.$cookies.get('mobile')
        $self.data.password = this.$cookies.get('password')
      }
      $self.onresize()
      $self.getcode()
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
      'getcode': function () {
        let stamp = new Date().getTime()
        $self.$http.get('/customer-point/customer/create-img-code?' + stamp + '',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            $self.codeImg = res.url
          }, (error) => {
            console.log('error', error)
          })
      },
      'login': function () {
        let params = $self.data
        $self.$http.post('/customer-point/customer/login',
          params,
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((response) => {
            let res = response.body
            if (res.code === 10000) {
              if ($self.checked === true) {
                $self.$cookies.set('mobile', $self.data.mobile, '7d')
                $self.$cookies.set('password', $self.data.password, '7d')
              }
              $self.$router.push('/accountoverview')
            } else {
              $self.iserror = true
              $self.error_msg = res.result
              $self.$http.get('/customer-point/customer/login-err-times',
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8'
                  },
                  emulateJSON: true
                }).then((res) => {
                  console.log(res.body)
                }, (error) => {
                  console.log('error', error)
                })
              return false
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/login.scss'
</style>
