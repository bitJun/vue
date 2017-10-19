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
          <td class="">{{item.name}}</td>
          <td class="">{{item.SMTP}}</td>
          <td class="">{{item.account}}</td>
          <td class="">{{item.email}}</td>
          <td class="">{{item.ename}}</td>
          <td class="clearfix">
            <a class="edit pull-left" @click="editEmail(item.id)">编辑</a>
            <a class="del pull-left" @click="del(index)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNav :pages="pages" v-if="pageshow == true & pages.totalnum != 0"></PageNav>
  </div>
</template>
<script>
  let jsondata = []
  let data = {
    id: 0,
    name: '张三丰',
    SMTP: 'qweqweqwe',
    account: '阿萨德拉斯柯达',
    email: '123@qq.com',
    ename: '驱蚊器翁'
  }
  for (let i = 0; i < 10; i++) {
    data.id = i
    jsondata.push(data)
  }
  let pages = {
    totalnum: 116,
    current: 1,
    totalpage: 12,
    size: 10
  }
  import AddEmail from './addEmail.vue'
  import PageNav from '../common/page.vue'
  export default {
    name: 'emailList',
    data () {
      return {
        json: jsondata,
        pages: pages,
        pageshow: true
      }
    },
    'methods': {
      'del': function (index) {
        alert(index)
      },
      'edit': function (index) {
        alert(index)
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
    }
  }
</script>
<style scoped>
  
</style>
