<<template>
  <div class="accountoverview">
    <p class="last_login">
      最近登录<span>{{time | time}}</span>
    </p>
    <div class="realaccount clearfix">
      <label class="tipbar">真实账户</label>
      <div class="info clearfix">
        <div class="balance pull-left">
          <p class="title">账户余额($)</p>
          <div class="balance_num">{{balance}}</div>
        </div>
        <ul class="infomation pull-left clearfix">
          <li>
            <p class="title">账号</p>
            <p class="info_detail">{{account}}</p>
          </li>
          <li>
            <p class="title">账户名称</p>
            <p class="info_detail">{{name}}</p>
          </li>
          <li>
            <p class="title">平台名称</p>
            <p class="info_detail">{{platform}}</p>
          </li>
          <li>
            <p class="title">创建时间</p>
            <p class="info_detail">{{createTime | datetime}}</p>
          </li>
        </ul>
        <a class="Login btns" v-if="status == 0">登录</a>
        <a class="Logined btns" v-if="status == 1">已登录</a>
      </div>
    </div>
  </div>
</template>
<script>
let $self = ''
export default {
  name: 'accountoverview',
  data () {
    return {
      time: new Date(),
      balance: '5000.00',
      account: '2095465',
      name: '林美国际',
      platform: 'MT4',
      createTime: new Date(),
      status: 1
    }
  },
  created () {
    $self = this
    $self.init()
  },
  'methods': {
    'init': function () {
    }
  }
}
</script>
<<style lang="sass" scoped>
@import '../assets/sass/accountoverview.scss'
</style>
