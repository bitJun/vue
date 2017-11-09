<template>
  <div class="del dialog">
    <div class="panel_title">
      <h4>系统提示</h4>
      <i class="iconfont icon-gunbi"></i>
    </div>
    <div class="panel_main"></div>
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
  export default {
    props: {
      data: object
    },
    methods: {
      cancel () {
        this.$layer.closeAll()
      }
    }
  }
</script>
<style scoped></style>
