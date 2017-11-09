<template>
  <div class="layout">
    <div class="logo">
      <!-- <img src="../../assets/images/logo02.png"> -->
    </div>
    <ul>
      <li>
        <router-link to="/" class="menu" exact v-on:click.native="golink($event)">
          <i class="iconfont icon-chanpin"></i>
          <p>产品概况</p>
        </router-link>
      </li>
      <li>
        <a class="menu" @click="showmenu($event)">
          <img src="../../assets/images/CRM.png">
          <p>CRM设置</p>
        </a>
        <ul class="submenu">
          <li>
            <router-link to="/B-brand" exact class="sub_menu">品牌设置</router-link>
          </li>
          <li>
            <router-link to="/B-email" exact class="sub_menu">邮件设置</router-link>
          </li>
        </ul>
      </li>
      <li>
        <a class="menu" @click="showmenu($event)">
          <i class="iconfont icon-iconset0176"></i>
          <p>客户端管理</p>
        </a>
        <ul class="submenu">
          <li>
            <router-link to="/C-brand" exact class="sub_menu">品牌设置</router-link>
          </li>
          <li>
            <router-link to="/C-email" exact class="sub_menu">邮件设置</router-link>
          </li>
          <li>
            <router-link to="/C-mt4" exact class="sub_menu">MT4设置</router-link>
          </li>
          <li>
            <router-link to="/C-mt5" exact class="sub_menu">MT5设置</router-link>
          </li>
          <li>
            <router-link to="/C-download" exact class="sub_menu">下载设置</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
    data () {
      return {}
    },
    methods: {
      showmenu (e) {
        let elme = $(e.currentTarget)
        elme.parent().find('.menu').addClass('actived').removeClass('bg')
        elme.parent().siblings().find('.menu').addClass('bg').removeClass('actived')
        elme.parent().siblings().find('.submenu').hide()
        var flag = elme.parent().find('.submenu').css('display')
        if (flag === 'block') {
          elme.parent().find('.submenu').hide()
        } else {
          elme.parent().find('.submenu').show()
        }
      },
      golink (e) {
        let elme = $(e.currentTarget)
        elme.removeClass('bg')
        elme.parent().siblings().find('.menu').addClass('bg').removeClass('actived')
        elme.parent().siblings().find('.submenu').hide()
      }
    }
  }
</script>
