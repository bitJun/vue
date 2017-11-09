<template>
  <div class="dialog mmissiondetail">
    <div class="panel_title">
      <h4>返佣报表</h4>
      <i class="iconfont icon-guanbi" @click="close()"></i>
    </div>
    <div class="panel_main">
      <div class="title">
        交易返佣明细
        <span>
          <i class="iconfont icon-tishi"></i>
          返佣规则：交易量返佣规则1
        </span>
      </div>
      <div class="list">
        <table>
          <thead>
            <tr>
              <td v-bind:style="{width: '12%'}">订单号</td>
              <td v-bind:style="{width: '12%'}">类型</td>
              <td v-bind:style="{width: '12%'}">品种</td>
              <td v-bind:style="{width: '12%'}">交易量</td>
              <td v-bind:style="{width: '12%'}">平仓时间</td>
              <td v-bind:style="{width: '12%'}">返佣参数($/手)</td>
              <td v-bind:style="{width: '16%'}">返佣金额($)</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in json">
              <td v-bind:style="{width: '12%'}">{{item.order}}</td>
              <td v-bind:style="{width: '12%'}">{{item.type}}</td>
              <td v-bind:style="{width: '12%'}">{{item.variety}}</td>
              <td v-bind:style="{width: '12%'}">{{item.volume}}</td>
              <td v-bind:style="{width: '12%'}">{{item.time | datetime}}</td>
              <td v-bind:style="{width: '12%'}">{{item.num}}</td>
              <td v-bind:style="{width: '16%'}">{{item.price}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td v-bind:style="{width: '12%'}"></td>
              <td v-bind:style="{width: '12%'}"></td>
              <td v-bind:style="{width: '12%'}">合计</td>
              <td v-bind:style="{width: '12%'}">160000.00</td>
              <td v-bind:style="{width: '12%'}"></td>
              <td v-bind:style="{width: '12%'}"></td>
              <td v-bind:style="{width: '12%'}">420000.00</td>
            </tr>
          </tfoot>
        </table>
        <div class="pages clearfix">
          <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
        </div>
      </div>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a @click="close()">确认</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  let json = []
  for (let i = 0; i < 8; i++) {
    let data = {
      i: i + 1,
      order: 'E154324' + i * 6,
      type: '买入',
      variety: 'GBPUSD',
      volume: '200.00',
      time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
      num: '3.00',
      price: '600.00'
    }
    if (i % 3 === 1) {
      data.type = '卖出'
    }
    json.push(data)
  }
  export default {
    name: '',
    data () {
      return {
        json: json
      }
    },
    methods: {
      init () {},
      close () {
        this.$layer.closeAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/statistics.scss"
</style>
