<template>
  <div class="setting_view cantainer">
    <div class="filiter">
      <p>
        用户设置
        <el-select v-model="account_value" placeholder="请选择" class="chooseItem">
          <el-option v-for="item in account" :key="item.value" :label="item.label" :value="item.value">
            <router-link v-bind:to="item.link">{{item.label}}</router-link>
          </el-option>
        </el-select>
      </p>
    </div>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="list">
      <h5>
        角色权限设置
      </h5>
      <a class="add">
        <img src="../../assets/images/03add.png">
      </a>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'15%'}">ID</td>
            <td v-bind:style="{width:'20%'}">角色名称</td>
            <td v-bind:style="{width:'15%'}">上级角色</td>
            <td v-bind:style="{width:'15%'}">下级角色数</td>
            <td v-bind:style="{width:'15%'}">角色权限</td>
            <td v-bind:style="{width:'20%'}"><p>操作</p></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json">
            <td v-bind:style="{width:'15%'}"><p>{{item.Id}}</p></td>
            <td v-bind:style="{width:'20%'}"><p>{{item.role}}</p></td>
            <td v-bind:style="{width:'15%'}"><p>{{item.top}}</p></td>
            <td v-bind:style="{width:'15%'}"><p class="under">{{item.under}}</p></td>
            <td v-bind:style="{width:'15%'}"><p class="show">修改/权限查看</p></td>
            <td v-bind:style="{width:'20%'}">
              <p>
                <ul class="clearfix pull-right">
                  <li>
                    <a class="edit">
                      <i class="iconfont icon-edit"></i>
                    </a>
                  </li>
                  <li>
                    <a class="del">
                      <i class="iconfont icon-del"></i>
                    </a>
                  </li>
                </ul>
              </p>
            </td>
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
      i: i,
      Id: '011' + i,
      role: '系统管理员',
      top: '系统管理员',
      under: '4',
      name: '标准账户组'
    }
    json.push(data)
  }
  import system from '../../assets/js/system'
  export default {
    name: 'role',
    data () {
      return {
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        account: system.role,
        account_value: 'r1'
      }
    },
    created () {
      $self = this
      console.log($self)
    },
    'methods': {}
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/system.scss'
</style>
