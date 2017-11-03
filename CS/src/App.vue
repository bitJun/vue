<template>
  <div id="app">
    <TopBar v-if="flag" :data="to"></TopBar>
    <div class="current-page" v-bind:class="bgcolor" v-bind:style="height ? `min-height: ${height}px`: ''">
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
      height: 0,
      bgcolor: '',
      to: 'accountoverview'
    }
  },
  created () {
    if (this.$route.name === 'login') {
      this.flag = false
      this.bgcolor = ''
      this.height = document.documentElement.clientHeight
    } else {
      this.bgcolor = 'container'
      this.height = document.documentElement.clientHeight - 60
    }
  },
  components: {
    'TopBar': TopBar
  },
  watch: {
    '$route' (to, from) {
      console.log(to.name)
      this.to = to.fullPath.split('/')[1].split('-')[0]
      if (to.name !== 'login' || to.name !== 'register' || to.name !== 'forgotpwd') {
        this.flag = true
        this.bgcolor = 'container'
      } else if (to.name === 'login' || to.name === 'register' || to.name === 'forgotpwd') {
        console.log(11)
        this.flag = false
        this.bgcolor = ''
      }
    }
  }
}
</script>
<style scoped>
  @import "./assets/css/common.css";
  @import "./assets/css/iconfont.css";
</style>
