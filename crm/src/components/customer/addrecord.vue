<template>
  <div class="dialog addrecord">
    <div class="panel_title">
      <h4>添加回访记录</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="form-label pull-left"><span class="must">*</span>回访方式：</label>
          <input type="text" class="form-input pull-left">
        </div>
        <div class="form-group clearfix">
          <label class="form-label pull-left"><span class="must">*</span>回访内容：</label>
          <textarea class="form-textarea pull-left"></textarea>
        </div>
      </form>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a @click="sure()">发布</a>
        </li>
      </ul>
    </div>
  </div>  
</template>
<script>
  export default {
    'methods': {
      'cancel': function () {
        this.$layer.closeAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/customer.scss'
</style>
