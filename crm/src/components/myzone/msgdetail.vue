<template>
  <div class="msgdetail dialog">
    <div class="panel_title">
      <h4>消息详情</h4>
      <i class="iconfont icon-guanbi" @click="cancel()"></i>
    </div>
    <div class="panel_main">
      <h5 class="text-center">2017新政策变更通知</h5>
      <p class="text-center"><span class="time">2017-08-01 10:22:01</span><span class="role">系统管理员</span></p>
      <div class="content">
        <span>尊敬的用户：</span>
        <p>近期一些不法分子利用非法改号软件，模拟公司财务电话来电号码，对公司客户进行诈骗！公司财务电话不会主动联系客户，若有异常情况，请第一时间与公司核实情况！</p>
      </div>
    </div>
    <div class="panel_footer">
      <ul class="operate clearfix">
        <li>
            <a class="cancel">删除</a>
        </li>
        <li>
            <a @click="cancel()">发布</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      cancel () {
        this.$layer.closeAll()
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/myzone.scss'
</style>
