<template>
  <div id="app">
    <TopBar v-if="flag"></TopBar>
    <div class="current-page" v-bind:style="height ? `min-height: ${height}px`: ''">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import TopBar from './components/common/top.vue'
export default {
  name: 'app',
  data () {
    return {
      flag: true,
      height: 0
    }
  },
  created () {
    if (this.$route.name === 'login') {
      this.flag = false
    }
    this.height = document.documentElement.clientHeight - 85
  },
  components: {
    'TopBar': TopBar
  },
  watch: {
    '$route' (to, from) {
      if (to.name !== 'login') {
        this.flag = true
      } else if (to.name === 'login') {
        this.flag = false
      }
    }
  }
}
</script>
<style scoped>
  @import "./assets/css/common.css";
</style>
