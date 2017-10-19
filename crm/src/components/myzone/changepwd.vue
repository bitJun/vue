<template>
  <div class="myzone cantainer">
    <div class="filiter">
      <p>
        个人中心
      </p>
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    </div>
    <ul class="js_tab clearfix">
      <li class="pull-left">
        <router-link to="/myzone/basicinfo">基本资料</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/referrallink">推广链接</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/changepwd">修改密码</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/setemail">邮箱设置</router-link>
      </li>
    </ul>
    <div class="main">
      <h5>修改密码<i class="iconfont icon-edit"></i></h5>
      <form>
        <div class="form-group clearfix">
          <label class="label-control pull-left">原密码：</label>
          <input class="input-control pull-left" type="password">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">新密码：</label>
          <input class="input-control pull-left" type="password">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">确认新密码：</label>
          <input class="input-control pull-left" type="password">
        </div>
      </form>
      <ul class="operate_btn clearfix">
        <li><a class="save">保存</a></li>
        <li><a class="cancel">取消</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'basicinfo',
    data () {
      return {
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/myzone.scss'
</style>
