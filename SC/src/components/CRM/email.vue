<template>
  <div class="B-email">
    <ul class="email_tab clearfix" v-bind:style="{left:toLeft+'px'}">
      <li>
        <a class="active" @click="tab($event, 'list')">发件箱列表</a>
      </li>
      <li>
        <a @click="tab($event, 'EmailTemplate')">邮件模板</a>
      </li>
    </ul>
    <div class="main_container">
      <div class="main_content clearfix">
        <component :is="currentView" keep-alive></component>
      </div>
    </div>
  </div>
</template>
<script>
  let $self = ''
  import List from './emailList.vue'
  import EmailTemplate from './emailTemplate.vue'
  import $ from 'jquery'
  export default {
    name: 'B-email',
    data () {
      return {
        currentView: 'List',
        toLeft: ''
      }
    },
    mounted () {
      $self = this
      let windowWidth = document.documentElement.clientWidth
      let emailWitdh = $('.email_tab').width()
      let left = (windowWidth - emailWitdh) / 2
      $self.toLeft = left
    },
    'methods': {
      'tab': function (e, type) {
        let elme = $(e.currentTarget)
        elme.parent().siblings().find('a').removeClass('active')
        elme.addClass('active')
        $self.currentView = type
      }
    },
    components: {
      'List': List,
      'EmailTemplate': EmailTemplate
    }
  }
</script>
<style scoped>
  @import"../../assets/css/email.css"
</style>
