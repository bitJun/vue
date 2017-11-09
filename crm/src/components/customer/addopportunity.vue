<template>
  <div class="dialog addopportunity">
    <div class="panel_title">
      <h4>添加销售机会</h4>
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="panel_main">
      <form>
        <div class="form-group clearfix">
          <label class="form-label pull-left"><span class="must">*</span>销售机会：</label>
          <input type="text" class="form-input pull-left">
        </div>
        <div class="form-group clearfix">
          <label class="form-label pull-left"><span class="must">*</span>销售类型：</label>
          <el-select v-model="type_value" placeholder="请选择" class="type pull-left">
            <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="form-group clearfix">
          <label class="form-label pull-left">销售阶段：</label>
          <el-select v-model="step_value" placeholder="请选择" class="step pull-left">
            <el-option v-for="item in step" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </form>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel">取消</a>
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
        step: [{
          value: 's1',
          label: '邀约'
        },
        {
          value: 's2',
          label: '签单'
        }],
        step_value: 's1',
        type: [{
          value: 't1',
          label: '代理'
        },
        {
          value: 't2',
          label: '直销'
        }],
        type_value: 't1'
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
  @import '../../assets/sass/customer.scss'
</style>
