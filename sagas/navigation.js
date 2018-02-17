import { put, takeEvery } from 'redux-saga/effects';
import { NavigationActions } from 'react-navigation';

function* navigateTo(route) {
    console.log('In Saga');
    yield put(NavigationActions.navigate({ routeName: route }));
}

function* navigationMain() {
    yield takeEvery(NavigationActions.NAVIGATE, navigateTo);
}

export default navigationMain;