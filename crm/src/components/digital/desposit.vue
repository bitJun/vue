<template>
  <div class="digital cantainer">
    <div class="filiter">
      <p>
        数据详情
        <el-select v-model="value" placeholder="请选择" class="chooseItem">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            <router-link v-bind:to="item.link">{{item.label}}</router-link>
          </el-option>
        </el-select>
      </p>
    </div>
    <div class="NewOpen">
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
      <div class="select clearfix">
        <div class="timeselect pull-left clearfix">
          <label class="pull-left">入金时间</label>
          <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" class="pull-left"></el-date-picker>
        </div>
        <div class="ascription pull-right clearfix">
          <el-select v-model="value2" placeholder="请选择" class="ascription_type pull-left">
            <el-option v-for="item in ascription" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
          <input type="text" class="keyword">
          <i class="iconfont icon-search"></i>
        </div>
      </div>
      <div class="list">
        <h4>新增开户详情</h4>
        <table>
          <thead>
            <tr>
              <td v-bind:style="{width:'20%'}">账户归属</td>
              <td v-bind:style="{width:'20%'}">账户名称</td>
              <td v-bind:style="{width:'20%'}">账号</td>
              <td v-bind:style="{width:'20%'}">入金金额</td>
              <td v-bind:style="{width:'20%'}"><span>开户时间</span></td>       
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in json">
              <td v-bind:style="{width:'20%'}">{{item.from}}</td>
              <td v-bind:style="{width:'20%'}">{{item.name}}</td>
              <td v-bind:style="{width:'20%'}"><p>{{item.Account}}</p></td>
              <td v-bind:style="{width:'20%'}">{{item.entry}}</td>
              <td v-bind:style="{width:'20%'}"><span>{{item.time}}</span></td>
            </tr>
          </tbody>
        </table>
        <div class="pages clearfix">
          <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let json = []
  for (let i = 0; i < 10; i++) {
    let data = {
      id: i + 1,
      from: '李四',
      name: '侯亮平',
      time: '2017-07-08 22：10：12',
      entry: '1',
      Account: 1
    }
    json.push(data)
  }
  export default {
    name: 'desposit',
    data () {
      return {
        json: json,
        addtype: [{
          value: '1',
          label: '新增方式'
        }, {
          value: '2',
          label: '新增'
        }, {
          value: '3',
          label: '模板导入'
        }],
        ascription: [{
          value: '4',
          label: '账户归属'
        }, {
          value: '5',
          label: '账户名称'
        }, {
          value: '6',
          label: '账户'
        }],
        value1: '1',
        value2: '4',
        options: [{
          value: 'a1',
          label: '新增客户',
          link: '/datacenter/newcustomer'
        }, {
          value: 'a2',
          label: '新增开户',
          link: '/datacenter/newaccount'
        }, {
          value: 'a3',
          label: '新增成交量',
          link: '/datacenter/volume'
        }, {
          value: 'a4',
          label: '新增入金金额',
          link: '/datacenter/desposit'
        }],
        value: 'a4',
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value6: '',
        value7: ''
      }
    },
    'methods': {
      'update': function () {
        let date = new Date()
        this.time = date
        this.init()
      },
      'init': function () {
        console.log(11)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/digital.scss";
</style>
