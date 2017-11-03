<template>
  <div class="dialog addbank_view">
    <div class="panel_title">
      <label></label>
      <h4>添加银行卡</h4>
      <i class="iconfont icon-cha" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="label-control pull-left">银行选择<span class="must">*</span></label>
          <input class="input-control pull-left" type="text">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">银行账号<span class="must">*</span></label>
          <input class="input-control pull-left" type="text">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">收款人<span class="must">*</span></label>
          <input class="input-control pull-left" type="text">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">SWIFT代码</label>
          <input class="input-control pull-left" type="text">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">支行名称</label>
          <input class="input-control pull-left" type="text">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">银行地址</label>
          <input class="input-control pull-left" type="text">
        </div>
      </form>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a>确认</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {loginHandle, errorRequestHandle} from '../../assets/js/tool'
export default {
  name: 'addbank',
  created () {
    this.init()
  },
  'methods': {
    'init': function () {
      this.getBank()
    },
    'cancel': function () {
      this.$layer.closeAll()
    },
    'getBank': function () {
      this.$http.get('/customer-point/bank/get-banklist',
        {
          headers: {
            'Content-Type': 'application/json',
            'charset': 'utf-8'
          },
          emulateJSON: true
        }).then(loginHandle).then((res) => {
          console.log(res)
          this.username = res.body.result.realname
          localStorage.setItem('UserId', res.body.result.id)
          // let json = JSON.parse(response.bodyText)
        }).catch(errorRequestHandle)
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/userinfo.scss'
</style>
