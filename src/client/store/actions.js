import * as types from './types'

export const selectBlog = ({ commit }, id) => {
  commit(types.SELECT_BLOG, {
    id
  })
}
