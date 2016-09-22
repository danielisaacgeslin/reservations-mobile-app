import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import * as filterService from '../services/FilterService'
import getStyles from '../styles';

const styles = getStyles();

export default class Tile extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const data = this.props.data;
    const date = filterService.date(data.DATE);
    const time = filterService.time(data.TIME);
    return (
      <View>
        <TouchableHighlight>
          <Text style={styles.tileTitle}>{date} - {time}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
