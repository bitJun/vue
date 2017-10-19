<template>
  <div class="missiondialog dialog">
    <div class="panel_title">
      <h4>处理任务</h4>
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="panel_main">
      <h5>出金申请</h5>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left">客户名称：</label>
            <div class="control_info pull-left">{{username}}</div>
            <label class="form-label pull-left">收款人姓名：</label>
            <div class="control_info pull-left">{{dispositaccount}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">取款账户：</label>
            <div class="control_info pull-left">{{saveNum}}</div>
            <label class="form-label pull-left">取款金额：</label>
            <div class="control_info pull-left">{{payNum}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">账户余额：</label>
            <div class="control_info pull-left">{{charge}}</div>
            <label class="form-label pull-left">账户净值：</label>
            <div class="control_info pull-left">{{dispositNum}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">可用保证金：</label>
            <div class="control_info pull-left">{{orderId}}</div>
          </div>
        </form>
      </section>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left">银行名称：</label>
            <div class="control_info pull-left">{{payment}}</div>
            <label class="form-label pull-left">支行名称：</label>
            <div class="control_info pull-left">
              <div class="control_info pull-left">{{payment}}</div>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">银行地址：</label>
            <div class="control_info pull-left">{{payment}}</div>
            <label class="form-label pull-left">SWIFT代码：</label>
            <div class="control_info pull-left">
              <div class="control_info pull-left">{{payment}}</div>
            </div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">银行账号：</label>
            <div class="control_info pull-left">{{payment}}</div>
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
            <a @click="sure()">确认出金</a>
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
