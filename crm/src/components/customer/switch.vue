<template>
  <div class="dialog switchcustomer">
    <div class="panel_title">
      <h4>批量转换</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <h4>  
        <i class="iconfont icon-wenhao"></i>
        是否将选中的用户转移给其他人？
      </h4>
      <form>
        <div class="form-group clearfix">
          <label>新上级</label>
          <el-select v-model="topclass_value" placeholder="请选择" class="topclass pull-left">
            <el-option v-for="item in topclass" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </form>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a @click="sure()">确定</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        topclass: [{
          value: 't1',
          label: '男'
        }, {
          value: 't2',
          label: '女'
        }],
        topclass_value: 't1'
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
