<template>
  <div class="setting_view cantainer">
    <div class="filiter">
      <p>
        返佣设置
        <el-select v-model="commision_value" placeholder="请选择" class="chooseItem">
          <el-option v-for="item in commision" :key="item.value" :label="item.label" :value="item.value">
            <router-link v-bind:to="item.link">{{item.label}}</router-link>
          </el-option>
        </el-select>
      </p>
    </div>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="list">
      <h5>
        品种组设置
      </h5>
      <a class="add">
        <img src="../../assets/images/03add.png">
      </a>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'25%'}">品种组名称</td>
            <td v-bind:style="{width:'50%'}">交易品种</td>
            <td v-bind:style="{width:'25%'}"><p>操作</p></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json">
            <td v-bind:style="{width:'25%'}"><p>{{item.HierarchyName}}</p></td>
            <td v-bind:style="{width:'50%'}">
              <p><span v-for="data in item.category">{{data}}</span></p>
            </td>
            <td v-bind:style="{width:'25%'}">
              <p>
                <ul class="clearfix pull-right">
                  <li>
                    <a class="setting">
                      <i class="iconfont icon-shezhishedingpeizhibanshou"></i>
                    </a>
                  </li>
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
      category: ['EURUSD', 'EURUSD', 'EURUSD', 'EURUSD', 'EURUSD'],
      HierarchyName: '一级用户'
    }
    json.push(data)
  }
  import system from '../../assets/js/system'
  export default {
    name: 'categorygroup',
    data () {
      return {
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)',
        commision: system.commision,
        commision_value: 'c2'
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
