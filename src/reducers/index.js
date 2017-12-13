import { combineReducers } from 'redux'

// Dummy reducer
const counter = (state = 0, action) => {
  return state
}

const reducers = combineReducers({
  counter,
})

export default reducers
