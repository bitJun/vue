<template>
  <div class="dialog addbank_view">
    <div class="panel_title">
      <label></label>
      <h4>提示</h4>
      <i class="iconfont icon-cha" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <div class="confirm clearfix">
        <i class="iconfont icon-tishi pull-left"></i>
        <p class="tips pull-left">是否确认删除该银行卡？</p>
      </div>
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
