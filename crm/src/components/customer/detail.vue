<template>
  <div class="dialog customer_detail">
    <div class="panel_title">
      <h4>账户详情</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <h4 class="title clearfix">
        <img src="../../assets/images/usered.png" class="pull-left">
        <label class="pull-left">{{name}}</label>
        <span class="pull-left">开户时间：{{time | time}}</span>
        <a class="edit pull-right">编辑</a>
      </h4>
      <ul class="js_tab clearfix">
        <li><a class="active" @click="tab(0,$event)">基本资料</a></li>
        <li><a @click="tab(1,$event)">联系人</a></li>
        <li><a @click="tab(2,$event)">销售机会</a></li>
        <li><a @click="tab(3,$event)">回访记录</a></li>
      </ul>
      <component :is="currentView" keep-alive></component>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel" @click="cancel()">取消</a>
        </li>
        <li>
            <a @click="sure()">发布</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import $ from 'jquery'
  import BaseInfo from './baseinfo.vue'
  import Connect from './connect.vue'
  import opportunity from './opportunity.vue'
  import record from './record.vue'
  export default {
    data () {
      return {
        currentView: 'BaseInfo',
        name: 'SMITH',
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
      }
    },
    components: {
      'BaseInfo': BaseInfo,
      'Connect': Connect,
      'opportunity': opportunity,
      'record': record
    },
    'methods': {
      'tab': function (index, event) {
        let $div = $(event.currentTarget)
        $div.parent().siblings().find('a').removeClass('active')
        $div.addClass('active')
        switch (index) {
          case 0:
            this.currentView = 'BaseInfo'
            break
          case 1:
            this.currentView = 'Connect'
            break
          case 2:
            this.currentView = 'opportunity'
            break
          case 3:
            this.currentView = 'record'
            break
          default:
            this.currentView = 'BaseInfo'
            break
        }
      },
      'cancel': function () {
        this.$layer.closeAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/customer.scss'
</style>
