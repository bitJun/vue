<<template>
  <div class="accountoverview">
    <section>
      <p class="tli">
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
              <p class="info_detail" v-bind:title="name">{{name}}</p>
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
    </section>
    <section>
      <p class="tli">真实账户</p>
      <div class="list">
        <table>
          <thead>
            <tr>
              <td v-bind:style="{width: '18%'}">账号</td>
              <td v-bind:style="{width: '18%'}">账户名</td>
              <td v-bind:style="{width: '18%'}">账户余额</td>
              <td v-bind:style="{width: '18%'}">平台名称</td>
              <td v-bind:style="{width: '18%'}">创建时间</td>
              <td v-bind:style="{width: '10%'}"><p>操作</p></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in json">
              <td v-bind:style="{width: '18%'}">{{item.account}}</td>
              <td v-bind:style="{width: '18%'}">{{item.name}}</td>
              <td v-bind:style="{width: '18%'}">{{item.balance}}</td>
              <td v-bind:style="{width: '18%'}">{{item.platform}}</td>
              <td v-bind:style="{width: '18%'}">{{item.time | datetime}}</td>
              <td v-bind:style="{width: '10%'}">
                <a>登录</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    <section>
      <p class="tli">模拟账户</p>
      <div class="list">
        <table>
          <thead>
            <tr>
              <td v-bind:style="{width: '18%'}">账号</td>
              <td v-bind:style="{width: '18%'}">账户名</td>
              <td v-bind:style="{width: '18%'}">账户余额</td>
              <td v-bind:style="{width: '18%'}">平台名称</td>
              <td v-bind:style="{width: '18%'}">创建时间</td>
              <td v-bind:style="{width: '10%'}"><p>操作</p></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in json">
              <td v-bind:style="{width: '18%'}">{{item.account}}</td>
              <td v-bind:style="{width: '18%'}">{{item.name}}</td>
              <td v-bind:style="{width: '18%'}">{{item.balance}}</td>
              <td v-bind:style="{width: '18%'}">{{item.platform}}</td>
              <td v-bind:style="{width: '18%'}">{{item.time | datetime}}</td>
              <td v-bind:style="{width: '10%'}">
                <a>登录</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
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
      status: 1,
      json: []
    }
  },
  created () {
    $self = this
    $self.init()
  },
  'methods': {
    'init': function () {
      let json = []
      for (let i = 0; i < 5; i++) {
        let data = {
          i: i,
          account: '2095465',
          name: 'LMYZLina',
          balance: '$100.00',
          platform: 'MT4',
          time: new Date()
        }
        json.push(data)
      }
      $self.json = json
    }
  }
}
</script>
<<style lang="sass" scoped>
@import '../assets/sass/accountoverview.scss'
</style>
