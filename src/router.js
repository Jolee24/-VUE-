// 导入 vue-router 包
import VueRouter from 'vue-router'

// 引入相关组件
import HomeContainer from './components/tabbar/homeContainer.vue'
import MemberContainer from './components/tabbar/memberContainer.vue'
import SearchContainer from './components/tabbar/searchContainer.vue'
import ShopcarContainer from './components/tabbar/shopcarContainer.vue'

var router = new VueRouter({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: HomeContainer },
    {path: '/member', component: MemberContainer},
    {path: '/search', component: SearchContainer},
    {path: '/shopcar', component: ShopcarContainer},
  ],
  linkActiveClass: 'mui-active'
})

export default router