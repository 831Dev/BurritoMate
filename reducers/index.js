import {
    combineReducers
} from 'redux';

import navigationReducer from './navigation';
import restaurantReducers from './restaurants';

const appReducer = combineReducers({
    nav: navigationReducer,
    restaurants: restaurantReducers
});

export default appReducer;