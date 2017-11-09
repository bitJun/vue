<template>
  <div class="history cantainer">
    <h4>
      <a class="back" @click="back()">
        <i class="iconfont icon-arrow"></i>
        返回
      </a>
      品种交易明细
    </h4>
    <div class="list">
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'14%'}">账户归属</td>
            <td v-bind:style="{width:'12%'}">账号</td>
            <td v-bind:style="{width:'13%'}">账户姓名</td>
            <td v-bind:style="{width:'10%'}">关联客户</td>
            <td v-bind:style="{width:'10%'}">品种组</td>
            <td v-bind:style="{width:'13%'}">手数</td>
            <td v-bind:style="{width:'10%'}">手续费</td>
            <td v-bind:style="{width:'10%'}">利息</td>
            <td v-bind:style="{width:'10%'}">盈亏</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'14%'}"><p>{{item.belong}}</p></td>
            <td v-bind:style="{width:'12%'}"><p>{{item.account}}</p></td>
            <td v-bind:style="{width:'13%'}"><p>{{item.name}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.customer}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.group}}</p></td>
            <td v-bind:style="{width:'13%'}"><p>{{item.num}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.charge}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.interest}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.profit}}</p></td>
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
  for (let i = 0; i < 10; i++) {
    let data = {
      id: i,
      belong: '沙瑞金',
      account: '015749' + i + i * 5,
      name: '高育良',
      customer: '高小琴',
      group: '山水',
      num: '20.00',
      charge: '10.00',
      interest: '5.00',
      profit: '6.00'
    }
    if (i % 3 === 1) {
      data.profit = '-' + data.profit
    }
    json.push(data)
  }
  export default {
    name: 'tradecategorydetail',
    data () {
      return {
        json: json
      }
    },
    methods: {
      back () {
        this.$router.go(-1)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/statistics.scss"
</style>
