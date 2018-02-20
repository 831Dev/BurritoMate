import React from 'react';
import uuid from 'uuid/v4';
import * as Animatable from 'react-native-animatable';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { metersToMilesConversion } from '../util';
import styles from '../styles/RestaurantDetails';

class RestaurantDetails extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Favorites',
    tabBarIcon: () => <Ionicons name="md-heart" size={24} color={'#e32929'} />,
    barBackgroundColor: '#e32929'
  }

  renderFullStars = (keyIndex) => (
    <Ionicons name="md-star" size={24} color={'#828282'} key={uuid()}/> 
  );

  renderHalfStars = (keyIndex) => (
    <Ionicons name="md-star-half" size={24} color={'#828282'} key={uuid()}/>
  )

  convertRatingToStarCount = (rating) => {
    const stringConversion = rating.toString();
    const fullStars = [];
    const halfStars = [];
    if (stringConversion.length > 1) {
      const tokens = stringConversion.split('.'); // 4.5
      const numFullStars = parseInt(tokens[0]);
      for (let i = 0; i < numFullStars; i++) {
        fullStars.push(this.renderFullStars(uuid()));
      }
      halfStars.push(this.renderHalfStars(uuid()));
      return {
        fullStars,
        halfStars
      }
    }

    for (let j = 0; j < rating; j++) {
      fullStars.push(this.renderFullStars(uuid()));
    }
    return {
      fullStars,
      halfStars: []
    };
  }

  renderStars = (rating) => {
    if (!rating) {
        return null;
    }
    const starCount = this.convertRatingToStarCount(rating);
    const stars = starCount.halfStars.length > 0 ?
      starCount.fullStars.concat(starCount.halfStars) :
      starCount.fullStars;
    return (
      <View style={styles.starContainer}>
        {stars.map((star) => star)} 
      </View>
    )
  }

  render() {
    const data = JSON.parse(this.props.chosenRestaurant);
    if (!data) {
        return null;
    }
    return (
      <View style={styles.card}>
        <Image 
            source={{uri: data.image_url}}
            style={{width: '100%', height: '60%'}}
        />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.miles}>{metersToMilesConversion(data.distance)} Miles Away</Text>
        {this.renderStars(data.rating)}
        <Text style={styles.subText}>{data.price}</Text>
    </View>
    );
  }
}

export default RestaurantDetails;
