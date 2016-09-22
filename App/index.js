import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Login from './Login';
import List from './List';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} />);
      case 'list':
        return (<List navigator={navigator} />);
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{id: 'login'}}
        renderScene={this.navigatorRenderScene}/>
    );
  }
}
