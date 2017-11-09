<template>
  <div class="addAccount dialog">
    <div class="panel_title">
      <h4>添加账户</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <div class="step1" v-if="step1">
        <img src="../../assets/images/oppen_account.jpg">
        <div class="bind clearfix">
          <label class="pull-left"><span class="must">*</span>客户名称：</label>
          <el-select v-model="value" placeholder="请选择" class="customer pull-left">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="notice clearfix">
          <label class="pull-left"><span class="must">!</span>注意： 若没有绑定对象，请先添加客户</label>
          <router-link to="/" class="pull-left" target="_blank">新增客户</router-link>
        </div>
      </div>
      <div class="step2" v-if="step2">
        <img src="../../assets/images/oppen_account02.jpg">
        <div class="baseInfo">
          <h4>基本资料</h4>
          <form>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>姓名：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">性别：</label>
                <el-select v-model="sexvalue" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">生日：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">手机：</label>
                <input type="text" name="" class="pull-left">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">邮箱：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">国籍：</label>
                <input type="text" name="" class="pull-left">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">出生地：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">居住地：</label>
                <input type="text" name="" class="pull-left">
              </div>
            </div>
            <div class="form-group address clearfix">
              <label class="pull-left">居住地：</label>
              <input type="text" name="" class="pull-left">
            </div>
          </form>
        </div>
        <div class="financial">
          <h4>财务信息</h4>
          <form>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>总资产：</label>
                <el-select v-model="total_assets_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in total_assets" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">净资产：</label>
                <el-select v-model="Net_assets_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Net_assets" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">收入来源：</label>
                <el-select v-model="income_source_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in income_source" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">投资经验：</label>
                <label class="checkbox">
                  <input type="checkbox" name="">股票
                </label>
                <label class="checkbox">
                  <input type="checkbox" name="">债券
                </label>
                <label class="checkbox">
                  <input type="checkbox" name="">期货
                </label>
                <label class="checkbox">
                  <input type="checkbox" name="">期权
                </label>
                <label class="checkbox">
                  <input type="checkbox" name="">外汇
                </label>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">投资年数：</label>                
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">知识水平：</label>                
                <el-select v-model="knowledge_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in knowledge" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">投资目的：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">投资额度：</label>
                <el-select v-model="Quota_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Quota" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">开户银行：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">银行所在地：</label>
                <input type="text" name="" class="pull-left">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">银行账号：</label>
                <input type="text" name="" class="pull-left">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">SWIFT代码：</label>
                <input type="text" name="" class="pull-left">
              </div>
            </div>
          </form>
        </div>
        <div class="Id_info">
          <h4>证件信息</h4>
          <form>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>身份证明类型：</label>
                <el-select v-model="total_assets_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in total_assets" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>身份证明号码：</label>
                <input type="text" name="">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">身份证明A：</label>
                <input type="file" name="">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">身份证明B：</label>
                <input type="file" name="">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">地址证明类型：</label>                
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">地址证明A：</label>
                <input type="file" name="">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">地址证明B：</label>
                <input type="file" name="">
              </div>
            </div>
          </form>
        </div>
        <div class="Account_info">
          <h4>账户信息</h4>
          <form>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>所属服务器：</label>
                <input type="text" name="">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>杠杆：</label>
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>MT组：</label>
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>账户归属：</label>
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>账户组：</label>
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">地址证明类型：</label>                
                <el-select v-model="Years_value" placeholder="请选择" class="sex selected pull-left">
                  <el-option v-for="item in Years" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left">主密码：</label>
                <input type="text" name="">
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left">投资密码：</label>
                <input type="text" name="">
              </div>
            </div>
            <div class="form-group clearfix">
              <div class="panel_left pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>交易状态：</label>
                <el-radio class="radio" v-model="radio" label="1">启用</el-radio>
                <el-radio class="radio" v-model="radio" label="0">禁用</el-radio>
              </div>
              <div class="panel_right pull-left clearfix">
                <label class="pull-left"><span class="must">*</span>登录状态：</label>
                <el-radio class="radio" v-model="radio" label="1">启用</el-radio>
                <el-radio class="radio" v-model="radio" label="0">禁用</el-radio>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="step3" v-if="step3">
        <img src="../../assets/images/oppen_account03.jpg">
        <div class="success">
          <div class="success_icon">
            <i class="iconfont icon-iconfont07"></i>
          </div>
          <div class="success_tips">
            <h4>恭喜您！开户成功！</h4>
            <p>将在4秒内返回上一级</p>
          </div>
        </div>
      </div>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li v-if="!step1">
            <a @click="prev()">上一步</a>
        </li>
        <li>
            <a @click="next()">下一步</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import accountdata from '../../assets/js/digital'
  export default {
    name: 'addAccount',
    data () {
      return {
        nowstep: 1,
        step1: true,
        step2: false,
        step3: false,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        sexvalue: '',
        sex: [{
          value: '0',
          label: '男'
        }, {
          value: '1',
          label: '女'
        }],
        total_assets: accountdata.total_assets,
        total_assets_value: '',
        Net_assets: accountdata.Net_assets,
        Net_assets_value: '',
        income_source: accountdata.source,
        income_source_value: '',
        Years: accountdata.Years,
        Years_value: '',
        knowledge: accountdata.knowledge_value,
        knowledge_value: '',
        Quota: accountdata.Quota,
        Quota_value: '',
        checkList: [],
        radio: '1'
      }
    },
    methods: {
      cancel () {
        this.$layer.closeAll()
      },
      next () {
        if (this.nowstep === 3) {
          return false
        }
        this.nowstep = this.nowstep + 1
        switch (this.nowstep) {
          case 1:
            this.step1 = true
            this.step2 = false
            this.step3 = false
            break
          case 2:
            this.step1 = false
            this.step2 = true
            this.step3 = false
            break
          case 3:
            this.step1 = false
            this.step2 = false
            this.step3 = true
            break
          default:
            this.step1 = true
            this.step2 = false
            this.step3 = false
            break
        }
      },
      prev () {
        if (this.nowstep === 1) {
          return false
        }
        this.nowstep = this.nowstep - 1
        switch (this.nowstep) {
          case 1:
            this.step1 = true
            this.step2 = false
            this.step3 = false
            break
          case 2:
            this.step1 = false
            this.step2 = true
            this.step3 = false
            break
          case 3:
            this.step1 = false
            this.step2 = false
            this.step3 = true
            break
          default:
            this.step1 = true
            this.step2 = false
            this.step3 = false
            break
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/addAccount.scss";
</style>
