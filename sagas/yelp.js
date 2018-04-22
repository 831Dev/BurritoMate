import axios from "axios";
import { call, takeLatest, put } from "redux-saga/effects";
import { YELP_API_KEY } from "react-native-dotenv";
import gql from "graphql-tag";
import ApolloClient from "../apollo/client";
import { REQUEST_YELP, requestYelpSuccess } from "../reducers/restaurants";

function* getRestaurantsv2() {
  try {
    const result = yield call(ApolloClient.query, {
    query: gql`
                query {
                    search(term:"burrito",
                                latitude: 36.697884,
                                longitude: -121.617341) {
                  business {
                      name
                      price
                      distance
                      rating
                      review_count
                      photos
                  }
                }
              }
            `
  });
  if (result && result.data && result.data.search && result.data.search.business) {
    yield put(requestYelpSuccess(result.data.search.business));
  } else {
    throw new Error('Unable to fetch nearby burritos.');
  }
  } catch (e) {
    console.log('error fetching: ', e);
  }
}

function* getRestaurants() {
  let restaurants = null;
  const config = {
    headers: { Authorization: "Bearer " + YELP_API_KEY },
    params: {
      term: "restaurants",
      categories: "mexican",
      latitude: 36.697884,
      longitude: -121.617341,
      radius: 16093
    }
  };
  yield axios.get("https://api.yelp.com/v3/businesses/search", config).then(
    response => {
      restaurants = response.data.businesses;
    },
    err => {
      console.log(err);
    }
  );

  yield put(requestYelpSuccess(restaurants));
}

export default function* watchGetRestaurants() {
  yield takeLatest(REQUEST_YELP, getRestaurantsv2);
}
