import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import VueWangeditor from 'vue-wangeditor-simple'
import 'element-ui/lib/theme-default/index.css'
import layer from 'vue-layer'
import './assets/filter/global'
import './assets/filter/time'
import './assets/filter/digital'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(VueWangeditor)
Vue.prototype.$layer = layer(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
