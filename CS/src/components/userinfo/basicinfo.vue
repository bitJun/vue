<template>
  <div class="userinfo_view">
    <filiter></filiter>
    <div class="main_content Ubasicinfo_view">
      <h4>用户基本资料</h4>
      <form>
        <div class="form-group">
          <p class="tli">
            用户名
            <lanel><span class="must">*</span>设置后无法修改</lanel>
          </p>
          <div class="clearfix">
            <input class="control-input pull-left" type="text">
            <a class="btn sure pull-left">确认</a>
          </div>
        </div>
        <div class="form-group">
          <p class="tli">登录密码</p>
          <div class="clearfix">
            <input class="control-input pull-left" type="text">
            <a class="btn edit pull-left">修改</a>
          </div>
        </div>
        <div class="form-group">
          <p class="tli">绑定邮箱</p>
          <div class="clearfix">
            <input class="control-input pull-left" type="text">
            <a class="btn edit pull-left">修改</a>
          </div>
        </div>
        <div class="form-group">
          <p class="tli">绑定手机</p>
          <div class="clearfix">
            <input class="control-input pull-left" type="text">
            <a class="btn edit pull-left">修改</a>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import filiter from './filiter.vue'
export default {
  name: 'Ubasicinfo',
  components: {
    'filiter': filiter
  }
}
</script>
<style lang="sass" scoped>
@import "../../assets/sass/userinfo.scss"
</style>
