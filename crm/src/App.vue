<template>
  <div id="app">
    <TopBar v-if="flag" :data="to"></TopBar>
    <div class="current-page" v-bind:style="height ? `min-height: ${height}px`: ''">
      <router-view></router-view>
    </div>
    <FooterBar></FooterBar>
  </div>
</template>
<script>
import TopBar from './components/common/top.vue'
import FooterBar from './components/common/footer.vue'
export default {
  name: 'app',
  data () {
    return {
      flag: true,
      height: 0,
      to: '/datacenter'
    }
  },
  created () {
    if (this.$route.name === 'login') {
      this.flag = false
    }
    this.height = document.documentElement.clientHeight - 85
  },
  components: {
    'TopBar': TopBar,
    'FooterBar': FooterBar
  },
  watch: {
    '$route' (to, from) {
      this.to = to.fullPath.split('/')[1]
      if (to.name !== 'login') {
        this.flag = true
      } else if (to.name === 'login') {
        this.flag = false
      }
    }
  }
}
</script>>
<style scoped>
  @import "./assets/css/common.css";
  @import "./assets/css/iconfont.css";
</style>
