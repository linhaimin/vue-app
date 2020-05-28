import Vue from "vue";
import _ from 'lodash';
import App from "@/App.vue";
import router from "@/router";
import request from '@/utils/request';
import '@/utils/vant';
// 移除移动端点击延迟
import FastClick from 'fastclick';
FastClick.attach(document.body);

Vue.config.productionTip = false;
//网络请求
Vue.prototype.$request = request;
//lodash工具
Vue.prototype._ = _;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
