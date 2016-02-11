import { createAction, handleActions } from 'redux-actions'
import http from 'axios'

// ------------------------------------
// Constants
// ------------------------------------
export const SHOW_REPOS = 'SHOW_REPOS'

// ------------------------------------
// Actions
// ------------------------------------
export const showRepos = createAction(SHOW_REPOS, (repos = []) => repos)

export const getRepos = () => {
  return (dispatch, getState) => {
    http.get('https://api.github.com/orgs/codeforamerica/repos')
      .then((response) => {
        dispatch(showRepos(response.data))
      })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [SHOW_REPOS]: (state, { payload }) => payload
}, [])
