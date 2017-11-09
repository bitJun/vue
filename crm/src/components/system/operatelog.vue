<template>
  <div class="operatelog cantainer">
    <div class="filiter">
      <p>
        操作日志
      </p>
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    </div>
    <div class="select clearfix">
      <el-select v-model="value1" placeholder="请选择" class="level pull-left">
        <el-option v-for="item in level" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="timeselect pull-left clearfix">
        <label class="pull-left">入金时间</label>
        <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" class="pull-left"></el-date-picker>
      </div>
      <div class="ascription pull-right clearfix">
        <el-select v-model="value" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in ascription" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <input type="text" class="keyword">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="list">
      <h5>操作记录</h5>
      <table v-if="json.length > 0">
        <thead>
          <tr>
            <td>操作时间</td>
            <td>操作用户</td>
            <td>IP</td>
            <td>操作方式</td>
            <td>操作详情</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json">
            <td>{{item.time | time}}</td>
            <td>{{item.user}}</td>
            <td>{{item.IP}}</td>
            <td>{{item.type}}</td>
            <td>{{item.content}}</td>
          </tr>
        </tbody>
      </table>
      <div class="pages clearfix" v-if="json.length > 0">
        <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
      </div>
      <div class="no_result" v-if="json.length == 0">
        <img v-bind:src="loading_error.img">
        <p>{{loading_error.tip}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  export default {
    name: 'operatelog',
    data () {
      return {
        loading_error: {
          img: require('../../assets/images/no_result.png'),
          tip: '暂无数据'
        },
        json: [],
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
      }
    },
    created () {
      $self = this
      $self.init()
    },
    methods: {
      init () {
        for (let i = 0; i < 10; i++) {
          let data = {
            i: i,
            time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
            user: 'Admin',
            IP: '127.0.0.1',
            type: '修改',
            content: '修改用户信息'
          }
          $self.json.push(data)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/system.scss'
</style>
