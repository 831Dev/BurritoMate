import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Image, StyleSheet, Text, View } from 'react-native';

class Home extends React.Component {

    componentDidMount = () => {
        setTimeout(() => {
            this.props.navigation.dispatch({ type: 'Cards'})
        }, 1200);
    }

    render() {
        return (
        <View style={styles.container}>
            <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" style={{width: 100, height: 190, marginTop: 30}} source={require('../images/burrito.png')} />
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

export default Home;