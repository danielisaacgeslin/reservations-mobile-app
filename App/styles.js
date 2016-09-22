import { StyleSheet } from 'react-native';

export default function getStyles(){
  const primaryColor = '#d9230f';
  const defaultColor = '#474949';
  const lightGrayColor = '#E4E4E4';
  return StyleSheet.create({
    mainView: {
      flex:1,
      backgroundColor: '#F4F4F4'
    },
    view: {
      flex: 1,
      padding: 15,
      backgroundColor: '#F4F4F4'
    },
    tag: {
      padding:5,
      height: 30,
      marginRight:5,
      backgroundColor: defaultColor,
      color: '#FFF'
    },
    actionBar: {
      flex:1,
      flexDirection: 'row',
      padding: 15,
      backgroundColor: primaryColor
    },
    actionBarTitle: {
      flex:3,
      color: '#FFF',
      fontSize: 16
    },
    actionBarButton: {
      flex:1,
      color: '#FFF',
      fontSize: 16,
      textAlign: 'right'
    },
    textCenter: {
      textAlign: 'center'
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
      backgroundColor: primaryColor,
      color: '#FFF',
      padding: 15,
      textAlign: 'center',
      marginTop: 15
    },
    loading: {
      opacity: 0.5
    },
    tile: {
      backgroundColor: lightGrayColor,
      marginBottom: 3,
      padding: 10
    },
    tileTitle: {
      fontSize: 17
    },
    tileSubtitle: {
      fontSize:14
    }
  });
}
