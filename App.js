import { 
  AppRegistry, 
  Text, 
  View, 
  StyleSheet, 
  TouchableHighlight
} from 'react-native';
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import store from './store';

import * as t from 'tcomb-form-native';
import { getUser, getRef } from './actions';
import * as firebase from 'firebase';
import {connect} from 'react-redux';

const firebaseConfig = {
  apiKey: "AIzaSyA4sLAZYQJhmXbPrhqjohwnZy5dhl90uSI",
  authDomain: "userform-811ba.firebaseapp.com",
  databaseURL: "https://userform-811ba.firebaseio.com",
  projectId: "userform-811ba",
  storageBucket: "userform-811ba.appspot.com",
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const Form = t.form.Form;

// here we are: define your domain model
const Person = t.struct({
  firstName: t.maybe(t.String),      
  lastName: t.maybe(t.String),     
  company: t.maybe(t.String),   
  department: t.maybe(t.String), 
  position: t.maybe(t.String),
  email: t.maybe(t.String)
});

const options = {
  fields: {
    firstName: {
      placeholder: 'First Name'
    },
    lastName: {
      placeholder: 'Last Name'
    },
    company: {
      placeholder: 'Company'
    },
    department: {
      placeholder: 'Department'
    },
    position: {
      placeholder: 'Position'
    },
    email: {
      placeholder: 'Email'
    }
  },
  auto: 'placeholders'
};

class App extends Component{

  constructor() {
    super();
    console.ignoredYellowBox = [
      'Setting a timer'
    ];  

    this.userRef = this.getRef().child('user');
  }

  getRef(){
    return firebaseApp.database().ref();
  }
  
  componentWillMount() {
    getUser(this.userRef);
  }

  onPress() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
      this.userRef.update(value);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Form
            ref="form"
            type={Person}
            options={options}
            value={this.props.form}
          />
          <TouchableHighlight style={styles.button} onPress={this.onPress.bind(this)} underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
      </Provider>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

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
        type: "GET_USER",
        payload: user
      });
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);