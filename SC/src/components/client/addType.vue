<template>
  <div class="dialog">
    <h2><label></label>添加模拟账户类型<i class="iconfont icon-close" @click="cancel()"></i></h2>
    <div class="panel_dialog link_panel">
      <form class="link_edit">
        <div class="form-group clearfix">
          <label class="pull-left label-control">类型名称<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="TypeInfo.typeName" maxlength="20" v-bind:class="errortype">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">MT组<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="TypeInfo.groups" v-bind:class="erroreMT">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">初始金额<span class="must">*</span></label>
          <input class="pull-left" type="text" v-model="TypeInfo.startMoney" v-bind:class="errorMoney">
        </div>
        <div class="form-group clearfix">
          <label class="pull-left label-control">杠杆<span class="must">*</span></label>
          <div class="select_input pull-left">
            <el-select v-model="items" multiple placeholder="请选择" v-bind:class="errorlever">
              <el-option v-for="item in levers" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </div>
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
  import digital from '../../assets/filter/digital'
  import {toast} from '../../assets/js/tool'
  export default {
    name: 'addType',
    data () {
      return {
        TypeInfo: {
          typeName: '',
          lever: '',
          groups: '',
          startMoney: ''
        },
        levers: digital.digital.lever,
        selected: null,
        items: [],
        lastSelectItem: {},
        errortype: '',
        erroreMT: '',
        errorMoney: '',
        errorlever: ''
      }
    },
    created () {
      $self = this
      console.log(digital.digital.lever)
      $self.init()
    },
    methods: {
      init () {
        if ($self.$parent.type_id !== '') {
          let params = {
            id: $self.$parent.type_id
          }
          $self.$http.get('/support-center/simulation/find-simulation',
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
                $self.TypeInfo = res.data.result
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
        }
      },
      sure () {
        let reg = /^\+?[1-9]\d*$/
        let id = $self.$parent.type_id
        let leverids = ''
        for (let i = 0; i < $self.items.length; i++) {
          if (leverids === '') {
            leverids = $self.items[i]
          } else {
            leverids = leverids + ',' + $self.items[i]
          }
        }
        $self.TypeInfo.lever = leverids
        let params = $self.TypeInfo
        $self.errortype = ''
        $self.erroreMT = ''
        $self.errorMoney = ''
        $self.errorlever = ''
        if (params.typeName === '') {
          toast('请输入类型名称', 2000, 'error')
          $self.errortype = 'errortips'
          return false
        }
        if (params.groups === '') {
          toast('请选择MT组', 2000, 'error')
          $self.erroreMT = 'errortips'
          return false
        }
        if (params.startMoney === '') {
          toast('请输入初始金额', 2000, 'error')
          $self.errorMoney = 'errortips'
          return false
        }
        if (!reg.test(params.startMoney) && params.startMoney !== '') {
          toast('请输入有效的初始金额', 2000, 'error')
          $self.errorMoney = 'errortips'
          return false
        }
        if (params.lever === '') {
          toast('请选择杠杆', 2000, 'error')
          $self.errorlever = 'errortips'
          return false
        }
        if (id === '') {
          params.platformId = $self.$parent.platformId
          $self.$http.get('/support-center/simulation/add-simulation',
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
                $self.$parent.init()
                toast('添加成功', 2000, 'success')
                $self.$layer.closeAll()
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        } else {
          $self.$http.get('/support-center/simulation/edit-simulation',
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
                $self.$parent.init()
                $self.$layer.closeAll()
              } else {
                toast(res.data.msg, 2000, 'error')
              }
            }, (error) => {
              console.log('error', error)
            })
        }
      },
      cancel () {
        $self.$layer.closeAll()
      }
    }
  }
</script>
