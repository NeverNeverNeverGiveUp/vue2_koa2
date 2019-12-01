// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

// 全局引入vue-awesome-swiper  【不推荐】
// import VueAwesomeSwiper from "vue-awesome-swiper";
// import "swiper/dist/css/swiper.css";

// 解决axios跨域的问题
Vue.prototype.$axios = Axios;
Axios.defaults.baseURL = '/api';
Axios.defaults.headers.post['Content-Type'] = 'application/json';


Vue.config.productionTip = false;

// 引入Vant的第一种方法（不推荐）
// import Vant from 'vant'
// import 'vant/lib/vant-css/index.css'
// Vue.use(vant)
// 引入Vant的第2种方法   (按需使用Vant组件)
import { Button,Row,Col,Swipe,SwipeItem,Lazyload } from 'vant'
Vue.use(Button).use(Row).use(Col).use(Swipe).use(SwipeItem).use(Lazyload)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
