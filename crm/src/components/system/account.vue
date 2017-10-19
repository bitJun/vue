<template>
  <div class="setting_view cantainer">
    <div class="filiter">
      <p>
        账户设置
      </p>
    </div>
    <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    <div class="list">
      <h5>
        账户组设置
      </h5>
      <a class="add">
        <img src="../../assets/images/03add.png">
      </a>
      <table>
        <thead>
          <tr>
            <td v-bind:style="{width:'25%'}">账户组ID</td>
            <td v-bind:style="{width:'50%'}" class="text-center">账户组名称</td>
            <td v-bind:style="{width:'25%'}"><p>操作</p></td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in json">
            <td v-bind:style="{width:'25%'}"><p>{{item.groupId}}</p></td>
            <td v-bind:style="{width:'50%'}">
              <p class="text-center">{{item.name}}</p>
            </td>
            <td v-bind:style="{width:'25%'}">
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
      groupId: '011' + i,
      name: '标准账户组'
    }
    json.push(data)
  }
  export default {
    name: 'saccount',
    data () {
      return {
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
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
