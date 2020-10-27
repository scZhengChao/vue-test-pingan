import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import 'babel-polyfill';

// import ElementUI from 'element-ui';
// import element from '@/ui/element';
// Vue.use(element)

//import Antd from 'ant-design-vue'
import antd from '@/ui/antd';
Vue.use(antd);

//全部引入elementui 和国际化i18n
import i18n from './lang';
// Vue.use(element,{
//   size: 'small',
//   i18n: (key, value) => i18n.t(key, value)
// })

//借用vue-resource 的jsonp
import vueResource from 'vue-resource';
Vue.use(vueResource);

// 页面加载进度条
// import NProgress from 'nprogress';
// import 'nprogress/nprogress.css';

// NProgress.inc(0.2)
// NProgress.configure({ easing: 'ease', speed: 500, showSpinner: true })


//一波cli3的跨域配置和 nprogress 设置
// NProgress.start()
// fetch(
//   'http://localhost:8080/api/v2/movie/top250'
// ).then(
//   res=>res.json()
// ).then(
//   res => {
//     console.log(res)
//     NProgress.done()
//   }
// ) 
// router.beforeEach((to,from,next) => {
//   NProgress.start()
//   next()
// })
// router.afterEach((to,from) => {
//   NProgress.done()
// })



// require.context
const requireComponent = require.context('@/common', false, /.vue$/)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  let name = fileName.replace(/^.\//, '').replace(/.\w+$/, '')
  let componentName = name.charAt(0).toUpperCase()+name.slice(1)
  Vue.component(componentName, componentConfig.default || componentConfig)
})


//scoket 服务 前后端推送
// import vueSocketIo from 'vue-socket.io';
// import socketIo from 'socket.io-client';
// Vue.use(vueSocketIo, socketIo('http://localhost:3000')); //已经连接上了

// 过滤器
import * as filters from '@/filter';
Object.keys(filters).forEach(key => { Vue.filter(key, filters[key]) })

// 指令
import * as directives from '@/directive';
Object.keys(directives).forEach((key) => { Vue.directive(key, directives[key]) })

// // 组件
import components from '@/views'
Vue.use(components)

//公共方法
import * as common from '@/assets/commonFunction'
Vue.prototype.common = common

//svg
import svgcomponent from '@/icons'
Vue.use(svgcomponent)



//worker   js 不只是单线程
//方法一
// var blob = new Blob([document.querySelector('#worker').textContent]);
// var url = window.URL.createObjectURL(blob);
// var worker = new Worker(url);

// worker.postMessage('发消息')
// worker.onmessage = function (e) {
//   // e.data === 'some message'
//   console.log(e)
// };

// 方法三  推荐
import Worker from '@/api/worker'
Vue.use(Worker)


//quill  富文本编辑
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)





// import $ from 'jquery'
// window.$ = $

import jsplumb from 'jsplumb'

if(window){
  window.jsplumb = jsplumb
}
Vue.config.productionTip = false
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
