<template>
  <div class="dialog addcustomer">
    <div class="panel_title">
      <h4>添加联系人</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="control_label pull-left"><span class="must">*</span>姓名：</label>
          <input class="console_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left"><span class="must">*</span>职务：</label>
          <input class="console_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">性别：</label>
          <el-select v-model="sex_value" placeholder="请选择" class="sex pull-left">
            <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">手机</label>
          <input class="console_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">邮箱</label>
          <input class="console_input pull-left" type="text" name="">
        </div>
        <div class="form-group clearfix">
          <label class="control_label pull-left">生日</label>
          <input class="console_input pull-left" type="text" name="">
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
    data () {
      return {
        sex: [{
          value: 's1',
          label: '男'
        }, {
          value: 's2',
          label: '女'
        }],
        sex_value: 's1'
      }
    },
    methods: {
      cancel () {
        this.$layer.closeAll()
      },
      sure () {
        console.log(11)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/customer.scss'
</style>
