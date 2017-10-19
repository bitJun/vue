<template>
  <div class="info">
    <h4>基本资料设置</h4>
    <div class="panel clearfix">
      <div class="panel-left platform pull-left">
        <p class="info_type">
          <label class="bar"></label>站点信息
          <!-- <i class="iconfont icon-wenhao"></i> -->
        </p>
        <div class="form-group">
          <p>平台状态<span class="must">*</span></p>
          <el-radio-group v-model="platformInfo.isEnabled">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="0">停用</el-radio>
          </el-radio-group>
        </div>
        <div class="form-group">
          <p>平台名称<span class="must">*</span></p>
          <input type="text" v-model="platformInfo.chineseName" maxlength="40">
        </div>
        <div class="form-group">
          <p>平台LOGO<span class="must">*</span><span>显示在页面左上角（尺寸：240*42 png/jpeg/jpg/gif/ico）</span></p>
          <div class="platform_logo clearfix">
            <div class="preview pull-left" v-bind:style="{background:'url('+platformInfo.platformLogo+') no-repeat'}"></div>
            <a href="javascript:;" class="file pull-left">选择文件
              <input type="file" id="platform_logo" name="platform_logo" @change="onFileChange">
            </a>
          </div>
        </div>
        <div class="form-group">
          <p>机构简介</p>
          <textarea v-model="platformInfo.platformIntroduction" maxlength="100"></textarea>
        </div>
      </div>
      <div class="panel-right Jurisdiction pull-left">
        <p class="info_type">
          <label class="bar"></label>权限设置
          <!-- <i class="iconfont icon-wenhao"></i> -->
        </p>
        <div class="authority clearfix">
          <ul class="authority_list pull-left">
            <li>
              <el-checkbox v-model="platformInfo.isAllowedReal" v-bind:true-label="1" v-bind:false-label="0">允许申请真实账户</el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isAllowedSame" v-bind:true-label="1" v-bind:false-label="0">
                允许申请同名账户
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isAllowedBind" v-bind:true-label="1" v-bind:false-label="0">
                允许绑定真实账户
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isAllowedSimulation" v-bind:true-label="1" v-bind:false-label="0">
                允许注册模拟账户
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isAllowedWait" v-bind:true-label="1" v-bind:false-label="0">允许查看挂单</el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isAllowedLever" v-bind:true-label="1" v-bind:false-label="0">允许调整杠杆</el-checkbox>
            </li>
          </ul>
          <ul class="authority_list pull-left">
            <li>
              <el-checkbox v-model="platformInfo.isEnabledIn" v-bind:true-label="1" v-bind:false-label="0">
                启用在线入金
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isProvidedTelegraphic" v-bind:true-label="1" v-bind:false-label="0">
                提供电汇信息
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isEnabledOut" v-bind:true-label="1" v-bind:false-label="0">
                启用在线出金
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isOnlineTransfer" v-bind:true-label="1" v-bind:false-label="0">
                启用在线转账
              </el-checkbox>
            </li>
            <li>
              <el-checkbox v-model="platformInfo.isAllowedPosition" v-bind:true-label="1" v-bind:false-label="0">
                允许查看持仓单
              </el-checkbox>
            </li>
          </ul>
        </div>
        <div class="lever" v-if="show_lever">
          <el-select v-model="items" multiple placeholder="请选择">
            <el-option v-for="item in lever" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
    </div>
    <div class="operate clearfix" id="operate">
      <a class="save" @click="save()">保存</a>
      <a class="reset" @click="init()">重置</a>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import {toast} from '../../assets/js/tool'
  import digital from '../../assets/filter/digital'
  // import $ from 'jquery'
  export default {
    name: 'baseInfo',
    data () {
      return {
        lever: digital.digital.lever,
        selected: null,
        platformInfo: {},
        show_lever: false,
        searchText: '',
        items: [],
        lastSelectItem: {}
      }
    },
    created () {
      $self = this
      $self.init()
    },
    'methods': {
      'init': function () {
        let id = $self.$parent.platformId
        let params = {
          id: id
        }
        $self.$http.get('/support-center/platform/find-platform',
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
              $self.platformInfo = res.data.result
              $self.platformInfo.lever = 1
              if ($self.platformInfo.isAllowedLever === 1) {
                $self.show_lever = true
              }
              $self.items = []
              for (let i = 0; i < res.data.result.dbDictVOList.length; i++) {
                let json = res.data.result.dbDictVOList[i]
                $self.items.push(json.id)
              }
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      'save': function () {
        let leverids = ''
        for (let i = 0; i < $self.items.length; i++) {
          if (leverids === '') {
            leverids = $self.items[i]
          } else {
            leverids = leverids + ',' + $self.items[i]
          }
        }
        let params = $self.platformInfo
        params.lever = leverids
        delete params.dbDictVOList
        if (params.chineseName === '') {
          toast('请输入平台名称', 2000, 'error')
          return false
        }
        if (params.platformLogo === '') {
          toast('未选择图片', 2000, 'error')
          return false
        } else {
          $self.$http.get('/support-center/platform/edit-platform',
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
                $self.items = []
                $self.init()
                toast('保存成功', 2000, 'success')
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        }
      },
      'onFileChange': function (e) {
        let files = e.target.files || e.dataTransfer.files
        if (!files.length) {
          return
        }
        this.createImage(files[0])
      },
      'createImage': function (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
          let params = e.target.result
          let aa = document.getElementById('platform_logo').value.toLowerCase().split('.')
          let $type = aa[aa.length - 1]
          if ($type === 'png' || $type === ' jpeg ' || $type === 'jpg' || $type === 'gif' || $type === 'ico') {
            let imagSize = document.getElementById('platform_logo').files[0].size
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
                    $self.platformInfo.platformLogo = res.body.result
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
    },
    watch: {
      'platformInfo.isAllowedLever' (val, oldval) {
        if (val === 1) {
          $self.show_lever = true
        } else {
          $self.show_lever = false
        }
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/baseinfo.css"
</style>
