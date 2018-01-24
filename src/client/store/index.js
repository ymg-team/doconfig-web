import Vue from 'vue'
import Vuex from 'vuex'

import * as actions from './actions'

import blog from '../containers/blog/store'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    blog
  },
  strict: process.env.NODE_ENV !== 'production'
})
