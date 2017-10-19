<template>
  <div class="missiondialog dialog">
    <div class="panel_title">
      <h4>处理任务</h4>
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="panel_main">
      <h5>转账申请</h5>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left">转出客户名称：</label>
            <div class="control_info pull-left">{{username}}</div>
            <label class="form-label pull-left">转出账户：</label>
            <div class="control_info pull-left">{{dispositaccount}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">转入客户名称：</label>
            <div class="control_info pull-left">{{saveNum}}</div>
            <label class="form-label pull-left">转入账户：</label>
            <div class="control_info pull-left">{{payNum}}</div>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">转出金额：</label>
            <div class="control_info pull-left">{{charge}}</div>
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
            <a @click="sure()">确认转账</a>
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
