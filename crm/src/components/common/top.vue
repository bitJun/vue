<template>
  <div class="topheader clearfix">
    <div class="pull-left logo">
      <router-link to="/datacenter" exact>
        <img src="../../assets/images/logo02.png">
      </router-link>
    </div>
    <ul class="menu pull-left clearfix">
      <li v-for="item in route">
        <router-link v-bind:to="item.link" v-if="item.sub.length === 0">
          <i class="iconfont" v-bind:class="item.icon"></i>{{item.name}}
        </router-link>
        <a v-if="item.sub.length > 0" v-bind:class="{active: item.link.split('/')[1] === data}" class="item">
          <i class="iconfont icon-shujutongji"></i>统计报表
        </a>
        <ul class="submenu" v-if="item.sub.length > 0">
          <li v-for="data in item.sub">
            <router-link v-bind:to="data.link">{{data.name}}</router-link>
          </li>
        </ul>
      </li>
      <!-- <li>
        <router-link to="/datacenter" exact>
          <i class="iconfont icon-shujuzhongxin"></i>数据中心
        </router-link>
      </li>
      <li>
        <router-link to="/user" exact>
          <i class="iconfont icon-user"></i>用户管理
        </router-link>
      </li>
      <li>
        <router-link to="/account" exact>
          <i class="iconfont icon-yonghuxinxi"></i>账户管理
        </router-link>
      </li>
      <li>
        <router-link to="/customer" exact>
          <i class="iconfont icon-yonghusuoyou"></i>客户管理
        </router-link>
      </li>
      <li>
        <a>
          <i class="iconfont icon-shujutongji"></i>统计报表
        </a>
        <ul class="submenu" exact>
          <li>
            <router-link to="/statistics/history" exact>账户报表</router-link>
          </li>
          <li>
            <router-link to="/statistics/despositcommission" exact>返佣报表</router-link>
          </li>
        </ul>
      </li>
      <li>
        <router-link to="/mission" exact>
          <i class="iconfont icon-shenherenwu"></i>任务管理
        </router-link>
      </li>
      <li>
        <a>
          <i class="iconfont icon-shezhi-copy-copy"></i>系统设置
        </a>
        <ul class="submenu">
          <li>
            <router-link to="/system/role" exact>用户设置</router-link>
          </li>
          <li>
            <router-link to="/system/account" exact>账户设置</router-link>
          </li>
          <li>
            <router-link to="/system/hierarchy" exact>返佣设置</router-link>
          </li>
          <li>
            <router-link to="/system/operatelog" exact>操作日志</router-link>
          </li>
        </ul>
      </li> -->
    </ul>
    <ul class="operates pull-left clearfix">
      <li class="msg">
        <a class="messagelist">
          <i class="iconfont icon-lingsheng"></i>
          <label></label>
        </a>
        <ul class="msglist">
          <li>
            <a>消息中心</a>
          </li>
          <li class="item" v-for="item in msg">
            <a>
              <p class="clearfix">
                <span class="role pull-left">系统消息</span>
                <span class="time pull-right">{{item.time}}</span>
              </p>
              <p class="content">{{item.content}}</p>
            </a>
          </li>
          <li>
            <router-link to="/myzone/message" exact>查看全部</router-link>
          </li>
        </ul>
      </li>
      <li class="person">
        <a class="person_logo">
          <img src="https://p2.ssl.qhimg.com/t0188186839452d67eb.jpg">
        </a>
        <ul class="munelist">
          <li>
            <a>ADMIN</a>
          </li>
          <li>
            <router-link to="/myzone/basicinfo" class="menu_item" exact>基本资料</router-link>
          </li>
          <li>
            <router-link to="/myzone/referrallink" class="menu_item" exact>推广链接</router-link>
          </li>
          <li>
            <router-link to="/myzone/changepwd" class="menu_item" exact>修改密码</router-link>
          </li>
          <li>
            <router-link to="/myzone/setemail" class="menu_item" exact>邮箱设置</router-link>
          </li>
          <li>
            <a class="menu_item">退出登录</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  let json = []
  for (let i = 0; i < 3; i++) {
    let data = {
      id: i,
      content: '尊敬的用户，根据交易所规则及其相关实施细则，外汇的交易从2017年1月',
      time: '五分钟前'
    }
    json.push(data)
  }
  export default {
    name: 'top',
    props: {
      data: {
        type: String
      }
    },
    data () {
      return {
        msg: json,
        route: [
          {
            link: '/datacenter',
            name: '数据中心',
            icon: 'icon-shujuzhongxin',
            sub: []
          },
          {
            link: '/user',
            name: '用户管理',
            icon: 'icon-user',
            sub: []
          },
          {
            link: '/account',
            name: '账户管理',
            icon: 'icon-yonghuxinxi',
            sub: []
          },
          {
            link: '/customer',
            name: '客户管理',
            icon: 'icon-yonghusuoyou',
            sub: []
          },
          {
            link: '/statistics',
            name: '统计报表',
            icon: 'icon-shujutongji',
            sub: [
              {
                name: '账户报表',
                link: '/statistics/history'
              },
              {
                name: '返佣报表',
                link: '/statistics/despositcommission'
              }
            ]
          },
          {
            link: '/mission',
            name: '任务管理',
            icon: 'icon-shenherenwu',
            sub: []
          },
          {
            link: '/system',
            name: '系统设置',
            icon: 'icon-shezhi-copy-copy',
            sub: [
              {
                name: '用户设置',
                link: '/system/role'
              },
              {
                name: '账户设置',
                link: '/system/account'
              },
              {
                name: '返佣设置',
                link: '/system/hierarchy'
              },
              {
                name: '操作日志',
                link: '/system/operatelog'
              }
            ]
          }
        ]
      }
    }
  }
</script>
<style scoped></style>
