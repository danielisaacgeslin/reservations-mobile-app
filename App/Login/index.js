import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { login } from '../services/AsyncService';
import getStyles from '../styles';

const styles = getStyles();

export default class Tile extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      password: null,
      status: null
    }
  }

  setUsername(username){
    this.setState(Object.assign({}, this.state, {username}));
  }

  setPassword(password){
    this.setState(Object.assign({}, this.state, {password}));
  }

  login(){
    const username = this.state.username;
    const password = this.state.password;
    login(username, password).then((data)=>{
      const status = data.payload;
      this.setState(Object.assign({}, this.state, {status}));
    });
  }

  render() {
    return (
      <View style={styles.view}>
        <View style={styles.centerView}>
          <Text style={styles.title}>Login</Text>
          <TextInput onChangeText={this.setUsername.bind(this)} placeholder={'username'} />
          <TextInput onChangeText={this.setPassword.bind(this)} placeholder={'password'} secureTextEntry={true} />
          <TouchableHighlight onPress={this.login.bind(this)}>
            <Text style={styles.login}>Login</Text>
          </TouchableHighlight>
          <Text style={styles.statusText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}
