import React, { Component } from 'react';
import { Navigator, View, ListView, Picker } from 'react-native';
import { getReservationList } from '../services/AsyncService';
import Tile from './Tile';
import getStyles from '../styles';

const styles = getStyles();

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {reservations: [], month: new Date().getMonth() + 1};
    this.getReservationList(new Date().getMonth() + 1);
  }

  getReservationList(month){
    const year = new Date().getFullYear();
    getReservationList(month,year).then((data)=>{
      const reservations = data.payload;
      this.setState(Object.assign({}, this.state, {reservations, month}));
    });
  }

  changeMonth(month){
    this.getReservationList(month);
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource = ds.cloneWithRows( (this.state.reservations.length ? this.state.reservations : [{invalid:true}]));

    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    const options = months.map((name, index) =>{
      return <Picker.Item style="{styles.textCenter}" key={index} label={name} value={index + 1} />;
    });

    return (
      <View style={styles.view}>
        <Picker
          selectedValue={this.state.month}
          onValueChange={this.changeMonth.bind(this)}
          >
          {options}
        </Picker>
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
