import React, {Component} from 'react';
import { AppRegistry, Text, View, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import * as t from 'tcomb-form-native';

const Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  firstName: t.maybe(t.String),              // a required string
  lastName: t.maybe(t.String),  // an optional string
  company: t.maybe(t.String),               // a required number
  department: t.maybe(t.String),        // a boolean
  position: t.maybe(t.String),
  email: t.maybe(t.String)
});

var options = {
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


export default class Main extends Component {
  onPress() {
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={Person}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableHighlight>
      </View>
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

AppRegistry.registerComponent('Main', () => Main);