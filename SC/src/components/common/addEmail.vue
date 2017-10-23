<template>
  <div class="dialog">
    <h2><label></label>添加/修改发件箱<i class="iconfont icon-close" @click="cancel()"></i></h2>
    <div class="panel_dialog link_panel">
      <form class="link_edit">
        <div class="form-group clearfix">
          <label class="pull-left label-control">邮件服务商<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.provider">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">SMTP服务器地址<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.smtpAddress">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">安全连接类型<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.linkType">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">SMTP端口<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.smtpPort">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">账户<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.mailAccount">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">密码<span class="must">*</span></label>
          <input class="pull-left" type="password" v-model="params.mailPassword">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">发件邮箱<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.sendMail">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">发件人名称<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="params.sender">
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
  let $self = ''
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'addEmail',
    data () {
      return {
        params: {
          brokerId: 1,
          id: 1,
          linkType: 6,
          mailAccount: 'sss',
          mailPassword: 'sss',
          provider: 4,
          sendMail: 'sss@sina.com',
          sender: 'sss',
          smtpAddress: 'sss',
          smtpPort: 555
        }
      }
    },
    created () {
      $self = this
      $self.init()
      $self.params.type = $self.$parent.type
    },
    'methods': {
      'init': function () {
        if ($self.$parent.download_id === '') {
          $self.params = {
            brokerId: 1,
            linkType: 6,
            mailAccount: '',
            mailPassword: '',
            provider: '',
            sendMail: '',
            sender: '',
            smtpAddress: '',
            smtpPort: ''
          }
        } else {
          let params = {
            id: $self.$parent.download_id
          }
          $self.$http.get('/support-center/mailConfigure/detail',
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
                $self.params = res.data.result
                delete $self.params.createDate
                delete $self.params.createUser
                delete $self.params.modifyDate
                delete $self.params.modifyUser
                delete $self.params.isDel
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        }
      },
      'cancel': function () {
        $self.$layer.closeAll()
      },
      'sure': function () {
        let id = $self.$parent.download_id
        let params = $self.params
        if (id === '') {
          $self.$http.post('/support-center/mailConfigure/add',
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
          $self.$http.post('/support-center/mailConfigure/update',
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
<style scoped>
  
</style>
