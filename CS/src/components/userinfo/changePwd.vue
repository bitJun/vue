<template>
  <div class="dialog addbank_view">
    <div class="panel_title">
      <label></label>
      <h4>修改密码</h4>
      <i class="iconfont icon-cha" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="label-control pull-left">旧密码</label>
          <input class="input-control pull-left" type="password" v-model="data.originalpwd">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">新密码</label>
          <input class="input-control pull-left" type="password" v-model="data.newpwd">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">登录密码</label>
          <input class="input-control pull-left" type="password" v-model="repwd">
        </div>
      </form>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a @click="sumbit()">确认</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {loginHandle, errorRequestHandle} from '../../assets/js/tool'
export default {
  name: 'changePwd',
  data () {
    return {
      data: {
        originalpwd: '',
        newpwd: ''
      },
      repwd: ''
    }
  },
  'methods': {
    'sumbit': function () {
      let params = this.data
      if (params.originalpwd === '' || params.newpwd === '' || this.repwd === '') {
        return false
      }
      if (params.newpwd !== this.repwd) {
        return false
      } else {
        this.$http.post('/customer-point/customer/modify-password',
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
              this.$message({
                message: '恭喜你，这是一条成功消息',
                type: 'success'
              })
              localStorage.removeItem('UserId')
              this.$router.push('/login')
            }
          }).catch(errorRequestHandle)
      }
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/userinfo.scss'
</style>
