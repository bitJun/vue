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
    <div class="list">
      <div class="operates clearfix">
        <span>账户信息</span>
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
            <td v-bind:style="{width:'8%'}">品种组</td>
            <td v-bind:style="{width:'12%'}">合计手数</td>
            <td v-bind:style="{width:'8%'}">合计手续费</td>
            <td v-bind:style="{width:'8%'}">合计账户数</td>
            <td v-bind:style="{width:'8%'}">利息</td>
            <td v-bind:style="{width:'13%'}">盈亏</td>
            <td v-bind:style="{width:'10%'}">操作</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'8%'}"><p>{{item.group}}</p></td>
            <td v-bind:style="{width:'12%'}"><p>{{item.total_num}}</p></td>
            <td v-bind:style="{width:'8%'}"><p>{{item.total_charge}}</p></td>
            <td v-bind:style="{width:'8%'}"><p>{{item.total_account}}</p></td>
            <td v-bind:style="{width:'8%'}"><p>{{item.interest}}</p></td>
            <td v-bind:style="{width:'13%'}">
              <p v-if="Number(item.profit)>=0" class="loss">{{item.profit}}</p>
              <p v-if="Number(item.profit)<0" class="profit">{{item.profit}}</p>
            </td>
            <td v-bind:style="{width:'10%'}">
              <p>
                <router-link :to="{ name: 'tradecategorydetail', params: { id: item.id }}">查看明细</router-link>
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
      group: '夜猫子',
      total_num: '20.00',
      total_charge: '10.00',
      total_account: '5',
      interest: '5.00',
      profit: '6.00'
    }
    if (i % 3 === 1) {
      data.profit = '-' + data.profit
    }
    json.push(data)
  }
  import sheet from '../../assets/js/sheet'
  import attach from '../../assets/js/attach'
  import searchAccount from '../../assets/js/search_account'
  export default {
    name: 'tradecategory',
    data () {
      return {
        ids: [],
        checkAll: false,
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        attach: attach,
        attach_value: '1',
        search_account: searchAccount,
        search_account_value: 'a1',
        sheet: sheet,
        sheet_value: 'b7'
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/statistics.scss"
</style>
