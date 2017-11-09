<template>
  <div class="user cantainer">
    <h4>用户管理</h4>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="select clearfix">
      <el-select v-model="value1" placeholder="请选择" class="level pull-left">
        <el-option v-for="item in level" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-model="value2" placeholder="请选择" class="roles pull-left">
        <el-option v-for="item in roles" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-select v-model="value3" placeholder="请选择" class="topclass pull-left">
        <el-option v-for="item in topclass" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="ascription pull-right clearfix">
        <el-select v-model="value" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in ascription" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <input type="text" class="keyword">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="list">
      <div class="operates clearfix">
        <span>用户信息</span>
        <ul class="operate_btns pull-right clearfix">
          <li>
            <a class="del">
              <img src="../../assets/images/01del.png">
            </a>
          </li>
          <li>
            <a class="change">
              <img src="../../assets/images/02change.png">
            </a>
          </li>
          <li>
            <a class="add" @click="add()">
              <img src="../../assets/images/03add.png">
            </a>
          </li>
        </ul>
      </div>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'8%'}">
              <input type="checkbox" name="checkall" @click="selectAll($event)" v-model="checkAll">
            </td>
            <td v-bind:style="{width:'8%'}">用户编号</td>
            <td v-bind:style="{width:'10%'}">姓名</td>
            <td v-bind:style="{width:'8%'}">层级</td>
            <td v-bind:style="{width:'8%'}">上级用户</td>
            <td v-bind:style="{width:'5%'}">下级</td>
            <td v-bind:style="{width:'13%'}">联系方式</td>
            <td v-bind:style="{width:'14%'}">城市</td>
            <td v-bind:style="{width:'14%'}">创建时间</td>
            <td v-bind:style="{width:'12%'}"><p>登录权限</p></td>
          </tr>
        </thead>
        <tbody v-if="json.length>0">
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'8%'}">
                <input type="checkbox" name="checkbox" :value="item.id" v-model="ids" @click="select(item.id, $event)">
            </td>
            <td v-bind:style="{width:'8%'}">{{item.uid}}</td>
            <td class="name" v-bind:style="{width:'10%'}"><p>{{item.name}}</p><p>{{item.role}}</p></td>
            <td v-bind:style="{width:'8%'}">{{item.topclass}}</td>
            <td v-bind:style="{width:'8%'}">{{item.top}}</td>
            <td v-bind:style="{width:'5%'}"><p class="under">{{item.under}}</p></td>
            <td class="connect" v-bind:style="{width:'13%'}"><p>{{item.tel}}<p>{{item.email}}</p></td>
            <td v-bind:style="{width:'14%'}">{{item.city}}</td>
            <td v-bind:style="{width:'14%'}">{{item.time | time}}</td>
            <td v-bind:style="{width:'12%'}">
              <p>
                <el-switch v-model="item.authority" on-text="" off-text="" on-value="1" off-value="0" on-color="#7ec29d" off-color="#999999"></el-switch>  
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="pages clearfix" v-if="json.length>0">
        <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
      </div>
      <div class="no_result" v-if="json.length == 0">
        <img v-bind:src="loading_error.img">
        <p>{{loading_error.tip}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import AddDialog from './addUser.vue'
  export default {
    name: 'user',
    data () {
      return {
        loading_error: {
          img: require('../../assets/images/no_result.png'),
          tip: '暂无数据'
        },
        ids: [],
        checkAll: false,
        json: [],
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        ascription: [{
          value: '1',
          label: '用户编号'
        }, {
          value: '2',
          label: '姓名'
        }, {
          value: '3',
          label: '邮箱'
        }, {
          value: '4',
          label: '手机'
        }],
        value: '1',
        level: [{
          value: 'a1',
          label: '所有用户'
        }, {
          value: 'a2',
          label: '直属下级'
        }, {
          value: 'a3',
          label: '非直属下级'
        }, {
          value: 'a4',
          label: '无上级'
        }],
        value1: 'a1',
        roles: [{
          value: 'b1',
          label: '所有角色'
        }],
        value2: 'b1',
        topclass: [{
          value: 'c1',
          label: '所有层级'
        }],
        value3: 'c1'
      }
    },
    created () {
      $self = this
      $self.init()
    },
    methods: {
      init () {
        for (let i = 0; i < 10; i++) {
          let data = {
            id: i,
            uid: '0' + i + i * 5,
            name: '赵东来',
            role: '系统管理员',
            topclass: '一级',
            top: '沙瑞金',
            under: '3',
            tel: '1336578016',
            email: '15976454@qq.com',
            city: '浙江 杭州',
            time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
            authority: '1'
          }
          if (i % 3 === 2) {
            data.authority = '0'
          }
          $self.json.push(data)
        }
      },
      select (id, event) {
        if (event.currentTarget.checked) {
          console.log($self.ids)
          if ($self.ids.length === $self.json.length) {
            $self.checkAll = true
          }
        } else {
          $self.checkAll = false
        }
      },
      selectAll (event) {
        if (!event.currentTarget.checked) {
          $self.ids = []
        } else {
          $self.ids = []
          $self.json.forEach(function (item, i) {
            $self.ids.push(item.id)
          })
        }
      },
      add () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: AddDialog,
            parent: $self,
            data: []
          },
          area: ['800px', 'auto']
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/user.scss"
</style>
