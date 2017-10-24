<template>
  <div class="login_view">
    <div class="login" v-bind:style="{top:size.top+'px', left:size.left+'px'}">
      <div class="login_template">
        <form>
          <h4>
            重置密码<span>RESET</span>
          </h4>
          <div class="step1" v-if="step1">
            <div class="form-group clearfix">
              <input type="text">
              <span>手机号</span>
              <p class="tips"></p>
            </div>
            <div class="form-group Captcha clearfix">
              <input class="code pull-left" type="text">
              <span>验证码</span>
              <a class="btn_1 getcode pull-left">获取验证码</a>
              <p class="tips"></p>
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
              <input type="text">
              <span>新密码</span>
              <p class="tips"></p>
            </div>
            <div class="form-group clearfix">
              <input type="text">
              <span>确认密码</span>
              <p class="tips"></p>
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
  let $self = ''
  export default {
    name: 'forgotpwd',
    data () {
      return {
        step1: true,
        step2: false
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
        $self.step1 = !$self.step1
        $self.step2 = !$self.step2
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/login.scss'
</style>
