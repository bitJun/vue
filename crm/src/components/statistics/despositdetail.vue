<template>
  <div class="dialog mmissiondetail">
    <div class="panel_title">
      <h4></h4>
      <i class="iconfont icon-guanbi" @click="close()"></i>
    </div>
    <div class="panel_main">
      <div class="title">
        入金返佣明细
        <span>
          <i class="iconfont icon-tishi"></i>
          返佣规则：交易量返佣规则1
        </span>
      </div>
      <div class="list">
        <table>
          <thead>
            <tr>
              <td v-bind:style="{width:'25%'}">入金金额</td>
              <td v-bind:style="{width:'25%'}">入金时间</td>
              <td v-bind:style="{width:'25%'}">返佣参数($/手)</td>
              <td v-bind:style="{width:'25%'}">返佣金额($)</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in json">
              <td v-bind:style="{width:'25%'}">{{item.volume}}</td>
              <td v-bind:style="{width:'25%'}">{{item.time | time}}</td>
              <td v-bind:style="{width:'25%'}">{{item.num}}</td>
              <td v-bind:style="{width:'25%'}">{{item.price}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td v-bind:style="{width: '25%'}">合计</td>
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
      i: i,
      volume: '200.00',
      time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
      num: '3.00',
      price: '600.00'
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