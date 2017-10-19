<template>
  <div class="customer cantainer">
    <h4>账户管理</h4>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="select clearfix">
      <el-select v-model="customer_value" placeholder="请选择" class="level pull-left">
        <el-option v-for="item in customer" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <div class="ascription pull-right clearfix">
        <el-select v-model="key_value" placeholder="请选择" class="ascription_type pull-left">
          <el-option v-for="item in customerKey" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
        <input type="text" class="keyword">
        <i class="iconfont icon-search"></i>
      </div>
    </div>
    <div class="list">
      <div class="operates clearfix">
        <span>客户信息</span>
        <ul class="operate_btns pull-right clearfix">
          <li>
            <a class="del">
              <img src="../../assets/images/01del.png">
            </a>
          </li>
          <li>
            <a class="change" @click="SwitchUser()">
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
            <td v-bind:style="{width:'5%'}">
              <input type="checkbox" name="checkall" @click="selectAll($event)" v-model="checkAll">
            </td>
            <td v-bind:style="{width:'11%'}">客户编号</td>
            <td v-bind:style="{width:'11%'}">客户名称</td>
            <td v-bind:style="{width:'11%'}">客户来源</td>
            <td v-bind:style="{width:'11%'}">客户归属</td>
            <td v-bind:style="{width:'10%'}">电话</td>
            <td v-bind:style="{width:'11%'}">邮箱</td>
            <td v-bind:style="{width:'15%'}">城市</td>
            <td v-bind:style="{width:'15%'}"><p>创建时间</p></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'5%'}">
                <input type="checkbox" name="checkbox" :value="item.id" v-model="ids" @click="select(item.id, $event)">
            </td>
            <td v-bind:style="{width:'11%'}"><p>{{item.uid}}</p></td>
            <td class="name" v-bind:style="{width:'11%'}"><p @click="Userdetail()">{{item.name}}</p></td>
            <td v-bind:style="{width:'11%'}"><p>{{item.source}}</p></td>
            <td v-bind:style="{width:'11%'}"><p>{{item.top}}</p></td>
            <td v-bind:style="{width:'10%'}"><p>{{item.phone}}</p></td>
            <td v-bind:style="{width:'11%'}"><p>{{item.email}}</p></td></td>
            <td v-bind:style="{width:'15%'}"><p>{{item.city}}</p></td>
            <td v-bind:style="{width:'15%'}"><p>{{item.time | time}}</p></td>
          </tr>
        </tbody>
      </table>
      <div class="pages clearfix">
        <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  let json = []
  let $self = ''
  for (let i = 0; i < 10; i++) {
    let data = {
      id: i,
      uid: '013123' + i + i * 5,
      name: '赵东来',
      source: '到访',
      top: '沙瑞金',
      phone: '18814442445',
      email: '15976454@qq.com',
      city: '浙江 杭州',
      time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
    }
    if (i % 3 === 2) {
      data.authority = '0'
    }
    json.push(data)
  }
  import AddDialog from './Add.vue'
  import SwitchUser from './switch.vue'
  import detaildialog from './detail.vue'
  export default {
    name: 'customer',
    data () {
      return {
        ids: [],
        checkAll: false,
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        customer: [{
          value: 'c1',
          label: '所有客户'
        }, {
          value: 'c2',
          label: '归属给我的客户'
        }, {
          value: 'c3',
          label: '归属给下级的客户'
        }, {
          value: 'c4',
          label: '无归属客户'
        }],
        customer_value: 'c1',
        customerKey: [{
          value: 'k1',
          label: '客户名称'
        }, {
          value: 'k2',
          label: '邮箱'
        }, {
          value: 'k3',
          label: '电话'
        }, {
          value: 'k4',
          label: '客户归属'
        }, {
          value: 'k5',
          label: '客户编号'
        }],
        key_value: 'k1'
      }
    },
    created () {
      $self = this
    },
    'methods': {
      'select': function (id, event) {
        if (event.currentTarget.checked) {
          console.log($self.ids)
          if ($self.ids.length === $self.json.length) {
            $self.checkAll = true
          }
        } else {
          $self.checkAll = false
        }
      },
      'selectAll': function (event) {
        if (!event.currentTarget.checked) {
          $self.ids = []
        } else {
          $self.ids = []
          $self.json.forEach(function (item, i) {
            $self.ids.push(item.id)
          })
        }
      },
      'add': function () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: AddDialog,
            parent: $self,
            data: []
          },
          area: ['550px', 'auto']
        })
      },
      'SwitchUser': function () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: SwitchUser,
            parent: $self,
            data: []
          },
          area: ['550px', 'auto']
        })
      },
      'Userdetail': function () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: detaildialog,
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
  @import "../../assets/sass/customer.scss"
</style>
