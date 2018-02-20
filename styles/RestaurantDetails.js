import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
      flex: 1,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  starContainer: {
    flex: 0.2,
    flexDirection: 'row',
    paddingLeft: 15
  },
  title: {
      fontSize: 72,
      fontFamily: 'Roboto',
      color: '#333333',
      paddingLeft: 20,
  },
  subText: {
    textAlign: 'left',
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 5,
    color: '#828282'
  },
  miles: {
    textAlign: 'left',
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 10,
    color: '#828282'
  },
  text: {
    paddingTop: 15,
    fontSize: 18,
    paddingLeft: 15,
    backgroundColor: 'transparent'
  }
})