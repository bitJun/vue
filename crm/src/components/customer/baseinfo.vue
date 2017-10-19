<template>
  <div class="customerInfo">
    <section>
      <h5>交易账户</h5>
      <ul class="trade_account clearfix" v-for="item in json">
        <li>
          <label>账户：</label><span>{{item.account}}</span>
        </li>
        <li>
          <label>交易服务器：</label><span>{{item.ftp}}</span>
        </li>
      </ul>
    </section>
    <section>
      <h5>Trader Work登录账户</h5>
      <div class="no_result clearfix">
        <img src="../../assets/images/none.png" class="pull-left">
        <span class="pull-left">未绑定账户</span>
        <a class="send_email pull-left">发送邀请注册邮件</a>
      </div>
    </section>
    <section class="info">
      <h5>基本信息</h5>
      <form>
        <div class="form-group clearfix">
          <label class="control_label pull-left">客户姓名：</label>
          <input class="control_input pull-left" type="text" name="">
          <label class="control_label pull-left">客户归属：</label>
          <input class="control_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">客户级别：</label>
          <input class="control_input pull-left" type="text" name="">
          <label class="control_label pull-left">客户来源：</label>
          <input class="control_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">电话：</label>
          <input class="control_input pull-left" type="text" name="">
          <label class="control_label pull-left">邮箱：</label>
          <input class="control_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">城市：</label>
          <input class="control_input pull-left" type="text" name="">
          <label class="control_label pull-left">邮编：</label>
          <input class="control_input pull-left" type="text" name="">
        </div>
        <div class="form-group address">
          <label class="control_label pull-left">地址：</label>
          <input class="control_input pull-left" type="text" name="">
        </div>
        <div class="form-group notice">
          <label class="control_label pull-left">备注：</label>
          <textarea></textarea>
        </div>
      </form>
    </section>
  </div>
</template>
<script>
  let json = []
  for (let i = 0; i < 3; i++) {
    let data = {
      id: i,
      account: '29853621',
      ftp: 'LW LISA'
    }
    json.push(data)
  }
  export default {
    data () {
      return {
        json: json
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/customer.scss'
</style>
