<template>
  <div class="mission cantainer">
    <div class="filiter">
      <p>
        任务管理
      </p>
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    </div>
    <div class="select clearfix">
      <el-select v-model="task_value" placeholder="请选择" class="pull-left">
        <el-option v-for="item in task" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="type_value" placeholder="请选择" class="type_select pull-left">
        <el-option v-for="item in type" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <div class="timeselect pull-left clearfix">
        <label class="pull-left">开户时间</label>
        <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" class="pull-left"></el-date-picker>
      </div>
      <div class="ascription pull-right clearfix">
        <el-select v-model="ascription_value" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in ascription" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <input type="text" class="keyword">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="list">
      <h5>任务信息</h5>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width: '5%'}">
              <input type="checkbox" name="" @click="selectAll($event)" v-model="checkAll">
            </td>
            <td v-bind:style="{width: '11%'}">任务编号</td>
            <td v-bind:style="{width: '11%'}">申请客户</td>
            <td v-bind:style="{width: '11%'}">申请账号</td>
            <td v-bind:style="{width: '11%'}">申请类型</td>
            <td v-bind:style="{width: '15%'}">申请时间</td>
            <td v-bind:style="{width: '11%'}">状态</td>
            <td v-bind:style="{width: '15%'}">操作时间</td>
            <td v-bind:style="{width: '10%'}"><span>操作</span></td>
          </tr>
        </thead>
        <tbody v-if="json.length > 0">
          <tr v-for="item in json">
            <td v-bind:style="{width: '5%'}">
              <input type="checkbox" name="checkbox" :value="item.id" v-model="ids" @click="select(item.id, $event)">
            </td>
            <td v-bind:style="{width: '11%'}"><p>{{item.NO}}</p></td>
            <td v-bind:style="{width: '11%'}"><p>{{item.customer}}</p></td>
            <td v-bind:style="{width: '11%'}"><p>{{item.account}}</p></td>
            <td v-bind:style="{width: '11%'}">
                <p v-if="item.type == 1">开户申请</p>
                <p v-if="item.type == 2">入金申请</p>
                <p v-if="item.type == 3">出金申请</p>
            </td>
            <td v-bind:style="{width: '15%'}">
              <p class="time">{{item.time | time}}</p>
            </td>
            <td class="status" v-bind:style="{width: '11%'}">
                <p v-if="item.status == 0" class="Pending"><label></label>待处理</p>
                <p v-if="item.status == 1" class="over"><label></label>已完成</p>
                <p v-if="item.status == 2" class="finish"><label></label>已关闭</p>
            </td>
            <td v-bind:style="{width: '15%'}"><p class="time">{{item.Otime | time}}</p></td>
            <td v-bind:style="{width: '10%'}">
              <a class="showdetail" @click="detail(item.type)">查看</a>
            </td>
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
  import task from '../../assets/js/task'
  import openaccount from './openaccount.vue'
  import samename from './samename.vue'
  import desposit from './desposit.vue'
  import withdraw from './withdraw.vue'
  import transfer from './transfer.vue'
  import adjustlever from './adjustlever.vue'
  export default {
    name: 'mission',
    data () {
      return {
        loading_error: {
          img: require('../../assets/images/no_result.png'),
          tip: '暂无数据'
        },
        ids: [],
        checkAll: false,
        json: [],
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        task: task.task,
        task_value: 't1',
        type: task.type,
        type_value: '1',
        ascription: task.ascription,
        ascription_value: 'a1',
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
    created () {
      $self = this
      $self.init()
    },
    methods: {
      init () {
        for (let i = 0; i < 10; i++) {
          let data = {
            id: i,
            NO: '012' + i * 6 - 4,
            customer: '堆伤',
            account: '25461799' + i,
            type: 1,
            time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
            status: 0,
            Otime: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
          }
          if (i % 3 === 1) {
            data.type = 2
            data.status = 1
          }
          if (i % 3 === 2) {
            data.type = 3
            data.status = 2
          }
          $self.json.push(data)
        }
      },
      select (id, event) {
        if (event.currentTarget.checked) {
          console.log($self.ids)
          if ($self.ids.length === $self.json.length) {
            $self.checkAll = true
          }
        } else {
          $self.checkAll = false
        }
      },
      selectAll (event) {
        if (!event.currentTarget.checked) {
          $self.ids = []
        } else {
          $self.ids = []
          $self.json.forEach(function (item, i) {
            $self.ids.push(item.id)
          })
        }
      },
      detail (type) {
        let dialog = ''
        switch (type) {
          case 1:
            dialog = openaccount
            break
          case 2:
            dialog = desposit
            break
          case 3:
            dialog = withdraw
            break
          case 4:
            dialog = transfer
            break
          case 5:
            dialog = samename
            break
          case 6:
            dialog = adjustlever
            break
          default:
            dialog = openaccount
            break
        }
        $self.$layer.iframe({
          title: '',
          content: {
            content: dialog,
            parent: $self,
            data: []
          },
          area: ['800px', 'auto']
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/mission.scss'
</style>
