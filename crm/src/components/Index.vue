<template>
  <div class="datacenter cantainer">
    <ul class="js_tab clearfix">
      <li>
        <router-link to="/datacenter/newaccount" class="clearfix">
          <div class="pull-left icon">
            <img src="../assets/images/home_icon_01.png">
          </div>
          <div class="pull-left content">
            <h4 v-bind:style="{color: '#596778'}">21</h4>
            <p>新增开户</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/datacenter/newcustomer" class="clearfix">
          <div class="pull-left icon">
            <img src="../assets/images/home_icon_02.png">
          </div>
          <div class="pull-left content">
            <h4 v-bind:style="{color: '#596778'}">21</h4>
            <p>新增客户</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/datacenter/volume" class="clearfix">
          <div class="pull-left icon">
            <img src="../assets/images/home_icon_03.png">
          </div>
          <div class="pull-left content">
            <h4 v-bind:style="{color: '#4275d4'}">21</h4>
            <p>成交量(手)</p>
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/datacenter/desposit" class="clearfix">
          <div class="pull-left icon">
            <img src="../assets/images/home_icon_04.png">
          </div>
          <div class="pull-left content">
            <h4 v-bind:style="{color: '#596778'}">21</h4>
            <p>入金金额($)</p>
          </div>
        </router-link>
      </li>
    </ul>
    <div class="line">
      <div class="topselect clearfix">
        <p class="tip pull-left">30日趋势统计</p>
        <el-select v-model="value" placeholder="请选择" class="pull-right">
          <el-option v-for="item in trend" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </div>
      <ve-line :data="trendData"></ve-line>
    </div>
    <ul class="bars clearfix">
      <li>
        <div class="barInfo">
          <section>
            <div class="topselect clearfix">
              <p class="tip pull-left">新增开户排行</p>
              <el-select v-model="value1" placeholder="请选择" class="pull-right">
                <el-option v-for="item in newaccount" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <ve-bar :data="chartData"></ve-bar>
          </section>
        </div>
      </li>
      <li>
        <div class="barInfo">
          <section>
            <div class="topselect clearfix">
              <p class="tip pull-left">新增客户排行</p>
              <el-select v-model="value2" placeholder="请选择" class="pull-right">
                <el-option v-for="item in newcustomer" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <ve-bar :data="chartData"></ve-bar>
          </section>
        </div>
      </li>
      <li>
        <div class="barInfo">
          <section>
            <div class="topselect clearfix">
              <p class="tip pull-left">成交量排行</p>
              <el-select v-model="value3" placeholder="请选择" class="pull-right">
                <el-option v-for="item in volume" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <ve-bar :data="chartData"></ve-bar>
          </section>
        </div>
      </li>
      <li>
        <div class="barInfo">
          <section>
            <div class="topselect clearfix">
              <p class="tip pull-left">入金排行</p>
              <el-select v-model="value4" placeholder="请选择" class="pull-right">
                <el-option v-for="item in desposit" :key="item.value" :label="item.label" :value="item.value"></el-option>
              </el-select>
            </div>
            <ve-bar :data="chartData"></ve-bar>
          </section>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import VeLine from 'v-charts/lib/line'
  import VeBar from 'v-charts/lib/bar'
  export default {
    name: 'datacenter',
    data () {
      return {
        trend: [{
          value: '1',
          label: '新增开户'
        }, {
          value: '2',
          label: '新增客户'
        }, {
          value: '3',
          label: '成交量'
        }, {
          value: '4',
          label: '入金金额'
        }],
        value: '1',
        newaccount: [{
          value: 'a1',
          label: '今日'
        }, {
          value: 'a2',
          label: '昨日'
        }, {
          value: 'a3',
          label: '近7日'
        }, {
          value: 'a4',
          label: '近30日'
        }],
        value1: 'a1',
        newcustomer: [{
          value: 'b1',
          label: '今日'
        }, {
          value: 'b2',
          label: '昨日'
        }, {
          value: 'b3',
          label: '近7日'
        }, {
          value: 'b4',
          label: '近30日'
        }],
        value2: 'b1',
        volume: [{
          value: 'c1',
          label: '今日'
        }, {
          value: 'c2',
          label: '昨日'
        }, {
          value: 'c3',
          label: '近7日'
        }, {
          value: 'c4',
          label: '近30日'
        }],
        value3: 'c1',
        desposit: [{
          value: 'd1',
          label: '今日'
        }, {
          value: 'd2',
          label: '昨日'
        }, {
          value: 'd3',
          label: '近7日'
        }, {
          value: 'd4',
          label: '近30日'
        }],
        value4: 'd1'
      }
    },
    created () {
      this.chartData = {
        columns: ['', ''],
        rows: [
          { '': '1月1日', '': 123 },
          { '': '1月2日', '': 1223 },
          { '': '1月3日', '': 2123 },
          { '': '1月4日', '': 4123 },
          { '': '1月5日', '': 3123 },
          { '': '1月6日', '': 7123 },
          { '': '1月1日', '': 123 },
          { '': '1月2日', '': 1223 },
          { '': '1月3日', '': 2123 },
          { '': '1月4日', '': 4123 },
          { '': '1月5日', '': 3123 },
          { '': '1月6日', '': 7123 }
        ]
      }
      this.init()
    },
    'methods': {
      'init': function () {
        this.gettrend()
        this.getnewaccount()
        this.getnewcustomer()
        this.getvolume()
        this.getdesposit()
      },
      'gettrend': function () {
        this.trendData = {
          columns: ['日期', '销售额-1季度'],
          rows: [
            { '日期': '1月1日', '销售额-1季度': 1523 },
            { '日期': '1月2日', '销售额-1季度': 1223 },
            { '日期': '1月3日', '销售额-1季度': 2123 },
            { '日期': '1月4日', '销售额-1季度': 4123 },
            { '日期': '1月5日', '销售额-1季度': 3123 },
            { '日期': '1月6日', '销售额-1季度': 7123 }
          ]
        }
        this.chartSettings = {}
      },
      'getnewaccount': function () {},
      'getnewcustomer': function () {},
      'getvolume': function () {},
      'getdesposit': function () {}
    },
    components: { VeLine, VeBar },
    watch: {
      'value' (val, oldVal) {
        console.log(val)
      },
      'value1' (val, oldVal) {
        console.log(val)
      },
      'value2' (val, oldVal) {
        console.log(val)
      },
      'value3' (val, oldVal) {
        console.log(val)
      },
      'value4' (val, oldVal) {
        console.log(val)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../assets/sass/datacenter.scss"
</style>
