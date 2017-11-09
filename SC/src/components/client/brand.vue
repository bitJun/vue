<template>
  <div class="B-brand">
    <div class="main_container">
      <div class="main_content">
        <div class="content">
          <h4 class="title">品牌信息设置</h4>
          <div class="brand_info clearfix">
            <div class="panel-left Site_Info pull-left">
              <p class="panel_title">
                <label></label>站点信息
              </p>
              <form class="form">
                <div class="form-group">
                  <p>站点名称<span class="must">*</span><span>浏览器标签上的站点名称</span></p>
                  <input type="text" name="" v-model="configure.siteName">
                </div>
                <div class="form-group">
                  <p>站点LOGO<span class="must">*</span><span>显示在页面左上角（尺寸：240*42 ，格式：jpg/png/bmp）</span></p>
                  <div class="site_logo clearfix">
                    <div class="preview pull-left" v-bind:style="{background:'url('+configure.siteLogo+') no-repeat'}"></div>
                    <a href="javascript:;" class="file pull-left">选择文件
                      <input class="siteLogo" id="siteLogo" type="file" name="site_logo" @change="onFileChange">
                    </a>
                  </div>
                </div>
                <div class="form-group">
                  <p>站点ICON<span class="must">*</span><span>浏览器标签上的站点图标（尺寸：32*32，格式：jpg、png）</span></p>
                  <div class="site_icon clearfix">
                    <div class="preview pull-left" v-bind:style="{background:'url('+configure.siteIcon+') no-repeat'}"></div>
                    <a href="javascript:;" class="file">选择文件
                      <input class="siteIcon" id="siteIcon" type="file" name="site_icon" @change="onFileChange">
                    </a>
                  </div>
                </div>
                <div class="form-group">
                  <p>移动平台LOGO<span class="must">*</span><span>移动端平台Logo，尺寸限定为：150*150</span></p>
                  <div class="wap_logo clearfix">
                    <div class="preview pull-left" v-bind:style="{background:'url('+configure.mobileLogo+') no-repeat'}"></div>
                    <a href="javascript:;" class="file">选择文件
                      <input class="mobileLogo" id="mobileLogo" type="file" name="wap_logo" @change="onFileChange">
                    </a>
                  </div>
                </div>
              </form>
            </div>
            <div class="panel-right Compony_Info pull-left">
              <p class="panel_title">
                <label></label>公司信息
              </p>
              <form class="form">
                <!-- <div class="form-group">
                  <p>客服连接<span class="must">*</span><span>用于导航在线客服链接</span></p>
                  <input type="text" name="" v-model="configure.service">
                </div> -->
                <div class="form-group">
                  <p>公司名称<span class="must">*</span><span>显示在页面底部</span></p>
                  <input type="text" name="" v-model="configure.brokerName">
                </div>
                <div class="form-group">
                  <p>公司邮箱<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="" v-model="configure.email">
                </div>
                <div class="form-group">
                  <p>公司电话<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="" v-model="configure.telephone">
                </div>
                <div class="form-group">
                  <p>公司地址<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="" v-model="configure.address">
                </div>
                <div class="form-group">
                  <p>公司网址<span class="must"></span><span>显示在页面底部</span></p>
                  <input type="text" name="" v-model="configure.websiteUrl">
                </div>
                <!-- <div class="form-group">
                  <p>公司域名<span class="must"></span><span>将您域名的CNAME记录指向（bwjdbbr6.bw.lwork.com）</span></p>
                  <div class="company_site clearfix">
                    <input type="text" name="" v-model="configure.realmName">
                    <a class="check_site">验证</a>
                  </div>
                </div> -->
              </form>
            </div>
          </div>
          <div class="operate clearfix">
            <a class="save" @click="save()">保存</a>
            <a class="reset" @click="init()">重置</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'C-brand',
    data () {
      return {
        configure: {}
      }
    },
    created () {
      $self = this
      $self.init()
    },
    'methods': {
      init () {
        $self.$http.get('/support-center/client/info',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            console.log(res.data)
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              if (res.data.result === null) {
                $self.configure = {
                  siteName: '',
                  siteLogo: $self.preview_bg,
                  siteIcon: $self.preview_bg,
                  brokerName: '',
                  email: '',
                  service: '',
                  telephone: '',
                  address: '',
                  websiteUrl: '',
                  realmName: ''
                }
              } else {
                $self.configure = res.data.result
              }
            } else {
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      save () {
        let params = $self.configure
        delete params.createDate
        delete params.modifyDate
        delete params.createUser
        delete params.modifyUser
        delete params.isDel
        if (params.siteLogo === $self.preview_bg) {
          params.siteLogo = ''
        }
        if (params.siteIcon === $self.preview_bg) {
          params.siteIcon = ''
        }
        $self.$http.post('/support-center/client/configure',
          params,
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            emulateJSON: true
          }).then((res) => {
            console.log(res.data)
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              toast(res.data.result, 2000, 'success')
            } else {
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.createImage(files[0], e.target.className)
      },
      createImage (file, type) {
        let reader = new FileReader()
        reader.onload = (e) => {
          let params = e.target.result
          let aa = document.getElementById(''+type+'').value.toLowerCase().split('.')
          let $type = aa[aa.length - 1]
          if ($type === 'png' || $type === ' jpeg ' || $type === 'jpg' || $type === 'gif' || $type === 'ico') {
            let imagSize = document.getElementById(''+type+'').files[0].size
            if (imagSize < 1024 * 1024 * 5) {
              $self.$http.post('/support-center/common/upload-img',
                params,
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8'
                  },
                  emulateJSON: true
                }).then((res) => {
                  if (res.body.code === 10000) {
                    $self.configure[type] = res.body.result
                  } else {
                    toast(res.body.msg, 2000, 'error')
                  }
                }, (error) => {
                  console.log('error', error)
                })
              return true
            } else {
              toast('请选择小于5M的图片', 2000, 'error')
            }
          } else {
            toast('请选择格式为*.png、*.jpeg、*.jpg、*.gif、*.ico 的图片', 2000, 'error')
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }
</script>
<style scoped>
  @import"../../assets/css/B-brand.css"
</style>
