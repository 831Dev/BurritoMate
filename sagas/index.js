import { all } from 'redux-saga/effects';
import yelpSagas from './yelp';

export default function* rootSaga() {
    yield all([
        yelpSagas()
    ]);
}