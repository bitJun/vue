<template>
  <div class="connect">
    <section>
      <h5 class="clearfix">
        联系人信息
        <a class="add" @click="add()">添加</a>
      </h5>
      <div class="list">
        <table>
          <thead>
            <tr>
              <td>姓名</td>
              <td>职务</td>
              <td>性别</td>
              <td>手机</td>
              <td>邮箱</td>
              <td>生日</td>
              <td>创建时间</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in json">
              <td>{{item.name}}</td>
              <td>{{item.job}}</td>
              <td v-if="item.sex==0">男</td>
              <td v-if="item.sex==1">女</td>
              <td>{{item.tel}}</td>
              <td>{{item.email}}</td>
              <td>{{item.birth}}</td>
              <td>{{item.time | time}}</td>
              <td>
                <a class="edit">
                  <i class="iconfont icon-edit"></i>
                </a>
                <a class="del">
                  <i class="iconfont icon-del"></i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="pages clearfix">
          <el-pagination layout="prev, pager, next" :total="1000" class="pull-right"></el-pagination>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  let json = []
  let $self = ''
  for (let i = 0; i < 10; i++) {
    let data = {
      id: i,
      name: 'Admin',
      job: 'php',
      sex: 1,
      tel: '13365487951',
      email: '123346@qq.com',
      birth: '1992-01-01',
      time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
    }
    if (i % 2 === 0) {
      data.sex = 0
    }
    json.push(data)
  }
  import addconnect from './addconnect.vue'
  export default {
    data () {
      return {
        json: json
      }
    },
    created () {
      $self = this
    },
    'methods': {
      'add': function () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: addconnect,
            parent: $self,
            data: []
          },
          area: ['550px', 'auto']
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/customer.scss'
</style>
