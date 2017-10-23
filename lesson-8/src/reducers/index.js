import { combineReducers } from 'redux'

const STEP = 1;

const counterState = (state = {counter: 3}, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return Object.assign({}, state, {counter: state.counter + STEP})
      case 'DECREMENT':
      return Object.assign({}, state, {counter: state.counter - STEP})
      default:
        return state
    }
  }
  
  const reducers = combineReducers({
    counterState
  })
  
  export default reducers