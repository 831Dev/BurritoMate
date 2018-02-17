import {
    combineReducers
} from 'redux';

import { handleActions } from 'redux-actions';
import { NavigationActions } from 'react-navigation';

import AppNavigator from '../Navigators';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Splash')
);

const navReducer = handleActions({
    'Cards': (state = initialState, action) => {
        const nextState = AppNavigator.router.getStateForAction(
            NavigationActions.navigate({ routeName: 'Cards' }),
            state
        );
        return nextState || state;
    }
}, initialState)

const appReducer = combineReducers({
    nav: navReducer
});

export default appReducer;