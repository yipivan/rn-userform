import { 
  AppRegistry
} from 'react-native';
import React, {Component} from 'react';
import { Provider,connect } from 'react-redux';
import store from './store';
import Main from './Main';

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

const mapStateToProps = (state) => {
  return {
    form: state.form
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (user) => {
      dispatch({
        type: "FETCH_USER",
        payload: user
      });
    } 
  }
}

connect(mapStateToProps, mapDispatchToProps)(App);