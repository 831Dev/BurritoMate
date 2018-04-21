import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects'
import { YELP_API_KEY } from 'react-native-dotenv';
import { REQUEST_YELP, requestYelpSuccess } from '../reducers/restaurants';

function* getRestaurants() {
    let restaurants = null;
    const config = {
        headers: {'Authorization': "Bearer " + YELP_API_KEY},
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
