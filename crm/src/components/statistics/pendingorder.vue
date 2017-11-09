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
      <div class="ascription pull-right clearfix">
        <el-select v-model="search_account_value" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in search_account" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <input type="text" class="keyword">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="list withdrawrecord">
      <div class="operates clearfix">
        <span>挂单查询</span>
        <ul class="operate_btns pull-right clearfix">
          <li>
            <a class="download" @click="add()">
              <img src="../../assets/images/04download.png">
            </a>
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'10%'}">账户归属</td>
            <td v-bind:style="{width:'10%'}">账号</td>
            <td v-bind:style="{width:'10%'}">账户名称</td>
            <td v-bind:style="{width:'10%'}">客户名称</td>
            <td v-bind:style="{width:'8%'}">订单号</td>
            <td v-bind:style="{width:'13%'}">类型/品种/交易量</td>
            <td v-bind:style="{width:'10%'}">挂单价</td>
            <td v-bind:style="{width:'13%'}">执行/取消时间</td>
            <td v-bind:style="{width:'8%'}"><p>止盈/止损</p></td>
            <td v-bind:style="{width:'8%'}"><p>状态</p></td>
          </tr>
        </thead>
        <tbody v-if="json.length > 0">
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'10%'}"><p>{{item.belong}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.account}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.name}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.accountname}}</p></td>
            <td v-bind:style="{width:'8%'}"><p>{{item.order}}</p></td>
            <td v-bind:style="{width:'13%'}"><p>{{item.type}}/{{item.Varieties}}/{{item.volume}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.unit_price}}</p><p>{{item.unit_time | time}}</p></td>
            <td v-bind:style="{width:'13%'}"><p>{{item.time | time}}</p></td>
            <td v-bind:style="{width:'7%'}"><p>{{item.profit}}/{{item.Stop}}</p></td>
            <td v-bind:style="{width:'8%'}">
              <p v-if="item.status == '0'" class="profit">
                已取消
              </p>
              <p v-if="item.status == '1'" class="loss">
                挂单中
              </p>
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
  import sheet from '../../assets/js/sheet'
  import attach from '../../assets/js/attach'
  import searchAccount from '../../assets/js/search_account'
  export default {
    name: 'pendingorder',
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
        attach: attach,
        attach_value: '1',
        search_account: searchAccount,
        search_account_value: 'a1',
        sheet: sheet,
        sheet_value: 'b3'
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
            belong: '侯亮平',
            account: '015749' + i + i * 5,
            name: '赵东来',
            accountname: '赚他一个亿公司',
            order: '431231' + i + i * 4,
            type: '买入',
            Varieties: 'GBPUSD',
            volume: '600.00',
            unit_price: '1.04562',
            unit_time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
            time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
            Stop: '1.40527',
            profit: '1.40527',
            status: '1'
          }
          if (i % 3 === 2) {
            data.status = '0'
            data.type = '卖出'
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/statistics.scss"
</style>
