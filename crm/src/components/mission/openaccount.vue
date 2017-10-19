<template>
  <div class="missiondialog dialog">
    <div class="panel_title">
      <h4>处理任务</h4>
      <i class="iconfont icon-guanbi"></i>
    </div>
    <div class="panel_main">
      <h5>开户申请</h5>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left">关联客户：</label>
            <input type="text" name="" class="form-input pull-left">
            <label class="form-label pull-left"><span class="must">*</span>姓名：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left"><span class="must">*</span>手机：</label>
            <input type="text" name="" class="form-input pull-left">
            <label class="form-label pull-left"><span class="must">*</span>邮箱：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">知识水平：</label>
            <el-select v-model="knowledge_value" placeholder="请选择" class="lever select pull-left">
              <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <!-- <input type="text" name="" class="form-input pull-left"> -->
            <label class="form-label pull-left">投资目的：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">SWIFT代码：</label>
            <input type="text" name="" class="form-input pull-left">
            <label class="form-label pull-left">ABA号码：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">备注：</label>
            <textarea class="form-textarea"></textarea>
          </div>
        </form>
      </section>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left"><span class="must">*</span>身份证明类型：</label>
            <input type="text" name="" class="form-input pull-left">
            <label class="form-label pull-left"><span class="must">*</span>身份证明号码：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">身份证明A：</label>
            <input type="text" name="" class="form-input pull-left">
            <label class="form-label pull-left">身份证明B：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
        </form>
      </section>
      <section>
        <form>
          <div class="form-group clearfix">
            <label class="form-label pull-left"><span class="must">*</span>MT组：</label>
            <el-select v-model="knowledge_value" placeholder="请选择" class="lever select pull-left">
              <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <label class="form-label pull-left">账户组：</label>
            <el-select v-model="knowledge_value" placeholder="请选择" class="lever select pull-left">
              <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left"><span class="must">*</span>杠杆：</label>
            <el-select v-model="lever_value" placeholder="请选择" class="lever select pull-left">
              <el-option v-for="item in lever" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <label class="form-label pull-left">账户归属：</label>
            <el-select v-model="knowledge_value" placeholder="请选择" class="lever select pull-left">
              <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left">主密码：</label>
            <input type="text" name="" class="form-input pull-left">
            <label class="form-label pull-left">投资密码：</label>
            <input type="text" name="" class="form-input pull-left">
          </div>
          <div class="form-group clearfix">
            <label class="form-label pull-left"><span class="must">*</span>交易状态：</label>
            <div class="radio-group pull-left">
              <label><input type="radio" name="status">是</label>
              <label><input type="radio" name="status">否</label>
            </div>
            <label class="form-label pull-left"><span class="must">*</span>登录状态：</label>
            <div class="radio-group pull-left">
              <label><input type="radio" name="logined">是</label>
              <label><input type="radio" name="logined">否</label>
            </div>
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
            <a @click="sure()">确认开户</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import digital from '../../assets/js/digital'
  export default {
    data () {
      return {
        lever: digital.lever,
        lever_value: '',
        knowledge: digital.knowledge,
        knowledge_value: ''
      }
    },
    created () {
      console.log(digital)
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/mission.scss'
</style>
