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
      status: null,
      loading: false
    }
  }

  setUsername(username){
    this.setState(Object.assign({}, this.state, {username}));
  }

  setPassword(password){
    this.setState(Object.assign({}, this.state, {password}));
  }

  login(){
    if(this.state.loading){
      return false;
    }
    Object.assign({}, this.state, {loading:true});
    const username = this.state.username;
    const password = this.state.password;
    const loading = false;
    login(username, password).then((data)=>{
      const status = data.payload;
      this.setState(Object.assign({}, this.state, {status, loading}));
      if(data.status === 'OK' || data.payload === 'session is already active'){
        this.props.navigator.push({id: 'list'});
        return false;
      }
    });
  }

  render() {
    const login = [styles.login];
    if(this.state.loading){
      login.push(style.loading);
    }
    return (
      <View style={styles.view}>
        <View style={styles.centerView}>
          <Text style={styles.title}>Login</Text>
          <TextInput onChangeText={this.setUsername.bind(this)} placeholder={'username'} />
          <TextInput onChangeText={this.setPassword.bind(this)} placeholder={'password'} secureTextEntry={true} />
          <TouchableHighlight onPress={this.login.bind(this)}>
            <Text style={login}>Login</Text>
          </TouchableHighlight>
          <Text style={styles.statusText}>{this.state.status}</Text>
        </View>
      </View>
    );
  }
}
