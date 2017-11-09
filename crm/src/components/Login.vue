<template>
  <div class="login" >
    <div class="main" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="logo">
        <img src="../assets/images/logo.png">
      </div>
      <form class="form">
        <div class="form-group">
          <span>邮箱</span>
          <input type="text" name="" v-model='logindata.email' v-bind:class="erroremail">
        </div>
        <div class="form-group">
          <span>密码</span>
          <input type="password" name="" v-model='logindata.password' v-bind:class="errorpassword">
        </div>
        <div class="form-group Captcha clearfix" v-if="needCode">
          <input class="code pull-left" type="text" name="" v-model='logindata.code' v-bind:class="errorcode">
          <a class="codeImg pull-left" @click="reloadCode()"><img v-bind:src="codeImg"></a>
        </div>
        <p>
          <a class="forget_pwd">忘记密码？</a>
        </p>
      </form>
      <a class="submit" @click="doLogin()">登录</a>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import $ from 'jquery'
  export default {
    name: 'forget',
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
        errorcode: '',
        needCode: false
      }
    },
    mounted () {
      $self = this
      $self.onresize()
      $self.getImgCode()
      document.onkeydown = function (e) {
        if (e && e.keyCode === 13) {
          $self.doLogin()
        }
      }
      window.onresize = () => {
        return (() => {
          $self.onresize()
        })()
      }
    },
    methods: {
      onresize () {
        let windowHeight = document.documentElement.clientHeight
        let logintop = windowHeight - $('.main').height()
        logintop = logintop / 2
        let windowWidth = document.documentElement.clientWidth
        let loginleft = windowWidth - $('.main').width()
        loginleft = loginleft / 2
        let top = logintop
        let left = loginleft
        $self.size = {
          top: top,
          left: left
        }
      },
      getImgCode () {
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
      reloadCode () {
        $self.getImgCode()
      },
      doLogin () {
      }
    },
    watch: {
      'needCode' (val, oldVal) {
        if (val !== oldVal) {
          $self.onresize()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/sass/login.scss";
</style>
