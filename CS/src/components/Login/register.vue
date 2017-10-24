<template>
  <div class="login_view">
    <div class="login" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="login_template">
        <form>
          <h4>
            注册<span>Sign UP</span>
          </h4>
          <div class="form-group clearfix">
            <input type="text">
            <span>真实姓名</span>
            <p class="tips"></p>
          </div>
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
            <a class="btn_1 getcode pull-left">获取验证码</a>
            <p class="tips"></p>
          </div>
          <div class="form-group clearfix">
            <a class="login btn_1">注册</a>
          </div>
          <div class="form-group clearfix">
            <router-link to="/login" class="dologin btn_1">已有账号，直接登录</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  export default {
    name: 'register',
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
