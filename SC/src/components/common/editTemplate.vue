<template>
  <div class="dialog template">
    <h2><label></label>修改邮件模板<i class="iconfont icon-close" @click="cancel()"></i></h2>
    <div class="panel_dialog template_panel">
      <form>
        <div class="group clearfix">
          <label class="group-label pull-left">f发送邮件:</label>
          <input class="group-input pull-left" type="text">
        </div>
        <div class="group clearfix">
          <label class="group-label pull-left">邮件主题:</label>
          <input class="group-input pull-left" type="text">
        </div>
        <vue-editor v-model="json.mailContent" :editorToolbar="customToolbar"></vue-editor>
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
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'addEmail',
    data () {
      return {
        params: {},
        json: {},
        customToolbar: [
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered'}, { 'list': 'bullet' }]
        ]
      }
    },
    created () {
      $self = this
      $self.init()
    },
    'methods': {
      'init': function () {
        let params = {
          id: $self.$parent.template_id
        }
        console.log($self.$parent.template_id)
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
        let id = $self.$parent.download_id
        let params = $self.params
        if (id === '') {
          $self.$http.post('/dafeige/mailConfigure/add',
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
                toast('添加成功', 2000, 'success')
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        } else {
          $self.$http.post('/dafeige/mailConfigure/update',
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
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/template.scss'
</style>
