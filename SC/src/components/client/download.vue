<template>
  <div class="download">
    <div class="main_container">
      <div class="main_content">
        <div class="download_view">
          <h4 class="title">下载设置</h4>
          <a class="addLink" @click="addLink('')"><i class="iconfont icon-add"></i>添加链接</a>
          <table>
            <thead>
              <tr>
                <td v-bind:style="{width:'25%'}">链接名称</td>
                <td v-bind:style="{width:'25%'}">链接显示名称</td>
                <td v-bind:style="{width:'25%'}">下载链接</td>
                <td v-bind:style="{width:'25%'}">操作</td>                                              
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in json">
                <td class="">{{item.urlName}}</td>
                <td class="">{{item.characters}}</td>
                <td class="">{{item.downloadUrl}}</td>
                <td class="clearfix">
                  <a class="edit pull-left" @click="addLink(item.id)">编辑</a>
                  <a class="del pull-left" @click="del(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- <PageNav :pages="pages" v-if="pageshow == true & pages.totalnum != 0"></PageNav> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let pages = {
    totalnum: 56,
    current: 1,
    totalpage: 6,
    size: 10
  }
  let $self = ''
  import PageNav from '../common/page.vue'
  import Dialog from './link.vue'
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'download',
    data () {
      return {
        json: [],
        pages: pages,
        pageshow: true,
        downloadInfo: {},
        download_id: ''
      }
    },
    mounted () {
      $self = this
      $self.init()
    },
    'methods': {
      'init': function () {
        $self.$http.get('/support-center/download/get-downloadlist',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              $self.json = res.data.result
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
          $self.$http.get('/support-center/download/delete-download',
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
                toast('删除成功', 2000, 'success')
                $self.init()
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        }).catch(() => {
        })
      },
      'edit': function (index) {
        let params = {
          id: index
        }
        $self.$http.get('/support-center/download/find-download',
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
              $self.$layer.iframe({
                title: '',
                content: {
                  content: Dialog,
                  parent: $self,
                  data: [{id: 1}]
                },
                area: ['700px', 'auto']
              })
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'addLink': function (index) {
        $self.download_id = index
        $self.$layer.iframe({
          title: '',
          content: {
            content: Dialog,
            parent: $self,
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
  @import "../../assets/css/download.css"
</style>
