import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'
import { REQUEST_YELP, requestYelpSuccess } from '../reducers/restaurants';


const API_KEY = '3j1w9eDkju_UaRG71mV_s7DfMY2GUvQS6EJpUbzSV68gh18kzBvYE0Cdk3lAhvlT51s8UW0RULObRXFDQaWReDr1yFlVQKzH7rmoSXEkcKDbRIwMaegIV3y4rY2IWnYx';
function* getRestaurants() {
    let restaurants = null;
    const config = {
        headers: {'Authorization': "Bearer " + API_KEY},
        params: {
            term: 'restaurants',
            categories: 'mexican',
            latitude: 36.697884,
            longitude: -121.617341,
            radius: 16093
        }
    };
    yield axios.get(
        'https://api.yelp.com/v3/businesses/search',
        config
    ).then((response) =>  {
        restaurants = response.data.businesses;
    }, (err) => {
        console.log(err); 
    });

    yield put(requestYelpSuccess(restaurants));
}

export default function* watchGetRestaurants() {
    yield takeLatest(REQUEST_YELP, getRestaurants);
}
