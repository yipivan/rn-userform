import { applyMiddleware, createStore } from 'redux';

function reducer(state = {
  form: {}
}, action) {
  if (action.type === 'FETCH_USER') {
    return { ...state, form: action.payload }
  }
  return state;
}

export default createStore(reducer);