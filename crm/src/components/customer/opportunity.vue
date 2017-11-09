<template>
  <div class="opportunity">
    <section>
      <h5 class="clearfix">
        销售机会记录
        <a class="add" @click="add()">添加</a>
      </h5>
      <div class="list">
        <table>
          <thead>
            <tr>
              <td>机会名称</td>
              <td>机会类型</td>
              <td>销售阶段</td>
              <td>更新时间</td>
              <td>操作</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in json">
              <td>{{item.opportunity}}</td>
              <td>{{item.type}}</td>
              <td>{{item.step}}</td>
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
      opportunity: 'Admin',
      type: '代理',
      step: '签单',
      time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
    }
    if (i % 2 === 0) {
      data.sex = 0
    }
    json.push(data)
  }
  import addopportunity from './addopportunity.vue'
  export default {
    data () {
      return {
        json: json
      }
    },
    created () {
      $self = this
    },
    methods: {
      add () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: addopportunity,
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
