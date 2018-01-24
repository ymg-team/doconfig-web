export const fetchBlog = ({dispatch}) => {
  dispatch('FETCH_DATA')
}

export const selectBlog = ({dispatch}, id) => {
  dispatch('SELECT_ACTIVE_DATA', id)
}
