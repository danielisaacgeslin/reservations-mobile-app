import React, { Component } from 'react';
import { Navigator, View, ListView } from 'react-native';
import { getReservationList } from '../services/AsyncService';
import Tile from './Tile';
import getStyles from '../styles';

const styles = getStyles();

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {reservations: []};
    this.getReservationList();
  }

  getReservationList(){
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    getReservationList(month,year).then((data)=>{
      const reservations = data.payload;
      this.setState(Object.assign({}, this.state, {reservations}));
    });
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows(this.state.reservations);

    return (
      <View style={styles.view}>
        <ListView
          enableEmptySections={true}
          dataSource={dataSource}
          renderRow={(rowData)=>
              <Tile navigator={this.props.navigator} data={rowData}></Tile>
          }
         />
      </View>
    );
  }
}
