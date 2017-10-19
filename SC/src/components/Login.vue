<template>
  <div class="login" >
    <div class="main" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="container">
        <div class="logo"></div>
        <form class="form">
          <div class="form-group">
            <input type="text" name="" v-model='logindata.email' v-bind:class="erroremail">
            <span><i class="iconfont icon-mail"></i>邮箱</span>
          </div>
          <div class="form-group">
            <input type="password" name="" v-model='logindata.password' v-bind:class="errorpassword">
            <span><i class="iconfont icon-mima"></i>密码</span>
          </div>
          <div class="form-group Captcha clearfix">
            <input class="code pull-left" type="text" name="" v-model='logindata.code' v-bind:class="errorcode">
            <a class="codeImg pull-left" @click="reloadCode()"><img v-bind:src="codeImg"></a>
          </div>
          <div class="operate">
            <p v-if="errortips">{{tips}}</p>
            <a class="submit" @click="doLogin()">登录</a>
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
      size: {
        top: '',
        left: ''
      },
      errortips: false,
      tips: '',
      codeImg: '',
      logindata: {
        email: '',
        password: '',
        code: ''
      },
      erroremail: '',
      errorpassword: '',
      errorcode: ''
    }
  },
  mounted () {
    $self = this
    let windowHeight = document.documentElement.clientHeight
    let logintop = windowHeight - 500
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
    $self.getImgCode()
    document.onkeydown = function (e) {
      if (e && e.keyCode === 13) {
        $self.doLogin()
      }
    }
  },
  'methods': {
    'getImgCode': function () {
      let stamp = new Date().getTime()
      $self.$http.get('/support-center/admin-user/create-img-code?' + stamp + '',
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
    'reloadCode': function () {
      $self.getImgCode()
    },
    'doLogin': function () {
      $self.erroremail = ''
      $self.errorpassword = ''
      $self.errorcode = ''
      $self.errortips = false
      if ($self.logindata.email === '') {
        $self.tips = '请填写用户名'
        $self.erroremail = 'errortips'
        $self.errortips = true
        return false
      }
      if ($self.logindata.password === '') {
        $self.tips = '请填写密码'
        $self.errorpassword = 'errortips'
        $self.errortips = true
        return false
      }
      if ($self.logindata.code === '') {
        $self.tips = '请填写验证码'
        $self.errorcode = 'errortips'
        $self.errortips = true
        return false
      } else {
        let params = $self.logindata
        $self.$http.post('/support-center/admin-user/login',
          params,
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            let code = res.data.code
            if (code === 10000) {
              localStorage.setItem('logined', true)
              $self.$router.push({ path: '/' })
            }
            if (code === 30001) {
              $self.tips = res.data.msg
              $self.erroremail = 'errortips'
              $self.errortips = true
            }
            if (code === 30002) {
              $self.tips = res.data.msg
              $self.errorpassword = 'errortips'
              $self.errortips = true
            }
            if (code === 30003) {
              $self.tips = res.data.msg
              $self.errorcode = 'errortips'
              $self.errortips = true
            }
            if (code === 30004) {
              $self.tips = res.data.msg
              $self.errorcode = 'errortips'
              $self.errortips = true
            }
            if (code === 40001) {
              $self.tips = res.data.msg
              $self.erroremail = 'errortips'
              $self.errorpassword = 'errortips'
              $self.errortips = true
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    }
  }
}
</script>

<style scoped>
  @import "../assets/css/login.css";
</style>
