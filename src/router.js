import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './components/Home.vue')
  },
  {
      path:'/test',
      name:'test',
      component:()=>import(/* webpackChunkName: "test" */ './components/Test.vue')
  }
]

export default new Router({
  routes
})
