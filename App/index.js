import React, { Component } from 'react';
import { Navigator, View, Text, TouchableHighlight } from 'react-native';
import Login from './Login';
import List from './List';
import Detail from './Detail';
import getStyles from './styles';

const styles = getStyles();

export default class App extends Component {
  constructor(props){
    super(props);
    const nav = null;
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    nav = navigator;
    switch (route.id) {
      case 'login':
        return (<Login navigator={navigator} />);
      case 'list':
        return (<List navigator={navigator} />);
      case 'detail':
        return (<Detail navigator={navigator} data={route.data} />);
    }
  }

  goBack(){
    if(nav.getCurrentRoutes().length < 3){
      return false;
    }
    nav.pop();
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.actionBar}>
          <Text style={styles.actionBarTitle}>Reservations</Text>
          <TouchableHighlight onPress={this.goBack.bind(this)}>
            <Text style={styles.actionBarButton}>back</Text>
          </TouchableHighlight>
        </View>
        <Navigator
          style={{flex:10}}
          initialRoute={{id: 'login'}}
          renderScene={this.navigatorRenderScene}/>
      </View>
    );
  }
}
