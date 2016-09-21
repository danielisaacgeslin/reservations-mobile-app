import { StyleSheet } from 'react-native';

export default function getStyles(){
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
        backgroundColor: '#d9230f',
        color: '#FFF',
        padding: 15,
        textAlign: 'center',
        marginTop: 15
      }
    });
}
