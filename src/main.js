// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 引入Vant的第一种方法（不推荐）
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(vant)
// 引入Vant的第2种方法   (按需使用Vant组件)
import { Button,Row,Col } from 'vant'
Vue.use(Button).use(Row).use(Col)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
