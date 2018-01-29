import * as types from './types'

/**
 * config actions
 */

/**
 * function to save conf
 * @param Object params
 * @param String params.type
 * @param Object params.data
 */
export const saveConf = ({ dispatch }, params) => {
  dispatch(types.SAVE_CONF, params)
}

export const toggleLoading = ({ dispatch }, type) => {
  dispatch(types.TOGGLE_LOADING, type)
}

/**
 * blog actions
 */
