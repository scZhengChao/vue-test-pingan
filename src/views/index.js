import { default as selectMenu } from './selectMenu';
import { default as antdVue } from './antdVue';
import { default as calendar } from './calendar';
import { default as chatBox } from './chatBox';
import { default as fontawesome } from './fontawesome';
import { default as lang } from './lang';
import { default as searchBaidu } from './searchBaidu';
import { default as selectdiv } from './selectdiv';
import { default as upload } from './upload';
import { default as xssfilter } from './xssfilter';
import { default as socketBian } from './socket';
import { default as worker} from './worker';
import {default as jsplumb } from './jsplumb';
export default {
  install(Vue) {
    Vue.component("selectMenu",selectMenu)
    Vue.component("antdVue",antdVue)
    Vue.component("calendar",calendar)
    Vue.component("chatBox",chatBox)
    Vue.component("fontawesome",fontawesome)
    Vue.component("lang",lang)
    Vue.component("selectdiv",selectdiv)
    Vue.component("upload",upload)
    Vue.component("xssfilter",xssfilter)
    Vue.component("searchBaidu", searchBaidu)
    Vue.component("socketBian", socketBian)
    Vue.component('worker',worker)
    Vue.component('jsplumb',jsplumb)
  }
}