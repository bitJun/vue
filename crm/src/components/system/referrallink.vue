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
        推广链接设置
      </h5>
      <a class="add">
        <img src="../../assets/images/03add.png">
      </a>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'15%'}">ID</td>
            <td v-bind:style="{width:'20%'}">推广名称</td>
            <td v-bind:style="{width:'40%'}">推广网址</td>
            <td v-bind:style="{width:'15%'}">参数类型</td>
            <td v-bind:style="{width:'15%'}"><p>操作</p></td>
          </tr>
        </thead>
        <tbody v-if="json.length > 0">
          <tr v-for="item in json">
            <td v-bind:style="{width:'15%'}"><p>{{item.groupId}}</p></td>
            <td v-bind:style="{width:'20%'}">{{item.name}}</td>
            <td v-bind:style="{width:'40%'}">{{item.websit}}</td>
            <td v-bind:style="{width:'15%'}">{{item.type}}</td>
            <td v-bind:style="{width:'15%'}">
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
      <div class="pages clearfix" v-if="json.length > 0">
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
  import system from '../../assets/js/system'
  export default {
    name: 'referrallink',
    data () {
      return {
        loading_error: {
          img: require('../../assets/images/no_result.png'),
          tip: '暂无数据'
        },
        json: [],
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        account: system.role,
        account_value: 'r2'
      }
    },
    created () {
      $self = this
      $self.init()
    },
    'methods': {
      'init': function () {
        for (let i = 0; i < 10; i++) {
          let data = {
            i: i,
            groupId: '011' + i,
            name: 'TW邀请注册链接',
            websit: 'http://trade.lwork.com?id=2132&pid=2JHI',
            type: '用户编号'
          }
          $self.json.push(data)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/system.scss'
</style>
