import React, {Component} from 'react';
import { AppRegistry, Text, View, Navigator} from 'react-native';
import Main from './Main';

export default class myapp extends Component{
  render(){
    return(
      <View>
        <Main />
      </View>
    );
  }
}

AppRegistry.registerComponent('myapp', () => myapp);