<template>
  <div class="history cantainer">
    <div class="filiter">
      <p>
        统计报表
        <el-select v-model="sheet_value" placeholder="请选择" class="chooseItem">
          <el-option v-for="item in sheet" :key="item.value" :label="item.label" :value="item.value">
            <router-link v-bind:to="item.link">{{item.label}}</router-link>
          </el-option>
        </el-select>
      </p>
    </div>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="select clearfix">
      <el-select v-model="attach_value" placeholder="请选择" class="level pull-left">
        <el-option v-for="item in attach" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="ascription pull-left clearfix">
        <el-select v-model="timevalue" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in timeselect" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <el-date-picker v-model="value7" type="daterange" align="left" placeholder="选择日期范围" :picker-options="pickerOptions2" class="pull-left"></el-date-picker>
      </div>
      <div class="ascription pull-right clearfix">
        <el-select v-model="search_account_value" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in search_account" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <input type="text" class="keyword">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="list">
      <div class="operates clearfix">
        <span>交易历史报表</span>
        <ul class="operate_btns pull-right clearfix">
          <li>
            <a class="del">
              <img src="../../assets/images/01del.png">
            </a>
          </li>
          <li>
            <a class="add" @click="add()">
              <img src="../../assets/images/03add.png">
            </a>
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'12%'}">账户归属</td>
            <td v-bind:style="{width:'8%'}">账户</td>
            <td v-bind:style="{width:'10%'}">账户名称</td>
            <td v-bind:style="{width:'10%'}">客户名称</td>
            <td v-bind:style="{width:'8%'}">订单号</td>
            <td v-bind:style="{width:'12%'}">类型/品种/交易量</td>
            <td v-bind:style="{width:'10%'}">开仓价</td>
            <td v-bind:style="{width:'10%'}">平仓价</td>
            <td v-bind:style="{width:'10%'}">止损/止盈</td>
            <td v-bind:style="{width:'10%'}">佣金/利息/盈利</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'12%'}">
              <p v-if="strlen(item.belong)<=10" v-bind:title="item.belong">{{item.belong}}</p>
              <p v-if="strlen(item.belong)>10" v-bind:title="item.belong">{{item.belong.substr(0,10)}}...</p>
            </td>
            <td v-bind:style="{width:'8%'}"><p>{{item.account}}</p></td>
            <td v-bind:style="{width:'10%'}">
              <p v-if="strlen(item.name)<=10" v-bind:title="item.name">{{item.name}}</p>
              <p v-if="strlen(item.name)>10" v-bind:title="item.name">{{item.name.substr(0,10)}}...</p>
            </td>
            <td v-bind:style="{width:'10%'}">
              <p v-if="strlen(item.accountname)<=10" v-bind:title="item.accountname">{{item.accountname}}</p>
              <p v-if="strlen(item.accountname)>10" v-bind:title="item.accountname">{{item.accountname.substr(0,10)}}...</p>
            </td>
            <td v-bind:style="{width:'8%'}"></p>{{item.order}}</p></td>
            <td v-bind:style="{width:'12%'}"></p>{{item.type}}/{{item.Varieties}}/{{item.volume}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.Opening_price}}</p><p>{{item.open_time | time}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.end_price}}</p><p>{{item.end_time | time}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.Stop}}/{{item.profit}}</p></td>
            <td v-bind:style="{width:'10%'}">
              </p>
                {{item.Commission}}/{{item.Interest}}/
                <span v-if="Number(item.earnings)>=0" class="profit">{{item.earnings}}</span>
                <span v-if="Number(item.earnings)<0" class="loss">{{item.earnings}}</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pages clearfix">
        <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  let json = []
  let $self = ''
  for (let i = 0; i < 10; i++) {
    let data = {
      id: i,
      belong: '社会我大表哥',
      account: '015749' + i + i * 5,
      name: '赵东来',
      accountname: '赚他一百个亿公司',
      order: '13579' + i + i * 5,
      type: '买入',
      Varieties: 'GBPUSD',
      volume: '600.00',
      Opening_price: '1.40526',
      open_time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
      end_price: '1.40526',
      end_time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
      Stop: '1.40527',
      profit: '1.40527',
      Commission: '0.00',
      Interest: '10.00',
      earnings: '5.10'
    }
    if (i % 3 === 1) {
      data.earnings = '-' + data.earnings
      data.type = '卖出'
    }
    json.push(data)
  }
  import sheet from '../../assets/js/sheet'
  import attach from '../../assets/js/attach'
  import searchAccount from '../../assets/js/search_account'
  export default {
    name: 'history',
    data () {
      return {
        ids: [],
        checkAll: false,
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        attach: attach,
        attach_value: '1',
        timeselect: [{
          value: 't1',
          label: '平仓时间'
        }, {
          value: 't2',
          label: '开仓时间'
        }],
        timevalue: 't1',
        search_account: searchAccount,
        search_account_value: 'a1',
        sheet: sheet,
        sheet_value: 'b1',
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
        value7: ''
      }
    },
    created () {
      $self = this
    },
    'methods': {
      'select': function (id, event) {
        if (event.currentTarget.checked) {
          console.log($self.ids)
          if ($self.ids.length === $self.json.length) {
            $self.checkAll = true
          }
        } else {
          $self.checkAll = false
        }
      },
      'selectAll': function (event) {
        if (!event.currentTarget.checked) {
          $self.ids = []
        } else {
          $self.ids = []
          $self.json.forEach(function (item, i) {
            $self.ids.push(item.id)
          })
        }
      },
      'strlen': function (str) {
        var len = 0
        for (var i = 0; i < str.length; i++) {
          var length = str.charCodeAt(i)
          if (length >= 0 && length <= 128) {
            len += 1
          } else {
            len += 2
          }
        }
        return len
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/statistics.scss"
</style>
