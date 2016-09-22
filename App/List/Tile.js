import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import * as filterService from '../services/FilterService'
import getStyles from '../styles';

const styles = getStyles();

export default class Tile extends Component {
  constructor(props){
    super(props);
  }

  goToDetail(){
    this.props.navigator.push({id:'detail', data:this.props.data});
  }

  render() {
    const data = this.props.data;
    const date = data.DATE && filterService.date(data.DATE);
    const time = data.TIME && filterService.time(data.TIME);
    const department = data.DEPARTMENT && filterService.department(data.DEPARTMENT);

    const tile = (
      <TouchableHighlight onPress={this.goToDetail.bind(this)} style={styles.tile}>
        <View>
          <Text style={styles.tileTitle}>{date} - {time}</Text>
          <Text style={styles.tileSubtitle}>{data.FLOOR}° {department} - {data.FIRST_NAME} {data.LAST_NAME}</Text>
        </View>
      </TouchableHighlight>
    );

    const invalid = (<Text style={styles.statusText}>No data available</Text>);

    return (data.invalid ? invalid : tile);
  }
}
