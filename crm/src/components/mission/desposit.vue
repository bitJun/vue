<template>
  <div class="missiondialog dialog">
    <div class="panel_title">
      <h4>处理任务</h4>
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="panel_main">
      <h5>入金申请</h5>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left">客户名称：</label>
            <div class="control_info pull-left">{{username}}</div>
            <label class="form-label pull-left">入金账户：</label>
            <div class="control_info pull-left">{{dispositaccount}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">存款金额：</label>
            <div class="control_info pull-left">{{saveNum}}</div>
            <label class="form-label pull-left">支付金额：</label>
            <div class="control_info pull-left">{{payNum}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">手续费：</label>
            <div class="control_info pull-left">{{charge}}</div>
            <label class="form-label pull-left">入金金额：</label>
            <div class="control_info pull-left">{{dispositNum}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">订单号：</label>
            <div class="control_info pull-left">{{orderId}}</div>
            <label class="form-label pull-left">支付订单号：</label>
            <div class="control_info pull-left">{{payorder}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">支付平台：</label>
            <div class="control_info pull-left">{{payment}}</div>
            <label class="form-label pull-left">支付状态：</label>
            <div class="control_info pull-left">
              <span v-if="paystatus == 0" class="unfinish">未支付</span>
              <span v-if="paystatus == 1" class="finish">已支付</span>
            </div>
          </div>
        </form>
      </section>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a @click="sure()">确认入金</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        username: 'LISA',
        dispositaccount: '208999653',
        saveNum: '$100,000.00',
        payNum: '￥720,000.00',
        charge: '$10,0.00',
        dispositNum: '$90,000.00',
        orderId: '16103114147A00254996320032',
        payorder: '16103114',
        payment: '财付通',
        paystatus: 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/mission.scss'
</style>
