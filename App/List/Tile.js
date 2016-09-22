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
    const department = filterService.department(data.DEPARTMENT);

    return (
      <TouchableHighlight style={styles.tile}>
        <View>
          <Text style={styles.tileTitle}>{date} - {time}</Text>
          <Text style={styles.tileSubtitle}>{data.FLOOR}° {department} - {data.FIRST_NAME} {data.LAST_NAME}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}
