import { SAVE_CONF, TOGGLE_LOADING } from '../../store/types'
import * as localStorage from '../../helpers/local-storage'

// initial state
const state = {
  dockerfile: {},
  webpack: {},
  loading: false
}

const getters = {}

const actions = {
  // save config
  // commit(TOGGLE_LOADING)
  [SAVE_CONF] ({ commit }, params) {
    // save to local storage
    localStorage.setData(`conf_${params.type}`, JSON.stringify(params.data))
    // mutate store
    commit(SAVE_CONF, params)
  },
  [TOGGLE_LOADING] ({ commit }, type) {
    commit(TOGGLE_LOADING, type)
  }
}

const mutations = {
  // save config
  [SAVE_CONF] (state, {type, data}) {
    state[type] = data
    state.loading = !state.loading
  },
  // toggle loading status
  [TOGGLE_LOADING] (state, type) {
    if (type === 'config') {
      state.loading = !state.loading
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
