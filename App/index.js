import React, { Component } from 'react';
import { Navigator, View, Text } from 'react-native';
import Login from './Login';
import List from './List';
import Detail from './Detail';
import getStyles from './styles';

const styles = getStyles();

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
      case 'detail':
        return (<Detail navigator={navigator} data={route.data} />);
    }
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={styles.actionBar}>Reservations</Text>
        <Navigator
          initialRoute={{id: 'login'}}
          renderScene={this.navigatorRenderScene}/>
      </View>
    );
  }
}
