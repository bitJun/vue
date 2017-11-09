<template>
  <div class="userdialog dialog">
    <div class="panel_title">
      <h4>添加用户</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <section>
        <h5>基本资料</h5>
        <form>
          <div class="form-group clearfix">
            <label class="label-control pull-left">姓名:</label>
            <input class="input-control pull-left" type="text" name="">
            <label class="label-control pull-left" v-bind:style="{'margin-left': '20px'}">邮箱:</label>
            <input class="input-control pull-left" type="text" name="">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">密码:</label>
            <input class="input-control pull-left" type="text" name="">
            <label class="label-control pull-left" v-bind:style="{'margin-left': '20px'}">手机:</label>
            <input class="input-control pull-left" type="text" name="">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">角色:</label>
            <input class="input-control pull-left" type="text" name="">
            <label class="label-control pull-left" v-bind:style="{'margin-left': '20px'}">返佣层级:</label>
            <input class="input-control pull-left" type="text" name="">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">上级用户:</label>
            <input class="input-control pull-left" type="text" name="">
            <label class="label-control pull-left" v-bind:style="{'margin-left': '20px'}">城市:</label>
            <input class="input-control pull-left" type="text" name="">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">服务器账号:</label>
            <input class="input-control pull-left" type="text" name="">
            <label class="label-control pull-left" v-bind:style="{'margin-left': '20px'}">MT账号:</label>
            <input class="input-control pull-left" type="text" name="">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">详细地址:</label>
            <input class="input-control address pull-left" type="text" name="">
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">备注:</label>
            <textarea class="textarea-control pull-left"></textarea>
          </div>
          <div class="form-group clearfix">
            <label class="label-control pull-left">发送验证邮件:</label>
            <div class="radios-group pull-left">
              <el-radio class="radio" v-model="radio" label="1">是</el-radio>
              <el-radio class="radio" v-model="radio" label="2">否</el-radio>
            </div>
          </div>
        </form>
      </section>
      <section>
        <h5>返佣规则设置</h5>
        <form>
          <div class="form-group clearfix">
            <label class="label-control pull-left"></label>
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
            <a>添加</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        radio: '1'
      }
    },
    methods: {
      cancel () {
        this.$layer.closeAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/user.scss"
</style>
