import { FETCH_BLOG, SELECT_BLOG } from '../../store/types'

// root store, initial state project
const state = {
  blog: [],
  active_blog: 0
}

const getters = {}

const actions = {}

// mutations
const mutations = {
  [FETCH_BLOG] (state) {
    console.log('fetch data from Firestorm..')
  },

  [SELECT_BLOG] (state, { id }) {
    state.active_blog = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
