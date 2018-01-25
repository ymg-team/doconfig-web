import { SAVE_CONF, TOGGLE_LOADING } from '../../store/types'

// initial state
const state = {
  dockerfile: [],
  webpack: [],
  loading: false
}

const getters = {}

const actions = {
  // save config
  [SAVE_CONF] ({ commit }, params) {
    commit(TOGGLE_LOADING)
    commit(SAVE_CONF, params)
  }
}

const mutations = {
  // save config
  [SAVE_CONF] (state, {type, data}) {
    state[type].push(data)
    state.loading = !state.loading
  },
  [TOGGLE_LOADING] (state) {
    state.loading = !state.loading
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
