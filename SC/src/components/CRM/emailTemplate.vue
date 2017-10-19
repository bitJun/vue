<template>
  <div class="list">
    <a class="addConnect"><i class="iconfont icon-add"></i>添加联系人</a>
    <table>
      <thead>
        <tr>
          <td v-bind:style="{width:'20%'}">邮件类型</td>
          <td v-bind:style="{width:'20%'}">邮件主题</td>
          <td v-bind:style="{width:'20%'}">更新时间</td>
          <td v-bind:style="{width:'20%'}">发件邮箱</td>
          <td v-bind:style="{width:'20%'}">操作</td>                                              
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item,index) in json">
          <td class="">{{item.type}}</td>
          <td class="">{{item.theme}}</td>
          <td class="">{{item.time}}</td>
          <td class="">{{item.email}}</td>
          <td class="clearfix">
            <a class="edit pull-left" @click="edit(index)">编辑</a>
            <a class="del pull-left" @click="preview(index)">预览</a>
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
    type: '[调整杠杆]',
    theme: '二货',
    time: '2017-06-28 16:33:22',
    email: '123@qq.com'
  }
  for (let i = 0; i < 10; i++) {
    data.id = i
    jsondata.push(data)
  }
  let pages = {
    totalnum: 566,
    current: 3,
    totalpage: 57,
    size: 10
  }
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
      'preview': function (index) {
        alert(index)
      },
      'edit': function (index) {
        alert(index)
      }
    },
    components: {
      'PageNav': PageNav
    }
  }
</script>
<style scoped></style>
