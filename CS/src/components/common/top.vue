<<template>
  <div class="top_view clearfix">
    <div class="main">
      <router-link to="/" class="logo pull-left">Spire Trader</router-link>
      <ul class="navbar pull-right clearfix">
        <li>
          <router-link to="/" class="item" exact>账户总览</router-link>
        </li>
        <li>
          <router-link to="/" class="item" exact>账户管理</router-link>
        </li>
        <li>
          <router-link to="/" class="item" exact>开户申请</router-link>
        </li>
        <li>
          <router-link to="/" class="item" exact>账户资料</router-link>
        </li>
        <li>
          <router-link to="/" class="item" exact>用户资料</router-link>
        </li>
        <li>
          <a to="/" class="user">{{username}}</a>
        </li>
        <li class="exit">
          <a>
            <i class="iconfont icon-tuichu"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<<script>
export default {
  name: 'topbar',
  data () {
    return {
      username: '叶茂科技'
    }
  }
}
</script>
<<style lang="scss" scoped>
@import '../../assets/sass/top.scss'
</style>
