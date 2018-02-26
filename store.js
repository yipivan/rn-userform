import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { createLogger } from 'redux-logger';


function reducer(state = {
  form: {}
}, action) {
  if (action.type === 'FETCH_USER') {
    return { ...state, form: action.payload }
  }
  return state;
}

const middleware = applyMiddleware(thunk, createLogger());

export default createStore(reducer, middleware);