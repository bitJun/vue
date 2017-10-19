<template>
  <div class="myzone cantainer">
    <div class="filiter">
      <p>
        个人中心
      </p>
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    </div>
    <ul class="js_tab clearfix">
      <li class="pull-left">
        <router-link to="/myzone/basicinfo">基本资料</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/referrallink">推广链接</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/changepwd">修改密码</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/setemail">邮箱设置</router-link>
      </li>
    </ul>
    <div class="main">
      <h5>基本资料<i class="iconfont icon-edit"></i></h5>
      <form>
        <div class="form-group clearfix">
          <label class="label-control pull-left">用户编号：</label>
          <div class="info-control pull-left">H1Z1007</div>
          <label class="label-control pull-left">姓名：</label>
          <div class="info-control pull-left">张晓晓</div>
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">邮箱：</label>
          <div class="info-control pull-left">75489631@mail.com</div>
          <label class="label-control pull-left">手机：</label>
          <div class="info-control pull-left">15011236658</div>
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">性别：</label>
          <el-select v-model="sex_value" placeholder="请选择" class="lever select pull-left">
            <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <label class="label-control pull-left">生日：</label>
          <input class="input-control pull-left">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">帐号服务器：</label>
          <el-select v-model="sex_value" placeholder="请选择" class="lever select pull-left">
            <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <label class="label-control pull-left">帐号：</label>
          <input class="input-control pull-left">
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">所在城市：</label>
          <el-select v-model="sex_value" placeholder="请选择" class="lever select pull-left">
            <el-option v-for="item in sex" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="form-group clearfix">
          <label class="label-control pull-left">详细地址：</label>
          <input class="input-control address pull-left">
        </div>
      </form>
      <ul class="operate_btn clearfix">
        <li><a class="save">保存</a></li>
        <li><a class="cancel">取消</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import myzone from '../../assets/js/myzone'
  export default {
    name: 'basicinfo',
    data () {
      return {
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        sex: myzone.sex,
        sex_value: 's1'
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/myzone.scss'
</style>
