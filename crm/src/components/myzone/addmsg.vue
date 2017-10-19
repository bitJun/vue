<template>
  <div class="addmsg dialog">
    <div class="panel_title">
      <h4>发布公告</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="label-control pull-left">标题</label>
          <input class="input-control" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">内容</label>
          <textarea class="textarea-control"></textarea>
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
      },
      'sure': function () {
        console.log(11)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/myzone.scss'
</style>
