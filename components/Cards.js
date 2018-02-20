import React from 'react';
import uuid from 'uuid/v4';
import getDirections from 'react-native-google-maps-directions';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-deck-swiper';
import { Image, StyleSheet, Text, View, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FullStar from './shared/FullStar';
import HalfStar from './shared/HalfStar';
import styles from '../styles/Cards';
import { metersToMilesConversion } from '../util';

class Cards extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Locations',
    tabBarIcon: () => <Ionicons name="ios-restaurant" size={24} color={'#e32929'} />,
    barBackgroundColor: '#e32929'
  }

  navigate = (latitude, longitude) => {
    const data = {
      source: {
        latitude: 36.697662,
        longitude: -121.617915
      },
      destination: {
        latitude,
        longitude
      },
       params: [
        {
          key: "dirflg",
          value: "d"
        }
      ]
    }

    getDirections(data);
  }

  componentDidMount = () => this.props.requestYelp();

  convertRatingToStarCount = (rating) => {
    const stringConversion = rating.toString();
    const fullStars = [];
    const halfStars = [];
    if (stringConversion.length > 1) {
      const tokens = stringConversion.split('.'); // 4.5
      const numFullStars = parseInt(tokens[0]);
      for (let i = 0; i < numFullStars; i++) {
        fullStars.push(<FullStar key={i}/>);
      }
      halfStars.push(<HalfStar key={fullStars.length}/>);
      return {
        fullStars,
        halfStars
      }
    }

    for (let j = 0; j < rating; j++) {
      fullStars.push(<FullStar key={j}/>);
    }
    return {
      fullStars,
      halfStars: []
    };
  }

  renderStars = (rating) => {
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
    return (
      <View style={styles.container}>
        <Swiper
            cardVerticalMargin={25}
            cards={this.props.restaurants}
            renderCard={(card) => {
                const data = JSON.parse(card);
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
                )
            }}
            onSwiped={(cardIndex) => {}}
            onSwipedRight={(index) => {
              const restaurant = JSON.parse(this.props.restaurants[index]);
              this.navigate(restaurant.coordinates.latitude, restaurant.coordinates.longitude);
            }}
            onTapCard={(index) => {
              this.props.chooseRestaurant(index);
              this.props.navigation.dispatch({ type: 'RestaurantDetails' });
            }}
            cardIndex={0}
            backgroundColor={'white'}>
        </Swiper>
      </View>
    );
  }
}

export default Cards;
