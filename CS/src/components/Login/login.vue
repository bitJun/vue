<template>
  <div class="login_view">
    <div class="login" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="login_template">
        <form>
          <h4>
            登录<span>Sign In</span>
          </h4>
          <div class="form-group clearfix">
            <input type="text">
            <span>手机</span>
            <p class="tips"></p>
          </div>
          <div class="form-group clearfix">
            <input type="text">
            <span>密码</span>
            <p class="tips"></p>
          </div>
          <div class="form-group Captcha clearfix">
            <input class="code pull-left" type="text">
            <span>验证码</span>
            <img class="codeImg pull-left" src="https://passport.baidu.com/cgi-bin/genimage?njG8306de63f01ef58c02d014e0a601690046c75b06ad048a37">
            <p class="tips"></p>
          </div>
          <div class="operate clearfix">
            <label class="choose pull-left">
              <input type="checkbox">记住我
            </label>
            <router-link to="/forgotpwd" class="forget_pwd pull-right">忘记密码？</router-link>
          </div>
          <div class="form-group clearfix">
            <a class="login btn_1">登录</a>
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/login.scss'
</style>
