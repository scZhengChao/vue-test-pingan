/*
 * @Descripttion: 
 * @version: 
 * @Author: zhengChao
 * @Date: 2019-08-04 15:49:34
 * @LastEditors: zhengChao
 * @LastEditTime: 2019-09-19 11:32:09
 */
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
import {default as uuid } from './uuid';
import {default as mySwiper } from './swiper';
import {default as notification} from './notification'
import {default as ajax} from './XMLHttpRequest'
import { default as quill} from './Quill'
import { default as bs} from './better-scroll'
import { default as tiptap} from './tiptap'



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
    Vue.component('uuid',uuid)
    Vue.component('mySwiper',mySwiper)
    Vue.component('notification',notification)
    Vue.component('ajax',ajax)
    Vue.component('quill',quill)
    Vue.component('bs',bs)
    Vue.component('tiptap',tiptap)
  }
}