<template>
  <div class="myzone cantainer">
    <div class="filiter">
      <p>
        消息中心
      </p>
      <p class="time">最后更新：{{time | time}}<i class="iconfont icon-shuaxin1" @click="update()"></i></p>
    </div>
    <div class="msg_operate clearfix">
      <ul class="msg_type pull-left clearfix">
        <li>
            <a class="unread">
              未读消息
              <label></label>
            </a>
        </li>
        <li>
            <a class="read">已读消息</a>
        </li>
      </ul>
      <ul class="operate_msg pull-right clearfix">
        <li>
            <a class="allread">全部标为已读</a>
        </li>
        <li>
            <a class="add" @click="add()"><i class="iconfont icon-bianji"></i>发布公告</a>
        </li>
      </ul>
    </div>
    <div class="msg_list">
      <ul>
        <li v-for="item in json" class="clearfix" @click="detail($event)">
          <div class="role pull-left" v-if="item.role == 1">
            <a class="icon admin"><img src="../../assets/images/admin.png"></a>
            <div class="role_name"><p>系统管理员</p><span>1分钟前</span></div>
          </div>
          <div class="role pull-left" v-if="item.role == 2">
            <a class="icon notice"><img src="../../assets/images/gonggao.png"></a>
            <div class="role_name"><p>用户公告</p><span>1分钟前</span></div>
          </div>
          <div class="role pull-left" v-if="item.role == 3">
            <a class="icon message"><img src="../../assets/images/message.png"></a>
            <div class="role_name"><p>站内短消息</p><span>1分钟前</span></div>
          </div>
          <div class="content pull-left">
            <p>尊敬的用户：</p>
            <p>{{item.content}}</p>
          </div>
          <div class="item_operate pull-left clearfix">
            <ul class="pull-right">
              <li><a class="del" @click="del(item.id)">删除</a></li>
              <li><a class="hasread">标为已读</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  let json = []
  let $self = ''
  for (let i = 0; i < 10; i++) {
    let data = {
      id: i,
      role: 1,
      content: '今年近期一些不法分子利用非法改号软件，模拟公司财务电话来电号码，对公司客户进行诈骗！'
    }
    if (i % 3 === 1) {
      data.role = 2
    }
    if (i % 3 === 2) {
      data.role = 3
    }
    json.push(data)
  }
  import AddMsg from './addmsg.vue'
  import Detail from './msgdetail.vue'
  export default {
    name: 'message',
    data () {
      return {
        json: json,
        time: 'Tue Oct 10 2017 09:16:04 GMT+0800 (中国标准时间)'
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
            content: AddMsg,
            parent: $self,
            data: []
          },
          area: ['600px', 'auto']
        })
      },
      'del': function () {
        $self.$layer.iframe({
          title: '',
          content: {
            content: AddMsg,
            parent: $self,
            data: []
          },
          area: ['600px', 'auto']
        })
        return false
      },
      'detail': function (event) {
        if (event.target.className === 'del') {
          return false
        }
        $self.$layer.iframe({
          title: '',
          content: {
            content: Detail,
            parent: $self,
            data: []
          },
          area: ['600px', 'auto']
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/myzone.scss'
</style>
