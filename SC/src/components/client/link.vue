<template>
  <div class="dialog">
    <h2><label></label>添加/修改下载链接<i class="iconfont icon-close" @click="cancel()"></i></h2>
    <div class="panel_dialog link_panel">
      <form class="link_edit">
        <div class="form-group clearfix">
          <label class="pull-left label-control">链接名称<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="downloadInfo.urlName" maxlength="20" v-bind:class="errorNmae">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">显示文字<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="downloadInfo.characters" maxlength="20" v-bind:class="errorWord">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">下载链接<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="downloadInfo.downloadUrl" maxlength="100" v-bind:class="errorUrl">
        </div>
      </form>
    </div>
    <div class="btns-group">
      <ul class="clearfix">
        <li><a class="save" @click="sure()">确认</a></li>
        <li><a class="reset" @click="cancel()">取消</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'link',
    props: {
      data: {
        id: Number
      }
    },
    data () {
      return {
        downloadInfo: {
          urlName: '',
          characters: '',
          downloadUrl: ''
        },
        errorNmae: '',
        errorWord: '',
        errorUrl: ''
      }
    },
    created () {
      if (this.$parent.download_id !== '') {
        let params = {
          id: this.$parent.download_id
        }
        this.$http.get('/support-center/download/find-download',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === 20000) {
              this.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              this.downloadInfo = res.data.result
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    },
    'methods': {
      'cancel': function () {
        this.$layer.closeAll()
      },
      'sure': function () {
        let id = this.$parent.download_id
        let params = this.downloadInfo
        this.errorNmae = ''
        this.errorWord = ''
        this.errorUrl = ''
        if (params.urlName === '') {
          toast('请输入链接名称', 2000, 'error')
          this.errorNmae = 'errortips'
          return false
        }
        if (params.characters === '') {
          toast('请输入显示文字', 2000, 'error')
          this.errorWord = 'errortips'
          return false
        }
        if (params.downloadUrl === '') {
          toast('请输入下载链接', 2000, 'error')
          this.errorUrl = 'errortips'
          return false
        }
        if (id === '') {
          this.$http.get('/support-center/download/add-download',
            {
              headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
              },
              params,
              emulateJSON: true
            }).then((res) => {
              if (res.data.code === 20000) {
                this.$router.push({ path: '/login' })
              }
              if (res.data.code === 10000) {
                this.$layer.closeAll()
                toast('添加成功', 2000, 'success')
                this.$parent.init()
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        } else {
          params.id = id
          this.$http.get('/support-center/download/edit-download',
            {
              headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
              },
              params,
              emulateJSON: true
            }).then((res) => {
              if (res.data.code === 20000) {
                this.$router.push({ path: '/login' })
              }
              if (res.data.code === 10000) {
                this.$layer.closeAll()
                toast('修改成功', 2000, 'success')
                this.$parent.init()
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        }
      }
    }
  }
</script>
