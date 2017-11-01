<template>
  <div class="account cantainer">
    <h4>账户管理</h4>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="select clearfix">
      <el-select v-model="value1" placeholder="请选择" class="level pull-left">
        <el-option v-for="item in level" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
        <span>账户信息</span>
        <ul class="operate_btns pull-right clearfix">
          <li>
            <a class="del">
              <img src="../../assets/images/01del.png">
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
            <td v-bind:style="{width:'8%'}">账号</td>
            <td v-bind:style="{width:'12%'}">账户名称/账户归属</td>
            <td v-bind:style="{width:'8%'}">开户时间</td>
            <td v-bind:style="{width:'8%'}">账户余额</td>
            <td v-bind:style="{width:'8%'}">账户净值</td>
            <td v-bind:style="{width:'13%'}">客户名称</td>
            <td v-bind:style="{width:'10%'}">账户组</td>
            <td v-bind:style="{width:'7%'}">杠杆</td>
            <td v-bind:style="{width:'8%'}"><p>登录权限</p></td>
            <td v-bind:style="{width:'8%'}"><p>交易状态</p></td>
          </tr>
        </thead>
        <tbody v-if="json.length>0">
          <tr v-for="(item, index) in json">
            <td v-bind:style="{width:'8%'}">
              <input type="checkbox" name="checkbox" :value="item.id" v-model="ids" @click="select(item.id, $event)">
            </td>
            <td v-bind:style="{width:'8%'}">{{item.account}}</td>
            <td  v-bind:style="{width:'12%'}">{{item.name}}/{{item.from}}</td>
            <td class="time" v-bind:style="{width:'8%'}"><p>{{item.time | time}}</p></td>
            <td v-bind:style="{width:'8%'}">{{item.balance}}</td>
            <td v-bind:style="{width:'8%'}">{{item.value}}</td>
            <td v-bind:style="{width:'13%'}">{{item.accountname}}</td>
            <td v-bind:style="{width:'10%'}">{{item.group}}</td>
            <td v-bind:style="{width:'7%'}">{{item.level}}</td>
            <td v-bind:style="{width:'8%'}">
              <p>
                <el-switch v-model="item.authority" on-text="" on-value="1" off-value="0" on-color="#7ec29d" off-color="#999999"></el-switch>  
              </p>
            </td>
            <td v-bind:style="{width:'8%'}">
              <p>
                <el-switch v-model="item.status" on-text="" on-value="1" off-value="0" on-color="#7ec29d" off-color="#999999"></el-switch>  
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
  import AddDialog from './add.vue'
  export default {
    name: 'account',
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
        level: [{
          value: '1',
          label: '归属我的账户'
        }, {
          value: '2',
          label: '归属给下级的账户'
        }, {
          value: '3',
          label: '无归属账户'
        }],
        value1: '1',
        ascription: [{
          value: 'a1',
          label: '账户'
        }, {
          value: 'a2',
          label: '账户名称'
        }, {
          value: 'a3',
          label: '账户归属'
        }],
        value: 'a1'
      }
    },
    components: {
      'AddDialog': AddDialog
    },
    created () {
      $self = this
      $self.init()
    },
    'methods': {
      'init': function () {
        for (let i = 0; i < 10; i++) {
          let data = {
            id: i,
            account: '015749' + i + i * 5,
            name: '赵东来',
            from: 'ADMIN',
            balance: '1' + i * 6,
            value: '2' + i * 7,
            accountname: '赚他一个亿公司',
            group: '00' + i,
            level: '1' + ':' + i * 1,
            time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
            authority: '1',
            status: '1'
          }
          $self.json.push(data)
        }
      },
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
          area: ['800px', 'auto']
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../assets/sass/account.scss"
</style>
