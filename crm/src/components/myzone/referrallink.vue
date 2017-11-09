<template>
  <div class="myzone cantainer">
    <div class="filiter">
      <p>
        个人中心
      </p>
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    </div>
    <ul class="js_tab clearfix">
      <li class="pull-left">
        <router-link to="/myzone/basicinfo">基本资料</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/referrallink">推广链接</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/changepwd">修改密码</router-link>
      </li>
      <li class="pull-left">
        <router-link to="/myzone/setemail">邮箱设置</router-link>
      </li>
    </ul>
    <div class="main">
      <h5>推广链接</h5>
      <ul class="list">
        <li class="item clearfix" v-for="item in json">
          <div class="linkname pull-left">{{item.name}}</div>
          <div class="link pull-left">{{item.link}}</div>
          <div class="linkcopy pull-left">
            <a class="copy" v-clipboard="item.link" @success="handleSuccess" @error="handleError">
              <i class="iconfont icon-copy"></i>
              复制地址
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  let json = []
  for (let i = 0; i < 10; i++) {
    let data = {
      name: 'TW邀请注册链接' + i,
      link: 'http://trade.lwork.com?id=2132&pid=' + i + 'JH'
    }
    json.push(data)
  }
  export default {
    name: 'basicinfo',
    data () {
      return {
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
      }
    },
    methods: {
      handleSuccess (e) {
        alert('success')
      },
      handleError (e) {
        alert('error')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/myzone.scss'
</style>
