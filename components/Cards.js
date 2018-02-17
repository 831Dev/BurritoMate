import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Image, StyleSheet, Text, View } from 'react-native';


export default class Cards extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Hello</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e32929',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
      fontSize: 72,
      textAlign: 'center',
      fontFamily: 'Roboto',
      color: '#333333',
  }
})

