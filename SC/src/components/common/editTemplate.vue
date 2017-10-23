<template>
  <div class="dialog template">
    <h2><label></label>修改邮件模板<i class="iconfont icon-close" @click="cancel()"></i></h2>
    <div class="panel_dialog template_panel">
      <form>
        <div class="group clearfix">
          <label class="group-label pull-left">发送邮件:</label>
          <input class="group-input pull-left" type="text" v-model="json.mailParameter">
        </div>
        <div class="group clearfix">
          <label class="group-label pull-left">邮件主题:</label>
          <input class="group-input pull-left" type="text" v-model="json.mailTheme">
        </div>
        <quill-editor v-model="json.mailContent" ref="myQuillEditor" :options="editorOption" v-bind:style="{height: '250px'}"></quill-editor>
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
  let $self = ''
  let toolbarOptions = ['bold', 'italic', 'underline', 'link', {'header': [1, 2, 3, 4, 5, 6, false]}]
  import {toast} from '../../assets/js/tool'
  import { quillEditor } from 'vue-quill-editor'
  export default {
    name: 'addEmail',
    data () {
      return {
        params: {},
        json: {},
        editorOption: {
          modules: {
            toolbar: toolbarOptions
          }
        }
      }
    },
    created () {
      $self = this
      $self.init()
    },
    components: {
      quillEditor
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    'methods': {
      'init': function () {
        let params = {
          id: $self.$parent.template_id
        }
        $self.$http.get('/dafeige/mailTemplate/preview',
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
              $self.json = res.data.result
            } else {
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'cancel': function () {
        $self.$layer.closeAll()
      },
      'sure': function () {
        let params = $self.json
        delete params.createDate
        delete params.modifyDate
        delete params.isDel
        delete params.createUser
        delete params.modifyUser
        $self.$http.post('/dafeige/mailTemplate/update',
          params,
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
              $self.$parent.init()
              $self.$layer.closeAll()
              toast('修改成功', 2000, 'success')
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/template.scss'
</style>
