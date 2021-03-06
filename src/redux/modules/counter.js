import { createAction, handleActions } from 'redux-actions'

// ===== Constants
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'

// ===== Actions
export const increment = createAction(COUNTER_INCREMENT, (value = 1) => value)

// This is a thunk, meaning it is a function that immediately
// returns a function for lazy evaluation. It is incredibly useful for
// creating async actions, especially when combined with redux-thunk!
// NOTE: This is solely for demonstration purposes. In a real application,
// you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
// reducer take care of this logic.
export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

// ===== Reducers
const initialState = 0
export default handleActions({
  [COUNTER_INCREMENT]: (state, { payload }) => state + payload
}, initialState)
