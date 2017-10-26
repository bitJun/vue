<<template>
  <div class="top_view clearfix">
    <div class="main">
      <router-link to="/" class="logo pull-left">Spire Trader</router-link>
      <ul class="navbar pull-right clearfix">
        <li v-for="item in routes">
          <router-link v-bind:to="item.link" v-bind:class="{active: item.link.split('/')[1] === data}" class="item" exact>{{item.name}}</router-link>
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
  props: {
    data: {
      type: String
    }
  },
  data () {
    return {
      username: '叶茂科技',
      routes: [
        {
          name: '账户总览',
          link: '/accountoverview'
        },
        {
          name: '账户管理',
          link: '/account/history'
        },
        {
          name: '开户申请',
          link: '/openaccount'
        },
        {
          name: '账户资料',
          link: '/accountinfo/basicinfo'
        },
        {
          name: '用户资料',
          link: '/userinfo/basicinfo'
        }
      ]
    }
  }
}
</script>
<<style lang="scss" scoped>
@import '../../assets/sass/top.scss'
</style>
