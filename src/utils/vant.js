// 全局注册 vant 组件
import Vue from 'vue'
import {
  Button,
  Tabbar,
  TabbarItem,
  Dialog,
  Toast
} from 'vant'

// 修改默认配置
Dialog.setDefaultOptions({
  // 是否在页面回退时自动关闭
  closeOnPopstate: true
})
Toast.setDefaultOptions({
  // 展示时长(ms)
  duration: 1500
})

const vants = [
  Button,
  Tabbar,
  TabbarItem,
  Dialog,
  Toast
]
vants.forEach(vant => {
  Vue.use(vant)
})