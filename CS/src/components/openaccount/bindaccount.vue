<template>
  <div class="bindaccount_view">
    <div class="main_content">
      <h4>
        绑定账户
        <span>mt4</span>
      </h4>
      <form>
        <div class="form-group">
          <p class="tli">账户名<span class="must">*</span></p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">主密码<span class="must">*</span></p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">交易账号<span class="must">*</span></p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">服务器</p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">备注</p>
          <textarea></textarea>
        </div>
        <div class="operates clearfix">
          <a class="btn cancel">取消</a>
          <a class="btn submit">提交</a>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'bindaccount'
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/openaccount.scss'
</style>
