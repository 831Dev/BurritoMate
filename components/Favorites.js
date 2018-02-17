import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Favorites extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
    tabBarIcon: () => <Ionicons name="md-heart" size={24} color={'#e32929'} />,
    barBackgroundColor: '#e32929'
  }

  render() {
    return (
      <View style={styles.container}>
          <Text>Favorites</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

