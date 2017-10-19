<template>
  <div id="app">
    <HeaderBar v-if="flag"></HeaderBar>
    <Layout v-if="flag"></Layout>
    <router-view></router-view>
    <!-- <transition>
      <router-view></router-view>
    </transition> -->
  </div>
</template>

<script>
import Layout from './components/common/layout.vue'
import HeaderBar from './components/common/top.vue'
export default {
  name: 'app',
  data () {
    return {
      flag: true
    }
  },
  created () {
    if (this.$route.name === 'login') {
      this.flag = false
    }
  },
  components: {
    'Layout': Layout,
    'HeaderBar': HeaderBar
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
  @import "./assets/css/iconfont.css";
</style>
