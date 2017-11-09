<template>
  <div class="index">
    <div class="main_container">
      <div class="main_content clearfix">
        <div class="panel_left pull-left">
          <div class="client_item" v-for="item in client">
            <h4>客户管理端
              <!-- <i class="iconfont icon-gantanhao"></i> -->
            </h4>
            <ul class="clearfix">
              <li>登录账号：<span>{{item.account}}</span></li>
              <li>创建时间：<span>{{item.createdTime}}</span></li>
              <li>当前版本：<span>{{item.version}}</span></li>
              <li>到期时间：<span>{{item.endTime}}</span></li>
              <li>
                使用状态：
                <span class="stop" v-if="item.status == 0">已停用</span>
                <span class="active" v-if="item.status == 1">已使用</span>
              </li>
              <li>
                服务器类型：<span v-bind:style="{'margin-left': '18px'}">{{item.Server}}</span>
              </li>
              <li>
                短信验证：
                <span class="stop" v-if="item.SMS == 0">关</span>
                <span class="active" v-if="item.SMS == 1">开</span>
              </li>
            </ul>
            <p>访问地址：<a v-bind:href="item.url" target="_blank">{{item.url}}</a></p>
          </div>
        </div>
        <div class="panel_right pull-right">
          <div class="connect_info">
            <h4>联系人信息
              <!-- <i class="iconfont icon-gantanhao"></i> -->
            </h4>
            <ul>
              <li>
                <i class="iconfont icon-lianxiren"></i>联系人：<span>{{connect.name}}</span>
              </li>
              <li>
                <i class="iconfont icon-shouji"></i>手机号：<span>{{connect.mobile}}</span>
              </li>
              <li>
                <i class="iconfont icon-iconfontzhuyedianjihou"></i>公司名：<span>{{connect.company}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
let $self = ''
export default {
  name: 'index',
  data () {
    return {
      msg: 'Hello index',
      client: [
        {
          account: 'support@qq.com',
          createdTime: '2016-07-22 17：40',
          version: '10.0',
          endTime: '2016-08-22 17：40',
          status: 1,
          Server: '租用',
          SMS: 0,
          url: 'https://www.baidu.com'
        },
        {
          account: 'support033_LINZ@qq.com',
          createdTime: '2016-07-22 17：40',
          version: '9.0',
          endTime: '2016-09-22 17：40',
          status: 0,
          Server: '租用',
          SMS: 1,
          url: 'https://www.jd.com'
        }
      ],
      connect: {
        mobile: '13867879218',
        name: '张栋良',
        company: '安智利公司'
      }
    }
  },
  created () {
    $self = this
    $self.init()
  },
  methods: {
    init () {}
  }
}
</script>
<style scoped>
  @import "../assets/css/index.css";
</style>
