<template>
  <div class="topBar">
    <p class="pull-right">
      <span>{{name}}</span>
      <a @click="exit()">退出<i class="iconfont icon-tuichu"></i></a>
    </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: ''
      }
    },
    created () {
      this.getinfo()
    },
    methods: {
      getinfo () {
        this.$http.get('/support-center/admin-user/login-data',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              this.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              this.name = res.data.result.username
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      exit () {
        this.$http.post('/support-center/admin-user/logout',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 10000) {
              localStorage.setItem('logined', false)
              this.$router.push({ path: '/login' })
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    }
  }
</script>
