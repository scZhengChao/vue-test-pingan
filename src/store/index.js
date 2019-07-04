import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import getters from './getters';
import moda from './modules/moda';
import modb from './modules/modb';
import permission from './modules/permission';
export default new Vuex.Store({
  modules:{
    moda,
    modb,
    permission
  },
  getters,
  strict: process.env.NODE_ENV !== 'production'
})
