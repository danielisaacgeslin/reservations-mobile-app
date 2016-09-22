import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import * as filterService from '../services/FilterService'
import { getReservationTagList, getComments } from '../services/AsyncService';
import getStyles from '../styles';

const styles = getStyles();

export default class Detail extends Component {
  constructor(props){
    super(props);
    this.state = {tags: [], comments: []};
    this.getReservationTagList(props.data.ID);
    this.getComments(props.data.ID);
  }

  getReservationTagList(id){
    getReservationTagList(id).then((data)=>{
      const tags = data.payload;
      this.setState(Object.assign({},{tags}));
    });
  }

  getComments(id){
    getComments(id).then((data)=>{
      const comments = data.payload;
      this.setState(Object.assign({},{comments}));
    });
  }

  render() {
    const data = this.props.data;
    const title = data.TITLE.trim() || 'No title available'
    const date = data.DATE && filterService.date(data.DATE);
    const time = data.TIME && filterService.time(data.TIME);
    const department = data.DEPARTMENT && filterService.department(data.DEPARTMENT);

    const tagsDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const tags = tagsDs.cloneWithRows(this.state.tags);

    const commentsDs = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const comments = commentsDs.cloneWithRows(this.state.comments);


    return (
      <View style={styles.view}>
        <ListView
          horizontal={true}
          enableEmptySections={true}
          dataSource={tags}
          renderRow={(rowData)=>
            <Text style={styles.tag}>{rowData.TEXT}</Text>
          }
        />
        <Text>{date} - {time}</Text>
        <Text>{title}</Text>
        <Text>{data.FLOOR}° {department} - {data.FIRST_NAME} {data.LAST_NAME}</Text>
        <Text>Comments</Text>
        <ListView
          enableEmptySections={true}
          dataSource={comments}
          renderRow={(rowData)=>
            <Text>{rowData.TEXT}</Text>
          }
        />
      </View>
    );
  }
}
