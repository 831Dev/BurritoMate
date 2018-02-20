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
import sagas from './sagas';

const navigationMiddleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const sagaMiddleware = createSagaMiddleware()

const middleware = [sagaMiddleware, navigationMiddleware];

const store = createStore(
    appReducer,
    applyMiddleware(...middleware)
);

sagaMiddleware.run(sagas);

export default store;