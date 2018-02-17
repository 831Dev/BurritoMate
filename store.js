import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import {
    createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers';
import createSagaMiddleware from 'redux-saga';
import appReducer from './reducers';
import navigationSaga from './sagas/navigation';

const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const sagaMiddleware = createSagaMiddleware()

const middleware = [navigationMiddleware, sagaMiddleware];

const store = createStore(
    appReducer,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(navigationSaga);

export default store;