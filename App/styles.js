import { StyleSheet } from 'react-native';

export default function getStyles(){
  const primary = '#d9230f';
  return StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      padding: 15
    },
    centerView: {
      flex: 1,
      justifyContent:'center'
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      color: 'red',
      marginTop: 0
    },
    statusText: {
      textAlign: 'center',
      marginTop: 20,
      fontSize: 18
    },
    login: {
      backgroundColor: primary,
      color: '#FFF',
      padding: 15,
      textAlign: 'center',
      marginTop: 15
    },
    loading: {
      opacity: 0.5
    },
    tileTitle: {
      fontSize: 20
    }
  });
}
