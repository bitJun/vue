<template>
  <div class="list">
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
      <tbody v-if="json.length > 0">
        <tr v-for="(item,index) in json">
          <td class="">{{item.mailType}}</td>
          <td class="">{{item.mailTheme}}</td>
          <td class="">{{item.modifyDate}}</td>
          <td class="">{{item.mailParameter}}</td>
          <td class="clearfix">
            <a class="edit pull-left" @click="edit(item.id)">编辑</a>
            <a class="del pull-left" @click="preview(item.id)">预览</a>
          </td>
        </tr>
      </tbody>
    </table>
    <PageNav :pages="pages" v-if="pageshow == true & pages.totalnum != 0"></PageNav>
    <div class="no_result" v-if="json.length == 0">
      <img v-bind:src="loading_error.img">
      <p>{{loading_error.tip}}</p>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import PageNav from '../common/page.vue'
  import EditTemplate from '../common/editTemplate.vue'
  import PreviewTemplate from '../common/previewTemplate.vue'
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'emailList',
    data () {
      return {
        loading_error: {
          img: require('../../assets/images/no_result.png'),
          tip: '暂无数据'
        },
        json: [],
        pages: {},
        pageshow: false,
        nowpage: 1,
        template_id: '',
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
        $self.$http.get('/support-center/mailTemplate/list',
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
              if ($self.json.length > 0) {
                $self.pageshow = true
              }
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'preview': function (index) {
        $self.template_id = index
        $self.$layer.iframe({
          title: '',
          content: {
            content: PreviewTemplate,
            parent: $self,
            data: []
          },
          area: ['700px', 'auto']
        })
      },
      'edit': function (index) {
        $self.template_id = index
        $self.$layer.iframe({
          title: '',
          content: {
            content: EditTemplate,
            parent: $self,
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
<style scoped></style>
