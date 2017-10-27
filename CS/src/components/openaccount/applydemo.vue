<template>
  <div class="applydemo_view">
    <div class="main_content">
      <h4>
        申请模拟账户
        <span>mt4</span>
      </h4>
      <form>
        <div class="form-group">
          <p class="tli">账户名<span class="must">*</span></p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">邮箱<span class="must">*</span></p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">电话</p>
          <input type="text">
        </div>
        <div class="form-group">
          <p class="tli">账户类型</p>
          <input type="text">
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
  name: 'applydemo'
}
</script>
<style lang="sass" scoped>
@import '../../assets/sass/openaccount.scss'
</style>
