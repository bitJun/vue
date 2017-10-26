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
export default {
  name: 'addbank',
  'methods': {
    'cancel': function () {
      this.$layer.closeAll()
    }
  }
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/userinfo.scss'
</style>
