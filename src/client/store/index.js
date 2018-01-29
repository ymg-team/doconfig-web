import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

import blog from '../containers/blog/store'
import config from '../containers/conf/store'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    blog,
    config
  },
  strict: process.env.NODE_ENV !== 'production'
})
