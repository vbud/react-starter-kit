import { combineReducers } from 'redux'
import { routeReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import repos from './modules/repos'
import todos from './modules/todos'

export default combineReducers({
  counter,
  repos,
  todos,
  router
})
