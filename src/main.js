import Vue from 'vue'
// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

import axios from 'axios'
Vue.prototype.$http = axios

// 安装导入 vue-resource 模块
import VueResource from 'vue-resource'

// 挂载到Vue上
Vue.use(VueResource)

// 按需导入 Mint-UI 中的组件   
import { Header, Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

// 导入 router.js

import router from './router.js'

// 导入 app 组件
import app from './App.vue'



var vm = new Vue({
  el: '#app',
  render: c => c(app), 
  router
})
