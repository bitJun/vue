<template>
  <div class="account_view">
    <div class="panel clearfix">
      <div class="panel-left pull-left">
        <div class="content">
          <h4 class="panel_title"><label></label>模拟账户类型设置</h4>
          <ul class="list_title clearfix">
            <li v-bind:style="{width:'25%'}">类型名称</li>
            <li v-bind:style="{width:'13%'}">杠杆</li>
            <li v-bind:style="{width:'20%'}">MT组</li>
            <li v-bind:style="{width:'17%'}">初始金额</li>
            <li v-bind:style="{width:'25%'}">操作</li>
          </ul>
          <ul class="list">
            <li class="item clearfix" v-for="(item,index) in json">
              <span class="pull-left" v-bind:style="{width:'25%'}" v-if="item.typeName.length>8" v-bind:title="item.typeName">
                {{item.typeName.substr(0,8)}}...
              </span>
              <span class="pull-left" v-bind:style="{width:'25%'}" v-if="item.typeName.length<=8" v-bind:title="item.typeName">
                {{item.typeName}}
              </span>
              <span class="pull-left" v-bind:style="{width:'13%'}" v-if="item.dbDictVOList.length>1">
                {{item.dbDictVOList[0].dictValue}}...
              </span>
              <span class="pull-left" v-bind:style="{width:'13%'}" v-if="item.dbDictVOList.length==1">
                {{item.dbDictVOList[0].dictValue}}
              </span>
              <span class="pull-left" v-bind:style="{width:'20%'}">{{item.groups}}</span>
              <span class="pull-left" v-bind:style="{width:'17%'}">{{item.startMoney}}</span>
              <span class="pull-left" v-bind:style="{width:'25%'}">
                <a class="Accountedit" @click="addType(item.id)">编辑</a>
                <a class="Accountdel" @click="del(item.id)">删除</a>
              </span>
            </li>
          </ul>
          <div class="addType">
            <a class="TypeAdd" @click="addType('')">添加类型</a>
          </div>
        </div>
      </div>
      <div class="panel-right pull-left">
        <div class="content">
          <h4 class="panel_title"><label></label>真实开户风险披露设置</h4>
          <div class="text">
            <vue-wangeditor id="editor" :options="options" v-model="riskDisclosure"></vue-wangeditor>
          </div>
          <div class="operate">
            <a class="save" @click="editriskDisclosure()">保存</a>
            <a class="reset" @click="resetriskDisclosure()">重置</a>
          </div>
        </div>
      </div>
    </div>
    <div class="model">
      <h4 class="panel_title"><label></label>真实账户开户表单设置</h4>
      <div class="model_list clearfix">
        <div class="model_item pull-left clearfix">
          <el-transfer class="clearfix" v-model="step1" :titles="['可用字段', '启用字段']" :data="step1data" :right-default-checked="[]"></el-transfer>
        </div>
        <div class="model_item model_center pull-left clearfix">
          <el-transfer class="clearfix" v-model="step2" :titles="['可用字段', '启用字段']" :data="step2data" :right-default-checked="[]"></el-transfer>
        </div>
        <div class="model_item pull-left clearfix">
          <el-transfer class="clearfix" v-model="step3" :titles="['可用字段', '启用字段']" :data="step3data" :right-default-checked="[]"></el-transfer>
        </div>
      </div>
      <div class="operate clearfix">
        <a class="save" @click="Editopenconfigure()">保存</a>
        <a class="reset" @click="openconfigure()">重置</a>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import addType from './addType.vue'
  import {toast} from '../../assets/js/tool'
  import digital from '../../assets/filter/digital'
  import $ from 'jquery'
  export default {
    name: 'account',
    data () {
      return {
        json: [],
        type_id: '',
        platformId: '',
        risk_id: '',
        riskDisclosure: '',
        options: {
          width: '100%',
          height: 275,
          menus: [
            'head',
            'bold',
            'italic',
            'underline',
            'strikeThrough',
            'foreColor',
            'backColor',
            'link',
            'list',
            'justify',
            /* 'image', */
            'table'
          ],
          pasteText: true,
          uploadImgServer: 'https://up-z2.qbox.me/'
        },
        step1: [],
        step2: [],
        step3: [],
        step1data: [],
        step2data: [],
        step3data: [],
        realopen: {}
      }
    },
    created () {
      $self = this
      $self.init()
    },
    methods: {
      init () {
        $self.platformId = $self.$parent.platformId
        let params = {
          platformId: $self.platformId
        }
        $self.simulationlist(params)
        $self.openconfigure(params)
        $self.platform()
      },
      contains (arr, obj) {
        let i = arr.length
        while (i--) {
          if (arr[i] === obj) {
            return true
          }
        }
        return false
      },
      openconfigure () {
        let params = {
          platformId: $self.platformId
        }
        $self.$http.get('/support-center/open/find-openconfigure',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === -1) {
              $self.$layer.msg(res.data.msg)
            }
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              $self.realopen = res.data.result
              $self.step1data = digital.digital.step1data
              $self.step2data = digital.digital.step2data
              $self.step3data = digital.digital.step3data
              $self.step1 = ['1', '2', '3']
              $self.step2 = []
              $self.step3 = ['32', '31', '33', '34']
              $.each($self.realopen, function (i, o) {
                if (o === null) {
                  $self.realopen[i] = '0'
                }
                for (let j = 0; j < $self.step1data.length; j++) {
                  let json = $self.step1data[j]
                  if (i === json.keyvalue && Number(o) === 1) {
                    if (!$self.contains($self.step1, json.key)) {
                      $self.step1.push(json.key)
                    }
                  }
                }
                for (let j = 0; j < $self.step2data.length; j++) {
                  let json = $self.step2data[j]
                  if (i === json.keyvalue && Number(o) === 1) {
                    if (!$self.contains($self.step2, json.key)) {
                      $self.step2.push(json.key)
                    }
                  }
                }
                for (let j = 0; j < $self.step3data.length; j++) {
                  let json = $self.step3data[j]
                  if (i === json.keyvalue && Number(o) === 1) {
                    if (!$self.contains($self.step3, json.key)) {
                      $self.step3.push(json.key)
                    }
                  }
                }
              })
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      Editopenconfigure () {
        let params = {}
        params = $self.realopen
        delete params.createDate
        delete params.modifyDate
        $self.$http.get('/support-center/open/edit-openconfigure',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === -1) {
              toast(res.data.msg, 2000, 'error')
            }
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              let dataparams = {
                platformId: $self.platformId
              }
              toast('修改成功', 2000, 'success')
              $self.openconfigure(dataparams)
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      simulationlist (params) {
        $self.$http.get('/support-center/simulation/get-simulationlist',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === -1) {
              $self.$layer.msg(res.data.msg)
            }
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
      platform () {
        let params = {
          id: $self.$parent.platformId
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
              $self.risk_id = res.data.result.id
              $self.riskDisclosure = res.data.result.riskDisclosure
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      addType (index) {
        $self.type_id = index
        $self.$layer.iframe({
          title: '',
          content: {
            content: addType,
            parent: $self,
            data: []
          },
          area: ['700px', 'auto']
        })
      },
      del (index) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let params = {
            id: index
          }
          $self.$http.get('/support-center/simulation/delete-simulation',
            {
              headers: {
                'Content-Type': 'application/json',
                'charset': 'utf-8'
              },
              params,
              emulateJSON: true
            }).then((res) => {
              if (res.data.code === -1) {
                $self.$layer.msg(res.data.msg)
              }
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
      editriskDisclosure () {
        $self.platformId = $self.$parent.platformId
        let params = {
          id: $self.risk_id,
          riskDisclosure: $self.riskDisclosure
        }
        let test = $self.riskDisclosure
        test = test.replace(/(\n)/g, '')
        test = test.replace(/(\t)/g, '')
        test = test.replace(/(\r)/g, '')
        test = test.replace(/<\/?[^>]*>/g, '')
        test = test.replace(/\s*/g, '')
        if (test.length > 1000) {
          toast('真实开户风险披露设置最多输入1000字', 2000, 'error')
          return false
        }
        $self.$http.get('/support-center/platform/edit-risk',
          {
            headers: {
              'Content-Type': 'application/json',
              'charset': 'utf-8'
            },
            params,
            emulateJSON: true
          }).then((res) => {
            if (res.data.code === -1) {
              $self.$layer.msg(res.data.msg)
            }
            if (res.data.code === 20000) {
              $self.$router.push({ path: '/login' })
            }
            if (res.data.code === 10000) {
              toast('修改成功', 2000, 'success')
              let data = {
                id: $self.$parent.platformId
              }
              console.log(data)
              $self.$http.get('/support-center/platform/find-platform',
                {
                  headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8'
                  },
                  data,
                  emulateJSON: true
                }).then((res) => {
                  if (res.data.code === 20000) {
                    $self.$router.push({ path: '/login' })
                  }
                  if (res.data.code === 10000) {
                    $self.riskDisclosure = res.data.result.riskDisclosure
                  }
                }, (error) => {
                  console.log('error', error)
                })
            } else {
              toast(res.data.msg, 2000, 'error')
            }
          }, (error) => {
            console.log('error', error)
          })
      },
      resetriskDisclosure () {
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
              $self.riskDisclosure = res.data.result.riskDisclosure
              $('.w-e-text').html('')
              var $str = $self.riskDisclosure
              $('.w-e-text').html($str)
            }
          }, (error) => {
            console.log('error', error)
          })
      }
    },
    watch: {
      'step1' (val, oldval) {
        $.each($self.step1data, function (j, o) {
          $self.realopen[o.keyvalue] = 0
          for (let i = 0; i < val.length; i++) {
            if (val[i] === o.key) {
              $self.realopen[o.keyvalue] = 1
            }
          }
        })
      },
      'step2' (val, oldval) {
        $.each($self.step2data, function (j, o) {
          $self.realopen[o.keyvalue] = 0
          for (let i = 0; i < val.length; i++) {
            if (val[i] === o.key) {
              $self.realopen[o.keyvalue] = 1
            }
          }
        })
      },
      'step3' (val, oldval) {
        $.each($self.step3data, function (j, o) {
          $self.realopen[o.keyvalue] = 0
          for (let i = 0; i < val.length; i++) {
            if (val[i] === o.key) {
              $self.realopen[o.keyvalue] = 1
            }
          }
        })
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/account.css"
</style>
