import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";

function reducer(state = {
  form: {}
}, action) {
  if (action.type === 'FETCH_USER') {
    // console.log("payload is ", action.payload);
    return { ...state, form: action.payload }
  }
  return state;
}

const middleware = applyMiddleware(thunk);

export default createStore(reducer, middleware);