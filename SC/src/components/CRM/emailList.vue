<template>
  <div class="list">
    <a class="addConnect" @click="editEmail('')"><i class="iconfont icon-add"></i>添加发件人</a>
    <table>
      <thead>
        <tr>
          <td v-bind:style="{width:'20%'}">邮件服务商</td>
          <td v-bind:style="{width:'14%'}">SMTP服务器地址</td>
          <td v-bind:style="{width:'14%'}">账户</td>
          <td v-bind:style="{width:'14%'}">发件邮箱</td>
          <td v-bind:style="{width:'20%'}">发件人名称</td>
          <td v-bind:style="{width:'18%'}">操作</td>                                              
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in json">
          <td class="">{{item.providerName}}</td>
          <td class="">{{item.smtpAddress}}</td>
          <td class="">{{item.mailAccount}}</td>
          <td class="">{{item.sendMail}}</td>
          <td class="">{{item.sender}}</td>
          <td class="clearfix">
            <a class="edit pull-left" @click="editEmail(item.id)">编辑</a>
            <a class="del pull-left" @click="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNav :pages="pages" v-if="pageshow == true & pages.totalnum != 0"></PageNav>
  </div>
</template>
<script>
  let $self = ''
  import AddEmail from '../common/addEmail.vue'
  import PageNav from '../common/page.vue'
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'emailList',
    data () {
      return {
        json: [],
        pages: {},
        pageshow: true,
        nowpage: 1,
        type: 1
      }
    },
    created () {
      $self = this
      let nowpage = $self.nowpage
      $self.init(nowpage)
    },
    'methods': {
      'init': function (nowpage) {
        let params = {
          brokerId: '1',
          page: nowpage,
          size: 10,
          type: 1
        }
        $self.$http.get('/support-center/mailConfigure/list',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.body.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.body.code === 10000) {
              $self.json = res.body.result.list
              let pages = {
                totalnum: res.body.result.totalnum,
                current: res.body.result.current,
                totalpage: res.body.result.totalpage,
                size: res.body.result.size
              }
               $self.pages = pages
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'del': function (index) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = {
            id: index
          }
          $self.$http.get('/support-center/mailConfigure/delete',
            {
              headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
              },
              params,
              emulateJSON: true
            }).then((res) => {
              if (res.data.code === 20000) {
                $self.$router.push({ path: '/login' })
              }
              if (res.data.code === 10000) {
                $self.init()
                toast('删除成功', 2000, 'success')
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        }).catch(() => {
        })
      },
      'editEmail': function (index) {
        this.download_id = index
        this.$layer.iframe({
          title: '',
          content: {
            content: AddEmail,
            parent: this,
            data: []
          },
          area: ['700px', 'auto']
        })
      }
    },
    components: {
      'PageNav': PageNav
    },
    watch: {
      'nowpage' (val, oldVal) {
        if (val !== oldVal) {
          $self.init(val)
        }
      }
    }
  }
</script>
<style scoped>
  
</style>
